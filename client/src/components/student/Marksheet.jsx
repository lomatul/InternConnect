import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReportPdf from './ReportViewer'

function Studentmark() {
  const [response, setResponse]=useState(null)

  
  useEffect(()=>{
    try {
        console.log("came here at deadline")
        axios.get('http://localhost:4000/InterConnect/Student/ViewGrade', {
          withCredentials: true
        }).then((response)=>{
          console.log(response.data.returnStudentGrade.presentationMarks)
          setResponse(response.data.returnStudentGrade)
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
    }, []
  )
  return (
       <div >
    <div className='admincontainer'>
        <div className='text'>
            <h3>Welcome to InternConnet </h3>
            <h1>Your  Report Card</h1>
        </div>
           
    </div>

    <div className='admincard'>
      {response&&<ReportPdf Marks={response}/>}

    </div>

</div>
  )
}

export default Studentmark