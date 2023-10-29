import React from 'react'
import './test.css'

function Test() {

  return (
    <div >
    <div className='admincontainer'>
        <div className='text'>
            <h3>Sending Notifications:</h3>
            <h1> Stay Connected!</h1>
          
            <div className='image'>
            <img src="ad-con.gif" alt="" />
        </div> </div>
      
    
    <div className="adminContact">
    <form >         
      
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>
              <label htmlFor="">Subject<span>*</span></label>
              <input type="text" />
                
              <label htmlFor="">Select Recipient<span>*</span></label>
              <select>
                <option value="All">All Students</option>
                <option value="Individual">Individual</option>
              </select>

              <button type="submit">Send</button>
           
    
        </form>
        </div>
        </div>
</div>
  )
}

export default Test