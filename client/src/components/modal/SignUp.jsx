import React, { useState, useRef } from "react";
import "./Modal.css"; // Replace with the actual path to your stylesheet
import { motion } from "framer-motion";

const SignUp  =  ( { page, setPage,x,setX  } )  => {
    return (

        <motion.div                            //updated the div tag
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
   


      <div className="card">
        <div className="step-title">Sign Up</div> 
        <input
          type="text"
          placeholder="Full Name"
          className="form-group"
        />
        <input
          type="text"
          className="form-group"
          placeholder="Username"
        />
        <input
          type="text"
          className="form-group"
          placeholder="Password"
        />
        
 <button onClick={() => {setPage(page + 1); setX(1000);}}>
  Next
</button>

      </div>

</motion.div>
    );
  };
  
  export default SignUp;