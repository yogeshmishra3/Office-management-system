import React from 'react';
import { useAuth } from '../AuthProvider/AuthContext';
import { useNavigate } from 'react-router-dom';
import { navigationMenus } from '../../navigationMenus';
import "../../App.css";
// import Navbar from '../Navbar';
import MainContent from '../../MainContent';

const AdminPanel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // const name = "Admin";
  // if (!user) {
  //   return <div>Loading...</div>; // Handle case when user data is still loading
  // }
  if (!user) return <div>Loading...</div>; // Handle loading state


  // Get navigation menu based on user role
  const nav = navigationMenus[user.role] || [];
  const name = user.name || [];
  return (
    <div className='w-full h-screen'>
      <div className="h-full block md:flex w-full">
        {/* <div className="heading w-full flex align-center justify-center bg-red-300"><Header /></div> */}
        <div className="sidebar md:w-1/6 w-full bg-[#030027] px-5 overflow-y-scroll min-h-10 align-center">
          {/* <Navbar name={name} nav={nav} /> */}
        </div>
        <div className='min-h-custom main-content w-full md:w-5/6 bg-[#8D99AE] p-2 overflow'>
          {/* <Header /> */}
          <MainContent nav={nav} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
