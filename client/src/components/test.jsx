import React from 'react'
import './test.css'

function Test() {

  return (
    <div >
    <div className="adminCompany">
          <form >

          <div className="form-columns">
          <div className="form-group">
              <label htmlFor="name">Company Title<span>*</span></label> 
              <input type="text" name="name" placeholder="Give Company name" />
          </div>

      
          <div className="form-group">
              <label htmlFor="address">Address<span>*</span></label>
              <input type="text" name="address"  />
            </div>

          <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" name="email"  />
           </div>

          <div className="form-group">
              <label htmlFor="minInterns">Min Interns</label>
              <input type="number" name="minInterns" min="0"  />
            </div>

          <div className="form-group">
              <label htmlFor="contactNumber">Contact Number<span>*</span></label>
              <input type="number" name="contactNumber"  />
             
              </div>


          <div className="form-group">
              <label htmlFor="maxInterns">Max Interns</label>
              <input type="number" name="maxInterns" min="0" />
              </div>

         

          <div className="form-group">
              <label htmlFor="internsHired">Interns Hired</label>
              <input type="number" name="internsHired" min="0"  />
              </div>

          <div className="form-group">
              <label htmlFor="requiredDomain">Domain</label>
              <div className="multiselect">
                <div className="select-box">
                  <div className="options-container">

                  {/* <label> <Checkbox id="UI/UX Designer" name="requiredDomain" value="UI/UX Designer" />  &nbsp; UI/UX Designer </label> 
                  <label> <Checkbox id="Software Development" name="requiredDomain" value="Software Development"  />  &nbsp; Software Development </label> 
                  <label> <Checkbox id="Documentation" name="requiredDomain" value="Documentation"  />  &nbsp; Documentation </label> 
                  <label> <Checkbox id="DevOps" name="requiredDomain" value="DevOps"  />  &nbsp; DevOps </label>  */}

                      </div>
                    </div>
                  </div>
              </div>
              </div>
        
          <button type="submit">Create</button>
            
            
          </form>
          </div>
            </div>

  )
}

export default Test