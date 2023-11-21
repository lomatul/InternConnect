import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Evaluation = () => {
    return (     
    <div >
       <p>This portion contains questions to evaluate an intern.</p>
        <div className="assesment-form">
        <form>

          
        <div className="form-group">
        <label htmlFor="">Interest towards learning<span>*</span></label>
          </div>          
            <div className="form-group1">
            <FormControl>         
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
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
              name="row-radio-buttons-group">
                    <FormControlLabel value="Exceptionally dependable" control={<Radio />} label="Exceptionally dependable" />
                    <FormControlLabel style={{ marginLeft:"100px"}}  value="Standard" control={<Radio />} label=" Standard" /> 
                    <FormControlLabel style={{ marginRight:"100px"}} value="Not very dependable" control={<Radio />} label=" Not very dependable" />
                    <FormControlLabel style={{ marginLeft:"50px"}} value="Totally undependable" control={<Radio />} label=" Totally undependable" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="I could not assess this" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group">
            <label htmlFor="">Proactiveness<span>*</span></label>
          </div> 
            <div className="form-group1">
            <FormControl>         
            <RadioGroup col  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="5" control={<Radio />} label=" Submit assigned tasks proactively, asks for tasks when idle" />
                    <FormControlLabel value="4" control={<Radio />} label=" Shows occasional lack of proactiveness" />
                    <FormControlLabel value="3" control={<Radio />} label=" Must be pushed to work" />
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
              name="row-radio-buttons-group">
                    <FormControlLabel value="5" control={<Radio />} label=" Regular" />
                    <FormControlLabel style={{ marginLeft:"150px"}} value="4 absent without leave" control={<Radio />} label=" Occasionally absent without leave" />
                    <FormControlLabel value="3" control={<Radio />} label=" Very Irregular" />
                    <FormControlLabel style={{ marginLeft:"110px"}} value="1" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>





      

        </form>
        
      </div>

  
</div>
  )
}
export default Evaluation