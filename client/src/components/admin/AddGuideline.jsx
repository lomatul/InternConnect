import React from 'react'
import "./Add.css";

const Addguideline = () => {
    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Welcome to Guidline Page</h1>
          <div className="addsections">
          {/* <div className="info">
          </div>  */}
  
            <div className="details">
       
          
              <label htmlFor="">Couse Code </label>
              <input type="text" placeholder="Give Course Code " />
              <label htmlFor="">Couse Name </label>
              <input type="text" placeholder="Give Course name" />
              <label htmlFor="">Short Description</label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>
  
              <label htmlFor=""></label>
              <input type="text" />
  
              <label htmlFor=""> Credit </label>
              <input type="number" />
             
              <button>Create</button>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
export default Addguideline