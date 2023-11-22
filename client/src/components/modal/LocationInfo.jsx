import React, { useState, useRef } from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const LocationInfo  =  ( { page, setPage,x ,setX } )  => {
    return (

        <motion.div                            //updated the div tag
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
   
      <div className="card">
        <div className="step-title">Location Info</div>
        <input
          type="text"
          placeholder="Address"
        />
        <input
          type="text"
          placeholder="Nationality"
        />
        <input
          type="text"
          placeholder="Zipcode"
        />
  
  <button onClick={() => {setPage(page + 1); setX(1000);}}>
  Next
</button>
      <br />
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
  export default LocationInfo;