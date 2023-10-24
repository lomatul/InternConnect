import React, { useState } from 'react';
import "../admin/Add.css";
import axios from "axios";

const SendNotification = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recipientType, setRecipientType] = useState("All");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [text, setText]= useState('')
  const [sub, setSub]= useState('')
  


  const handleRecipientTypeChange = (event) => {
    setRecipientType(event.target.value);
  };

  const handleRecipientEmailChange = (event) => {
    setRecipientEmail(event.target.value);
    console.log(recipientEmail)
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(text)
    console.log(sub)
    console.log(recipientType)
    if(recipientType==="All"){
    try {
      await axios.post('http://localhost:4000/InterConnect/admin/sendtoall', {text, sub})
      .then((response) => {
        console.log(response)// Initially, both arrays are the same
      })
      .catch((error)=>{
        if (error.response) {
          
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        })
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }else{
    try {
      console.log(recipientEmail)
      await axios.post('http://localhost:4000/InterConnect/admin/sendtoone', {text, sub, recipientEmail})
      .then((response) => {
        console.log(response)// Initially, both arrays are the same
      })
      .catch((error)=>{
        if (error.response) {
          
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        })
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
    }
    setText('')
    setSub('')
  };

  return (
    <div className="add">
      <div className="addcontainer">
        <h1>You are here to Send Notification</h1>
        <form onSubmit={handleSubmit}>
          <div className="addsections">
            <div className="details">
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"value={text} onChange={(e) => setText(e.target.value)}></textarea>
              <label htmlFor="">Subject<span>*</span></label>
              <input type="text" value={sub} onChange={(e) => setSub(e.target.value)}/>
                
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
