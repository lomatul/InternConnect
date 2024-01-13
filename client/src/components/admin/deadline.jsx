import React, { useState } from 'react';
import '../test.css';
import 'react-toastify/dist/ReactToastify.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';



const Adddeadline = () => {
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedReportDate, setSelectedReportDate] = useState(null);

  
  const handleSubmitcv = async(e) => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:4000/InterConnect/admin/postCvdeadline', {time:selectedDate}
          ).then((response)=>{
              console.log(response);
              toast.success("New deadline is posted")
          }).catch((error)=>{
              if (error.response) {
                  console.log(error.response);
                  console.log("server responded");
                } else if (error.request) {
                  console.log("network error");
                } else {
                  console.log(error);
                }
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
    setSelectedDate(null)
  }
  const handleSubmitreport = async(e) => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:4000/InterConnect/admin/postReportdeadline', {time:selectedReportDate}
          ).then((response)=>{
              console.log(response);
              toast.success("New deadline is posted")
          }).catch((error)=>{
              if (error.response) {
                  console.log(error.response);
                  console.log("server responded");
                } else if (error.request) {
                  console.log("network error");
                } else {
                  console.log(error);
                }
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
    selectedReportDate(null)
  }
 
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
            <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker onChange={(e)=>{setSelectedDate(e.toISOString())}}/>
            </LocalizationProvider>
            </div>      
            <div className="date-button">
            <button onClick={handleSubmitcv}>Submit</button>
            </div>
        </div>
        


        <div className="date">
        <label> Set Deadline for Report Submission </label>
        <div className="datepicker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(e)=>{setSelectedReportDate(e.toISOString())}}/>
            </LocalizationProvider>
        </div>  
            <div className="date-button">
            <button onClick={handleSubmitreport}>Submit</button>
            </div>    
        </div>




    </div>
  );
};

export default Adddeadline;



