import React, { useState } from 'react';
import "../admin/Add.css";
import axios from "axios";

const SendNotification = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recipientType, setRecipientType] = useState("All");
  const [recipientEmail, setRecipientEmail] = useState("");


  const handleRecipientTypeChange = (event) => {
    setRecipientType(event.target.value);
  };

  const handleRecipientEmailChange = (event) => {
    setRecipientEmail(event.target.value);
  };




  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="add">
      <div className="addcontainer">
        <h1>You are here to Send Notification</h1>
        <form onSubmit={handleSubmit}>
          <div className="addsections">
            <div className="details">
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>
              <label htmlFor="">Subject<span>*</span></label>
              <input type="text"/>
                
              <label htmlFor="">Select Recipient<span>*</span></label>
              <select onChange={handleRecipientTypeChange} value={recipientType}>
                <option value="All">All Students</option>
                <option value="Individual">Individual</option>
              </select>
              {recipientType === "Individual" && (

                
                <div className="details">
                  <label htmlFor="">Recipient Email Address<span>*</span></label>
                  <input
                    type="email"
                    name="recipientEmail"
                    value={recipientEmail}
                    onChange={handleRecipientEmailChange}
                  />
                </div>
              )}
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendNotification;
