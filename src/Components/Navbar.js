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
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiX
} from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider/AuthContext.js";
import "./Navbar.css";

const Navbar = ({ name, onCollapseChange }) => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
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

      // Auto-close on mobile when resizing to desktop
      if (newWidth > 768) {
        setIsOpen(false);
      }
    };

    // Initialize based on screen size
    if (window.innerWidth > 768) {
      setIsOpen(true);
      setIsCollapsed(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Notify parent component when collapse state changes
  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(isCollapsed);
    }
  }, [isCollapsed, onCollapseChange]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  const isMobile = windowWidth <= 768;

  // Get menu items based on user role
  const getMenuItems = () => {
    if (!user?.role) return [{ path: "/", label: "Dashboard", icon: <FiHome /> }];

    const commonItems = [
      { path: "/", label: "Dashboard", icon: <FiHome /> },
      { path: "/Attendance", label: "Attendance", icon: <FiClipboard /> },
      { path: "/ProjectList", label: "Projects", icon: <FiFileText /> },
      { path: "/Meeting", label: "Meeting", icon: <FiVideo /> },
      { path: "/Calender", label: "Calendar", icon: <FiCalendar /> },
      { path: "/chat", label: "Chat", icon: <FiMessageSquare /> },
      { path: "/Todo", label: "Todo", icon: <FiCheckSquare /> },
      { path: "/Inbox", label: "Mailbox", icon: <FiMail /> },
    ];

    const roleSpecificItems = {
      Super_Admin: [
        { path: "/Db", label: "Employees", icon: <FiUsers /> },
        { path: "/hrAttendance", label: "HR Attendance", icon: <FiClipboard /> },
        { path: "/QuotationList", label: "Quotations", icon: <FiFileText /> },
      ],
      Admin: [
        { path: "/Db", label: "Employees", icon: <FiUsers /> },
        { path: "/certificate", label: "Certificate", icon: <FiFileText /> },
      ],
      Employee: [],
      Intern: [],
    };

    return [...commonItems, ...(roleSpecificItems[user.role] || [])];
  };

  const menuItems = getMenuItems();

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  // Custom function to determine if a link is active
  const isLinkActive = (path) => {
    const fullPath = `${safeNav}${path}`;
    return path === "/"
      ? location.pathname === fullPath
      : location.pathname.startsWith(fullPath);
  };

  return (
    <>
      {/* Mobile toggle button */}
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          style={{
            position: "fixed",
            zIndex: 1050,
            top: "10px",
            left: "10px",
            color: "black",
            backgroundColor: "transparent",
            borderRadius: "70%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer"
          }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Sidebar container */}
      <aside
        className={`sidebar-container ${isOpen ? "open" : ""} ${isCollapsed ? "collapsed" : ""}`}
        aria-hidden={!isOpen && isMobile}
      >
        {/* Desktop collapse toggle */}
        {!isMobile && (
          <button
            className="collapse-toggle"
            onClick={toggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <FiChevronRight size={14} /> : <FiChevronLeft size={14} />}
          </button>
        )}

        {/* Mobile overlay */}
        {isMobile && isOpen && (
          <div
            className="sidebar-overlay"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          />
        )}

        <div className="sidebar-content">
          {/* Sidebar header */}
          <div className="sidebar-header">
            <img
              src="/Images/image_1-removebg-preview 1.png"
              alt="Company Logo"
              className="logo"
            />
            {!isCollapsed && <span className="logo-text">OMS</span>}
          </div>

          {/* Menu section */}
          <div className="menu-section">
            <h2 className="section-title">Menu</h2>
            <nav aria-label="Main navigation">
              <ul className="sidebar-menu">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`${safeNav}${item.path}`}
                      className={`menu-item ${isLinkActive(item.path) ? "active" : ""}`}
                      onClick={handleLinkClick}
                      end={item.path === "/"}
                      aria-current={isLinkActive(item.path) ? "page" : undefined}
                    >
                      <div className="menu-icon" aria-hidden="true">
                        {item.icon}
                      </div>
                      {!isCollapsed && (
                        <span className="menu-text">{item.label}</span>
                      )}
                      {isLinkActive(item.path) && !isCollapsed && (
                        <div className="active-indicator" aria-hidden="true" />
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support section */}
          <div className="support-section">
            <h2 className="section-title">Support</h2>
            <nav aria-label="Support navigation">
              <ul className="support-links">
                <li>
                  <a href="#" className="support-link">
                    <FiHelpCircle />
                    {!isCollapsed && <span>Help</span>}
                  </a>
                </li>
                <li>
                  <a href="#" className="support-link">
                    <FiPhoneCall />
                    {!isCollapsed && <span>Contact</span>}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* User section */}
          <div className="user-section">
            <div className="user-avatar" aria-hidden="true">
              {(typeof name === "string" && name.charAt(0).toUpperCase()) || "U"}
            </div>

            {!isCollapsed && (
              <div className="user-info">
                <div className="user-name">{name || "User"}</div>
                <div className="user-role">
                  {user?.role?.replace(/_/g, " ") || "Role"}
                </div>
              </div>
            )}
            <button
              onClick={logout}
              className="logout-button"
              aria-label="Logout"
            >
              <FiLogOut />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;