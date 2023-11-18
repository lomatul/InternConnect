import React from 'react'
// import "./Add.css";
import axios from "axios";
import {useState} from 'react';
import "../test.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Mentor = () => {
    return (     
    <div >
    <div className='admincontainer'>
        <div className='studenttext'>
            <h3>Streamline Student Enrollment </h3>
            <h1>Add Students with Excel Upload</h1>
            <div className='button'><a href="/about">Explore Now &#8599;</a></div>
        </div>
        <div className='adminimage'>
            <img src="mentor.gif" alt="" />
        </div>
    </div>

    <div className="studentguideline">           
                <ul>
                    <li>This is an assessment form of the interns of the Islamic University of Technology (IUT)
                    working at your company. The internship is part of the academic curriculum, therefore there
                    is some grading associated with it. Please fill out this form to send us your feedback about
                    an intern to help us in the grading process.
                    </li>
                    <li>We asked the interns to inform us of the name of their senior manager and line manager.
                    They mentioned your name as one or both. We requested them to consult with the company
                    before they mention the names. If you think that there is a mistake and you should not fill
                    this form, please contact us or talk to the intern
                    </li>
                    <li>A copy of the submitted form will be sent to your email address. Please forward that email to
                    Internship Committee to confirm that you are the person who filled out the assessment form.
                    We understand that this two-step process may be of a little hassle, but we could not find a
                    more convenient way to verify that the right person is submitting the form. It is easier for us
                    to verify if you use your organizational email address.
                    </li>
                    <li>Thank you very much for supporting our students in their internships.</li>
                    <p>If you need support regarding this form, please  -<a href="/contact">contact us</a>.</p>

                   <span style={{ color: 'red' }}>  We will ensure that the information you provide remains confidential and will not be
                    disclosed publicly. However, an aggregated result may be presented publicly. For example,
                    we will NOT publish that you have marked an intern's performance as outstanding, however,
                    we may publish that x% of the interns were marked as outstanding.</span> 
                </ul>
                <button>Start Assesment</button>
        </div>
</div>
  )
}
export default Mentor