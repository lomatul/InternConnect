import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Assesment = () => {
    return (     
    <div >
        <button>Start Assesment</button>
        <div className="assesment-form">
        <form >

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
            <div className="form-group">
              <label htmlFor="">Intern's Joining Date  (e.g., January 7, 2019)<span>*</span></label>
              <input type="text" value={""} />
            </div>
                
            <div className="form-group">
            <label htmlFor="">Intern's Last Working Day (e.g., January 7, 2019)<span>*</span></label>
              <input type="text" value={""} />
            </div>
            <div className="form-group">
            <label htmlFor="">Intern's Last Working Day (e.g., January 7, 2019)<span>*</span></label>
            <input type="text" value={""} />
            </div>
            <div className="form-group1">

            <FormControl>
            <label htmlFor="">Intern's Last Working Day (e.g., January 7, 2019)<span>*</span></label>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            </div>


            <div className="form-group">
              <label htmlFor="">Working Location of Intern<span>*</span></label>
              <input type="text" value={""} />
            </div>
            

            <button>Next</button>    
 

 
              <button type="submit">Send</button>
        
        </form>
      </div>
  
</div>
  )
}
export default Assesment