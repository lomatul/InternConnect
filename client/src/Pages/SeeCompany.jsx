import React from 'react';
import { useState } from 'react'
import Companypool from '../components/company/companypool';
import '../components/company/company.css';
import Sidebar from '../components/admin/studentsidebar';

function SeeCompanies() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="companies">
      <Companypool/>
      </div>
    </div>
  )
}

export default SeeCompanies;
