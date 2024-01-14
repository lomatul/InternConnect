import React from 'react';
import Companypool from '../components/company/companypool';
import '../components/company/company.css';
import Navbar from "../components/Navbar/stunavbar"
import '../components/Navbar/navbar.css'




function SeeCompanies() {


  return (
    <div className='newAdmin'>   
      <Navbar/>
      <p style={{ marginLeft:"100px"}}>If you want to see the Previous Company History <a href='/History'> Click Here</a></p>
   
      <div className="companies">     
      <Companypool/>
      </div>
    </div>
  )
}

export default SeeCompanies;
