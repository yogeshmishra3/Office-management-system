
// import React, { useState,useEffect } from 'react';
// import './Db.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EmployeeList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();


//    // Fetch candidates from the backend
//    useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('https://server-oms.vercel.app/api/candidates');
//         setEmployees(response.data); // Update employees with fetched data
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);


//   const handleAddEmployee = () => {
//     navigate("employee"); // Navigate to Employee page
//   };

//   const handleViewDetails = () => {
//     navigate("viewDetails"); // Navigate to View Details page
//   };

//   const handleMobileEmployeeClick = () => {
//     navigate("viewDetails"); // Navigate to View Details page for mobile view
//   };

//   return (
//     <>
//       {/* Laptop View */}
//       <div className="employee-container laptop-view">
//         <div className="search-container">
//           <input 
//             type="text" 
//             placeholder="Search to find..." 
//             className="search-input"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="notification-icons">
//             <div className="notification-bell">🔔</div>
//             <div className="user-profile">👤</div>
//           </div>
//         </div>
//         <div className="employee-header">
//           <h2>Employee</h2>
//           <button className="add-employee-btn" onClick={handleAddEmployee}>
//             <span></span>
//             Add Employee
//           </button>
//         </div>
//         <div className="employee-management">
//           <div className="headerr">
//             <h2>Employee List</h2>
//             <div className="header-actions">
//               <select className="department-filter">
//                 <option>All Departments</option>
//               </select>
//               <div className="date-filter">07 Aug, 2024</div>
//               <button className="export-btn">Export CSV</button>
//             </div>
//           </div>
//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>Employee</th>
//                 <th>Role</th>
//                 <th>Employment Type</th>
//                 <th>Attendance Mark</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees
//                 .filter(employee => 
//                   employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   employee.role.toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//                 .map((employee) => (
//                   <tr key={employee.id}>
//                     <td className="employee-info">
//                       <img 
//                         src={employee.avatar} 
//                         alt={employee.name} 
//                         className="employee-avatar" 
//                       />
//                       {employee.name}
//                     </td>
//                     <td>{employee.role}</td>
//                     <td>{employee.employmentType}</td>
//                     <td>
//                       <span className={`attendance-mark ${employee.attendanceMark.toLowerCase().replace(' ', '-')}`}>
//                         {employee.attendanceMark}
//                       </span>
//                     </td>
//                     <td>
//                       <button className="ViewDetails-btn" onClick={handleViewDetails}>
//                         <span></span>
//                         View Details
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <span>Page 1 of 100</span>
//             <div className="pagination-controls">
//               <button>Prev</button>
//               <span>Page 1 of 100</span>
//               <button>Next</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="employee-container mobile-view">
//         <div className="mobile-header">
//           <div className="menu-icon">☰</div>
//           <h2>Employee</h2>
//           <div className="mobile-header-icons">
//             <div className="notification-bell">🔔</div>
//             <div className="user-profile">👤</div>
//           </div>
//         </div>

//         <div className="mobile-search-add-section">
//           <button className="add-employee-btn" onClick={handleAddEmployee}>
//             + Add Employee
//           </button>
//           <div className="search-filter-section">
//             <input 
//               type="text" 
//               placeholder="Search to find..." 
//               className="mobile-search-input"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mobile-employee-list">
//           <div className="list-header">
//             <h3>Employee List</h3>
//             <div className="list-header-actions">
//               <select className="department-filter">
//                 <option>All Departments</option>
//               </select>
//               <span className="date-filter">07 Aug, 2024</span>
//             </div>
//           </div>

//           {employees
//             .filter(employee => 
//               employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               employee.role.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map((employee) => (
//               <div 
//                 key={employee.id} 
//                 className="mobile-employee-card"
//                 onClick={handleMobileEmployeeClick}
//               >
//                 <div className="mobile-employee-header">
//                   <img 
//                     src={employee.avatar} 
//                     alt={employee.name} 
//                     className="mobile-employee-avatar" 
//                   />
//                   <div className="mobile-employee-info">
//                     <h4>{employee.name}</h4>
//                     <span>{employee.role}</span>
//                   </div>
//                   <div className="mobile-card-dropdown">▼</div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmployeeList;




// import React, { useState } from "react"
// import Navbar from "./Navbar";
// import Employee from "./Employee";
// import { FiSearch, FiBell, FiUser, FiLogOut } from "react-icons/fi";
// import link from "react-router-dom";
// import "./Db.css"
// import DatePicker from "react-datepicker";
// import { useNavigate } from "react-router-dom"; 
// import SearchBar from "./Search-bar/SearchBar";


// const employees = [
//   {
//     id: 1,
//     name: "Shashank Bhai",
//     avatar:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20111525-ycT38TyDBJzHCIelwonxT3qb46ckWY.png",
//     role: "Sales Manager",
//     type: "Full-Time",
//     status: "Present",
//   },
//   {
//     id: 2,
//     name: "Suleman",
//     avatar:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20111525-ycT38TyDBJzHCIelwonxT3qb46ckWY.png",
//     role: "Project Manager",
//     type: "Intern",
//     status: "Present",
//   },
//   {
//     id: 3,
//     name: "Chamku",
//     avatar:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20111525-ycT38TyDBJzHCIelwonxT3qb46ckWY.png",
//     role: "Financial Analyst",
//     type: "Full-Time",
//     status: "On Leave",
//   },
//   {
//     id: 4,
//     name: "Chamde",
//     avatar:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20111525-ycT38TyDBJzHCIelwonxT3qb46ckWY.png",
//     role: "Sales Manager",
//     type: "Intern",
//     status: "On Leave",
//   },
//   {
//     id: 5,
//     name: "John",
//     avatar:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20111525-ycT38TyDBJzHCIelwonxT3qb46ckWY.png",
//     role: "Financial Analyst",
//     type: "Full-Time",
//     status: "Present",
//   },
//   {
//     id: 6,
//     name: "Ferri",
//     avatar:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20111525-ycT38TyDBJzHCIelwonxT3qb46ckWY.png",
//     role: "Project Manager",
//     type: "Full-Time",
//     status: "On Leave",
//   },
// ]

// function App() {
//   const [department, setDepartment] = useState("all")
//   const [currentPage, setCurrentPage] = useState(1)
//   const navigate = useNavigate(); 
  

//   const handleExportCSV = () => {
//     // Add CSV export logic here
//     console.log("Exporting CSV...")
//   }



//   const handleViewDetails = (employeeId) => {
//     navigate("/CandidateProfile")
//     // Add view details logic here
//     console.log("Viewing details for employee:", employeeId)
//   }

//   const handleAddEmployee = () => {
//     navigate("employee"); // Navigate to Employee page
//   };

//   return (
//    <div className="main-cont">
//     {/* <Navbar /> */}
//     <div className="container" style={{width:"80%"}}>
//     <SearchBar/>
//     {/* <div className="outer-container">
//         <div className="search-container">
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search for anything..."
//               className="search-input"
//             />
//             <button className="search-button">
//               <FiSearch size={16} />
//             </button>
//           </div>
//           <div className="top-bar-icons">
//             <button className="notification-button">
//               <FiBell size={20} />
//             </button>
//             <button className="profile-button">
//               <FiUser size={20} />
//             </button>
//             </div>
//           </div>
//         </div> */}
//        <div className="white-container">
//         <div className="header">
//         <h2 style={{ color: "#252C58" }}>Employee</h2>

//         <button className="add-employee-btn" onClick={handleAddEmployee}>
//               <span>+</span>
//               Add Employee
//             </button>
//         </div>
//       </div>

      

//       <div className="main-container">
//   <div className="filters">
//   <h2 style={{ color: "#252C58" }}>Employee List</h2>


//     <div className="export-section">
//     <select className="department-select" value={department} onChange={(e) => setDepartment(e.target.value)}>
//       <option value="all">All Departments</option>
//       <option value="sales">Sales</option>
//       <option value="engineering">Engineering</option>
//       <option value="finance">Finance</option>
//     </select>
//     <div className="export-section">
//     <button className="date-btn">
//   <i className="fas fa-calendar-alt"></i> 07 Aug 2024
 
// </button>
 
// </div>

// <button className="export-btn" onClick={handleExportCSV}>
//   <i className="fas fa-upload"></i> Upload CSV
// </button>
//     </div>
//   </div>

//   {/* <div className="table-container">
//     <table className="employee-table">
//       <thead>
//         <tr>
//           <th>Employee</th>
//           <th>Role</th>
//           <th>Employment Type</th>
//           <th>Attendance Mark</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((employee) => (
//           <tr key={employee.id}>
//             <td>
//               <div className="employee-info">
//                 <img src={employee.avatar || "/placeholder.svg"} alt={employee.name} className="avatar" />
//                 <span>{employee.name}</span>
//               </div>
//             </td>
//             <td>{employee.role}</td>
//             <td>{employee.type}</td>
//             <td>
//               <span className={`status ${employee.status === "Present" ? "status-present" : "status-leave"}`}>
//                 {employee.status}
//               </span>
//             </td>
//             <td>
//               <button className="view-details-btn" onClick={() => handleViewDetails(employee.id)}>
//                 View Details
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div> */}
// </div>
// <div className="table-container">
//     <table className="employee-table">
//       <thead>
//         <tr>
//           <th>Employee</th>
//           <th>Role</th>
//           <th>Employment Type</th>
//           <th>Attendance Mark</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((employee) => (
//           <tr key={employee.id}>
//             <td>
//               <div className="employee-info">
//                 <img src={employee.avatar || "/placeholder.svg"} alt={employee.name} className="avatar" />
//                 <span>{employee.name}</span>
//               </div>
//             </td>
//             <td>{employee.role}</td>
//             <td>{employee.type}</td>
//             <td>
//               <span className={`status ${employee.status === "Present" ? "status-present" : "status-leave"}`}>
//                 {employee.status}
//               </span>
//             </td>
//             <td>
//               <button className="view-details-btn" onClick={() => handleViewDetails(employee.id)}>
//                 View Details
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
//       <div className="pagination">
//         <span>Page 1 of 100</span>
//         <div className="pagination-buttons">
//           <button className="pagination-btn" disabled>
//             Pre
//           </button>
//           <button className="pagination-btn active">1</button>
//           <button className="pagination-btn">2</button>
//           <button className="pagination-btn">3</button>
//           <span>...</span>
//           <button className="pagination-btn">100</button>
//           <button className="pagination-btn">Next</button>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';
// import './Db.css';
// import { Link, useNavigate } from 'react-router-dom';

// // Sample employee data (you can replace with your actual data source)
// const employees = [
//   {
//     id: 1,
//     name: 'Dharesh Bhai',
//     role: 'Sales Manager',
//     employmentType: 'Full-Time',
//     attendanceMark: 'Present',
//     avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=dharesh'
//   },
//   {
//     id: 2,
//     name: 'Suleiman',
//     role: 'Project Manager',
//     employmentType: 'Intern',
//     attendanceMark: 'Present',
//     avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=suleiman'
//   },
//   {
//     id: 3,
//     name: 'Olumide',
//     role: 'Financial Analyst',
//     employmentType: 'Full-Time',
//     attendanceMark: 'On Leave',
//     avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=olumide1'
//   },
//   {
//     id: 4,
//     name: 'Olumide',
//     role: 'Sales Manager',
//     employmentType: 'Intern',
//     attendanceMark: 'On Leave',
//     avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=olumide2'
//   },
//   {
//     id: 5,
//     name: 'Jide',
//     role: 'Financial Analyst',
//     employmentType: 'Full-Time',
//     attendanceMark: 'Present',
//     avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=jide'
//   },
//   {
//     id: 6,
//     name: 'Femi',
//     role: 'Project Manager',
//     employmentType: 'Full-Time',
//     attendanceMark: 'On Leave',
//     avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=femi'
//   }
// ];

// const EmployeeList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleAddEmployee = () => {
//     navigate("employee"); // Navigate to Employee page
//   };

//   const handleViewDetails = () => {
//     navigate("viewDetails"); // Navigate to View Details page
//   };

//   const handleMobileEmployeeClick = () => {
//     navigate("viewDetails"); // Navigate to View Details page for mobile view
//   };

//   return (
//     <>
//       {/* Laptop View */}
//       <div className="employee-container laptop-view">
//         <div className="search-container">
//           <input 
//             type="text" 
//             placeholder="Search to find..." 
//             className="search-input"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="notification-icons">
//             <div className="notification-bell">🔔</div>
//             <div className="user-profile">👤</div>
//           </div>
//         </div>
//         <div className="employee-header">
//           <h2>Employee</h2>
//           <button className="add-employee-btn" onClick={handleAddEmployee}>
//             <span></span>
//             Add Employee
//           </button>
//         </div>
//         <div className="employee-management">
//           <div className="headerr">
//             <h2>Employee List</h2>
//             <div className="header-actions">
//               <select className="department-filter">
//                 <option>All Departments</option>
//               </select>
//               <div className="date-filter">07 Aug, 2024</div>
//               <button className="export-btn">Export CSV</button>
//             </div>
//           </div>
//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>Employee</th>
//                 <th>Role</th>
//                 <th>Employment Type</th>
//                 <th>Attendance Mark</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees
//                 .filter(employee => 
//                   employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   employee.role.toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//                 .map((employee) => (
//                   <tr key={employee.id}>
//                     <td className="employee-info">
//                       <img 
//                         src={employee.avatar} 
//                         alt={employee.name} 
//                         className="employee-avatar" 
//                       />
//                       {employee.name}
//                     </td>
//                     <td>{employee.role}</td>
//                     <td>{employee.employmentType}</td>
//                     <td>
//                       <span className={`attendance-mark ${employee.attendanceMark.toLowerCase().replace(' ', '-')}`}>
//                         {employee.attendanceMark}
//                       </span>
//                     </td>
//                     <td>
//                       <button className="ViewDetails-btn" onClick={handleViewDetails}>
//                         <span></span>
//                         View Details
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <span>Page 1 of 100</span>
//             <div className="pagination-controls">
//               <button>Prev</button>
//               <span>Page 1 of 100</span>
//               <button>Next</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="employee-container mobile-view">
//         <div className="mobile-header">
//           <div className="menu-icon">☰</div>
//           <h2>Employee</h2>
//           <div className="mobile-header-icons">
//             <div className="notification-bell">🔔</div>
//             <div className="user-profile">👤</div>
//           </div>
//         </div>

//         <div className="mobile-search-add-section">
//           <button className="add-employee-btn" onClick={handleAddEmployee}>
//             + Add Employee
//           </button>
//           <div className="search-filter-section">
//             <input 
//               type="text" 
//               placeholder="Search to find..." 
//               className="mobile-search-input"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mobile-employee-list">
//           <div className="list-header">
//             <h3>Employee List</h3>
//             <div className="list-header-actions">
//               <select className="department-filter">
//                 <option>All Departments</option>
//               </select>
//               <span className="date-filter">07 Aug, 2024</span>
//             </div>
//           </div>

//           {employees
//             .filter(employee => 
//               employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               employee.role.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map((employee) => (
//               <div 
//                 key={employee.id} 
//                 className="mobile-employee-card"
//                 onClick={handleMobileEmployeeClick}
//               >
//                 <div className="mobile-employee-header">
//                   <img 
//                     src={employee.avatar} 
//                     alt={employee.name} 
//                     className="mobile-employee-avatar" 
//                   />
//                   <div className="mobile-employee-info">
//                     <h4>{employee.name}</h4>
//                     <span>{employee.role}</span>
//                   </div>
//                   <div className="mobile-card-dropdown">▼</div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmployeeList;





import React, { useState, useEffect } from 'react';
import './Db.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([]);
  const [selectedType, setSelectedType] = useState('Employee Types');
  const navigate = useNavigate();

  // Original employee type options as specified
  const employeeTypes = [
    'Employee Types',
    'HR Executive',
    'Team Leader',
    'Project Manager',
    'Developer',
    'App Developer',
    'UI/UX Designer',
    'Digital Marketing'
  ];

  // Fetch candidates from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://server-oms.vercel.app/api/candidates');
        console.log('API Response:', response.data.data);
        setEmployees(Array.isArray(response.data.data) ? response.data.data : []);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setEmployees([]);
      }
    };
  
    fetchEmployees();
  }, []);
  
  const employeesPerPage = 10;

  // Modified filter function that filters by employee types (subRole) instead of role
  const filteredEmployees = employees.filter(employee => {
    // Check if employee matches search term
    const matchesSearch = 
      (employee.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       employee.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       employee.subRole?.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Check if employee matches selected type - using subRole (employee type) field
    const matchesType = 
      selectedType === 'Employee Types' || 
      employee.subRole?.toLowerCase() === selectedType.toLowerCase();
    
    // Debug logs
    console.log(`Employee ${employee.fullName}: subRole=${employee.subRole}, selectedType=${selectedType}, matches=${matchesType}`);
    
    return matchesSearch && matchesType;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  // Get the current page's employees
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * employeesPerPage,
    currentPage * employeesPerPage
  );

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Maximum number of page buttons to show
    
    if (totalPages <= maxVisiblePages) {
      // Show all page numbers if total pages are less than max visible pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of visible page range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        startPage = 2;
        endPage = Math.min(totalPages - 1, maxVisiblePages - 1);
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        endPage = totalPages - 1;
        startPage = Math.max(2, totalPages - maxVisiblePages + 2);
      }
      
      // Add ellipsis after page 1 if needed
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add visible page numbers
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  // Handle Page Changes
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleAddEmployee = () => {
    navigate("employee");
  };

  const handleViewDetails = (id) => {
    navigate(`viewDetails/${id}`)
  };

  const handleMobileEmployeeClick = (id) => {
    navigate(`viewDetails/${id}`);
  };

  // Handle employee type filter change
  const handleTypeChange = (e) => {
    console.log("Selected type:", e.target.value);
    setSelectedType(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Export CSV functionality
  const exportToCSV = () => {
    // Headers for CSV
    const headers = [
      'Full Name',
      'Role',
      'Employee Type',
      'Attendance'
    ];

    // Convert employees data to CSV format
    const employeeData = filteredEmployees.map(employee => [
      employee.fullName,
      employee.role,
      employee.subRole || 'N/A',
      employee.attendanceMark || 'N/A'
    ]);

    // Combine headers and data
    const csvContent = [
      headers.join(','),
      ...employeeData.map(row => row.join(','))
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'employee_list.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Laptop View */}
      <div className="employee-container laptop-view">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search to find..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="notification-icons">
            <div className="notification-bell">🔔</div>
            <div className="user-profile">👤</div>
          </div>
        </div>
        <div className="employee-header">
          <h2>Employee</h2>
          <button className="add-employee-btn" onClick={handleAddEmployee}>
            <span></span>
            Add Employee
          </button>
        </div>
        <div className="employee-management">
          <div className="headerr">
            <h2>Employee List</h2>
            <div className="header-actions">
              <select 
                className="department-filter"
                value={selectedType}
                onChange={handleTypeChange}
              >
                {employeeTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              {/* <div className="date-filter">07 Aug, 2024</div> */}
              <button className="export-btn" onClick={exportToCSV}>Export CSV</button>
            </div>
          </div>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Employee Type</th>
                <th>Attendance Mark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEmployees.length > 0 ? (
                paginatedEmployees.map((employee) => (
                  <tr key={employee._id}>
                    <td className="employee-info">
                      <img 
                        src={employee.photoPath ? `https://server-oms.vercel.app/uploads/photos/${employee.photoPath}` : `https://api.dicebear.com/8.x/avataaars/svg?seed=${employee.fullName}`} 
                        alt={employee.fullName} 
                        className="employee-avatar" 
                      />
                      {employee.fullName}
                    </td>
                    <td>{employee.role || "N/A"}</td>
                    <td>{employee.subRole || "N/A"}</td>
                    <td>
                      <span className={`attendance-mark ${employee.attendanceMark?.toLowerCase().replace(' ', '-') || 'not-marked'}`}>
                        {employee.attendanceMark || "N/A"}
                      </span>
                    </td>
                    <td>
                      <button className="ViewDetails-btn" onClick={() => handleViewDetails(employee.candidateId)}>
                        <span></span>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-employees">
                    {selectedType !== 'Employee Types' 
                      ? `No employees found for ${selectedType} employment type` 
                      : 'No employees found'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Numbered Pagination Controls */}
          {totalPages > 0 && (
            <div className="pagination">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className="pagination-arrow"
              >
                &lt;
              </button>
              
              {getPageNumbers().map((pageNum, index) => (
                pageNum === '...' ? (
                  <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
                ) : (
                  <button
                    key={`page-${pageNum}`}
                    onClick={() => goToPage(pageNum)}
                    className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                  >
                    {pageNum}
                  </button>
                )
              ))}
              
              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className="pagination-arrow"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="employee-container mobile-view">
        <div className="mobile-header">
          {/* <div className="menu-icon">☰</div> */}
          <h2>Employee</h2>
          <div className="mobile-header-icons">
            <div className="notification-bell">🔔</div>
            <div className="user-profile">👤</div>
          </div>
        </div>

        <div className="mobile-search-add-section">
          <button className="add-employee-btn" onClick={handleAddEmployee}>
            + Add Employee
          </button>
          <div className="search-filter-section">
            <input 
              type="text" 
              placeholder="Search to find..." 
              className="mobile-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="mobile-employee-list">
          <div className="list-header">
            <h3>Employee List</h3>
            <div className="list-header-actions">
              <select 
                className="department-filter"
                value={selectedType}
                onChange={handleTypeChange}
              >
                {employeeTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <div className="mobile-actions-row">
                {/* <span className="date-filter">07 Aug, 2024</span> */}
                <button className="mobile-export-btn" onClick={exportToCSV}>Export</button>
              </div>
            </div>
          </div>

          {paginatedEmployees.length > 0 ? (
            paginatedEmployees.map((employee) => (
              <div 
                key={employee._id} 
                className="mobile-employee-card"
                onClick={() => handleMobileEmployeeClick(employee.candidateId)}
              >
                <div className="mobile-employee-header">
                  <img 
                    src={employee.photoPath ? `https://server-oms.vercel.app/uploads/photos/${employee.photoPath}` :` https://api.dicebear.com/8.x/avataaars/svg?seed=${employee.fullName}`} 
                    alt={employee.fullName} 
                    className="mobile-employee-avatar" 
                  />
                  <div className="mobile-employee-info">
                    <h4>{employee.fullName}</h4>
                    <span>{employee.role || "N/A"} {employee.subRole ? (`${employee.subRole}`) : ''}</span>
                    {employee.attendanceMark && (
                      <span className={`mobile-attendance-mark ${employee.attendanceMark?.toLowerCase().replace(' ', '-') || 'not-marked'}`}>
                        {employee.attendanceMark}
                      </span>
                    )}
                  </div>
                  <div className="mobile-card-dropdown">▼</div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-employees-mobile">
              {selectedType !== 'Employee Types'
                ? `No employees found for ${selectedType} employment type` 
                : 'No employees found'}
            </div>
          )}
          
          {/* Mobile Numbered Pagination */}
          {totalPages > 0 && (
            <div className="mobile-pagination">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className="mobile-pagination-arrow"
              >
                &lt;
              </button>
              
              {getPageNumbers().map((pageNum, index) => (
                pageNum === '...' ? (
                  <span key={`mobile-ellipsis-${index}`} className="mobile-pagination-ellipsis">...</span>
                ) : (
                  <button
                    key={`mobile-page-${pageNum}`}
                    onClick={() => goToPage(pageNum)}
                    className={`mobile-pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                  >
                    {pageNum}
                  </button>
                )
              ))}
              
              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className="mobile-pagination-arrow"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;