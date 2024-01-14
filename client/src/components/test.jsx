import React, { useState } from 'react';
import "./test.css";
import "./mentor/mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


  function Test(){

    const [formIndex, setFormIndex] = useState(0);

    const handleNext = () => {
      setFormIndex((prevIndex) => prevIndex + 1);
    };
  
    const handlePrev = () => {
      setFormIndex((prevIndex) => prevIndex - 1);
    };

    return (     
      <div >
        
        <div className={`assesment-form${formIndex}`}>
          <form>
              <div className="form-group">
                <label htmlFor="">Email<span>*</span></label>
                <input type="email" value={""} />
              </div>
              <p>Intern's Information from Evaluator</p>
              <div className="form-group">
                <label htmlFor="">Intern's Name<span>*</span></label>
                <input type="text" value={""} />
              </div>
              <div className="form-group">
                <label htmlFor="">Intern's Designation (e.g., Front-end Software Developer)<span>*</span></label>
                <input type="text" value={""} />
              </div>
              <button onClick={handleNext}>Next</button>      
          </form>
        </div>




        <div className={`assesment-form1${formIndex === 1 ? '1' : ''}`}>
          <form>
              <div className="form-group">
                <label htmlFor="">Email<span>*</span></label>
                <input type="email" value={""} />
              </div>
              <p>Intern's Information from Evaluator</p>
              <div className="form-group">
                <label htmlFor="">Intern's Name<span>*</span></label>
                <input type="text" value={""} />
              </div>
              <div className="form-group">
                <label htmlFor="">Intern's Designation (e.g., Front-end Software Developer)<span>*</span></label>
                <input type="text" value={""} />
              </div>
              <button onClick={handlePrev}>Prev</button>
              <button type="submit">Send</button> 
                
          </form>
        </div>
  
  




        <button type="submit">Send</button>
    
  </div>
    )
  }
  export default Test