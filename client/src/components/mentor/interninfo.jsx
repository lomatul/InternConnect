import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const InternInfo = () => {
    return (     
    <div >
       <p>Intern Information</p>
        <div className="assesment-form">
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
            <div className="form-group">
              <label htmlFor="">Intern's Joining Date  (e.g., January 7, 2023)<span>*</span></label>
              <input type="text" value={""} />
            </div>
                
            <div className="form-group">
            <label htmlFor="">Intern's Last Working Day (e.g., January 7, 2023)<span>*</span></label>
              <input type="text" value={""} />
            </div>

            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Your role with this intern<span>*</span></label>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Senior Manager"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Senior Manager" control={<Radio />} label="Senior Manager (e.g., CEO/CTO/MD/Team Lead)" />
                    <FormControlLabel value="Line Manager" control={<Radio />} label="Line Manager (e.g., Mentor/Supervisor)" />
                    <FormControlLabel value="Both" control={<Radio />} label="Both" />
                </RadioGroup>
            </FormControl>
            </div>

            <div className="form-group1">
            <FormControl>
            <label htmlFor="">Working Location of Intern<span>*</span></label>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="About 75% remote"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Fully on-site" control={<Radio />} label="Fully on-site" />
                    <FormControlLabel value="About 25% remote " control={<Radio />} label="About 25% remote" />
                    <FormControlLabel value="About 50% remote " control={<Radio />} label="About 50% remote" />
                    <FormControlLabel value="About 75% remote " control={<Radio />} label="About 75% remote" />
                    <FormControlLabel value="Fully remote " control={<Radio />} label="Fully remote" />
                    
                </RadioGroup>
            </FormControl>
            </div>   
        </form>
        
      </div>


  
</div>
  )
}
export default InternInfo