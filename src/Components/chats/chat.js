import Navbar from '../Navbar';
import React, { useState, useEffect } from 'react';
import './chat.css';
import axios from 'axios';

const ChatPopup = ({ selectedEmployee, closeChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages when the component loads
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, []);

  // Handle sending a new message
  const sendMessage = async () => {
    if (!newMessage.trim()) return; // Avoid sending empty messages

    try {
      const response = await axios.post('http://localhost:5000/api/messages', {
        sender: selectedEmployee.name,
        text: newMessage,
      });

      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Handle deleting a message
  const deleteMessage = async (messageId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/messages/${messageId}`);
      setMessages(messages.filter((msg) => msg._id !== messageId));
      console.log('Message deleted:', response.data);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

    // Format timestamp to 12-hour format
    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
  
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
  
      // Convert hours from 24-hour format to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // The hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero to minutes if < 10
  
      return {
        formattedTime: `${hours}:${minutes} ${ampm}`,
        formattedDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      };
    };

      // Track the previous date to compare for new day
  let prevDate = null;

  return (
    <div className="chat-popup-overlay">
      <div className="chat-popup">
        <div className="chat-section">
          <div className="chat-header">
            <img src={selectedEmployee.avatar} alt={selectedEmployee.name} className="chat-avatar" />
            <span>{selectedEmployee.name}</span>
            <button className="close-chat" onClick={closeChat}>×</button>
          </div>

          <div className="chat-body">

          {messages.map((msg, index) => {
              const { formattedTime, formattedDate } = formatTimestamp(msg.createdAt);
              
              const isNewDay = prevDate !== formattedDate;
              if (isNewDay) {
                prevDate = formattedDate;
              }

              return (
                <div key={index}>
                  {isNewDay && (
                    <div className="date-divider">
                      <span>{formattedDate}</span>
                    </div>
                  )}
                  <div className={`chat-message ${msg.sender === selectedEmployee.name ? 'incoming' : 'outgoing'}`}>
                    <p>{msg.text}</p>
                    <span className="timestamp">{formattedTime}</span>
                    <button className="delete-btn" onClick={() => deleteMessage(msg._id)}>🗑️</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="chat-input"
            />
            <button className="send-btn" onClick={sendMessage}>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Chat = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showChat, setShowChat] = useState(false); // ✅ Added here


  const employees = [
    { id: '12345', name: 'Ajiri Immonvede', department: 'Sales', position: 'Sales Manager', avatar: '/api/placeholder/32/32' },
    { id: '67890', name: 'Ali Almoallim', department: 'Finance', position: 'Financial Analyst', avatar: '/api/placeholder/32/32' },
    { id: '54321', name: 'Maria Skgaftar', department: 'Operations', position: 'Operations Manager', avatar: '/api/placeholder/32/32' },
    { id: '67891', name: 'Hopeland Adel', department: 'Sales', position: 'Sales Analyst', avatar: '/api/placeholder/32/32' },
    { id: '67892', name: 'Shon Nilsson', department: 'Finance', position: 'Financial Analyst', avatar: '/api/placeholder/32/32' },
    { id: '67893', name: 'Jack Nevada', department: 'IT', position: 'IT Coordinator', avatar: '/api/placeholder/32/32' },
  ];

  const openChat = (employee) => {
    setSelectedEmployee(employee);
    setShowChat(true); // ✅ Controls popup visibility
  };

  const closeChat = () => {
    setSelectedEmployee(null);
    setShowChat(false);
  };

  return (
    <div className="main-cont">
    <Navbar />
    {/* <Message/> */}
    <div className="employee-list-container">
      <div className="search-bar">
        <h2 className="title">Employee List</h2>
        <div className="search-input-container">
          <input type="search" placeholder="Quick Search..." className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="employee-table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th className="employee-head">Employee</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Position</th>
              <th className="action-head">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="employee-cell">
                  <div className="employee-info">
                    <img src={employee.avatar} alt={employee.name} className="employee-avatar" />
                    <span>{employee.name}</span>
                  </div>
                </td>
                <td>{employee.id}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td className="action-cell">
                  <button className="chat-btn" onClick={() => openChat(employee)}>Chat</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedEmployee && (
        <ChatPopup
        selectedEmployee={selectedEmployee}
        closeChat={closeChat}
      />
      )}
    </div>
    </div>
  );
};

export default Chat;