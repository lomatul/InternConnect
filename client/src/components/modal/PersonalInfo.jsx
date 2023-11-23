import React, { useState, useRef } from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const PersonalInfo =  ( { page, setPage,x, setX  } )  => {
    return (

        <motion.div                            //updated the div tag
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
   


      <div className="card">
        <div className="step-title">Personal Info</div>
        <input
          type="text"
          placeholder="Nickname"
        />
        <input
          type="text"
          placeholder="Email"
        />
<button onClick={() => {setPage(page + 1); setX(1000);}}>
  Next
</button>
      <br/>
      <button
  onClick={() => {
    setPage(page - 1);
    setX(-1000); //here, we're manipulating the xstate
  }}
>
  Previous
</button>
    </div>

    </motion.div>
  );
};

export default PersonalInfo