import React from 'react'

function StudentDashboard() {

  return (
   
    <div >
    <div className='admincontainer'>
        <div className='text'>
            <h3>Welcome to  </h3>
            <h1>Student Dashboard</h1>
        </div>

    </div>

    <div className='admincard'>
       
            <div className='cards'>
                
                <div className='card'>
                    <img src="stu-profile.png" alt=""  />
                    <a href="/Proflie">Profile &rarr;</a>
                </div>

                <div className='card'>
                    <img src="ad-com.png" alt=""  />
                    <a href="/AddCompany">Company list  &rarr;</a>
                </div>


                <div className='card'>
                    <img src="stu-prefer.png" alt=""  />
                    <a href="/Addguideline">Add Preferences &rarr;</a>
                </div> 
            </div>

            <div className='cards'>
                
                <div className='card'>
                    <img src="cv-up.png" alt=""  />
                    <a href="/">CV Upload &rarr;</a>
                </div>

                <div className='card'>
                    <img src="ad-noti.png" alt=""  />
                    <a href="/SendNotifi">Send Notification &rarr;</a>
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