import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Evaluation3 = ({value,change,feedback}) => {
    return (     
    <div >
       <p>This portion contains questions to evaluate an intern.</p>
        <div className="assesment-form">
        <form>


        <div className="form-group">
        <label htmlFor="">Punctuality<span>*</span></label>
        <p> Punctuality in terms of arriving the workplace, meetings, appointments and other events</p>
          </div>

     <div className="form-group1">
            <FormControl>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"value={value.Punctuality || ''} 
              onChange={(e) => {change('Punctuality', e.target.value); feedback("eval3_Punctuality", e.target.value)}}>
                    <FormControlLabel style={{ marginRight:"100px"}} value={5} control={<Radio />} label=" Almost always on time" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={4} control={<Radio />} label=" Occasionally late" />
                    <FormControlLabel style={{ marginRight:"155px"}}value={2} control={<Radio />} label=" Frequently late" />
                    <FormControlLabel value={1} control={<Radio />} label=" Very poor sense of punctuality" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={0} control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group">
            <label htmlFor="">Learning skill<span>*</span></label>
               </div>

               <div className="form-group1">
            <FormControl>
            
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={value.Learning_skill || ''} 
              onChange={(e) => {change('Learning_skill', e.target.value); feedback("eval2_Learning_skill", e.target.value)}}>
                    <FormControlLabel style={{ marginRight:"200px"}} value={5} control={<Radio />} label=" Standard" />
                    <FormControlLabel style={{ marginRight:"200px"}} value={3} control={<Radio />} label=" Below Standard" />
                    <FormControlLabel style={{ marginRight:"230px"}} value={2} control={<Radio />} label=" Poor" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={0} control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group">
            <label htmlFor="">Overall performance of the intern<span>*</span></label>
              </div>
            <div className="form-group1" value={value.Overallperformance || ''} 
              onChange={(e) => {change('Overallperformance', e.target.value); feedback("eval2_Overallperformance", e.target.value)}}>
            <FormControl>
              <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel style={{ marginRight:"180px"}} value={5} control={<Radio />} label=" Outstanding" />
                    <FormControlLabel style={{ marginRight:"100px"}} value={4} control={<Radio />} label="Very Good" />
                    <FormControlLabel value={3} control={<Radio />} label=" Standard" />
                    <FormControlLabel style={{ marginRight:"153px"}}  value={2} control={<Radio />} label=" Below Standard" />
                    <FormControlLabel value={1} control={<Radio />} label=" Poor" />
                  
                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group">
            <label htmlFor="">Will you recommend this intern to your or another company ? <span>*</span></label>
              </div>
            <div className="form-group1">
            <FormControl>
             <RadioGroup col  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group" value={value.recommendation || ''} 
              onChange={(e) => {change('recommendation', e.target.value); feedback("eval2_recommendation", e.target.value)}}>
                    <FormControlLabel value={5} control={<Radio />} label=" Yes" />
                    <FormControlLabel value={4} control={<Radio />} label=" No" />
                    <FormControlLabel value={3} control={<Radio />} label=" Myb" />
                    <FormControlLabel value={2} control={<Radio />} label=" Not Sure" />

                </RadioGroup>
                
            </FormControl>
            </div>


       


        </form>
        
      </div>

  
</div>
  )
}
export default Evaluation3