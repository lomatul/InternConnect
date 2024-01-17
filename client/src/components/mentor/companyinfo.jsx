import React from 'react'
import "../test.css";
import "./mentor.css"
import { motion } from "framer-motion";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




const ComInfo =  ( {feedback, feedbackvalue, page, setPage,x,setX, submit  } )  => {
  return (

      <motion.div                            //updated the div tag
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
        <div className="mentorheader">
          <h1>Company Information</h1>
          <p>Please Fill up the Form Below</p>
        </div>


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
              <label htmlFor="">Company's Alternative Names<span>*</span></label>
              <p>Some companies are popular with alternative names. Often a short form or simply another name. Please list all of them below, each name in their own line</p>
              <textarea
                rows="3"  // Set the number of rows based on your preference
                value={feedbackvalue.comp_alt_name ||''}  onChange={(e) => {feedback("comp_alt_name", e.target.value)}} // You can set the initial value if needed
              ></textarea>
            </div>
            <div className="form-group">           
            <label htmlFor="">List any other tools and technologies that are frequently used at your company
              Containers, CI/CD tools, source control systems, issue trackers - anything you think are
              important<span>*</span></label> <textarea
                rows="3"  // Set the number of rows based on your preference
                value={feedbackvalue.comp_list_tool ||''}  onChange={(e) => {feedback("comp_list_tool", e.target.value)}} // You can set the initial value if needed
              ></textarea>
            </div>

        
        </form>
        
   
        
            <button
              onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});  setPage(page - 1); setX(-1000);  }}>
             <img src="prev.png" alt="Image" style={{width: '30px', height: '30px' , marginBottom:"-10px" , marginRight:"10px" }}  /> Previous </button>

              <button onClick={submit}>
              Submit <img src="submit.png" alt="Image" style={{width: '30px', height: '30px' , marginBottom:"-10px" , marginLeft:"10px" }}  /> </button>
    </div>

    </motion.div>
  );
};

export default ComInfo