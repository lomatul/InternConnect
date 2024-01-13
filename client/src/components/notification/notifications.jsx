import React, { useState } from 'react';
import axios from "axios";
import  { useEffect } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SendNotification = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recipientType, setRecipientType] = useState("All");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [text, setText]= useState('')
  const [sub, setSub]= useState('')
  const [type, setType]=useState('')
  const options=[
    {value:"All",label:"All"},
    {value:"Individual", label:"Individual"},
  ]

  const receiver=[
    {value:"Company",label:"Company"},
    {value:"Student", label:"Student"},
  ]



  const handleRecipientTypeChange = (selectedOption) => {
    setRecipientType(selectedOption.value);
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
      await axios.post('http://localhost:4000/InterConnect/admin/sendtoall', {text, sub, type})
      .then((response) => {
        console.log(response)   // Initially, both arrays  are the same
        toast.success('Notification sent successfully', { position: "top-right" });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
      })
      .catch((error)=>{
        if (error.response) {
          toast.error('Error while sending notification', { position: "top-right" });
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
        toast.success('Notification sent successfully', { position: "top-right" });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error)=>{
        if (error.response) {
          toast.error('Error while sending notification', { position: "top-right" });
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
    <div >
      <div className="adminnotification">
      <div className='text'>
            <h3>Sending Notifications:</h3>
            <h1> Stay Connected!</h1>
          
            <div className='adimage'>
            <img src="ad-con.gif" alt="" />
        </div> </div>

        <div className="adminContact">
        <form onSubmit={handleSubmit}>
         
            <div className="form-group">
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" cols="30" rows="10"value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="">Subject<span>*</span></label>
              <input type="text" value={sub} onChange={(e) => setSub(e.target.value)}/>
                </div>
                
                
            {recipientType==="All"&&<div className="form-group">
              <label htmlFor="">Select Recipient<span>*</span></label>

              <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                  <Select className='adselect' options={receiver} onChange={(selectedOption) => setType(selectedOption.value)}/>
             </div>   

        </div>}


            <div className="form-group">
              <label htmlFor="">Select Recipient<span>*</span></label>

              <div  style={{width:'400px' , padding:'-10',height:'90px'}}>
                  <Select className='adselect' options={options} onChange={handleRecipientTypeChange} value={options.find((option) => option.value === recipientType)}/>
             </div>      
              {recipientType === "Individual" && (             
                <div>
                  <label htmlFor="">Recipient Email Address<span>*</span></label>
                  <input
                    type="email"
                    name="recipientEmail"
                    value={recipientEmail}
                    onChange={handleRecipientEmailChange}
                  />
                </div>
              )}
        </div>
              <button type="submit">Send</button>
        
        </form>
      </div>
      </div>
    </div>
  );
};

export default SendNotification;
