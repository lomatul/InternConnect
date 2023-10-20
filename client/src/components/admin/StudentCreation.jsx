import React from 'react'
import "./Add.css";

const Addstudent = () => {
    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Add Student by Xcell Upload</h1>
          <div className="addsections">
          {/* <div className="info">
          </div>  */}
  
            <div className="details">
            
            <div className="xcellupload">
              <input type="file" />
              <button>Create</button>
            </div>
        
            </div>
            
          </div>
        </div>
      </div>
    );
  };
export default Addstudent