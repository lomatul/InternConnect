import React, { useState } from 'react';
import "./Add.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';


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
      <div >
          <div className='admincontainer'>
          <div className='studenttext'>
              <h3>Streamline Your Internship Program</h3>
              <h1>Effortlessly Add Companies with Excel Upload!</h1>
            
          </div>
          <div className='adminimage'>
              <img src="adcompany.gif" alt="" />
          </div>
      </div>
      <div className="studentguideline">           
                  <ul>
                     
                      <p> Administrators play a crucial role in creating, updating, and managing the company pool to facilitate student access to internship opportunities and align the system with the changing needs of both students and companies.For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
                  </ul>
                 
             <div className='xcellupload'>         
                   <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileSelect}/>
                    <button onClick={handleSubmit}>Create</button>          
              </div>
       </div>
       <div className='admincontainer'>
          <div className='studenttext'>
              <h1>Seamless Company Addition: Step by Step </h1>
             
          </div>
          <div className='adminimage'>
              <img src="comform.gif" alt="" />
          </div>
      </div>

       <div className="studentpreference">
          <form onSubmit={handleSubmit}>

          <div className="form-columns">
          <div className="form-group">
              <label htmlFor="name">Company Title<span>*</span></label> 
              <input type="text" name="name" placeholder="Give Company name" value={formData.name} onChange={handleChange}/>
          </div>

      
          <div className="form-group">
              <label htmlFor="address">Address<span>*</span></label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </div>

          <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {emailError && <div class="error-message">{emailError}</div>} 
              </div>
              <div className="form-group">
              <label htmlFor="minInterns">Min Interns</label>
              <input type="number" name="minInterns" min="0" value={formData.minInterns} onChange={handleChange} />
              </div>

          <div className="form-group">
              <label htmlFor="contactNumber">Contact Number<span>*</span></label>
              <input type="number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              {contactNumberError && <div class="error-message">{contactNumberError}</div>} 
              </div>


          <div className="form-group">
              <label htmlFor="maxInterns">Max Interns</label>
              <input type="number" name="maxInterns" min="0" value={formData.maxInterns} onChange={handleChange} />
              </div>

         

          <div className="form-group">
              <label htmlFor="internsHired">Interns Hired</label>
              <input type="number" name="internsHired" min="0" value={formData.internsHired} onChange={handleChange} />
              </div>

          <div className="form-group">
              <label htmlFor="requiredDomain">Domain</label>
              <div className="multiselect">
                <div className="select-box">
                  <div className="options-container">

                  <label> <Checkbox id="UI/UX Designer" name="requiredDomain" value="UI/UX Designer" onChange={handleChange} />  &nbsp; UI/UX Designer </label> 
                  <label> <Checkbox id="Software Development" name="requiredDomain" value="Software Development" onChange={handleChange} />  &nbsp; Software Development </label> 
                  <label> <Checkbox id="Documentation" name="requiredDomain" value="Documentation" onChange={handleChange} />  &nbsp; Documentation </label> 
                  <label> <Checkbox id="DevOps" name="requiredDomain" value="DevOps" onChange={handleChange} />  &nbsp; DevOps </label> 

                      </div>
                    </div>
                  </div>
              </div>
              </div>
        
          <button type="submit">Create</button>
            
            
          </form>
          </div>
            </div>

      
    );
  };
export default Add