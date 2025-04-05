// import React, { useState, useEffect } from "react";
// import {
//   FiHome,
//   FiUsers,
//   FiCalendar,
//   FiClipboard,
//   FiFileText,
//   FiVideo,
//   FiCheckSquare,
//   FiMessageSquare,
//   FiMail,
//   FiHelpCircle,
//   FiPhoneCall,
//   FiLogOut,
// } from "react-icons/fi";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "./AuthProvider/AuthContext.js";
// import "./Navbar.css"; // Make sure your CSS is updated with the new styles

// const Navbar = ({ name }) => {
//   const { user, logout } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // Determine navigation base path based on user role
//   const rolePaths = {
//     Super_Admin: "/super_admin",
//     Admin: "/admin",
//     Employee: "/employee",
//     Intern: "/intern",
//   };
//   const safeNav = user?.role ? rolePaths[user.role] : "/user";

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       setWindowWidth(newWidth);
//       setIsOpen(newWidth > 768); // If width is above 768px, open the menu by default
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const isMobile = windowWidth <= 768;

//   // Get menu items based on user role
//   const getMenuItems = () => {
//     switch (user?.role) {
//       case "Super_Admin":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/hrAttendance",
//             label: "HR Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           {
//             path: "/QuotationList",
//             label: "Quotations",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiMessageSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       case "Admin":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
//           {
//             path: "/hrAttendance",
//             label: "HR Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiMessageSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//           {
//             path: "/certificate",
//             label: "Certificate",
//             icon: <FiFileText size={18} />,
//           },
//         ];
//       case "Employee":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiMessageSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       case "Intern":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiMessageSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       default:
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//         ];
//     }
//   };

//   const menuItems = getMenuItems();

//   const handleLinkClick = () => {
//     if (isMobile) setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Mobile-only toggle button */}
//       <button
//         className={`menu-toggle ${isOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//       >
//         <div className="hamburger-box">
//           <div className="hamburger-inner"></div>
//         </div>
//       </button>

//       {/* Mobile-only overlay */}
//       {isMobile && isOpen && (
//         <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
//       )}

//       {/* Sidebar container */}
//       <div className={`sidebar-container ${isOpen ? "expanded" : "collapsed"}`}>
//         <aside className="sidebar">
//           <div className="sidebar-header">
//             <img
//               src="/Images/image_1-removebg-preview 1.png"
//               alt="Logo"
//               className="logo"
//             />
//           </div>

//           <div className="sidebar-divider">
//             <span>Menu</span>
//           </div>

//           <nav className="sidebar-menu">
//             {menuItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={`${safeNav}${item.path}`}
//                 className={({ isActive }) =>
//                   `menu-item ${isActive ? "active" : ""}`
//                 }
//                 style={{ animationDelay: `${index * 0.05}s` }}
//                 onClick={handleLinkClick}
//               >
//                 <div className="menu-icon">{item.icon}</div>
//                 <span className="menu-text">{item.label}</span>
//                 <span className="hover-indicator"></span>
//               </NavLink>
//             ))}
//           </nav>

//           <div className="sidebar-divider">
//             <span>Support</span>
//           </div>

//           <div className="sidebar-footer">
//             <a href="#" className="footer-link">
//               <FiHelpCircle size={18} />
//               <span>Help Center</span>
//             </a>
//             <a href="#" className="footer-link">
//               <FiPhoneCall size={18} />
//               <span>Contact Us</span>
//             </a>
//             <button onClick={logout} className="logout-button">
//               <FiLogOut size={18} />
//               <span>Logout</span>
//             </button>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { FiLogOut } from "react-icons/fi";
// import { HamburgetMenuClose, HamburgetMenuOpen } from "./icon.jsx"; 
// import { NavLink } from 'react-router-dom';
// import { useAuth } from './AuthProvider/AuthContext.js';
// import './Navbar.css';

// const Navbar = ({ name }) => {
//   const { user, logout } = useAuth();
//   const [click, setClick] = useState(false);

//   // Determine navigation base path based on user role
//   const rolePaths = {
//     Super_Admin: "/super_admin",
//     Admin: "/admin",
//     Employee: "/employee",
//     Intern: "/intern",
//   };
//   const safeNav = user?.role ? rolePaths[user.role] : "/user";

//   const handleClick = () => setClick(!click);
//   const handleLogout = () => {
//     logout();
//   };

//   // 🌟 NAVIGATION ITEMS FOR DIFFERENT ROLES
//   const getMenuItems = () => {
//     switch (user?.role) {
//       case "Super_Admin":
//         return [
//           { label: "Homepage", path: "/" },
//           { label: "Employees", path: "/Db" },
//       { label: "Attendance", path: "/Attendance" },
//       {label: "HRattendance", path: "/hrAttendance"},
//       { label: "ProjectList", path: "/ProjectList" },
//       { label: "QuotationList", path: "/QuotationList" },
//       {label: "Meeting", path: "/Meeting"},
//       { label: "chat", path: "/chat" },
//       { label: "Calender", path: "/Calender" },
//       { label: "Mail", path: "/Inbox" },
//         ];
//       case "Admin":
//         return [
//           { label: "Homepage", path: "/" },
//         { label: "Employees", path: "/Db" },
//         { label: "Attendance", path: "/Attendance" },
//         { label: "ProjectList", path: "/ProjectList" },
//         {label: "Meeting", path: "/Meeting"},
//         { label: "chat", path: "/chat" },
//         { label: "Calender", path: "/Calender" },
//         { label: "Mail", path: "/Inbox" },
//         { label: "Certification", path: "/Certificate" },
//         ];
//       case "Employee":
//         return [
//           { label: "Homepage", path: "/" },
//         { label: "Attendance", path: "/Attendance" },
//         { label: "ProjectList", path: "/ProjectList" },
//         {label: "Meeting", path: "/Meeting"},
//         { label: "chat", path: "/chat" },
//         { label: "Calender", path: "/Calender" },
//         { label: "Mail", path: "/Inbox" },
//         ];
//       case "Intern":
//         return [
//           { label: "Homepage", path: "/" },
//           { label: "Attendance", path: "/Attendance" },
//           { label: "ProjectList", path: "/ProjectList" },
//           {label: "Meeting", path: "/Meeting"},
//           { label: "chat", path: "/chat" },
//           { label: "Calender", path: "/Calender" },
//           { label: "Mail", path: "/Inbox" },
//         ];
//       default:
//         return [{ path: "/", label: "Dashboard" }];
//     }
//   };

//   return (
//     <div className='nav-wth'>
//       {/* Hamburger menu */}
//       <div className={`${click ? "nav-icon act" : "nav-icon"}`} onClick={handleClick}>
//         {click ? (
//           <span className="icon">
//             <HamburgetMenuOpen />
//           </span>
//         ) : (
//           <span className="icon">
//             <HamburgetMenuClose />
//           </span>
//         )}
//       </div>

//       {/* Sidebar Navigation */}
//       <aside className={`${click ? "nav-menu active" : "nav-menu"} sidebar`}>
//         <img src="/Images/image_1-removebg-preview 1.png" alt="Logo" />
//         <nav className="menu">
//           {getMenuItems().map((item, index) => (
//             <div key={index} className="menu-item-container nav-item">
//               <NavLink to={`${safeNav}${item.path}`} className="nav-links menu-item" onClick={handleClick}>
//                 {item.label}
//               </NavLink>
//             </div>
//           ))}
//         </nav>

//         {/* Sidebar Footer */}
//         <div className="sidebar-footer">
//           <a href="#" className="footer-link">Help Center</a>
//           <a href="#" className="footer-link">Contact Us</a>
//           <div className="logout">
//             <button onClick={handleLogout} className='flex p-2 text-white font-medium justify-center rounded-lg mt-12 bg-[#1c3e5e]'>
//               <FiLogOut /> Logout
//             </button>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { FiLogOut } from "react-icons/fi";
// import { HamburgetMenuClose, HamburgetMenuOpen } from "./icon.jsx"; // Ensure these icons exist
// import { NavLink } from 'react-router-dom';
// import { useAuth } from './AuthProvider/AuthContext.js';
// import './Navbar.css';

// const Navbar = ({ label }) => {
//   const { user, logout } = useAuth();
//   const [click, setClick] = useState(false);

//   // Role-based navigation paths
//   const rolePaths = {
//     Super_Admin: "/super_admin",
//     Admin: "/admin",
//     Employee: "/employee",
//     Intern: "/intern",
//   };

//   // Determine navigation base path based on user role
//   const safeNav = user?.role ? rolePaths[user.role] : "/user";

//   const handleClick = () => setClick(!click);
//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className='nav-wth'>
//       {/* Hamburger menu */}
//       <div className={`${click ? "nav-icon act" : "nav-icon"}`} onClick={handleClick}>
//         {click ? (
//           <span className="icon">
//             <HamburgetMenuOpen />
//           </span>
//         ) : (
//           <span className="icon">
//             <HamburgetMenuClose />
//           </span>
//         )}
//       </div>

//       {/* Sidebar Navigation */}
//       <aside className={`${click ? "nav-menu active" : "nav-menu"} sidebar`}>
//         <img src="/Images/image_1-removebg-preview 1.png" alt="Logo" />
//         <nav className="menu">
//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}`} className="nav-links menu-item" onClick={handleClick}>
//               Dashboard
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/Db`} className="nav-links menu-item" onClick={handleClick}>
//               Employee
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/Attendance`} className="nav-links menu-item" onClick={handleClick}>
//               Attendance
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/ProjectList`} className="nav-links menu-item" onClick={handleClick}>
//               Project
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/QuotationList`} className="nav-links menu-item" onClick={handleClick}>
//               Technical Docs
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/Meeting`} className="nav-links menu-item" onClick={handleClick}>
//               Meeting
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/Calender`} className="nav-links menu-item" onClick={handleClick}>
//               Calendar
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/chat`} className="nav-links menu-item" onClick={handleClick}>
//               Chat
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink to={`${safeNav}/Inbox`} className="nav-links menu-item" onClick={handleClick}>
//               MailBox
//             </NavLink>
//           </div>
//         </nav>

//         {/* Sidebar Footer */}
//         <div className="sidebar-footer">
//           <a href="#" className="footer-link">Help Center</a>
//           <a href="#" className="footer-link">Contact Us</a>
//           <div className="logout">
//             <button onClick={handleLogout} className='flex p-2 text-white font-medium justify-center rounded-lg mt-12 bg-[#1c3e5e]'>
//               <FiLogOut /> Logout
//             </button>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Navbar;








// import React, { useState } from 'react';
// import { FiSearch, FiBell, FiUser, FiLogOut } from "react-icons/fi";
// import { HamburgetMenuClose, HamburgetMenuOpen } from "./icon.jsx"; // Make sure you have the correct icons
// import { NavLink } from 'react-router-dom';
// import { useAuth } from './AuthProvider/AuthContext.js';
// import './Navbar.css';

// const Navbar = ({ label, nav }) => {

//   const safeNav = nav ?? "/user";  // If nav is undefined, default to "/user"

//   const { logout } = useAuth();
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const handleLogout = () => {
//     logout();
// }
//   return (
//     <div className='nav-wth'>
//       {/* hamburger */}
//       <div className={`${click ? "nav-icon act" : "nav-icon"}`} onClick={handleClick}>
//         {click ? (
//           <span className="icon">
//             <HamburgetMenuOpen />
//           </span>
//         ) : (
//           <span className="icon">
//             <HamburgetMenuClose />
//           </span>
//         )}
//       </div>
//       <aside className={`${click ? "nav-menu active" : "nav-menu"} sidebar`}>
//         <img src="/Images/image_1-removebg-preview 1.png" alt="Logo" />
//         <nav className="menu">
//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}`} activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Dashboard
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/Db`} activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Employee
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/Attendance`} activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Attendance
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/ProjectList`}  activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Project
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/QuotationList`}  activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Technical Docs
//             </NavLink>
//           </div>
//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/Meeting`} activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Meeting
//             </NavLink>
//           </div>
//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/Calender`}  activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Calendar
//             </NavLink>
//           </div>

//           {/* <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/Todo`}  activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               ToDo List
//             </NavLink>
//           </div> */}

//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/chat`}  activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               Chat
//             </NavLink>
//           </div>

//           <div className="menu-item-container nav-item">
//             <NavLink exact to={`${safeNav}/Inbox`} activeClassName="active" className="nav-links menu-item" onClick={handleClick}>
//               MailBox
//             </NavLink>
//           </div>
//         </nav>
//         <div className="sidebar-footer">
//           <a href="#" className="footer-link">Help Center</a>
//           <a href="#" className="footer-link">Contact Us</a>
//           <div className="logout">
//             <a href="#" className="footer-link">
//               {/* <FiLogOut style={{ marginRight: "8px" }} /> Log Out */}
//               <button onClick={handleLogout} style={{ backgroundColor: "#1c3e5e" }} className=' flex p-2 text-white font-medium justify-center rounded-lg mt-12 p-1 bg-white'><FiLogOut/> Logout</button>
//             </a>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { FiSearch, FiBell, FiUser, FiLogOut, FiMenu, FiX } from "react-icons/fi";
// import { NavLink } from 'react-router-dom';
// import { useAuth } from './AuthProvider/AuthContext.js';
// import './Navbar.css';

// const Navbar = ({ label, nav }) => {
//   const safeNav = nav ?? "/user";  // If nav is undefined, default to "/user"
//   const { logout } = useAuth();
  
//   // Initialize isOpen based on screen width
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setIsMobile(true);
//         setIsOpen(false);
//       } else {
//         setIsMobile(false);
//         setIsOpen(true);
//       }
//     };
    
//     // Initial check
//     handleResize();
    
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
  
//   const handleLinkClick = () => {
//     if (isMobile) {
//       setIsOpen(false);
//     }
//   };
  
//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <>
//       {/* Toggle Button - Only show on mobile */}
//       {isMobile && (
//         <div className={`nav-icon ${isOpen ? 'act' : ''}`} onClick={toggleMenu}>
//           <span className="icon">
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </span>
//         </div>
//       )}
      
//       {/* Overlay for mobile - Only show when menu is open on mobile */}
//       {isMobile && (
//         <div 
//           className={`nav-overlay ${isOpen ? 'active' : ''}`} 
//           onClick={toggleMenu}
//         ></div>
//       )}
      
//       <div className='nav-wth'>
//         <aside className={`sidebar ${isOpen ? 'nav-menu active' : 'nav-menu'}`}>
//           <img src="/Images/image_1-removebg-preview 1.png" alt="Logo" className="logo" />
          
//           <nav className="menu">
//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/home`} 
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Dashboard
//               </NavLink>
//             </div>

//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/Db`} 
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Employee
//               </NavLink>
//             </div>

//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/Attendance`} 
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Attendance
//               </NavLink>
//             </div>

//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/ProjectList`}  
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Project
//               </NavLink>
//             </div>

//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/QuotationList`}  
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Technical Docs
//               </NavLink>
//             </div>
            
//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/Meeting`} 
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Meeting
//               </NavLink>
//             </div>
            
//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/Calender`}  
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Calendar
//               </NavLink>
//             </div>

//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/Todo`}  
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 ToDo List
//               </NavLink>
//             </div>

//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/chat`}  
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 Chat
//               </NavLink>
//             </div>

//             <div className="menu-item-container">
//               <NavLink 
//                 exact to={`${safeNav}/Inbox`} 
//                 activeClassName="active" 
//                 className="nav-links menu-item" 
//                 onClick={handleLinkClick}
//               >
//                 MailBox
//               </NavLink>
//             </div>
//           </nav>
          
//           <div className="sidebar-footer">
//             <a href="#" className="footer-link">Help Center</a>
//             <a href="#" className="footer-link">Contact Us</a>
//             <div className="logout">
//               <button onClick={handleLogout}>
//                 <FiLogOut size={18} /> Logout
//               </button>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }

// export default Navbar;




// import React, { useState, useEffect } from "react";
// import {
//   FiHome,
//   FiUsers,
//   FiCalendar,
//   FiClipboard,
//   FiFileText,
//   FiVideo,
//   FiCheckSquare,
//   FiMessageSquare,
//   FiMail,
//   FiHelpCircle,
//   FiPhoneCall,
//   FiLogOut,
// } from "react-icons/fi";
// import { NavLink, useLocation } from "react-router-dom";
// import { useAuth } from "./AuthProvider/AuthContext.js";
// import "./Navbar.css"; // Make sure to use the updated CSS

// const Navbar = ({ name }) => {
//   const { user, logout } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const location = useLocation();

//   // Determine navigation base path based on user role
//   const rolePaths = {
//     Super_Admin: "/super_admin",
//     Admin: "/admin",
//     Employee: "/employee",
//     Intern: "/intern",
//   };
//   const safeNav = user?.role ? rolePaths[user.role] : "/user";

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       setWindowWidth(newWidth);
      
//       // On desktop, sidebar is always open
//       if (newWidth > 768) {
//         setIsOpen(true);
//       } else {
//         setIsOpen(false); // On mobile, sidebar is closed by default
//       }
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const isMobile = windowWidth <= 768;

//   // Get menu items based on user role
//   const getMenuItems = () => {
//     switch (user?.role) {
//       case "Super_Admin":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/hrAttendance",
//             label: "HR Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           {
//             path: "/QuotationList",
//             label: "Quotations",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       case "Admin":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//           {
//             path: "/certification",
//             label: "Certification",
//             icon: <FiFileText size={18} />,
//           },
//         ];
//       case "Employee":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       case "Intern":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       default:
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//         ];
//     }
//   };

//   const menuItems = getMenuItems();

//   const handleLinkClick = () => {
//     if (isMobile) setIsOpen(false);
//   };
  
//   // Custom function to determine if a link is active
//   const isLinkActive = (path) => {
//     const fullPath = `${safeNav}${path}`;
    
//     // For dashboard, only match exact path
//     if (path === "/") {
//       return location.pathname === fullPath;
//     }
    
//     // For other items, check if the current path starts with the menu item path
//     return location.pathname.startsWith(fullPath);
//   };

//   return (
//     <>
//       {/* Mobile-only toggle button */}
//       <button
//         className={`menu-toggle ${isOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//         aria-label="Toggle navigation menu"
//       >
//         <div className="hamburger-box">
//           <div className="hamburger-inner"></div>
//         </div>
//       </button>

//       {/* Mobile-only overlay */}
//       {isMobile && isOpen && (
//         <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
//       )}

//       {/* Sidebar/Navbar container */}
//       <div className={`sidebar-container ${isOpen ? "expanded" : "collapsed"}`}>
//         <aside className="sidebar">
//           <div className="sidebar-header">
//             <img
//               src="/Images/image_1-removebg-preview 1.png"
//               alt="Logo"
//               className="logo"
//             />
//           </div>

//           <div className="sidebar-divider">
//             <span>Menu</span>
//           </div>

//           <nav className="sidebar-menu">
//             {menuItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={`${safeNav}${item.path}`}
//                 className={isLinkActive(item.path) ? "menu-item active" : "menu-item"}
//                 style={{ animationDelay:` ${index * 0.05}` }}
//                 onClick={handleLinkClick}
//                 end={item.path === "/"}
//               >
//                 <div className="menu-icon">{item.icon}</div>
//                 <span className="menu-text">{item.label}</span>
//                 <span className="hover-indicator"></span>
//               </NavLink>
//             ))}
//           </nav>

//           <div className="sidebar-divider">
//             <span>Support</span>
//           </div>

//           <div className="sidebar-footer">
//             <a href="#" className="footer-link">
//               <FiHelpCircle size={18} />
//               <span>Help</span>
//             </a>
//             <a href="#" className="footer-link">
//               <FiPhoneCall size={18} />
//               <span>Contact</span>
//             </a>
//             <button onClick={logout} className="logout-button">
//               <FiLogOut size={18} />
//               <span>Logout</span>
//             </button>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// };

// export default Navbar;









// import React, { useState, useEffect } from "react";
// import {
//   FiHome,
//   FiUsers,
//   FiCalendar,
//   FiClipboard,
//   FiFileText,
//   FiVideo,
//   FiCheckSquare,
//   FiMessageSquare,
//   FiMail,
//   FiHelpCircle,
//   FiPhoneCall,
//   FiLogOut,
// } from "react-icons/fi";
// import { NavLink, useLocation } from "react-router-dom";
// import { useAuth } from "./AuthProvider/AuthContext.js";
// import "./Navbar.css"; // Make sure your CSS is updated with the new styles

// const Navbar = ({ name }) => {
//   const { user, logout } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const location = useLocation();

//   // Determine navigation base path based on user role
//   const rolePaths = {
//     Super_Admin: "/super_admin",
//     Admin: "/admin",
//     Employee: "/employee",
//     Intern: "/intern",
//   };
//   const safeNav = user?.role ? rolePaths[user.role] : "/user";

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       setWindowWidth(newWidth);
      
//       // On desktop, sidebar is always open
//       if (newWidth > 768) {
//         setIsOpen(true);
//       } else {
//         setIsOpen(false); // On mobile, sidebar is closed by default
//       }
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const isMobile = windowWidth <= 768;

//   // Get menu items based on user role
//   const getMenuItems = () => {
//     switch (user?.role) {
//       case "Super_Admin":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/hrAttendance",
//             label: "HR Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           {
//             path: "/QuotationList",
//             label: "Quotations",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       case "Admin":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//           {
//             path: "/certification",
//             label: "Certification",
//             icon: <FiFileText size={18} />,
//           },
//         ];
//       case "Employee":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       case "Intern":
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//           {
//             path: "/Attendance",
//             label: "Attendance",
//             icon: <FiClipboard size={18} />,
//           },
//           {
//             path: "/ProjectList",
//             label: "Projects",
//             icon: <FiFileText size={18} />,
//           },
//           { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
//           {
//             path: "/Calender",
//             label: "Calendar",
//             icon: <FiCalendar size={18} />,
//           },
//           { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
//           { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
//           { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
//         ];
//       default:
//         return [
//           { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
//         ];
//     }
//   };

//   const menuItems = getMenuItems();

//   const handleLinkClick = () => {
//     if (isMobile) setIsOpen(false);
//   };
  
//   // Custom function to determine if a link is active
//   const isLinkActive = (path) => {
//     const fullPath = `${safeNav}${path}`;
    
//     // For dashboard, only match exact path
//     if (path === "/") {
//       return location.pathname === fullPath;
//     }
    
//     // For other items, check if the current path starts with the menu item path
//     return location.pathname.startsWith(fullPath);
//   };

//   return (
//     <>
//       {/* Mobile-only toggle button */}
//       <button
//         className={menu-toggle `${isOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//         aria-label="Toggle navigation menu"
//       >
//         <div className="hamburger-box">
//           <div className="hamburger-inner"></div>
//         </div>
//       </button>

//       {/* Mobile-only overlay */}
//       {isMobile && isOpen && (
//         <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
//       )}

//       {/* Sidebar container */}
//       <div className={sidebar-container `${isOpen ? "expanded" : "collapsed"}`}>
//         <aside className="sidebar">
//           <div className="sidebar-header">
//             <img
//               src="/Images/image_1-removebg-preview 1.png"
//               alt="Logo"
//               className="logo"
//             />
//           </div>

//           <div className="sidebar-divider">
//             <span>Menu</span>
//           </div>

//           <nav className="sidebar-menu">
//             {menuItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={`${safeNav}${item.path}`}
//                 className={isLinkActive(item.path) ? "menu-item active" : "menu-item"}
//                 style={{ animationDelay:` ${index * 0.05}s` }}
//                 onClick={handleLinkClick}
//                 end={item.path === "/"}
//               >
//                 <div className="menu-icon">{item.icon}</div>
//                 <span className="menu-text">{item.label}</span>
//                 <span className="hover-indicator"></span>
//               </NavLink>
//             ))}
//           </nav>

//           <div className="sidebar-divider">
//             <span>Support</span>
//           </div>

//           <div className="sidebar-footer">
//             <a href="#" className="footer-link">
//               <FiHelpCircle size={18} />
//               <span>Help</span>
//             </a>
//             <a href="#" className="footer-link">
//               <FiPhoneCall size={18} />
//               <span>Contact</span>
//             </a>
//             <button onClick={logout} className="logout-button">
//               <FiLogOut size={18} />
//               <span>Logout</span>
//             </button>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiClipboard,
  FiFileText,
  FiVideo,
  FiCheckSquare,
  FiMessageSquare,
  FiMail,
  FiHelpCircle,
  FiPhoneCall,
  FiLogOut,
} from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider/AuthContext.js";
import "./Navbar.css"; // Make sure to use the updated CSS

const Navbar = ({ name }) => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  // Determine navigation base path based on user role
  const rolePaths = {
    Super_Admin: "/super_admin",
    Admin: "/admin",
    Employee: "/employee",
    Intern: "/intern",
  };
  const safeNav = user?.role ? rolePaths[user.role] : "/user";

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      
      // On desktop, sidebar is always open
      if (newWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false); // On mobile, sidebar is closed by default
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const isMobile = windowWidth <= 768;

  // Get menu items based on user role
  const getMenuItems = () => {
    switch (user?.role) {
      case "Super_Admin":
        return [
          { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
          { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
          {
            path: "/Attendance",
            label: "Attendance",
            icon: <FiClipboard size={18} />,
          },
          {
            path: "/hrAttendance",
            label: "HR Attendance",
            icon: <FiClipboard size={18} />,
          },
          {
            path: "/ProjectList",
            label: "Projects",
            icon: <FiFileText size={18} />,
          },
          {
            path: "/QuotationList",
            label: "Quotations",
            icon: <FiFileText size={18} />,
          },
          { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
          {
            path: "/Calender",
            label: "Calendar",
            icon: <FiCalendar size={18} />,
          },
          { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
          { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
          { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
        ];
      case "Admin":
        return [
          { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
          { path: "/Db", label: "Employees", icon: <FiUsers size={18} /> },
          {
            path: "/Attendance",
            label: "Attendance",
            icon: <FiClipboard size={18} />,
          },
          {
            path: "/ProjectList",
            label: "Projects",
            icon: <FiFileText size={18} />,
          },

          {
                         path: "/certificate",
                        label: "Certificate",
                         icon: <FiFileText size={18} />,
                     },
          { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
          {
            path: "/Calender",
            label: "Calendar",
            icon: <FiCalendar size={18} />,
          },
          { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
          { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
          { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
         
        ];
      case "Employee":
        return [
          { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
          {
            path: "/Attendance",
            label: "Attendance",
            icon: <FiClipboard size={18} />,
          },
          {
            path: "/ProjectList",
            label: "Projects",
            icon: <FiFileText size={18} />,
          },
          { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
          {
            path: "/Calender",
            label: "Calendar",
            icon: <FiCalendar size={18} />,
          },
          { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
          { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
          { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
        ];
      case "Intern":
        return [
          { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
          {
            path: "/Attendance",
            label: "Attendance",
            icon: <FiClipboard size={18} />,
          },
          {
            path: "/ProjectList",
            label: "Projects",
            icon: <FiFileText size={18} />,
          },
          { path: "/Meeting", label: "Meeting", icon: <FiVideo size={18} /> },
          {
            path: "/Calender",
            label: "Calendar",
            icon: <FiCalendar size={18} />,
          },
          { path: "/chat", label: "Chat", icon: <FiMessageSquare size={18} /> },
          { path: "/Todo", label: "Todo", icon: <FiCheckSquare size={18} /> },
          { path: "/Inbox", label: "Mailbox", icon: <FiMail size={18} /> },
        ];
      default:
        return [
          { path: "/", label: "Dashboard", icon: <FiHome size={18} /> },
        ];
    }
  };

  const menuItems = getMenuItems();

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };
  
  // Custom function to determine if a link is active
  const isLinkActive = (path) => {
    const fullPath =` ${safeNav}${path}`;
    
    // For dashboard, only match exact path
    if (path === "/") {
      return location.pathname === fullPath;
    }
    
    // For other items, check if the current path starts with the menu item path
    return location.pathname.startsWith(fullPath);
  };

  return (
    <>
      {/* Mobile-only toggle button */}
      <button
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </button>

      {/* Mobile-only overlay */}
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar/Navbar container */}
      <div className={`sidebar-container ${isOpen ? "expanded" : "collapsed"}`}>
        <aside className="sidebar">
          <div className="sidebar-header">
            <img
              src="/Images/image_1-removebg-preview 1.png"
              alt="Logo"
              className="logo"
            />
          </div>

          <div className="sidebar-divider">
            <span>Menu</span>
          </div>

          <nav className="sidebar-menu">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={`${safeNav}${item.path}`}
                className={isLinkActive(item.path) ? "menu-item active" : "menu-item"}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={handleLinkClick}
                end={item.path === "/"}
              >
                <div className="menu-icon">{item.icon}</div>
                <span className="menu-text">{item.label}</span>
                <span className="hover-indicator"></span>
              </NavLink>
            ))}
          </nav>

          <div className="sidebar-divider">
            <span>Support</span>
          </div>

          <div className="sidebar-footer">
            <a href="#" className="footer-link">
              <FiHelpCircle size={18} />
              <span>Help</span>
            </a>
            <a href="#" className="footer-link">
              <FiPhoneCall size={18} />
              <span>Contact</span>
            </a>
            <button onClick={logout} className="logout-button">
              <FiLogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;