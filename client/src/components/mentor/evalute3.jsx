import React from 'react'
import "../test.css";
import "./mentor.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { motion } from "framer-motion";



const Evaluation3 =  ( { page, setPage,x,setX  } )  => {
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
        <label htmlFor="">Punctuality<span>*</span></label>
        <p> Punctuality in terms of arriving the workplace, meetings, appointments and other events</p>
          </div>

     <div className="form-group1">
            <FormControl>
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel style={{ marginRight:"100px"}} value="Almost always on time" control={<Radio />} label=" Almost always on time" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="Occasionally late" control={<Radio />} label=" Occasionally late" />
                    <FormControlLabel style={{ marginRight:"155px"}}value="Frequently late" control={<Radio />} label=" Frequently late" />
                    <FormControlLabel value="Very poor sense of punctuality" control={<Radio />} label=" Very poor sense of punctuality" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="I could not assess thisPunctuality" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>


            <div className="form-group">
            <label htmlFor="">Learning skill<span>*</span></label>
               </div>

               <div className="form-group1">
            <FormControl>
            
            <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel style={{ marginRight:"200px"}}value="Standard" control={<Radio />} label=" Standard" />
                    <FormControlLabel style={{ marginRight:"200px"}}value="Below StandardLearning" control={<Radio />} label=" Below Standard" />
                    <FormControlLabel style={{ marginRight:"230px"}}value="PoorLearning" control={<Radio />} label=" Poor" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="I could not assess thisLearning" control={<Radio />} label="I could not assess this" />

                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group">
            <label htmlFor="">Overall performance of the intern<span>*</span></label>
              </div>
            <div className="form-group1">
            <FormControl>
              <RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel style={{ marginRight:"180px"}} value="Outstanding" control={<Radio />} label=" Outstanding" />
                    <FormControlLabel style={{ marginRight:"100px"}} value="Very good" control={<Radio />} label="Very Good" />
                    <FormControlLabel value="Standard" control={<Radio />} label=" Standard" />
                    <FormControlLabel style={{ marginRight:"153px"}}  value="Below Standardperformance" control={<Radio />} label=" Below Standard" />
                    <FormControlLabel value="Poor" control={<Radio />} label=" Poor" />
                  
                </RadioGroup>
                
            </FormControl>
            </div>



            <div className="form-group">
            <label htmlFor="">Will you recommend this intern to your or another company ? <span>*</span></label>
              </div>
            <div className="form-group1">
            <FormControl>
             <RadioGroup col  aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
                    <FormControlLabel value={5} control={<Radio />} label=" Yes" />
                    <FormControlLabel value={4} control={<Radio />} label=" No" />
                    <FormControlLabel value={3} control={<Radio />} label=" Myb" />
                    <FormControlLabel value={2} control={<Radio />} label=" Not Sure" />

                </RadioGroup>
                
            </FormControl>
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

export default Evaluation3