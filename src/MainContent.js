import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import Db from "./Components/Db";
import Employee from "./Components/Employee";
import Meeting from './Components/Meeting';
import CandidateProfile from "./Components/CandidatePf";
import Attendance from "./Components/Attendance";
import EmployeeAttendance from "./Components/EmplyeAtendnc";
import ProjectList from "./Components/ProjectList";
import QuotationList from './Components/Technical/QuotationList'
import Todo from './Components/Todo-list/Todo';
import Chat from './Components/chats/chat';
import Inbox from './Components/mail/Inbox';
import SendEmail from './Components/mail/SendEmail';
import EmailDetails from './Components/mail/EmailDetails';
import Calender from './Components/calender/calender';
import Certificate from './Components/Certificates/Certificate';
import ViewDetails from './Components/ViewDetails';
// import HRattendance from './Components/AdminAttendance/HRattendance';
// import Navbar from "./Components/Navbar";
import HrAttendance from "./Components/HrAttendance"


const MainContent = ({ nav }) => {
  return (
    <div className="main-cont" style={{
      "width": "100%",
      "max-width": "1200px",
      "background-color": "white",
      "border-radius": "8px",
      "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
      "overflow": "hidden",
      "margin-left": "20%",
      "@media (max-width: 768px)": {
        "margin": "0",
        "overflow": "hidden",
      }

    }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Db" element={<Db />} />
        <Route path="/Db/employee" element={<Employee />} />
        <Route path="/Db/viewDetails/:id" element={<ViewDetails />} />
        <Route path="/CandidateProfile" element={<CandidateProfile />} />
        <Route path="/Attendance" element={<Attendance />} />
        {/* <Route path="/hrAttendance" element={<HRattendance />} /> */}
        <Route path="/EmplyeAtendnc" element={<EmployeeAttendance />} />
        <Route path="/Meeting" element={<Meeting />} />
        <Route path="/ProjectList" element={<ProjectList nav={nav} />} />
        {/* {nav === "/admin" && <Route path='internship' element={<Internship/>}/>} */}
        <Route path="/QuotationList" element={<QuotationList />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/Inbox/send-email" element={<SendEmail />} />;
        <Route path='/Inbox/email-details' element={<EmailDetails />} />
        <Route path='/Calender' element={<Calender />} />
        <Route path='/Certificate' element={<Certificate />} />
        <Route path="/HrAttendance" element={<HrAttendance />} />
      </Routes>
    </div>
  )
}

export default MainContent;

