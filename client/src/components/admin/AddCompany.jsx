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
                          <input type="checkbox" id="design" value="design" />
                          <label for="design">UI/UX Designer</label>
                        </div>
                        <div class="option">
                          <input type="checkbox" id="web" value="web" />
                          <label for="web">Web Development</label>
                        </div>
                        <div class="option">
                          <input type="checkbox" id="animation" value="animation" />
                          <label for="animation">Documentation</label>
                        </div>
                        <div class="option">
                          <input type="checkbox" id="music" value="music" />
                          <label for="music">DevOps</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label htmlFor="">Status </label>
                      <select >
                        <option value="running ">Running</option>
                        <option value="Closed">Closed </option>
                      </select>

              <button>Create</button>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
export default Add