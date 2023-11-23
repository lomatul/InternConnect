import React from 'react'
import "../test.css";
import "./mentor.css"
import { motion } from "framer-motion";




const ComInfo =  ( { page, setPage,x,setX  } )  => {
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
              <input type="text" value={""} />
            </div>
            
            <div className="form-group">
              <label htmlFor="">Company's Alternative Names<span>*</span></label>
              <p>Some companies are popular with alternative names. Often a short form or simply another
              name. Please list all of them below, each name in their own line</p>

              <input type="text" value={""} />
            </div>
            <div className="form-group">
              <label htmlFor="">Company Street Address<span>*</span></label>
              <input type="text" value={""} />
            </div>
            <div className="form-group">
              <label htmlFor="">Company Website<span>*</span></label>
              <input type="text" value={""} />
            </div>
                
            <div className="form-group">
            <label htmlFor="">Primary business of the company<span>*</span></label>
              <input type="text" value={""} />
            </div>

            <div className="form-group">
              <label htmlFor="">Company's Alternative Names<span>*</span></label>
              <p>Some companies are popular with alternative names. Often a short form or simply another name. Please list all of them below, each name in their own line</p>
              <textarea
                rows="3"  // Set the number of rows based on your preference
                value={""} // You can set the initial value if needed
              ></textarea>
            </div>
            <div className="form-group">           
            <label htmlFor="">List any other tools and technologies that are frequently used at your company
              Containers, CI/CD tools, source control systems, issue trackers - anything you think are
              important<span>*</span></label> <textarea
                rows="3"  // Set the number of rows based on your preference
                value={""} // You can set the initial value if needed
              ></textarea>
            </div>

        
           
        </form>
        
   
        
            <button
              onClick={() => {setPage(page - 1); setX(-1000);  }}>
              Previous </button>
    </div>

    </motion.div>
  );
};

export default ComInfo