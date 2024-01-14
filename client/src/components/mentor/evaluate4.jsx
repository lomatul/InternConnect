import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { motion } from "framer-motion";



const Evaluation4 =  ( { feedback, feedbackvalue,page, setPage,x,setX  } )  => {
  return (

      <motion.div                            //updated the div tag
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
 
        <div className="mentorheader">
                        <h1>Intern's Assesment</h1>
                        <p>This portion contains questions to evaluate an intern.</p>
        </div>
        <div className="assesment-form">
        <form>


        <div className="form-group">
        <label htmlFor="">Overall comment about the intern<span>*</span></label>
         <textarea rows="10"   style={{ marginTop: "30px" }} 
         value={feedbackvalue.eval4_comment}  onChange={(e) => {feedback("eval4_comment", e.target.value)}}></textarea>
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
              <input type="text" value={feedbackvalue.eval4_liking}  onChange={(e) => {feedback("eval4_liking", e.target.value)}} />
            </div>

            <div className="form-group">
              <label htmlFor="">Mention one thing you do not like about this intern<span>*</span></label>
              <input type="text" value={feedbackvalue.eval4_notliking}  onChange={(e) => {feedback("eval4_notliking", e.target.value)}} />
            </div>


            <div className="form-group">
             <label htmlFor="">How can this intern do better in his/her career?<span>*</span></label>
             <textarea rows="10"    style={{ marginTop: "30px" }} 
             value={feedbackvalue.eval4_suggestion}  onChange={(e) => {feedback("eval4_suggestion", e.target.value)}}></textarea>
            </div>

        </form>
        <button onClick={() => {setPage(page + 1); setX(1000);}}>
              Next
            </button>
          <br/>
            <button
              onClick={() => {setPage(page - 1); setX(-1000);  }}>
              Previous </button>
    </div>

    </motion.div>
  );
};

export default Evaluation4