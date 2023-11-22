import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Evaluation4 = () => {
    return (     
    <div >
       <p>This portion contains questions to evaluate an intern.</p>
        <div className="assesment-form">
        <form>


        <div className="form-group">
        <label htmlFor="">Overall comment about the intern<span>*</span></label>
         <textarea rows="10"   value={""}  style={{ marginTop: "30px" }} ></textarea>
            </div>
           
            <div className="form-group">
            <label htmlFor="">Do you want your evaluation to be available to the intern? <span>*</span></label>
               </div>

            <div className="form-group1">
            <FormControl>
              <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel style={{ marginRight:"200px"}}  value="Yes" control={<Radio />} label=" Yes" />
                    <FormControlLabel value="No" control={<Radio />} label=" No" />
                </RadioGroup>
                
            </FormControl>
            </div>
  
              <div className="form-group">
              <p>This section is NOT for assessment. Rather it is your professional suggestions for this intern
              for his/her improvement in future career</p>

              <label htmlFor="">Mention one thing you like about this intern<span>*</span></label>
              <input type="text" value={""} />
            </div>

            <div className="form-group">
              <label htmlFor="">Mention one thing you do not like about this intern<span>*</span></label>
              <input type="text" value={""} />
            </div>


            <div className="form-group">
             <label htmlFor="">How can this intern do better in his/her career?<span>*</span></label>
             <textarea rows="10"   value={""}  style={{ marginTop: "30px" }} ></textarea>
            </div>

        </form>
        
      </div>

  
</div>
  )
}
export default Evaluation4