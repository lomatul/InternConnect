import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentDashboard() {
    const [showTimer, setshowTimer] = useState(true);
    const [cvDeadline, setCvDeadline] = useState(null);
    const [reportDeadline, setReportDeadline] = useState(null);

    const fetchData = async () => {
        try {
            const cvResponse = await axios.get('http://localhost:4000/InterConnect/admin/getCvdeadline');
            const reportResponse = await axios.get('http://localhost:4000/InterConnect/admin/getReportdeadline');
            
            const cvData = cvResponse.data.Deadline;
            const reportData = reportResponse.data.Deadline;

            const isCvDeadlineValid = cvData && new Date(cvData.time) > new Date();             // CV Deadline not null and has not passed the current date 
            const isReportDeadlineValid = reportData && new Date(reportData.time) > new Date();         // Report Deadline not null and has not passed the current date 

            if (isCvDeadlineValid) {
              setCvDeadline(cvData);
            }
        
            if (isReportDeadlineValid) {
              setReportDeadline(reportData);
            }
        
            if (!isCvDeadlineValid && !isReportDeadlineValid) {
              setshowTimer(false);
            }
            
        } catch (error) {
            console.error('Error fetching deadline:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    

    const handleOkayClick = () => {
        setshowTimer(false);
    };


  return (
       <div >
    <div className='admincontainer'>
        <div className='text'>
            <h3>Welcome to  </h3>
            <h1>Student Dashboard</h1>
        </div>
        {showTimer && (
          <div className='timer'>
            <img
              src="timer.gif"
              alt=""
              style={{ width: "180px", height: "180px", marginTop: "10px" }}
            />
            <div className='text'>
                {cvDeadline ? (
                  <p>
                    The deadline for CV upload is {new Date(cvDeadline.time).toLocaleString()} - Go to CV Upload Page
                  </p>
                ) : reportDeadline ? (
                  <p>
                    The deadline for Report Submission is {new Date(reportDeadline.time).toLocaleString()} - Go to Submission Page
                  </p>
                ) : (
                  <p>Deadlines not set</p>
                )}
                <button onClick={handleOkayClick}>Okay</button>
            </div>
          </div>
        )}
           
    </div>

    <div className='admincard'>
       
            <div className='cards'>
                
                <div className='card'>
                    <img src="stu-profile.png" alt=""  />
                    <a href="/Proflie">Profile &rarr;</a>
                </div>

                <div className='card'>
                <img src="cv-up.png" alt=""  />
                    
                    <a href="/AddCv">CV Upload &rarr;</a>
                </div>


                <div className='card'>
                    <img src="stu-prefer.png" alt=""  />
                    <a href="/Addprefer">Add Preferences &rarr;</a>
                </div> 
            </div>

            <div className='cards'>
                
                <div className='card'>
                <img src="stu-report.png" alt=""  />
                    <a href="/Addreport">Report Submission  &rarr;</a>
                    
                </div>

                <div className='card'>
                    <img src="status.png" alt=""  />
                    <a href="/Status">See Status &rarr;</a>
                </div>


                <div className='card'>
                    <img src="reportcard.png" alt=""  />
                    <a href="/">See MarkSheet&rarr;</a>
                </div> 
            </div>


        </div>

</div>
  )
}

export default StudentDashboard