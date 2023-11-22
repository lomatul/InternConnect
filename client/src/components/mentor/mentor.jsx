import React from 'react'
// import "./Add.css";
import axios from "axios";
import {useState} from 'react';
import "../test.css";
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';


const Mentor = () => {

    const [mentors, setMentors] = useState([]);
    const [mentorName, setMentorName] = useState('');
    const [mentorEmail, setMentorEmail] = useState('');
    const [mentorPosition, setMentorPosition] = useState('');
  
    const handleAddMentor = () => {
      const newMentor = {
        name: mentorName,
        email: mentorEmail,
        position: mentorPosition,
      };
  
      // Add the new mentor to the array
      setMentors((prevMentors) => [...prevMentors, newMentor]);
  
      // Clear the form fields
      setMentorName('');
      setMentorEmail('');
      setMentorPosition('');
    };
  
    const handleRemoveMentor = (index) => {
      // Remove the mentor at the specified index from the array
      setMentors((prevMentors) => prevMentors.filter((_, i) => i !== index));
    };

    return (     
    <div >
    <div className='admincontainer'>
        <div className='studenttext'>
          
            <h1>Welcome to  InternConnect</h1>
            <div className='button'><a href="/about">Explore Now &#8599;</a></div>
        </div>
        <div className='adminimage'>
            <img src="mentor.gif" alt="" />
        </div>
    </div>

    <div className="studentguideline">           
                <ul>
                    <li>There will be  an assessment form of the interns of the Islamic University of Technology (IUT)
                    working at your company. The internship is part of the academic curriculum, therefore there
                    is some grading associated with it. Please fill out this form and help us in the grading process.
                    </li>
                    <li> If you think that there is a mistake and you should not fill
                    this form, please -<a href="/contact">contact us</a>
                    </li>
                    <li>A copy of the submitted form will be sent to your email address. Please forward that email to
                    Internship Committee .
                    We understand that this two-step process may be of a little hassle, but we could not find a
                    more convenient way to verify that the right person is submitting the form. It is easier for us
                    to verify if you use your organizational email address.
                    </li>
                    <li>Thank you very much for supporting our students in their internships.</li>
                    <p>If you need support regarding this form, please  -<a href="/contact">contact us</a>.</p>

                   {/* <span style={{ color: 'red' }}>  We will ensure that the information you provide remains confidential and will not be
                    disclosed publicly. However, an aggregated result may be presented publicly. For example,
                    we will NOT publish that you have marked an intern's performance as outstanding, however,
                    we may publish that x% of the interns were marked as outstanding.</span>  */}
                </ul>

                <div className="sending-cvs">
        <div className="form-group">
          <label>Name of the Student <span>*</span> </label>
          <Select className='adselect'  />
        </div>
        <div className="form-group">
          <label htmlFor="">Write your OTP<span>*</span></label>
          <input type="text" />
        </div>
        <div className="mentorbutton">
        <Button  onClick={handleAddMentor}>Add Mentor</Button>
        </div>
       
      </div>

      {mentors.map((mentor, index) => (
        <div key={index} className="addmentor">
          <div className="sending-cvs">
            <div className="form-group">
              <label>Name of the Mentor <span>*</span> </label>
              <input type="text" value={mentor.name}  />
            </div>

            <div className="form-group">
              <label>Email of the Mentor <span>*</span></label>
              <input type="text" value={mentor.email}  />
            </div>

            <div className="form-group">
              <label>Designation of the Mentor <span>*</span></label>
              <input type="text" value={mentor.position}  />
            </div>

            <div className="mentorbutton">
            <Button onClick={() => handleRemoveMentor(index)}>Remove Mentor</Button>
            </div>

          
          </div>
        </div>
      ))}

      
            <Button>Submit</Button>
        
    </div>
    </div>
  );
};

export default Mentor;