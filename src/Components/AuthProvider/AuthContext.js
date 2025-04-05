import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { jwtDecode } from 'jwt-decode';


// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usersId, setUsersId] = useState("");
    const navigate = useNavigate();

    // const isAdmin = user?.role === 'admin';

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser({ email: decodedToken.email, role: decodedToken.role, subRole : decodedToken.subRole });
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error decoding token', error);
                logout();
            }
        }
    }, []);
    async function refreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");

    const res = await fetch("/refreshToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
    });

    const data = await res.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
    }
}


    const login = async (email, password) => {
        try {
            const response = await axios.post('https://server-oms.vercel.app/users/login', { email, password });

            if (response.data && response.data.token) {
                message.success('Login successful!');
                const { token, userId } = response.data;

                setUsersId(userId);
                localStorage.setItem('token', token);

                const decodedToken = jwtDecode(token);
                setUser({ email : decodedToken.email, role : decodedToken.role, subRole : decodedToken.subRole });
                setIsAuthenticated(true);
            } else {
                message.error('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            message.error('Login Failed! Please try again later.');
        }
    };

    const signup = async (name, email, password, role, subRole) => {
        try {
            const response = await axios.post('https://server-oms.vercel.app/users/signup', { name, email, password, role, subRole });

            if (response.status === 201) {
                message.success('Signup successful!');
                // await login(email, password);
                // navigate('/login');
            } else {
                throw new Error('Signup failed');
            }
        } catch (error) {
            console.error('Signup error:', error);
            message.error('Signup failed. Please try again later.');
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        message.success('Logout successful!');
    };

    const updateRole = async (newRole) => {
        if (!user || user.role === newRole) return;

        try {
            const response = await axios.put('https://server-oms.vercel.app/users/updateRole', {
                userId: user.email,
                newRole,
            });

            if (response.status === 200) {
                setUser((prevUser) => ({ ...prevUser, role: newRole }));
                message.success('Role updated successfully!');
            }
        } catch (error) {
            console.error('Role update error:', error);
            message.error('Failed to update role!');
        }
    };

    return (
        <AuthContext.Provider value={{ user, updateRole, isAuthenticated, login, usersId, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
