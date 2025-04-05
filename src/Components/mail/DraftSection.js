// import React, { useEffect, useState } from "react";

// const Drafts = () => {
//     const [drafts, setDrafts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchDrafts();
//     }, []);

//     const fetchDrafts = async () => {
//         try {
//             console.log("Fetching drafts...");
//             const response = await fetch("https://server-oms.vercel.app/fetch-drafts");

//             if (!response.ok) {
//                 throw new Error(`Failed to fetch drafts: ${response.status} ${response.statusText}`);
//             }

//             const data = await response.json();
//             console.log("Fetched drafts:", data);

//             if (Array.isArray(data)) {
//                 setDrafts(data);
//             } else if (data.drafts && Array.isArray(data.drafts)) {
//                 setDrafts(data.drafts);
//             } else {
//                 throw new Error("Invalid draft data format received.");
//             }
//         } catch (err) {
//             console.error("Error fetching drafts:", err);
//             setError(`Unable to load drafts. ${err.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const sendMail = async (draft) => {
//         if (!draft.to || !draft.subject || !draft.body) {
//             alert("Incomplete draft. Cannot send.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("email", draft.to);
//         formData.append("subject", draft.subject);
//         formData.append("body", draft.body);

//         setLoading(true);

//         try {
//             const response = await fetch("https://server-oms.vercel.app/api/send-email", {
//                 method: "POST",
//                 body: formData,
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 alert("Email sent successfully!");
//                 fetchDrafts(); // Refresh drafts after sending
//             } else {
//                 alert(`Failed to send email: ${data.message}`);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("An error occurred while sending the email.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="drafts-container">
//             <h2 className="drafts-header">Saved Drafts</h2>

//             {loading ? (
//                 <p className="loading">Loading drafts...</p>
//             ) : error ? (
//                 <p className="error">{error}</p>
//             ) : drafts.length > 0 ? (
//                 drafts.map((draft, index) => (
//                     <div key={index} className="draft-item">
//                         <strong>{draft.to || "No recipient"}</strong>
//                         <p>{draft.subject || "No subject"}</p>
//                         <span>
//                             {draft.date && !isNaN(new Date(draft.date))
//                                 ? new Intl.DateTimeFormat("en-US", {
//                                     year: "numeric",
//                                     month: "short",
//                                     day: "numeric",
//                                     hour: "2-digit",
//                                     minute: "2-digit",
//                                 }).format(new Date(draft.date))
//                                 : "No date available"}
//                         </span>
//                         <button className="send-button" onClick={() => sendMail(draft)}>
//                             Send Mail
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <p className="no-drafts">No drafts available.</p>
//             )}
//         </div>
//     );
// };

// export default Drafts;

import React, { useEffect, useState } from "react";
import "./Inbox.css";

const DraftSection = ({ drafts: propDrafts }) => {
  const [drafts, setDrafts] = useState(propDrafts || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDrafts(propDrafts || []);
  }, [propDrafts]);

  const sendMail = async (draft) => {
    if (!draft.to || !draft.subject || !draft.body) {
      alert("Incomplete draft. Cannot send.");
      return;
    }

    const formData = new FormData();
    formData.append("email", draft.to);
    formData.append("subject", draft.subject);
    formData.append("body", draft.body);

    setLoading(true);

    try {
      const response = await fetch("https://server-oms.vercel.app/api/send-email", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
        // Remove the draft from the list
        setDrafts(drafts.filter(d => d.id !== draft.id));
      } else {
        alert(`Failed to send email: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-list">
      <div className="email-header-row">
        <div className="column-name">To</div>
        <div className="column-content">Subject</div>
        <div className="column-time">Date</div>
      </div>
      
      {loading ? (
        <p className="loading-message">Loading drafts...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : drafts.length > 0 ? (
        drafts.map((draft, index) => (
          <div key={draft.id || index} className="email-row draft-row">
            <div className="email-name">
              <input
                type="checkbox"
                id={`draft-${draft.id || index}`}
                className="email-checkbox"
              />
              <label htmlFor={`draft-${draft.id || index}`} className="email-label draft-label">
                {draft.to || "No recipient"}
              </label>
            </div>
            <div className="email-content">
              {draft.subject || "No subject"}
            </div>
            <div className="email-time-actions">
              <span className="email-time">
                {draft.date && !isNaN(new Date(draft.date))
                  ? new Date(draft.date).toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })
                  : "No date"}
              </span>
              <button className="send-button" onClick={() => sendMail(draft)}>
                Send
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="no-emails-message">No drafts available.</div>
      )}
    </div>
  );
};

export default DraftSection;