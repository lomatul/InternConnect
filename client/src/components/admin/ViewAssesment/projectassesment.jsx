import React from 'react'
import "../../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const ProjectInfo = ({feedbackvalue}) => {
    return (     
    <div >
        <p>Please Fill up the Form Below</p>
        <div className="assesment-form">
        <form>

        <div className="form-group">
        <label htmlFor="">Did the intern get a chance to work on a client project? <span>*</span></label>
            </div>
           

            <div className="form-group1">
            <FormControl>
           
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes"
                    name="radio-buttons-group"
                    value={feedbackvalue.project_access || ''} >
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="Not Sure" control={<Radio />} label=" Not Sure" />
                    <FormControlLabel value="Not Applicable" control={<Radio />} label="Not Applicable" />
                </RadioGroup>
            </FormControl>
            </div>

            <div className="form-group">
            <label htmlFor="">Did the intern's code got pushed into the production code base ? <span>*</span></label>
               </div>
           

            <div className="form-group1">
            <FormControl>
            <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes"
                    name="radio-buttons-group"
                    value={feedbackvalue.project_push || ''} >
                    <FormControlLabel value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                    <FormControlLabel value="Not Sure" control={<Radio />} label=" Not Sure" />
                    <FormControlLabel value="Not Applicable" control={<Radio />} label="Not Applicable" />
                </RadioGroup>
            </FormControl>
            </div>

            <div className="form-group">
        <label htmlFor="">Briefly mention the tasks assigned to the intern <span>*</span></label>
            <textarea rows="15"   value={feedbackvalue.project_task || ''}  
              style={{ marginTop: "30px" }} ></textarea>
            </div>


        </form>
        
      </div>


     
  
</div>
  )
}
export default ProjectInfo