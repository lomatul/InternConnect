import React from 'react';
import '../components/company/company.css';
import Navbar from '../components/Navbar/navbar';
import StudentProfile from '../components/student/profile';
function Sprofile() {

  return (
    <div className='newAdmin'>   
      <Navbar/>
      <StudentProfile/>
    </div>
  )
}

export default Sprofile;
