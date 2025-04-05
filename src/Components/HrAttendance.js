import React, { useState, useEffect } from 'react';
import ChartComponent from './MyCharts';
import axios from 'axios';

const HrAttendance = () => {
  // State management
  const [selectedView, setSelectedView] = useState('Weekly');
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveReason, setLeaveReason] = useState('');
  const [leaveDates, setLeaveDates] = useState({ start: '', end: '' });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveType, setLeaveType] = useState('Leave');
  const [employees, setEmployees] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [attendanceData] = useState({
    labels: ['Present', 'Absent', 'On Leave'],
    present: 60,
    absent: 20,
    onLeave: 20
  });

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all leave requests
        const leaveRes = await axios.get('/api/leave-requests');
        setLeaveRequests(leaveRes.data);
        
        // Fetch employees
        const empRes = await axios.get('/api/employees');
        setEmployees(empRes.data);
        
        // Fetch holidays
        const holidayRes = await axios.get('/api/holidays');
        setHolidays(holidayRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    
    fetchData();
  }, []);

  // Chart configurations
  const attendanceChartOption = {
    animation: false,
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['Present', 'Absents', 'Leave'], top: '0%' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 1', 'Apr 2', 'Apr 3']
    },
    yAxis: { type: 'value', max: 120 },
    series: [
      {
        name: 'Present',
        type: 'bar',
        data: selectedEmployee
          ? employees.find(emp => emp._id === selectedEmployee)?.attendance?.present || [95, 85, 50, 110, 95, 95, 110]
          : [95, 85, 50, 110, 95, 95, 110],
        itemStyle: { color: '#FF7F50' }
      },
      {
        name: 'Absents',
        type: 'bar',
        data: selectedEmployee
          ? employees.find(emp => emp._id === selectedEmployee)?.attendance?.absent || [60, 85, 100, 70, 95, 75, 85]
          : [60, 85, 100, 70, 95, 75, 85],
        itemStyle: { color: '#FFD700' }
      },
      {
        name: 'Leave',
        type: 'bar',
        data: selectedEmployee
          ? employees.find(emp => emp._id === selectedEmployee)?.attendance?.leave || [110, 95, 85, 100, 90, 47, 75]
          : [110, 95, 85, 100, 90, 47, 75],
        itemStyle: { color: '#90EE90' }
      }
    ]
  };

  const pieChartOption = {
    animation: false,
    tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
    legend: { orient: 'horizontal', bottom: 0, data: attendanceData.labels },
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
          { value: attendanceData.present, name: 'Present (60%)', itemStyle: { color: '#FF9F43' } },
          { value: attendanceData.absent, name: 'Absent (20%)', itemStyle: { color: '#5BCFC5' } },
          { value: attendanceData.onLeave, name: 'On Leave (20%)', itemStyle: { color: '#FFCC80' } }
        ]
      }
    ]
  };

  // Handler functions
  const handleApproveLeave = async (leaveId) => {
    try {
      await axios.put(`/api/leave-requests/${leaveId}`, { status: 'approved' });
      setLeaveRequests(leaveRequests.map(req => 
        req._id === leaveId ? { ...req, status: 'approved' } : req
      ));
    } catch (err) {
      console.error('Error approving leave:', err);
    }
  };

  const handleRejectLeave = async (leaveId) => {
    try {
      await axios.put(`/api/leave-requests/${leaveId}`, { status: 'rejected' });
      setLeaveRequests(leaveRequests.map(req => 
        req._id === leaveId ? { ...req, status: 'rejected' } : req
      ));
    } catch (err) {
      console.error('Error rejecting leave:', err);
    }
  };

  // Calendar functions
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
      
      if (selectedEmployee) {
        const employee = employees.find(emp => emp._id === selectedEmployee);
        if (employee) {
          const leave = leaveRequests.find(l => {
            const start = new Date(l.startDate);
            const end = new Date(l.endDate);
            const current = new Date(dateStr);
            return current >= start && current <= end && l.status === 'approved' && l.employeeId === selectedEmployee;
          });
          if (leave) isLeave = true;
        }
      }
      
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

  // Render functions
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

  return (
    <div className="min-vh-100 bg-light">
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 text-dark">HR Dashboard</h1>
          <div className="d-flex align-items-center gap-2">
            <button onClick={() => setShowCalendar(true)} className="btn btn-outline-secondary">
              <i className="fas fa-calendar me-2"></i>View Calendar
            </button>
          </div>
        </div>
        
        {/* Statistics Cards */}
        <div className="row mb-4">
          {[
            { icon: 'users', color: 'warning', value: employees.length, label: 'Total Employees' },
            { icon: 'user-minus', color: 'danger', 
              value: leaveRequests.filter(l => l.status === 'approved').length, 
              label: 'On Leave' },
            { icon: 'home', color: 'success', value: 20, label: 'Working Remotely' },
            { icon: 'tasks', color: 'primary', 
              value: leaveRequests.filter(l => l.status === 'pending').length, 
              label: 'Pending Leaves' }
          ].map((card, i) => (
            <div key={i} className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <i className={`fas fa-${card.icon} text-${card.color} fs-3 me-3`}></i>
                    <div>
                      <h3 className="card-title mb-0">{card.value}</h3>
                      <p className="text-muted mb-0">{card.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Employee Selection */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="h5 card-title text-dark mb-3">Employee Attendance</h2>
            <div className="mb-3">
              <label className="form-label">Select Employee</label>
              <select className="form-select" value={selectedEmployee || ''} 
                onChange={(e) => setSelectedEmployee(e.target.value || null)}>
                <option value="">All Employees</option>
                {employees.map(emp => (
                  <option key={emp._id} value={emp._id}>{emp.name} - {emp.position}</option>
                ))}
              </select>
            </div>
            
            {/* Attendance Overview */}
            <div className="mt-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h6 text-dark">Attendance Overview</h3>
                <div className="btn-group">
                  {['Today', 'Month', 'Weekly'].map(view => (
                    <button key={view} onClick={() => setSelectedView(view)}
                      className={`btn btn-sm ${selectedView === view ? 'btn-secondary' : 'btn-outline-secondary'}`}>
                      {view}
                    </button>
                  ))}
                </div>
              </div>
              <ChartComponent option={attendanceChartOption} style={{ height: '400px' }} />
            </div>
          </div>
        </div>
        
        {/* Leave Requests */}
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="h5 card-title text-dark mb-4">Leave Requests</h2>
            {leaveRequests.length > 0 ? (
              <div className="table-responsive">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th>Employee</th>
                      <th>Date Range</th>
                      <th>Reason</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRequests.map(leave => {
                      const employee = employees.find(emp => emp._id === leave.employeeId);
                      return (
                        <tr key={leave._id}>
                          <td>
                            <div className="fw-medium">{employee?.name || 'Unknown'}</div>
                            <div className="text-muted small">{employee?.department || ''}</div>
                          </td>
                          <td>
                            {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                          </td>
                          <td>{leave.reason}</td>
                          <td>{leave.leaveType}</td>
                          <td>
                            <span className={`badge ${
                              leave.status === 'approved' ? 'bg-success' :
                              leave.status === 'rejected' ? 'bg-danger' : 'bg-warning text-dark'
                            }`}>
                              {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                            </span>
                          </td>
                          <td>
                            {leave.status === 'pending' && (
                              <div className="d-flex gap-2">
                                <button onClick={() => handleApproveLeave(leave._id)} className="btn btn-sm btn-success">
                                  Approve
                                </button>
                                <button onClick={() => handleRejectLeave(leave._id)} className="btn btn-sm btn-danger">
                                  Reject
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-muted">No pending leave requests.</p>
            )}
          </div>
        </div>
        
        {/* Upcoming Holidays */}
        <div className="card">
          <div className="card-body">
            <h2 className="h5 card-title text-dark mb-4">Upcoming Holidays</h2>
            <div className="list-group list-group-flush">
              {holidays.slice(0, 5).map((holiday, index) => (
                <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <span className={`badge me-3 ${index % 2 === 0 ? 'bg-danger' : 'bg-primary'}`}></span>
                    <span className="text-muted">
                      {new Date(holiday.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <span className="fw-medium">{holiday.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendar Modal */}
      {showCalendar && renderCalendar()}
    </div>
  );
};

export default HrAttendance;