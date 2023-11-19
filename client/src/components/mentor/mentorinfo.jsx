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
       <p>Mentor Information</p>
        <div className="assesment-form">
        <form>

            <div className="form-group">
              <label htmlFor="">Email<span>*</span></label>
              <input type="email" value={""} />
            </div>

            <p>Intern's Information from Evaluator</p>


           
            <RadioGroup horizontal >
                <RadioButton  value="apple" >
                  Apple
                </RadioButton>
                <RadioButton name="fruit" value="orange">
                  Orange
                </RadioButton>
                <RadioButton  name="fruit" value="melon">
                  Melon
                </RadioButton>
            </RadioGroup>
                
           

          

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
export default MentorInfo