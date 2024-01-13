import React, { useState } from 'react';
import '../test.css';
import 'react-toastify/dist/ReactToastify.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Adddeadline = () => {
  

  return (
    <div>
      <div className='admincontainer'>
        <div className='studenttext'>
          <h3>Streamline Student Betterment </h3>
          <h1>Add Deadlines for Students</h1>
        </div>


      </div>


        <div className="studentguideline">
          <ul>
          <li>You Need to set the deadlines for students. </li>
          </ul>
        </div>
      
        <div className="date">
            <label> Set Deadline for Cv Submission</label>
            <div className="datepicker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
            </LocalizationProvider>
            </div>      
            <div className="date-button">
            <button>Submit</button>
            </div>
        </div>
        


        <div className="date">
        <label> Set Deadline for Report Submission </label>
        <div className="datepicker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
            </LocalizationProvider>
        </div>  
            <div className="date-button">
            <button>Submit</button>
            </div>    
        </div>




    </div>
  );
};

export default Adddeadline;


// export default function Adddeadline() {
//   return (
    
   
//   );
// }

