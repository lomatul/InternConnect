import React from 'react';
import { useState } from 'react'
import Studentlist from '../components/company/studentlist';
import '../components/company/company.css';
import Sidebar from '../components/admin/Sidebar';

function Studentslist() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="companies">
      <Studentlist/>
      </div>
    </div>
  )
}

export default Studentslist;
