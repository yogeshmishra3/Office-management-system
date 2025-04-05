// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaDownload } from "react-icons/fa";
// import "./ViewDetails.css";

// const ViewDetails = () => {
//   const navigate = useNavigate();

//   const handleDownload = () => {
//     const cvUrl = "/Danish_UIUX_CV.pdf"; // Ensure the file is in the public folder
//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.setAttribute("download", "Danish_UIUX_CV.pdf"); // Set download attribute
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleGoBack = () => {
//     navigate("/Db/employee"); // Navigate back to the employees page
//   };

//   return (
//     <div className="containerr">
//       {/* Header */}
//       <div className="header">
//         <FaArrowLeft 
//           className="back-icon" 
//           onClick={handleGoBack} 
//           style={{ cursor: 'pointer' }} 
//         />
//         <h2 className="title">Candidate Profile</h2>
//       </div>

//       {/* Profile Card */}
//       <div className="profile-cardd">
//         <img
//           src="/Images/qwe.png" // Replace with actual image URL
//           alt="Profile"
//           className="profile-img"
//         />
//         <h3 className="name">Dhanesh Bhai</h3>
//         <p className="role">UI/UX Designer</p>

//         {/* CV Download Button */}
//         <button className="cv-button" onClick={handleDownload}>
//           <FaDownload className="icon" />
//           <span>Danish Ui Ux Cv.pdf</span>
//         </button>
//       </div>

//       {/* Details Section */}
//       <div className="details-card">
//         <p><strong>Phone No.</strong> - +91 1234567890</p>
//         <p><strong>Department</strong> - Design</p>
//         <p><strong>Employee Type:</strong> Full-Time</p>
//         <p><strong>Emergency Contact</strong> - +91 1234567890</p>
//       </div>
//     </div>
//   );
// };

// export default ViewDetails;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import axios from "axios";
import "./ViewDetails.css";

const ViewDetails = () => {
  const { id } = useParams(); // Get candidateId from URL
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      try {
        const response = await axios.get(`https://server-oms.vercel.app/api/candidates/${id}`);
        setCandidate(response.data.data);
        console.log("Candidate details:", response.data.data);
      } catch (error) {
        console.error("Error fetching candidate details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!candidate) return <p>Candidate not found</p>;

  const handleDownload = () => {
    const cvUrl = candidate.cvPath 
      ? `https://server-oms.vercel.app/uploads/cvs/${candidate.cvPath}` 
      : "/default_cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", candidate.cvPath || "default_cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="containerr">
      {/* Header */}
      <div className="header">
        <FaArrowLeft className="back-icon" onClick={handleGoBack} style={{ cursor: "pointer" }} />
        <h2 className="title">Candidate Profile</h2>
      </div>

      {/* Profile Card */}
      <div className="profile-cardd">
        <img
          src={candidate.photoUrl}
          alt={candidate.fullName}
          className="profile-img"
        />
        <h3 className="name">{candidate.fullName}</h3>
        <p className="role">{candidate.role}</p>

        {/* CV Download Button */}
        <button className="cv-button" onClick={handleDownload}>
          <FaDownload className="icon" />
          <span>Download CV</span>
        </button>
      </div>

      {/* Details Section */}
      <div className="details-card">
        <p><strong>Phone No.</strong> - {candidate.phoneNo || "N/A"}</p>
        <p><strong>Department</strong> - {candidate.role || "N/A"}</p>
        <p><strong>Employee Role</strong> - {candidate.subRole || "N/A"}</p>
        <p><strong>Qualification</strong> - {candidate.qualification || "N/A"}</p>
        <p><strong>Birth Date</strong> - {candidate.birthDate || "N/A"}</p>
        <p><strong>Address</strong> - {candidate.address || "N/A"}</p>
        <p><strong>Country</strong> - {candidate.country || "N/A"}</p>
        <p><strong>Emergency Contact</strong> - {candidate.emergencyNo || "N/A"}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
