import React from 'react';
import Studentlist from '../components/company/studentlist';
import '../components/company/company.css';
import Navbar from '../components/Navbar/navbar';

function Studentslist() {

  return (
    <div className='newAdmin'>   
      <Navbar/>
      <div className="companies">
      <Studentlist/>
      </div>
    </div>
  )
}

export default Studentslist;
