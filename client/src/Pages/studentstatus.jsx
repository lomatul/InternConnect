import React from 'react';
import '../components/company/company.css';
import Status from '../components/company/status';
import Navbar from '../components/Navbar/stunavbar';
function StudentStatus() {

  return (
    <div className='newAdmin'> 
     <Navbar/>  
      <div className="companies">
      <Status/>
      </div>
    </div>
  )
}

export default StudentStatus;
