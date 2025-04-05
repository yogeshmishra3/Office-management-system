import React from 'react';
import './App.css';
import AuthPage from './Components/AuthPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/LogSign/Login';
import Register from './Components/LogSign/Register';
import { useAuth } from './Components/AuthProvider/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import AdminPanel from './Components/AdminPanel/AdminPanel';
// import Forgot from './Components/LogSign/Forgot';
// import Verify from './Components/LogSign/Verify';
// import MouseTracker from './Components/MouseTracker/MouseTracker';
// import ClickTracker from './Components/MouseTracker/ClickTracker';
// import ScrollTracker from './Components/MouseTracker/ScrollTracker';
// import IdleTracker from './Components/MouseTracker/IdleTracker';

const App = () => {
    const { isAuthenticated, user } = useAuth();

    // Define role-based redirection
    const roleRedirects = {
        Super_Admin: "/super_admin",
        Admin: "/admin",
        Employee: "/employee",
        Intern: "/intern",
    };

    // const redirectTo = isAuthenticated ? (user?.role === 'admin' ? '/admin' : '/user') : '/login';

    // Get the redirect path based on the user's role
    const redirectTo = isAuthenticated && user?.role ? roleRedirects[user.role] || "/login" : "/login";

    return (
        <>
            {/* <div>
                <MouseTracker />
                <ClickTracker />
                <ScrollTracker />
                <IdleTracker />
            </div> */}

            <Routes>
                {/* Login and Register routes */}
                <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to={redirectTo} />} />
                <Route path="/sign_up" element={!isAuthenticated ? <Register /> : <Navigate to={redirectTo} />} />
                {/* <Route path="/forgot-password" element={<Forgot />} />
                <Route path="/verify" element={<Verify />} /> */}

                {/* Protected Routes */}
                {/* <Route path="/super_admin/*" element={<ProtectedRoute allowedRoles={['Super_Admin']} element={<AdminPanel nav={redirectTo} />} />} />
                <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['Admin']} element={<AdminPanel nav={redirectTo} />} />} />
                <Route path="/employee/*" element={<ProtectedRoute allowedRoles={['Employee']} element={<AdminPanel nav={redirectTo} />} />} />
                <Route path="/intern/*" element={<ProtectedRoute allowedRoles={['Intern']} element={<AdminPanel nav={redirectTo} />} />} /> */}

                {/* Protected Routes for different roles */}
                <Route path="/super_admin/*" element={<ProtectedRoute allowedRoles={['Super_Admin']} element={<AdminPanel nav={roleRedirects['Super_Admin']} />} />} />
                <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['Admin']} element={<AdminPanel nav={roleRedirects['Admin']} />} />} />
                <Route path="/employee/*" element={<ProtectedRoute allowedRoles={['Employee']} element={<AdminPanel nav={roleRedirects['Employee']} />} />} />
                <Route path="/intern/*" element={<ProtectedRoute allowedRoles={['Intern']} element={<AdminPanel nav={roleRedirects['Intern']} />} />} />

                {/* Redirect to the correct page if authenticated */}
                <Route path="/*" element={isAuthenticated ? <Navigate to={redirectTo} /> : <Navigate to="/login" />} />
            </Routes>
        </>
    );
}

export default App;
