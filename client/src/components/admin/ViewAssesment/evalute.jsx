import React, {useEffect} from 'react'
import "../../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import html2pdf from 'html2pdf.js';


const Evaluation =({ feedbackvalue}) => {
 
  return (     
    <div id='assesment-form'>
       <p>This portion contains questions to evaluate an intern.</p>
        <div className="assesment-form"  >
        <form>

          
        <div className="form-group">
        <label htmlFor="">Interest towards learning<span>*</span></label>
          </div>          
            <div className="form-group1">
            <FormControl>         
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval_interest || ''} >
                    <FormControlLabel value={5} control={<Radio />} label=" Very enthusiastic" />
                    <FormControlLabel style={{ marginLeft:"150px"}}  value={4} control={<Radio />} label=" Interested" /> 
                    <FormControlLabel style={{ marginRight:"100px"}} value={3} control={<Radio />} label=" Shows occasional disinterest" />
                    <FormControlLabel style={{ marginRight:"110px"}} value={2} control={<Radio />} label=" Not interested at all" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={1} control={<Radio />} label="I could not assess this" />
                </RadioGroup>
            </FormControl>
            </div>




            <div className="form-group">
        <label htmlFor="">Dependability<span>*</span></label>
        <p>Can you assign this intern a task and be comfortable that she/he will try their best to
            complete it? And possibly proactively ask for help if they are stuck</p>
          </div>            
            <div className="form-group1">
            <FormControl>
           
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval_dependancy || ''} >
                    <FormControlLabel value={4} control={<Radio />} label="Exceptionally dependable" />
                    <FormControlLabel style={{ marginLeft:"100px"}}  value={3} control={<Radio />} label=" Standard" /> 
                    <FormControlLabel style={{ marginRight:"100px"}} value={2} control={<Radio />} label=" Not very dependable" />
                    <FormControlLabel style={{ marginLeft:"50px"}} value={1} control={<Radio />} label=" Totally undependable" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={0} control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group">
            <label htmlFor="">Proactiveness<span>*</span></label>
          </div> 
            <div className="form-group1">
            <FormControl>         
            <RadioGroup col  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval_Proactiveness || ''} >
                    <FormControlLabel value={5} control={<Radio />} label=" Submit assigned tasks proactively, asks for tasks when idle" />
                    <FormControlLabel value={4} control={<Radio />} label=" Shows occasional lack of proactiveness" />
                    <FormControlLabel value={3} control={<Radio />} label=" Must be pushed to work" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="1" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


  <div className="form-group">
  <label htmlFor="">Attendance<span>*</span></label>
          </div> 
            <div className="form-group1">
            <FormControl>
           
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval_Attendance|| ''} >
                    <FormControlLabel value={5} control={<Radio />} label=" Regular" />
                    <FormControlLabel style={{ marginLeft:"150px"}} value={2} control={<Radio />} label=" Occasionally absent without leave" />
                    <FormControlLabel value={1} control={<Radio />} label=" Very Irregular" />
                    <FormControlLabel style={{ marginLeft:"110px"}} value={0} control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>

        </form>
        
      </div>

  
</div>
  )
}
export default Evaluation