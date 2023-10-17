import React from 'react'
import "./Add.css";

const Adminprofile = () => {
    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Welcome to Guidline Page</h1>
          <div className="addsections">
          {/* <div className="info">
          </div>  */}
  
            <div className="details">
       
          
              <label htmlFor="">Couse Code <span>*</span></label>
              <input type="text" placeholder="Give Course Code " />
              <label htmlFor="">Couse Name <span>*</span></label>
              <input type="text" placeholder="Give Course name" />
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>

              <label htmlFor=""> Credit </label>
              <input type="number" min="0" />

              <label htmlFor=""> Comittee Members </label>
              <textarea name="" id="" placeholder="Add comittee members" cols="30" rows="10"></textarea>

             
              <button>Update</button>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
export default Adminprofile