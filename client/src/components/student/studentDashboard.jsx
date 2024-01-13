import React, { useState } from 'react';

function StudentDashboard() {
    const [showTimer, setshowTimer] = useState(true);

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
              <p>The deadline for CV upload is 19 January</p>
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
                    <a href="/Addreport">Submission  &rarr;</a>
                    
                </div>

                <div className='card'>
                    <img src="status.png" alt=""  />
                    <a href="/Status">See Status &rarr;</a>
                </div>


                <div className='card'>
                    <img src="ad-stu.png" alt=""  />
                    <a href="/">Add Student &rarr;</a>
                </div> 
            </div>


        </div>

</div>
  )
}

export default StudentDashboard