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
  
              <label htmlFor="">Address<span>*</span></label>
              <input type="text" />

              <label htmlFor="">Email <span>*</span></label>
              <input type="text"/>
  
              <label htmlFor="">Contact Number<span>*</span></label>
              <input type="number" min="0"/>

              <label htmlFor="">Max Interns</label>
              <input type="number" min="0"/>

              <label htmlFor="">Min Interns</label>
              <input type="number" min="0"/>

              <label htmlFor="">Interns Hired</label>
              <input type="number" min="0" />

              <label htmlFor="">Selected Interns</label>
              <input type="number" min="0" />
             
              <label htmlFor="cats">Domain</label>
                  <div class="multiselect">
                    <div class="select-box">
                      <div class="options-container">
                        <div class="option">
                          <input type="checkbox" id="UI/UX Designer" value="UI/UX Designer" />
                          <label for="UI/UX Designer">UI/UX Designer</label>
                        </div>
                        <div class="option">
                          <input type="checkbox" id="Web Development" value="Web Development" />
                          <label for="Web Development">Web Development</label>
                        </div>
                        <div class="option">
                          <input type="checkbox" id="Documentation" value="Documentation" />
                          <label for="Documentation">Documentation</label>
                        </div>
                        <div class="option">
                          <input type="checkbox" id="DevOps" value="DevOps" />
                          <label for="DevOps">DevOps</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <label htmlFor="">Status </label>
                      <select >
                        <option value="running ">Running</option>
                        <option value="Closed">Closed </option>
                      </select> */}

              <button>Create</button>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
export default Add