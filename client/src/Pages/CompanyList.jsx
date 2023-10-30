import React from 'react';
import { useState } from 'react'
import Table from '../components/company/companylist';
import '../components/company/company.css';
import Sidebar from '../components/admin/Sidebar';

function Companies() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="companies">
      <Table/>
      </div>
    </div>
  )
}

export default Companies;
