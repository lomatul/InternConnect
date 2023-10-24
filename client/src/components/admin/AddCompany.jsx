import React, { useState } from 'react';
import "./Add.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Add = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    console.log("file", selectedFile)
  }


  const isEmailValid = (email) => {
    const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+(?:\.[a-z]{2,4}){1,}$/i;
    return emailPattern.test(email);
  };


  const isContactNumberValid = (contactNumber) => {
    const contactNumberPattern = /^01\d{9}$/;
    return contactNumberPattern.test(contactNumber);
  };



  const [formData, setFormData] = useState({
    companyID: "",
    name: "",
    address: "",
    email: "",
    requiredDomain: "",
    minInterns: "",
    maxInterns: "",
    internsHired: "",
    contactNumber: "",
    status: "",
    description: ""
  });

  const handlefileSubmit = async(event) => {
    event.preventDefault()
  
    const formDatafile = new FormData();
    formDatafile.append("file", selectedFile);
    console.log(formDatafile)
    try {
        await axios.post('http://localhost:4000/InterConnect/admin/uploadcompanyfile', formDatafile, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type for file upload
          },
        }).then((response)=>{
            console.log(response)
         
        }).catch((error)=>{
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
                toast.error('File upload failed', { position: "top-right" });
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);
              }
        });
  
        // if (response.status === 200) {
        //   console.log('File uploaded successfully');
        // } else {
        //   console.error('File upload failed');
        // }
      } catch (error) {
        console.error('An error occurred:', error);
      }
      setSelectedFile(null)
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'contactNumber') {
      // Use a regular expression to match digits only
      const numericValue = value.replace(/\D/g, ''); // Remove non-digit characters
  
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the email is valid
    if (!isEmailValid(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    // Check if the contact number is valid
    if (!isContactNumberValid(formData.contactNumber)) {
      setContactNumberError('Contact number should start with "01" and have 11 digits');
      return;
    } else {
      setContactNumberError('');
    }

    try {
      const response = await axios.post('http://localhost:4000/InterConnect/company/createCompany', formData);
      console.log('Response:', response.data);
      toast.success('Company created successfully', { position: "top-right" });
      // Handle success and error cases
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Failed to create the company', { position: "top-right" });
      // Handle the error cases
    }
    setFormData({
      companyID: "",
      name: "",
      address: "",
      email: "",
      requiredDomain: "",
      minInterns: "",
      maxInterns: "",
      internsHired: "",
      contactNumber: "",
      status: "",
      description: ""
    })
  };


    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Add New Company</h1>
          <form onSubmit={handleSubmit}>
          <div className="addsections">
          {/* <div className="info">
          </div>  */}
  
            <div className="details">
            <label htmlFor="">Add Companies by Excel Upload</label>
            <div className="xcellupload">
              <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileSelect}/>
              <button onClick={handlefileSubmit}>Create</button>
            </div>
          
              <label htmlFor="name">Company Title<span>*</span></label> 
              <input type="text" name="name" placeholder="Give Company name" value={formData.name} onChange={handleChange}/>
  
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="description" id="" placeholder="Short description of the company" cols="30" rows="10" value={formData.description} onChange={handleChange}></textarea>
  
              <label htmlFor="address">Address<span>*</span></label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} />

              <label htmlFor="email">Email <span>*</span></label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
              {emailError && <div class="error-message">{emailError}</div>} 

              <label htmlFor="contactNumber">Contact Number<span>*</span></label>
              <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              {contactNumberError && <div class="error-message">{contactNumberError}</div>} 

              <label htmlFor="maxInterns">Max Interns</label>
              <input type="number" name="maxInterns" min="0" value={formData.maxInterns} onChange={handleChange} />

              <label htmlFor="minInterns">Min Interns</label>
              <input type="number" name="minInterns" min="0" value={formData.minInterns} onChange={handleChange} />

              <label htmlFor="internsHired">Interns Hired</label>
              <input type="number" name="internsHired" min="0" value={formData.internsHired} onChange={handleChange} />

              {/* <label htmlFor="selectedInterns">Selected Interns</label>
              <input type="number" name="selectedInterns" min="0" value={formData.selectedInterns} onChange={handleChange} /> */}
             
              <label htmlFor="requiredDomain">Domain</label>
              <div className="multiselect">
                <div className="select-box">
                  <div className="options-container">
                    <div className="option">
                      <input type="checkbox" id="UI/UX Designer" name="requiredDomain" value="UI/UX Designer" onChange={handleChange} />
                      <label htmlFor="UI/UX Designer">UI/UX Designer</label>
                    </div>
                    <div className="option">
                      <input type="checkbox" id="Software Development" name="requiredDomain" value="Software Development" onChange={handleChange} />
                      <label htmlFor="Software Development">Software Development</label>
                    </div>
                    <div className="option">
                      <input type="checkbox" id="Documentation" name="requiredDomain" value="Documentation" onChange={handleChange} />
                      <label htmlFor="Documentation">Documentation</label>
                    </div>
                    <div className="option">
                      <input type="checkbox" id="DevOps" name="requiredDomain" value="DevOps" onChange={handleChange} />
                      <label htmlFor="DevOps">DevOps</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <label htmlFor="">Status </label>
                      <select >
                        <option value="running ">Running</option>
                        <option value="Closed">Closed </option>
                      </select> */}

              <button type="submit">Create</button>
            </div>
            
          </div>
          </form>
        </div>
        
      </div>
      
    );
  };
export default Add