import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Evaluation2 = () => {
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
              name="row-radio-buttons-group">
                    <FormControlLabel value="Always complete tasks within deadline" control={<Radio />} label=" Always complete tasks within deadline" />
                    <FormControlLabel value="Often complete tasks within deadline" control={<Radio />} label=" Often complete tasks within deadline" />
                    <FormControlLabel value="Sometimes complete tasks within deadline" control={<Radio />} label=" Sometimes complete tasks within deadline" />
                    <FormControlLabel value="Never complete tasks within deadline" control={<Radio />} label=" Never complete tasks within deadline" />
                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group">
            <label htmlFor="">Confidence<span>*</span></label>
          </div>
            <div className="form-group1">
            <FormControl>
           
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="Well understands his/her capability" control={<Radio />} label=" Well understands his/her capability" />
                    <FormControlLabel style={{ marginLeft:"30px"}} value="Underestimates his/her capability" control={<Radio />} label=" Underestimates his/her capability" />
                    <FormControlLabel value="Overestimates his/her capability" control={<Radio />} label=" Overestimates his/her capability" />
                    <FormControlLabel style={{ marginLeft:"50px"}} value="I could not assess this" control={<Radio />} label="I could not assess this" />
                </RadioGroup>                
            </FormControl>
            </div>



    


        <div className="form-group">
        <label htmlFor="">Team skills<span>*</span></label>
          </div>
 
            <div className="form-group1">
            <FormControl>
          
            <RadioGroup col  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value="A good team player" control={<Radio />} label=" A good team player" />
                    <FormControlLabel value="Has occasional difficulties working in a team" control={<Radio />} label=" Has occasional difficulties working in a team" />
                    <FormControlLabel value="Has frequent difficulties working in a team" control={<Radio />} label=" Has frequent difficulties working in a team" />
                    <FormControlLabel value="A poor team player" control={<Radio />} label=" A poor team player" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="I could not assess thisskills" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


        
           
       

      <div className="form-group">
      <label htmlFor="">Quality of work<span>*</span></label>
                </div>
            <div className="form-group1">
            <FormControl>         
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel style={{ marginRight:"100px"}}  value="Excellent" control={<Radio />} label=" Excellent" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="Standard" control={<Radio />} label=" Standard" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="Below Standard" control={<Radio />} label=" Below Standard" />
                    <FormControlLabel style={{ marginRight:"130px"}}  value="Poor" control={<Radio />} label=" Poor" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="I could not assess thiswork" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>

         
        </form>
        
      </div>

  
</div>
  )
}
export default Evaluation2