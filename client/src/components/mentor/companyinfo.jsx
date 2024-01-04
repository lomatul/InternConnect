import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const ComInfo = ({feedback, feedbackvalue}) => {
    return (     
    <div >
       <p>Please Fill up the Form Below</p>
        <div className="assesment-form">
        <form>

            <div className="form-group">
              <label htmlFor="">Company's Legal Name<span>*</span></label>
              <input type="text" value={feedbackvalue.comp_Name ||''}  onChange={(e) => {feedback("comp_Name", e.target.value)}}/>
            </div>
            
            <div className="form-group">
              <label htmlFor="">Company's Alternative Names<span>*</span></label>
              <p>Some companies are popular with alternative names. Often a short form or simply another
              name. Please list all of them below, each name in their own line</p>

              <input type="text" value={feedbackvalue.comp_AltName ||''}  onChange={(e) => {feedback("comp_AltName", e.target.value)}} />
            </div>
            <div className="form-group">
              <label htmlFor="">Company Street Address<span>*</span></label>
              <input type="text" value={feedbackvalue.comp_Address ||''}  onChange={(e) => {feedback("comp_Address", e.target.value)}}  />
            </div>
            <div className="form-group">
              <label htmlFor="">Company Website<span>*</span></label>
              <input type="text" value={feedbackvalue.comp_web ||''}  onChange={(e) => {feedback("comp_web", e.target.value)}}/>
            </div>
                
            <div className="form-group">
            <label htmlFor="">Primary business of the company<span>*</span></label>
              <input type="text" value={feedbackvalue.comp_business ||''}  onChange={(e) => {feedback("comp_business", e.target.value)}} />
            </div>

            <div className="form-group">
            
            <label htmlFor="">List up to three most frequently used programming language at your company<span>*</span></label>
            </div>
            <div className="form-group">         
            <label htmlFor="">List up to three most frequently used database systems at your company<span>*</span></label>

  
            </div>
            <div className="form-group">           
            <label htmlFor="">List any other tools and technologies that are frequently used at your company
              Containers, CI/CD tools, source control systems, issue trackers - anything you think are
              important<span>*</span></label> 
            </div>
           
        </form>
        
      </div>

  
</div>
  )
}
export default ComInfo