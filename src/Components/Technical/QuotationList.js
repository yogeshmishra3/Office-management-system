// import React, { useState } from 'react';
// import { format } from 'date-fns';
// import './Quotation.css';
// import './Technical.css';
// import Navbar from '../Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../Search-bar/SearchBar';

// const QuotationList = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('quotation'); // State to switch tabs

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Quotation created successfully');
//     setIsModalOpen(false);
//   };

//   const quotations = Array(5).fill({
//     title: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
//     clientName: "Danish Zain",
//     companyName: "Digital Studio",
//     date: "07 Apr 2024",
//   });

//   const technicalDocs = Array(4).fill({
//     name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     date: "17-Aug-2024",
//   });

  
//   const [formData, setFormData] = useState({
//     quotationName: '',
//     quotationDate: '',
//     validity: '',
//     companyName: '',
//     email: '',
//     mobile: '',
//     website: '',
//     clientName: '',
//     clientCompany: '',
//     address: '',
//     city: '',
//     clientMobile: '',
//     title: '',
//     scope: '',
//     deliverables: '',
//     timeline: '',
//     staticCost: '',
//     dynamicCost: '',
//     otherExpenses: '',
//     subtotal: '',
//     taxes: '',
//     netAmount: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="main-cont">
//     <Navbar/>
//     <div className="quotation-container" style={{width:"80%"}}>
//     <SearchBar/>
//       <header className="header">
//         <nav className="nav-container">
//           <div className="nav-links">
//             {/* <span className={`nav-link ${activeTab === 'technical' ? 'active' : ''}`} onClick={() => setActiveTab('technical')}>
//               Technical Doc
//             </span> */}
//             <span className={`nav-link ${activeTab === 'quotation' ? 'active' : ''}`} onClick={() => setActiveTab('quotation')}>
//               Quotation
//             </span>
//           </div>
//           {/* {activeTab === 'quotation' && (
//             <button className="create-button" onClick={handleOpenModal}>Create</button>
//           )} */}
//         </nav>
//       </header>

//       {activeTab === 'technical' ? (
//         <div className="quotation-container">
//           <div className="quotation-header">
//             <h2 className="quotation-title">Recent</h2>
//             <span className="quotation-date">{format(new Date(), "dd MMM, yyyy")}</span>
//           </div>
//           <table className="quotation-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Description</th>
//                 <th>Date</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {technicalDocs.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.description}</td>
//                   <td>{item.date}</td>
//                   <td>
//                     <span className="view-details">View Details</span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <>
//         {isModalOpen && (
//             <div className="modal-bhai">
//               <div className="modal-bro">
//                 <h2>Create New Quotation</h2>
//                 <form onSubmit={handleSubmit}>
//                   <label>Quotation Name</label>
//                   <input type="text" name="quotationName" value={formData.quotationName} onChange={handleChange} required />

//                   <label>Quotation Date</label>
//                   <input type="date" name="quotationDate" value={formData.quotationDate} onChange={handleChange} required />

//                   <label>Validity of Quotation</label>
//                   <input type="text" name="validity" value={formData.validity} onChange={handleChange} required />

//                   <h3>From</h3>
//                   <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
//                   <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                   <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
//                   <input type="text" name="website" placeholder="Website" value={formData.website} onChange={handleChange} />

//                   <h3>To</h3>
//                   <input type="text" name="clientName" placeholder="Client Name" value={formData.clientName} onChange={handleChange} required />
//                   <input type="text" name="clientCompany" placeholder="Company Name" value={formData.clientCompany} onChange={handleChange} required />
//                   <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
//                   <input type="text" name="city" placeholder="City, State, Zip" value={formData.city} onChange={handleChange} required />
//                   <input type="text" name="clientMobile" placeholder="Mobile" value={formData.clientMobile} onChange={handleChange} required />

//                   <h3>Quotation Details</h3>
//                   <textarea name="title" placeholder="Title / Description" value={formData.title} onChange={handleChange} required />
//                   <textarea name="scope" placeholder="Scope of Work" value={formData.scope} onChange={handleChange} required />
//                   <textarea name="deliverables" placeholder="Deliverables" value={formData.deliverables} onChange={handleChange} required />
//                   <input type="text" name="timeline" placeholder="Timeline" value={formData.timeline} onChange={handleChange} required />

//                   <h3>Cost Estimation</h3>
//                   <input type="text" name="staticCost" placeholder="Static Website Cost" value={formData.staticCost} onChange={handleChange} />
//                   <input type="text" name="dynamicCost" placeholder="Dynamic Website Cost" value={formData.dynamicCost} onChange={handleChange} />
//                   <input type="text" name="otherExpenses" placeholder="Other Expenses" value={formData.otherExpenses} onChange={handleChange} />

//                   <h3>Final Amount</h3>
//                   <input type="text" name="subtotal" placeholder="Subtotal" value={formData.subtotal} onChange={handleChange} />
//                   <input type="text" name="taxes" placeholder="Taxes" value={formData.taxes} onChange={handleChange} />
//                   <input type="text" name="netAmount" placeholder="Net Amount" value={formData.netAmount} onChange={handleChange} required />

//                   <button type="submit">Create</button>
//                   <button type="button" onClick={handleCloseModal}>Cancel</button>
//                 </form>
//               </div>
//             </div>
//           )}

//           <div className="title-section">
//             {/* <h2>Latest Quotation</h2> */}
//             <div className="quotation-container">
//             <div className="quotation-header">
//             <h2 className="quotation-title">Latest Quotation</h2>
//             <span className="quotation-date">{format(new Date(), "dd MMM, yyyy")}</span>
//           </div>
//             {/* <div className="container1"> */}
//               {/* <FontAwesomeIcon icon={faCalendarAlt} />
//               <span className="date">07 Apr 2024</span> */}

//               <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Client Name</th>
//                   <th>Company Name</th>
//                   <th>Validity Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {quotations.map((quote, index) => (
//                   <tr key={index}>
//                     <td>{quote.title}</td>
//                     <td>{quote.clientName}</td>
//                     <td>{quote.companyName}</td>
//                     <td>{quote.date}</td>
//                     <td>
//                       <button className="view-details-button">View Details</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//             </div>
//           </div>

//           {/* <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Client Name</th>
//                   <th>Company Name</th>
//                   <th>Validity Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {quotations.map((quote, index) => (
//                   <tr key={index}>
//                     <td>{quote.title}</td>
//                     <td>{quote.clientName}</td>
//                     <td>{quote.companyName}</td>
//                     <td>{quote.date}</td>
//                     <td>
//                       <button className="view-details-button">View Details</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div> */}
//         </>
//       )}
//     </div>
//     </div>
//   );
// };

// export default QuotationList;


import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './Quotation.css';
import Navbar from '../Navbar';
import SearchBar from '../Search-bar/SearchBar';

const QuotationList = () => {
  const [quotations, setQuotations] = useState([]);
  const [filteredQuotations, setFilteredQuotations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch quotations from API
  useEffect(() => {
    const fetchQuotations = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://crm-brown-gamma.vercel.app/api/newquotations');
        if (!response.ok) {
          throw new Error('Failed to fetch quotations');
        }
        const data = await response.json();
        setQuotations(data);
        setFilteredQuotations(data); // Initialize filtered list with all quotations
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotations();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredQuotations(quotations);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = quotations.filter(quote => {
      return (
        (quote.title && quote.title.toLowerCase().includes(lowercasedSearch)) ||
        (quote.clientName && quote.clientName.toLowerCase().includes(lowercasedSearch)) ||
        (quote.companyName && quote.companyName.toLowerCase().includes(lowercasedSearch)) ||
        (quote.date && quote.date.toLowerCase().includes(lowercasedSearch))
      );
    });

    setFilteredQuotations(filtered);
  };

  return (
    <div className="main-cont">
      <div className="quotation-container" style={{width:"80%"}}>
        <SearchBar onSearch={handleSearch}/>
        
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}

        <div className="title-section">
          <div className="quotation-container">
            <div className="quotation-header">
              <h2 className="quotation-title">Latest Quotation</h2>
              <span className="quotation-date">{format(new Date(), "dd MMM, yyyy")}</span>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Client Name</th>
                    <th>Company Name</th>
                    <th>Validity Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQuotations.length > 0 ? (
                    filteredQuotations.map((quote, index) => (
                      <tr key={index}>
                        <td>{quote.title || 'No title'}</td>
                        <td>{quote.clientName || 'No client name'}</td>
                        <td>{quote.companyName || 'No company name'}</td>
                        <td>{quote.date || 'No date'}</td>
                        <td>
                          <a 
                            href={quote.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View PDF
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="no-results">
                        No quotations found matching your search
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default QuotationList;