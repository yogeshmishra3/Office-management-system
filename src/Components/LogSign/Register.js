// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../AuthProvider/AuthContext';
// import "./Register.css";  // Ensure this file exists for styling

// const registerImage = "/images/Rectangle 21.jpg"; // ✅ Image should be in the `public` folder

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const { signup } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     await signup(name, email, password);
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">

//         {/* Left Side - Registration Form */}
//         <div className="register-form-container">
//           <h1 className="register-title">Create an Account</h1>
//           <form onSubmit={handleSubmit} className="register-form">
//             <div>
//               <label htmlFor="name">Full Name *</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email">Email *</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Enter your email address"
//               />
//             </div>

//             <div>
//               <label htmlFor="password">Password *</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Create a password"
//               />
//             </div>

//             <div>
//               <label htmlFor="confirm-password">Confirm Password *</label>
//               <input
//                 type="password"
//                 id="confirm-password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//                 placeholder="Confirm your password"
//               />
//             </div>

//             <div className="terms-container">
//               <input
//               style={{width:"0px;"}}
//                 id="agree-terms"
//                 type="checkbox"
//                 checked={agreeTerms}
//                 onChange={(e) => setAgreeTerms(e.target.checked)}
//                 required
//               />
//               <label htmlFor="agree-terms">
//                 I agree to the <a href="#">Terms and Conditions</a>
//               </label>
//             </div>

//             <button type="submit" className="register-btn">Sign Up</button>
//           </form>

//           <p className="login-text">
//             Already have an account? <Link to="/login">Login here</Link>
//           </p>
//         </div>

//         {/* Right Side - Image with Spacing */}
//         <div className="register-image-container">
//           <img src={registerImage} alt="Signup Illustration" className="register-image" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider/AuthContext';
import "./Register.css";  // Ensure this file exists
import registerImage from './Rectangle 21.jpg'


const roles = {
  Super_Admin: ["CEO", "COO", "CAO"],
  Admin: ["HR", "HR Coordinator", "HR Executive"],
  Employee: ["Team Leader", "Manager", "Developer", "App Developer", "UI/UX Designer"],
  Intern: ["Developer", "App Developer", "UI/UX Designer"],
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [subRole, setSubRole] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    await signup(name, email, password, role, subRole);

  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-form-container">
          <h1 className="register-title">Create an Account</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div>
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="password">Password *</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password *</label>
              <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="role">Role *</label>
              <select id="role" value={role} onChange={(e) => { setRole(e.target.value); setSubRole(""); }} required>
                <option value="">Select Role</option>
                {Object.keys(roles).map((role) => <option key={role} value={role}>{role}</option>)}
              </select>
            </div>

            {role && (
              <div>
                <label htmlFor="subRole">Sub-Role *</label>
                <select id="subRole" value={subRole} onChange={(e) => setSubRole(e.target.value)} required>
                  <option value="">Select Sub-Role</option>
                  {roles[role].map((sub) => <option key={sub} value={sub}>{sub}</option>)}
                </select>
              </div>
            )}

            <div className="terms-container">
              <input id="agree-terms" type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} required />
              <label htmlFor="agree-terms">I agree to the <a href="#">Terms and Conditions</a></label>
            </div>

            <button type="submit" className="register-btn">Sign Up</button>
          </form>

          <p className="login-text">Already have an account? <Link to="/login">Login here</Link></p>
        </div>

        <div className="register-image-container">
          <img src={registerImage} alt="Signup Illustration" className="register-image" />
        </div>
      </div>
    </div>
  );
};

export default Register;