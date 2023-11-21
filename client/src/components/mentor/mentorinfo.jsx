import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


const MentorInfo = () => {
    return (     
    <div >
       <p>You can skip this section if you have already submitted this form for another intern</p>
        <div className="assesment-form">
        <form>

            <div className="form-group">
              <label htmlFor="">Your Name<span>*</span></label>
              <input type="text" value={""} />
            </div>

            <div className="form-group">
              <label htmlFor="">Your Designation<span>*</span></label>
              <input type="text" value={""} />
            </div>
           
          
          <p>Feedback about the Internship Program</p>

          <div className="form-group">
              <label htmlFor=""> How can we improve the internship program?<span>*</span></label>
              <textarea rows="10"   value={""}  style={{ marginTop: "30px" }} ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="">Other Comments about the internship program<span>*</span></label>
              <textarea rows="10"   value={""}  style={{ marginTop: "30px" }} ></textarea>
            </div>

           
        </form>
        
      </div>


  
</div>
  )
}
export default MentorInfo