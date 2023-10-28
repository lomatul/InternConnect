import React from 'react'

function Dashboard() {

  return (
   
    <div >
    <div className='admincontainer'>
        <div className='text'>
            <h3>Welcome to  </h3>
            <h1>Admin Dashboard</h1>
        </div>
        {/* <div className='image'>
            <img src="adminadmin.gif" alt="" />
        </div> */}
    </div>

    <div className='admincard'>
       
            <div className='cards'>
                
                <div className='card'>
                    <img src="ad-stu.png" alt=""  />
                    <a href="/AddStudent">Add Student &rarr;</a>
                </div>

                <div className='card'>
                    <img src="ad-com.png" alt=""  />
                    <a href="/AddCompany">Add Companies &rarr;</a>
                </div>


                <div className='card'>
                    <img src="ad-guide.png" alt=""  />
                    <a href="/Addguideline">Add Guideline &rarr;</a>
                </div> 
            </div>

            <div className='cards'>
                
                <div className='card'>
                    <img src="ad-cv.png" alt=""  />
                    <a href="/">Send CV &rarr;</a>
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

export default Dashboard