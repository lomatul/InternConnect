import React from 'react';
import Table from '../components/company/companylist';
import '../components/company/company.css';
import Navbar from '../components/Navbar/navbar';

function Companies() {

  return (
    <div className='newAdmin'>   
    <Navbar/>
      <div className="companies">
      <Table/>
      </div>
    </div>
  )
}

export default Companies;
