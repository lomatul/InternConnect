import React from 'react'
import "../test.css";
import 'react-toastify/dist/ReactToastify.css';


const Addgrade= () => {
    return (     
    <div >
    <div className='admincontainer'>
        <div className='studenttext'>
            <h3>Streamline Student Betterment </h3>
            <h1>Add Grade for Students</h1>
           
        </div>
        <div className='adminimage'>
            <img src="adminstudent.gif" alt="" />
        </div>
    </div>

    <div className="studentguideline">           
                <ul>
                    <li>The "Student Account Creation" feature is a fundamental component of our Internship Management System, allowing students to create their accounts seamlessly with the help of administrative data provided through an Excel sheet.</li>
                    <li>The admin uploads the Excel sheet containing the student data to the Internship Management System. The system automatically generates student accounts based on the data provided in the Excel sheet.</li>
                    <li>Each student is assigned a unique account associated with their email address. Once the accounts are created, the system generates a One-Time Password (OTP) for each student. The OTP is a temporary, secure code that will be used for account verification and activation. When they first get started, they will have to change their initial passwords.</li>
                    <li>The system sends automatic email notifications to each student's provided email address. Students receive the email with their OTP and follow the instructions to activate their accounts</li>
                    <p>For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
                </ul>
               
        

    <div className='xcellupload'>
       
         <button>Create</button>
        
        </div>

        </div>

</div>
  )
}
export default Addgrade