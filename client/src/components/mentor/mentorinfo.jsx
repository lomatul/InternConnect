import React from 'react'
import "../test.css";
import "./mentor.css"
import { motion } from "framer-motion";


const MentorInfo =  ( {feedback, feedbackvalue, page, setPage,x,setX  } )  => {
  return (

      <motion.div                            //updated the div tag
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="mentorheader">
          <h1>Your Information</h1>
          <p>You can skip this section if you have already submitted this form for another intern</p>      
        </div>

        
        <div className="assesment-form">
        <form>

            <div className="form-group">
              <label htmlFor="">Your Name</label>
              <input type="text" value={feedbackvalue.mentorName || ''}  onChange={(e) => {feedback("mentorName", e.target.value)}} />
            </div>

            <div className="form-group">
              <label htmlFor="">Your Designation</label>
              <input type="text" value={feedbackvalue.mentordesig || ''}  onChange={(e) => {feedback("mentordesig", e.target.value)}}  />
            </div>
           
          
          <p>Feedback about the Internship Program</p>

          <div className="form-group">
              <label htmlFor=""> How can we improve the internship program?</label>
              <textarea rows="10"   value={feedbackvalue.mentorimprove || ''}  onChange={(e) => {feedback("mentorimprove", e.target.value)}} 
                style={{ marginTop: "30px" }} ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="">Other Comments about the internship program</label>
              <textarea rows="10"   value={feedbackvalue.mentorComment || ''}  onChange={(e) => {feedback("mentorComment", e.target.value)}} 
                style={{ marginTop: "30px" }} ></textarea>
            </div>

           
        </form>
        
        <button onClick={() => {setPage(page + 1); setX(1000);}}>
              Next
            </button>
          <br/>
            <button
              onClick={() => {setPage(page - 1); setX(-1000);  }}>
              Previous </button>
    </div>

    </motion.div>
  );
};

export default MentorInfo