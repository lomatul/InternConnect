import React from 'react'
import "../admin/Add.css";

const Prefernces = () => {
    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Add Your Preferences</h1>
          <div className="addsections">
          <div className="details">
              <label htmlFor="">Name<span>*</span></label> 
              <input type="text" placeholder="Give name" />

              <label htmlFor="">ID<span>*</span></label>
              <input type="number" placeholder="Give Student ID" min={0}/>

              <label htmlFor="">Email <span>*</span></label>
              <input type="email"/>
  
              <label htmlFor="">Contact Number<span>*</span></label>
              <input type="number" min="0"/>


                <h2>Give Company Prefernces</h2>
              <label htmlFor="">Choice 1<span>*</span> </label>
                     <select >
                        <option value="running ">Running</option>
                        <option value="Closed">Closed </option>
                      </select> 
              <label htmlFor="">Choice 2 </label>
                      <select >
                        <option value="running ">Running</option>
                        <option value="Closed">Closed </option>
                      </select> 
              <label htmlFor="">Choice 3 </label>
                      <select >
                        <option value="running ">Running</option>
                        <option value="Closed">Closed </option>
                      </select>
                     
          </div> 
  
            <div className="details">

            <h2>Give Domain Prefernces</h2>
              <label htmlFor="">Choice 1 <span>*</span></label>
                      <select >
                        <option value="Software Engineer ">Software Engineer </option>
                        <option value="Frontend Developer">Frontend Developer </option>
                        <option value="Backend Developer">Backend Developer </option>
                        <option value="Project Manager">Project Manager </option>
                        <option value="Dev Ops">Dev Ops </option>
                     </select>
              <label htmlFor="">Choice 2 </label>
                      <select >
                        <option value="Software Engineer ">Software Engineer </option>
                        <option value="Frontend Developer">Frontend Developer </option>
                        <option value="Backend Developer">Backend Developer </option>
                        <option value="Project Manager">Project Manager </option>
                        <option value="Dev Ops">Dev Ops </option>
                      </select> 
              <label htmlFor="">Choice 3 </label>
                      <select >
                        <option value="Software Engineer ">Software Engineer </option>
                        <option value="Frontend Developer">Frontend Developer </option>
                        <option value="Backend Developer">Backend Developer </option>
                        <option value="Project Manager">Project Manager </option>
                        <option value="Dev Ops">Dev Ops </option>
                      </select>
          
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>
  
              <button>Send</button>
              

           
            </div>
          </div>
        </div>
      </div>
      
    );
  };
export default Prefernces