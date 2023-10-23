import "./contact.css"
import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Forgets() {
  const navigate = useNavigate();
  const [student_id, setStudent_id] = useState('')
  const [idError, setIdError] = useState('');

// Function to handle input change and allow only digits
const handleStudentIdChange = (e) => {
  const inputValue = e.target.value;
  const regex = /^\d*$/;            // Regular expression to match digits only
  if (regex.test(inputValue)) {
    setStudent_id(inputValue);
  }
}

  const handleSubmit = async(event) => {
    event.preventDefault()

    if(student_id.length === 9 && student_id.startsWith('2')) {
      setIdError('');

      try {
          await axios.post('http://localhost:4000/InterConnect/student/forgetPassword', {student_id}
          ).then((response)=>{
              console.log(response)

              navigate("/Updatepassword",{state: {Id:student_id, from:1}})
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
    }

    else {
      setIdError("Invalid Student ID. It should be 9 digits long and start with '2'");
    }

  }


  return (
    <main>
      <article>
    <section className="contact" id="contact">
      <div className="contactcontainer">
                <div className="contact-content">
                <h2 className="contact-title">Write your Student ID, Your OTP will go to your IUT Email </h2>
                <figure className="contact-banner">
                    <img src="contact.gif" alt="contact banner" />
                </figure>
                </div>

            <form action="" className="contact-form">
           

            <label htmlFor="">Student ID <span>*</span></label>
            <input type="Text" min={0} value={student_id} onChange={handleStudentIdChange}/>
            <span style={{ color: 'red' }}>{idError}</span> 
              

          <button onClick={handleSubmit} style={{ cursor: 'pointer' }}>
            Send OTP
          </button>
          <button style={{ cursor: 'pointer' }}>
            <a href="/" >Go Back</a>
          </button>

        </form>
        
      </div>
    </section>
    </article>
    </main>
  );
}

export default Forgets;
