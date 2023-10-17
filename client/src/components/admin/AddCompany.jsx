import React from 'react'
import "./Add.css";

const Add = () => {
    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Add New Company</h1>
          <div className="addsections">
          {/* <div className="info">
          </div>  */}
  
            <div className="details">
            <label htmlFor="">Add Companies by Xcell Upload</label>
            <div className="xcellupload">
            
              <input type="file" />
              <button>Create</button>
  
            </div>
          
              <label htmlFor="">Company Title<span>*</span></label> 
              <input type="text" placeholder="Give Company name" />
  
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>
  
              <label htmlFor="">Location<span>*</span></label>
              <input type="text" />
  
              <label htmlFor="">Contact Number<span>*</span></label>
              <input type="number" min="0"/>

              <label htmlFor="">possible Interns</label>
              <input type="number" min="0" />
             
              <button>Create</button>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
export default Add