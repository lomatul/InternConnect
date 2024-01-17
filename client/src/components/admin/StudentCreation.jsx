import React from 'react'
// import "./Add.css";
import axios from "axios";
import {useState} from 'react';
import "../test.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../services/helper';
import { useNavigate } from 'react-router-dom';


const Addstudent = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    console.log("file", selectedFile)
}

const handleSubmit = async(event) => {
  event.preventDefault()

  const formData = new FormData();
  formData.append("file", selectedFile);
  console.log(formData)
  try {
      await axios.post(`${BASE_URL}/InterConnect/admin/uploadfile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      }).then((response)=>{
          console.log(response)
          toast.success('Students have been created successfully', { position: "top-right" });
          // setTimeout(() => {
          //   window.location.reload();
          // }, 2000);
          navigate('/SeeStudents')
      }).catch((error)=>{
          if (error.response) {
            toast.error('Error while creating students', { position: "top-right" });
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
      });

    } catch (error) {
      console.error('An error occurred:', error.message);
    }
    setSelectedFile(null)
}
    return (     
      <div >
      <div className='admincontainer'>
          <div className='studenttext'>
              <h3>Streamline Student Enrollment </h3>
              <h1>Add Students with Excel Upload</h1>
              <div className='button'><a href="/about">Explore Now &#8599;</a></div>
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
         
      <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileSelect}/>
           <button onClick={handleSubmit}>Create</button>
          
          </div>

          </div>
  
  </div>
    )
  }
export default Addstudent