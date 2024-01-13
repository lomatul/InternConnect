import React from 'react';
import '../components/company/company.css';
import Gradesheet from '../components/company/grading';
import Navbar from '../components/Navbar/navbar';
import Addgrade from '../components/admin/grade';

function GradeStatus() {

  return (
    <div className='newAdmin'>   
    <Navbar/>
    <Addgrade/>
      <div className="companies">
      <Gradesheet/>
      </div>
    </div>
  )
}

export default GradeStatus;
