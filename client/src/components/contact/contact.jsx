import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
  
  return (
    <div >
      <div className="adminnotification">
      <div className='text'>
            <h3>Contact Us :</h3>
            <h1> Stay Connected!</h1>
          
            <div className='adimage'>
            <img src="ad-con.gif" alt="" />
        </div> </div>

        <div className="adminContact">
        <form >
         
        <div className="form-group">
              <label htmlFor="">ID <span>*</span></label>
              <input type="Number"  />
            </div>

            <div className="form-group">
              <label htmlFor="">Name <span>*</span></label>
              <input type="text"  />
            </div>
            <div className="form-group">
              <label htmlFor="">Subject<span>*</span></label>
              <input type="text"  />

            <div className="form-group">
              <label htmlFor="" style={{marginTop:"20px"}} >Short Description<span>*</span></label>
              <textarea name="" id="" cols="30" rows="10" ></textarea>
            </div>

            
        </div>
                
                

              <button type="submit">Send</button>
              <button style={{marginTop:"20px"}} > Go Back</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contacts;
