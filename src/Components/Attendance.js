// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import './Attendance.css';
// import { FiSearch, FiBell, FiUser } from "react-icons/fi";
// import SearchBar from "./Search-bar/SearchBar";

// const EmployeeLeaveTable = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const employees = [
//     {
//       id: 1,
//       name: 'Sam Devanande',
//       leaveType: 'Medical Leave',
//       startDate: '2024-01-21',
//       endDate: '2024-01-22',
//       days: 2,
//       status: 'pending'
//     },
//     {
//       id: 2,
//       name: 'Raj Anderson',
//       leaveType: 'Sick Leave',
//       startDate: '2024-01-22',
//       endDate: '2024-01-23',
//       days: 2,
//       status: 'pending'
//     },
//     {
//       id: 3,
//       name: 'Henri Agarwal',
//       leaveType: 'Planned Leave',
//       startDate: '2024-01-22',
//       endDate: '2024-01-22',
//       days: 1,
//       status: 'pending'
//     },
//     {
//       id: 4,
//       name: 'Mountain Alex',
//       leaveType: 'Annual Leave',
//       startDate: '2024-01-20',
//       endDate: '2024-01-20',
//       days: 1,
//       status: 'pending'
//     },
//     {
//       id: 5,
//       name: 'Matt Hansen',
//       leaveType: 'Sick Leave',
//       startDate: '2024-01-18',
//       endDate: '2024-01-11',
//       days: 1,
//       status: 'pending'
//     },
//     {
//       id: 6,
//       name: 'Matt Perello',
//       leaveType: 'Sick Leave',
//       startDate: '2024-01-18',
//       endDate: '2024-01-12',
//       days: 1,
//       status: 'pending'
//     }
//   ];
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
  
//   const handleViewDetails = (employeeId) => {
//     navigate("/EmplyeAtendnc")
//     // Add view details logic here
//     console.log("Viewing details for employee:", employeeId)
//   }
//   return (
//     <div className="main-cont">
//     {/* <Navbar /> */}
//     <div className="leave-container" style={{width:"80%"}}>
//       {/* <div className="outer-container">
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
//         <SearchBar/>
//       <div className="header-section">
//         <h1 className="header-title">Employee </h1>
//         <button className="view-leave-btn" onClick={toggleModal}>
//           View Leave Details
//         </button>
//       </div>
//       <div className="running-figures">
//   <h2>Employee Leave Overview</h2>
//   <div className="img-g">
//     <img src="/Images/group.png" alt="Group" />
//   </div>
// </div>


//       <table className="leave-table">
//         <thead>
//           <tr>
//             <th>Employee</th>
//             <th>Leave Type</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Total Days</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee.id}>
//               <td>
//                 <div className="employee-cell">
//                   <img 
//                     src={"/api/placeholder/32/32"} 
//                     alt={employee.name} 
//                     className="employee-avatar"
//                   />
//                   <span className="employee-name">{employee.name}</span>
//                 </div>
//               </td>
//               <td className="leave-type">{employee.leaveType}</td>
//               <td>{employee.startDate}</td>
//               <td>{employee.endDate}</td>
//               <td>{employee.days}</td>
//               <td>
//               <button className="approve-btn">Approve</button>
//               <button className="deny-btn">Deny</button>
//               </td>
//               <td>
//               <button className="details-btn" onClick={() => handleViewDetails(employee.id)}>
//                  Details
//               </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <button className="page-btn">←</button>
//         <button className="page-btn active">1</button>
//         <button className="page-btn">2</button>
//         <button className="page-btn">3</button>
//         <button className="page-btn">→</button>
//       </div>

//       {/* Modal for Leave Details */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>View Leave Details</h2>
//             <h3>View Leave Information for the Selected Employee</h3>

//             <div className="modal-content">
//               <label>Employee Selection:</label>
//               <select className="modal-input">
//                 {employees.map((employee) => (
//                   <option key={employee.id} value={employee.id}>
//                     {employee.name}
//                   </option>
//                 ))}
//               </select>

//               <label>Employee ID:</label>
//               <input type="text" className="modal-input" placeholder="Enter ID" />

//               <label>Department:</label>
//               <input type="text" className="modal-input" placeholder="Enter Department" />

//               <div className="modal-buttons">
//                 <button className="search-btn">Search</button>
//                 <button className="close-btn" onClick={toggleModal}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//           </div>
//       )}
//     </div>
//     </div>
//   )
// }

// export default EmployeeLeaveTable;

// import { useNavigate, useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import './Attendance.css';
// import { FiSearch, FiBell, FiUser, FiChevronDown, FiChevronUp } from "react-icons/fi";
// import SearchBar from "./Search-bar/SearchBar";

// const EmployeeLeaveTable = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [showAttendanceDetails, setShowAttendanceDetails] = useState(false);
//   const [expandedLeaveId, setExpandedLeaveId] = useState(null);
//   const [showMobileUI, setShowMobileUI] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // Check screen size on component mount and when window resizes
//   useEffect(() => {
//     const checkScreenSize = () => {
//       const isMobileSize = window.innerWidth < 768;
//       setIsMobile(isMobileSize);
//       setShowMobileUI(isMobileSize); // Enable mobile UI when screen is mobile-sized
//     };
    
//     // Initial check
//     checkScreenSize();
    
//     // Add event listener for window resize
//     window.addEventListener('resize', checkScreenSize);
    
//     // Cleanup
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Sample employee data
//   const employees = [
//     {
//       id: 1,
//       name: 'Sam Devanande',
//       leaveType: 'Medical Leave',
//       startDate: '2024-01-21',
//       endDate: '2024-01-22',
//       days: 2,
//       status: 'pending',
//       employeeId: '12345',
//       department: 'Developer',
//       position: 'Web Developer',
//       attendanceRecords: [
//         { date: "August 5, 2024", day: "Monday", status: "Present", hours: "None" },
//         { date: "August 6, 2024", day: "Tuesday", status: "Absent", hours: "Sick Leave" },
//         { date: "August 7, 2024", day: "Wednesday", status: "Present", hours: "None" },
//         { date: "August 8, 2024", day: "Thursday", status: "Present", hours: "None" },
//         { date: "August 9, 2024", day: "Friday", status: "Absent", hours: "Sick Leave" },
//       ]
//     },
//     {
//       id: 2,
//       name: 'Raj Anderson',
//       leaveType: 'Sick Leave',
//       startDate: '2024-01-22',
//       endDate: '2024-01-23',
//       days: 2,
//       status: 'pending',
//       employeeId: '23456',
//       department: 'Marketing',
//       position: 'Marketing Manager',
//       attendanceRecords: [
//         { date: "August 5, 2024", day: "Monday", status: "Present", hours: "None" },
//         { date: "August 6, 2024", day: "Tuesday", status: "Present", hours: "None" },
//         { date: "August 7, 2024", day: "Wednesday", status: "Absent", hours: "Sick Leave" },
//         { date: "August 8, 2024", day: "Thursday", status: "Present", hours: "None" },
//         { date: "August 9, 2024", day: "Friday", status: "Present", hours: "None" },
//       ]
//     },
//     {
//       id: 3,
//       name: 'Henri Agarwal',
//       leaveType: 'Planned Leave',
//       startDate: '2024-01-22',
//       endDate: '2024-01-22',
//       days: 1,
//       status: 'pending',
//       employeeId: '34567',
//       department: 'HR',
//       position: 'HR Manager',
//       attendanceRecords: [
//         { date: "August 5, 2024", day: "Monday", status: "Present", hours: "None" },
//         { date: "August 6, 2024", day: "Tuesday", status: "Present", hours: "None" },
//         { date: "August 7, 2024", day: "Wednesday", status: "Present", hours: "None" },
//         { date: "August 8, 2024", day: "Thursday", status: "Absent", hours: "Planned Leave" },
//         { date: "August 9, 2024", day: "Friday", status: "Present", hours: "None" },
//       ]
//     },
//     {
//       id: 4,
//       name: 'Mountain Alex',
//       leaveType: 'Annual Leave',
//       startDate: '2024-01-20',
//       endDate: '2024-01-20',
//       days: 1,
//       status: 'pending',
//       employeeId: '45678',
//       department: 'Finance',
//       position: 'Finance Analyst',
//       attendanceRecords: [
//         { date: "August 5, 2024", day: "Monday", status: "Absent", hours: "Annual Leave" },
//         { date: "August 6, 2024", day: "Tuesday", status: "Present", hours: "None" },
//         { date: "August 7, 2024", day: "Wednesday", status: "Present", hours: "None" },
//         { date: "August 8, 2024", day: "Thursday", status: "Present", hours: "None" },
//         { date: "August 9, 2024", day: "Friday", status: "Present", hours: "None" },
//       ]
//     },
//     {
//       id: 5,
//       name: 'Matt Hansen',
//       leaveType: 'Sick Leave',
//       startDate: '2024-01-18',
//       endDate: '2024-01-11',
//       days: 1,
//       status: 'pending',
//       employeeId: '56789',
//       department: 'IT',
//       position: 'IT Support',
//       attendanceRecords: [
//         { date: "August 5, 2024", day: "Monday", status: "Present", hours: "None" },
//         { date: "August 6, 2024", day: "Tuesday", status: "Present", hours: "None" },
//         { date: "August 7, 2024", day: "Wednesday", status: "Present", hours: "None" },
//         { date: "August 8, 2024", day: "Thursday", status: "Present", hours: "None" },
//         { date: "August 9, 2024", day: "Friday", status: "Absent", hours: "Sick Leave" },
//       ]
//     },
//     {
//       id: 6,
//       name: 'Matt Perello',
//       leaveType: 'Sick Leave',
//       startDate: '2024-01-18',
//       endDate: '2024-01-12',
//       days: 1,
//       status: 'pending',
//       employeeId: '67890',
//       department: 'Sales',
//       position: 'Sales Executive',
//       attendanceRecords: [
//         { date: "August 5, 2024", day: "Monday", status: "Present", hours: "None" },
//         { date: "August 6, 2024", day: "Tuesday", status: "Absent", hours: "Sick Leave" },
//         { date: "August 7, 2024", day: "Wednesday", status: "Present", hours: "None" },
//         { date: "August 8, 2024", day: "Thursday", status: "Present", hours: "None" },
//         { date: "August 9, 2024", day: "Friday", status: "Present", hours: "None" },
//       ]
//     }
//   ];

//   // Mobile UI data based on the images
//   const mobileLeaveData = [
//     {
//       id: 1,
//       name: 'Dhanesh Bhai',
//       leaveType: 'Annual Leave',
//       startDate: '21-May-2025',
//       endDate: '24-May-2025',
//       days: 4,
//       status: 'approved',
//       isExpanded: false
//     },
//     {
//       id: 2,
//       name: 'Dhanesh Bhai',
//       leaveType: 'Annual Leave',
//       startDate: '',
//       endDate: '',
//       status: 'pending',
//       isExpanded: false
//     },
//     {
//       id: 3,
//       name: 'Dhanesh Bhai',
//       leaveType: 'Annual Leave',
//       startDate: '',
//       endDate: '',
//       status: 'pending',
//       isExpanded: false
//     }
//   ];

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
  
//   const handleViewDetails = (employeeId) => {
//     const employee = employees.find(emp => emp.id === employeeId);
//     setSelectedEmployee(employee);
//     setShowAttendanceDetails(true);
//   };
  
//   const handleBackToList = () => {
//     setShowAttendanceDetails(false);
//     setSelectedEmployee(null);
//   };
  
//   const toggleLeaveExpansion = (id) => {
//     if (expandedLeaveId === id) {
//       setExpandedLeaveId(null);
//     } else {
//       setExpandedLeaveId(id);
//     }
//   };
  
//   // Mobile UI component based on the images
//   const MobileAttendanceUI = () => {
//     return (
//       <div className="mobile-attendance-container">
//         <div className="mobile-header">
//           <div className="mobile-title">Attendance</div>
//           <button className="view-leave-details-btn" onClick={toggleModal}>View Leave Details</button>
//         </div>
        
//         <div className="mobile-leave-cards">
//           {mobileLeaveData.map(leave => (
//             <div key={leave.id} className="mobile-leave-card">
//               <div className="leave-card-header" onClick={() => toggleLeaveExpansion(leave.id)}>
//                 <div className="user-info">
//                   <img 
//                     src="/api/placeholder/32/32" 
//                     alt={leave.name} 
//                     className="user-avatar"
//                   />
//                   <div className="user-details">
//                     <div className="user-name">{leave.name}</div>
//                     <div className="leave-type">{leave.leaveType}</div>
//                   </div>
//                 </div>
//                 <div className="expansion-icon">
//                   {expandedLeaveId === leave.id ? <FiChevronUp /> : <FiChevronDown />}
//                 </div>
//               </div>
              
//               {expandedLeaveId === leave.id && (
//                 <div className="leave-card-expanded">
//                   {leave.startDate && (
//                     <div className="leave-details">
//                       <div className="leave-info">
//                         <div className="leave-status">Leave Approved</div>
//                         <div className="leave-dates">
//                           <div className="date-section">
//                             <div className="date-label">Start Date</div>
//                             <div className="date-value">{leave.startDate}</div>
//                           </div>
//                           <div className="date-section">
//                             <div className="date-label">End Date</div>
//                             <div className="date-value">{leave.endDate}</div>
//                           </div>
//                           <div className="date-section">
//                             <div className="date-label">Total Days</div>
//                             <div className="date-value">{leave.days} Days</div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="action-buttons">
//                         <button className="approve-button">Approve</button>
//                         <button className="reject-button">Reject</button>
//                       </div>
//                       <button className="view-details-button">View Details</button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   // Employee Attendance Details Component
//   const EmployeeAttendanceDetails = ({ employee }) => {
//     if (!employee) return <div>No employee data available</div>;
    
//     // Calculate attendance summary
//     const presentDaysJuly = 2; // This would be calculated from real data
//     const presentDaysAugust = employee.attendanceRecords.filter(rec => rec.status === "Present").length;
//     const leaveTakenJuly = 1; // This would be calculated from real data
//     const leaveTakenAugust = employee.attendanceRecords.filter(rec => rec.status === "Absent").length;
    
//     return (
//       <div className="employee-attendance">
//         <h2>Attendance</h2>
//         {/* Header Section */}
//         <div className="parent-container">
//           {/* Main container on the left */}
//           <div className="main-container">
//             <div className="info-container">
//               <div className="time-details">
//                 <div className="label">Starting Time</div>
//                 <div className="value">10:11 AM</div>
//               </div>
              
//               {/* Centered Image */}
//               <div className="image-container">
//                 <img
//                   src="/Images/Group 32.png"
//                   alt="Centered Image"
//                 />
//               </div>
              
//               <div className="date-details">
//                 <div className="label">10 August 2024</div>
//                 <div className="value">Today</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Employee Info container on the right */}
//           <div className="employee-details">
//             <h1 className="employee-name">{employee.name}</h1>
            
//             <div className="employee-meta">
//               <div>
//                 <div className="meta-label">Employee Id: {employee.employeeId}</div>
//               </div>
//               <div>
//                 <div className="meta-label">Department: {employee.department}</div>
//               </div>
//               <div>
//                 <div className="meta-label">Position: {employee.position}</div>
//               </div>
//             </div>
//           </div>
//           <div className="employee-photo">
//             <img
//               src="/Images/qwe.png"
//               alt="Employee photo"
//             />
//           </div>
//         </div>
        
//         <div className="attendance-summary">
//           <div className="headeryy">
//             <h2>Attendance Summary</h2>
//           </div>
//           <div className="summary-grid">
//             <div>
//               <div className="summary-label">Month</div>
//               <div className="summary-value">July 2024</div>
//               <div className="summary-value">August 2024</div>
//             </div>
//             <div>
//               <div className="summary-label">Present Days</div>
//               <div className="summary-value">{presentDaysJuly}</div>
//               <div className="summary-value">{presentDaysAugust}</div>
//             </div>
//             <div>
//               <div className="summary-label">Leave Taken</div>
//               <div className="summary-value">{leaveTakenJuly}</div>
//               <div className="summary-value">{leaveTakenAugust}</div>
//             </div>
//           </div>
//         </div>
        
//         {/* Attendance Table */}
//         <div className="attendance-table">
//           <div className="table-header">
//             <h2>Monthly Overview of the employee attendance</h2>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Day</th>
//                 <th>Attendance status</th>
//                 <th>Leave Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employee.attendanceRecords.map((record, idx) => (
//                 <tr key={idx}>
//                   <td>{record.date}</td>
//                   <td>{record.day}</td>
//                   <td>
//                     <span className={`status-badge ${record.status === "Absent" ? "absent" : ""}`}>
//                       {record.status}
//                     </span>
//                   </td>
//                   <td className={record.hours === "Sick Leave" ? "hours-type sick-leave" : ""}>
//                     {record.hours}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//           <button 
//             onClick={handleBackToList} 
//             className="back-btn"
//           >
//             Back to Employee List
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   if (showAttendanceDetails && selectedEmployee) {
//     return (
//       <div className="main-cont">
//         {/* <Navbar /> */}
//         <div className="leave-container">
//           <EmployeeAttendanceDetails employee={selectedEmployee} />
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="main-cont">
//       {/* <Navbar /> */}
//       <div className="leave-container">
//         <SearchBar />

//         {showMobileUI ? (
//           // New Mobile UI based on the images
//           <MobileAttendanceUI />
//         ) : isMobile ? (
//           <>
//             <div className="running-figures">
//               <div className="text-section">
//                 <h2 className="attendance-text">Attendance</h2>
//                 <h2 className="leave-overview">Employee Leave Overview</h2>
//               </div>
//               <div className="img-g">
//                 <img src="/Images/group.png" alt="Group" />
//               </div>
//               <button className="view-leave-btn" onClick={toggleModal}>
//                 View Leave Details
//               </button>
//             </div>

//             {/* Mobile view - vertical cards */}
//             <div className="employee-cards-container">
//               {employees.map(employee => (
//                 <div key={employee.id} className="employee-card">
//                   <div className="employee-card-header">
//                     <div className="employee-info">
//                       <img 
//                         src="/api/placeholder/32/32" 
//                         alt={employee.name} 
//                         className="employee-avatar"
//                       />
//                       <span className="employee-name">{employee.name}</span>
//                     </div>
//                     <div className="leave-type-badge">{employee.leaveType}</div>
//                   </div>
                  
//                   <div className="employee-card-details">
//                     <div className="detail-row">
//                       <span className="detail-label">Start Date:</span>
//                       <span className="detail-value">{employee.startDate}</span>
//                     </div>
//                     <div className="detail-row">
//                       <span className="detail-label">End Date:</span>
//                       <span className="detail-value">{employee.endDate}</span>
//                     </div>
//                     <div className="detail-row">
//                       <span className="detail-label">Total Days:</span>
//                       <span className="detail-value">{employee.days}</span>
//                     </div>
//                   </div>
                  
//                   <div className="employee-card-actions">
//                     <div className="approval-actions">
//                       <button className="approve-btn">Approve</button>
//                       <button className="deny-btn">Reject</button>
//                     </div>
//                     <button className="details-btn" onClick={() => handleViewDetails(employee.id)}>
//                       Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="running-figures">
//               <div className="text-section">
//                 <h2 className="attendance-text">Attendance</h2>
//                 <h2 className="leave-overview">Employee Leave Overview</h2>
//               </div>
//               <div className="img-g">
//                 <img src="/Images/group.png" alt="Group" />
//               </div>
//               <button className="view-leave-btn" onClick={toggleModal}>
//                 View Leave Details
//               </button>
//             </div>

//             {/* Desktop view - table */}
//             <table className="leave-table">
//               <thead>
//                 <tr>
//                   <th>Employee</th>
//                   <th>Leave Type</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Total Days</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map(employee => (
//                   <tr key={employee.id}>
//                     <td>
//                       <div className="employee-cell">
//                         <img 
//                           src="/api/placeholder/32/32" 
//                           alt={employee.name} 
//                           className="employee-avatar"
//                         />
//                         <span className="employee-name">{employee.name}</span>
//                       </div>
//                     </td>
//                     <td className="leave-type">{employee.leaveType}</td>
//                     <td>{employee.startDate}</td>
//                     <td>{employee.endDate}</td>
//                     <td>{employee.days}</td>
//                     <td>
//                       <button className="approve-btn">Approve</button>
//                       <button className="deny-btn">Reject</button>
//                     </td>
//                     <td>
//                       <button className="details-btn" onClick={() => handleViewDetails(employee.id)}>
//                         Details
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </>
//         )}

//         <div className="pagination">
//           <button className="page-btn">←</button>
//           <button className="page-btn active">1</button>
//           <button className="page-btn">2</button>
//           <button className="page-btn">3</button>
//           <button className="page-btn">→</button>
//         </div>

//         {/* Modal for Leave Details */}
//        {/* Modal for Leave Details */}
// {isModalOpen && (
//   <div className="modal-overlay">
//     <div className="modal">
//       <div className="modal-header">
//         <h2>View Leave Details</h2>
//         <button onClick={toggleModal} className="close-button">✕</button>
//       </div>
      
//       <div className="modal-content">
//         <div className="form-group">
//         <h3>View leave information for the selected employee</h3>
//           <label>Employee Selection:</label>
//           <select className="modal-input">
//             <option>Arpit Deshpande</option>
//           </select>
//         </div>
        
//         <div className="form-group">
//           <label>Employee ID:</label>
//           <input 
//             type="text" 
//             className="modal-input" 
//             placeholder="" 
//           />
//         </div>
        
//         <div className="form-group">
//           <label>Department:</label>
//           <select className="modal-input">
//             <option>Web Developer</option>
//             <option>App Developer</option>
//             <option>React Developer</option>
//           </select>
//         </div>
        
//         <div className="modal-buttons">
//           <button className="search-btn">
//             Search
//           </button>
//           <button className="close-btn" onClick={toggleModal}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//       </div>
//     </div>
//   );
// }

// export default EmployeeLeaveTable;



import React, { useState, useEffect } from 'react';
import ChartComponent from './MyCharts';
import axios from 'axios';

const AttendanceSystem = () => {
  // State management
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveReason, setLeaveReason] = useState('');
  const [leaveDates, setLeaveDates] = useState({ start: '', end: '' });
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveType, setLeaveType] = useState('Personal');
  const [customLeaveType, setCustomLeaveType] = useState('');
  const [attendanceData] = useState({
    labels: ['Present', 'Absent', 'On Leave'],
    present: 60,
    absent: 20,
    onLeave: 20
  });
  const [holidays, setHolidays] = useState([]);
  const [employee, setEmployee] = useState({
    _id: 'loading',
    name: 'Loading...',
    position: '',
    department: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // 1. Fetch employee data
        const employeeRes = await axios.get('https://server-oms.vercel.app/api/employees/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setEmployee(employeeRes.data);
        
        // 2. Fetch leave requests for this employee
        const leaveRes = await axios.get(`https://server-oms.vercel.app/api/leave-requests/userId`);
        setLeaveRequests(leaveRes.data);
        
        // 3. Fetch holidays
        const holidayRes = await axios.get('https://server-oms.vercel.app/api/holidays');
        setHolidays(holidayRes.data);
        
      } catch (err) {
        console.error('Error fetching data:', err);
        // alert('Failed to load data. Please refresh the page.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const pieChartOption = {
    animation: false,
    tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
    legend: { 
      orient: 'horizontal', 
      bottom: 0, 
      data: ['Present', 'Absent', 'On Leave'] 
    },
    series: [
      {
        name: 'Attendance',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: { show: false, position: 'center' },
        emphasis: { label: { show: true, fontSize: '18', fontWeight: 'bold' } },
        labelLine: { show: false },
        data: [
          { value: attendanceData.present, name: 'Present', itemStyle: { color: '#FF9F43' } },
          { value: attendanceData.absent, name: 'Absent', itemStyle: { color: '#5BCFC5' } },
          { value: attendanceData.onLeave, name: 'On Leave', itemStyle: { color: '#FFCC80' } }
        ]
      }
    ]
  };

  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!leaveDates.start || !leaveDates.end || !leaveReason) {
      alert('Please fill all required fields');
      return;
    }

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const startDate = new Date(leaveDates.start);
    if (startDate <= today) {
      alert('Start date must be in the future');
      return;
    }

    const endDate = new Date(leaveDates.end);
    if (endDate < startDate) {
      alert('End date must be after start date');
      return;
    }

    try {
      const response = await axios.post('/api/leave-requests', {
        employeeId: employee._id,
        startDate: leaveDates.start,
        endDate: leaveDates.end,
        reason: leaveReason,
        leaveType: leaveType === 'Other' ? customLeaveType : leaveType
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      alert('Leave request submitted successfully!');
      
      // Reset form
      setLeaveDates({ start: '', end: '' });
      setLeaveReason('');
      setLeaveType('Personal');
      setCustomLeaveType('');
      
      // Refresh leave requests
      const leaveRes = await axios.get(`/api/leave-requests/${employee._id}`);
      setLeaveRequests(leaveRes.data);
      
    } catch (error) {
      console.error('Submission error:', error);
      let errorMessage = 'Failed to submit leave request';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      alert(errorMessage);
    }
  };

  // Calendar functions (unchanged from your original)
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
    const calendarDays = [];
    
    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      calendarDays.push({
        date: daysInPrevMonth - i,
        month: prevMonth,
        year: prevMonthYear,
        isCurrentMonth: false
      });
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const holiday = holidays.find(h => h.date === dateStr);
      let isLeave = false;
      
      const leave = leaveRequests.find(l => {
        const start = new Date(l.startDate);
        const end = new Date(l.endDate);
        const current = new Date(dateStr);
        return current >= start && current <= end && l.status === 'approved';
      });
      if (leave) isLeave = true;
      
      calendarDays.push({
        date: day,
        month,
        year,
        isCurrentMonth: true,
        isHoliday: !!holiday,
        holidayName: holiday?.name,
        isLeave
      });
    }
    
    // Next month days
    const remainingDays = 42 - calendarDays.length;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextMonthYear = month === 11 ? year + 1 : year;
    
    for (let day = 1; day <= remainingDays; day++) {
      calendarDays.push({
        date: day,
        month: nextMonth,
        year: nextMonthYear,
        isCurrentMonth: false
      });
    }
    
    return calendarDays;
  };

  const renderCalendar = () => {
    const calendarDays = generateCalendarDays();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return (
      <div className="modal d-block bg-white" style={{ zIndex: 1050 }}>
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex align-items-center">
                <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} 
                  className="btn btn-outline-secondary me-2">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <h2 className="modal-title h5 mb-0">
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} 
                  className="btn btn-outline-secondary ms-2">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <button onClick={() => setShowCalendar(false)} className="btn-close"></button>
            </div>
            <div className="modal-body p-0">
              <div className="d-flex border-bottom">
                {weekdays.map(day => (
                  <div key={day} className="flex-grow-1 text-center p-2 fw-medium">{day}</div>
                ))}
              </div>
              <div className="d-flex flex-wrap">
                {calendarDays.map((day, index) => {
                  const isToday = day.isCurrentMonth &&
                    day.date === new Date().getDate() &&
                    day.month === new Date().getMonth() &&
                    day.year === new Date().getFullYear();
                  
                  return (
                    <div key={index} className={`p-2 border-end border-bottom ${day.isCurrentMonth ? 'bg-white' : 'bg-light text-muted'}`} 
                      style={{ width: '14.2857%', minHeight: '100px' }}>
                      <div className={`${day.isHoliday ? 'text-primary' : day.isLeave ? 'text-warning' : (day.date % 7 === 0 || day.date % 7 === 6) ? 'text-info' : ''} ${isToday ? 'fw-bold' : ''}`}>
                        {day.date}
                      </div>
                      {day.isHoliday && (
                        <div className="mt-1 bg-primary bg-opacity-10 text-primary small p-1 rounded">
                          {day.holidayName}
                        </div>
                      )}
                      {day.isLeave && (
                        <div className="mt-1 bg-warning bg-opacity-10 text-warning small p-1 rounded">
                          Leave
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeaveRequestsTable = () => {
    return (
      <div className="card mt-4">
        <div className="card-body">
          <h2 className="h6 card-title text-dark mb-3">My Leave Requests</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Type</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map(request => (
                  <tr key={request._id}>
                    <td>{new Date(request.startDate).toLocaleDateString()}</td>
                    <td>{new Date(request.endDate).toLocaleDateString()}</td>
                    <td>{request.leaveType}</td>
                    <td>{request.reason}</td>
                    <td>
                      <span className={`badge ${
                        request.status === 'approved' ? 'bg-success' : 
                        request.status === 'rejected' ? 'bg-danger' : 'bg-warning'
                      }`}>
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderEmployeeDashboard = () => {
    return (
      <div className="flex-1">
        {/* Top Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <div className="text-warning fw-bold fs-3 me-4">
              </div>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-warning border-bottom border-warning border-2">Attendance</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Welcome Header */}
        <div className="bg-white py-4 border-bottom">
          <div className="container-fluid">
            <h1 className="h3 text-dark">Welcome back {employee.name}!</h1>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="container-fluid py-4">
          <div className="row g-3">
            {[
              { icon: 'users', color: 'warning', value: 254, label: 'Total Employees' },
              { icon: 'user-minus', color: 'primary', value: 10, label: 'On Leave' },
              { icon: 'home', color: 'success', value: 20, label: 'Working Remotely' }
            ].map((card, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100">
                  <div className="card-body d-flex align-items-center">
                    <div className={`bg-${card.color} bg-opacity-10 p-3 rounded-circle me-3`}>
                      <i className={`fas fa-${card.icon} text-${card.color}`}></i>
                    </div>
                    <div>
                      <h3 className="card-title mb-0">{card.value}</h3>
                      <p className="text-muted small mb-0">{card.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container-fluid py-4">
          <div className="row g-4">
            {/* Attendance Overview */}
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="h6 card-title text-dark mb-3">Attendance Overview</h2>
                  <ChartComponent option={pieChartOption} style={{ height: '250px' }} />
                </div>
              </div>
            </div>

            {/* Add Leave */}
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="h6 card-title text-dark mb-3">Add Leave</h2>
                  <form onSubmit={handleLeaveSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Write Message</label>
                      <textarea 
                        className="form-control" 
                        rows={4} 
                        value={leaveReason}
                        onChange={(e) => setLeaveReason(e.target.value)} 
                        placeholder="Enter reason for leave..." 
                        required 
                      />
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label">From</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          value={leaveDates.start}
                          onChange={(e) => setLeaveDates({ ...leaveDates, start: e.target.value })} 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">To</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          value={leaveDates.end}
                          onChange={(e) => setLeaveDates({ ...leaveDates, end: e.target.value })} 
                          required 
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Leave Type</label>
                      <select 
                        className="form-select" 
                        value={leaveType} 
                        onChange={(e) => setLeaveType(e.target.value)} 
                        required
                      >
                        <option value="Vacation">Vacation</option>
                        <option value="Sick">Sick Leave</option>
                        <option value="Personal">Personal Leave</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {leaveType === 'Other' && (
                      <div className="mb-3">
                        <label className="form-label">Specify Leave Type</label>
                        <input
                          type="text"
                          className="form-control"
                          value={customLeaveType}
                          onChange={(e) => setCustomLeaveType(e.target.value)}
                          placeholder="Enter your leave type"
                          required
                        />
                      </div>
                    )}
                    <button type="submit" className="btn btn-warning w-100 text-white">Apply Leave</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* Leave Requests Table */}
          {renderLeaveRequestsTable()}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      {renderEmployeeDashboard()}
      
      {/* Calendar Modal */}
      {showCalendar && renderCalendar()}
    </div>
  );
};

export default AttendanceSystem;
