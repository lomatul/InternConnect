import React from 'react'
import "../../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Evaluation2 = ({feedbackvalue}) => {
    return (     
    <div >
       <p>This portion contains questions to evaluate an intern.</p>
        <div className="assesment-form">
        <form>

    
        <div className="form-group">
        <label htmlFor="">Meeting deadline of Tasks<span>*</span></label>
          </div>
            <div className="form-group1">
            <FormControl>
           
            <RadioGroup col  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval2_deadline || ''} >
                    <FormControlLabel value={5} control={<Radio />} label=" Always complete tasks within deadline" />
                    <FormControlLabel value={3} control={<Radio />} label=" Often complete tasks within deadline" />
                    <FormControlLabel value={2} control={<Radio />} label=" Sometimes complete tasks within deadline" />
                    <FormControlLabel value={1} control={<Radio />} label=" Never complete tasks within deadline" />
                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group">
            <label htmlFor="">Confidence<span>*</span></label>
          </div>
            <div className="form-group1">
            <FormControl>
           
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval2_Confidence || ''} >
                    <FormControlLabel value={5} control={<Radio />} label=" Well understands his/her capability" />
                    <FormControlLabel style={{ marginLeft:"30px"}} value={2.5} control={<Radio />} label=" Underestimates his/her capability" />
                    <FormControlLabel value={2} control={<Radio />} label=" Overestimates his/her capability" />
                    <FormControlLabel style={{ marginLeft:"50px"}} value={0} control={<Radio />} label="I could not assess this" />
                </RadioGroup>                
            </FormControl>
            </div>



    


        <div className="form-group">
        <label htmlFor="">Team skills<span>*</span></label>
          </div>
 
            <div className="form-group1">
            <FormControl>
          
            <RadioGroup col  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval2_Teamskills|| ''} >
                    <FormControlLabel value={5} control={<Radio />} label=" A good team player" />
                    <FormControlLabel value={4} control={<Radio />} label=" Has occasional difficulties working in a team" />
                    <FormControlLabel value={2} control={<Radio />} label=" Has frequent difficulties working in a team" />
                    <FormControlLabel value={1} control={<Radio />} label=" A poor team player" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={0} control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


        
           
       

      <div className="form-group">
      <label htmlFor="">Quality of work<span>*</span></label>
                </div>
            <div className="form-group1">
            <FormControl>         
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={feedbackvalue.eval2_uality_of_work || ''} >
                    <FormControlLabel style={{ marginRight:"100px"}}  value={5} control={<Radio />} label=" Excellent" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={3} control={<Radio />} label=" Standard" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={2} control={<Radio />} label=" Below Standard" />
                    <FormControlLabel style={{ marginRight:"130px"}}  value={1} control={<Radio />} label=" Poor" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={0} control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>

         
        </form>
        
      </div>

  
</div>
  )
}
export default Evaluation2