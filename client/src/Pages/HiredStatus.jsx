import React from 'react';
import Navbar from '../components/Navbar/navbar';
import StatusHired from '../components/company/StudentHired';

function Hired() {

  return (
    <div className='newAdmin'>   
    <Navbar/>
    <div className="companies">     
    <StatusHired/>
      </div>
   
    </div>
  )
}

export default Hired;
