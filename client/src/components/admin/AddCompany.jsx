import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { BASE_URL } from "../../services/helper.js";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const navigate = useNavigate();


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    console.log("file", selectedFile)
  }


  const isEmailValid = (email) => {
    const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+(?:\.[a-z]{2,4}){1,}$/i;
    return emailPattern.test(email);
  };


  const [formData, setFormData] = useState({
    name: "",
    address: "",
    historicalData: [
      {
        year: new Date().getFullYear(),
        address: "",
        requiredDomain: [],
        internsHired: 0,
        contactNumber: "",
        selectedInterns: [],
      },
    ],
    minInterns: "",
    maxInterns: "",
    status: "",
    description: ""
  });


  const handlefileSubmit = async(event) => {
    event.preventDefault()
  
    const formDatafile = new FormData();
    formDatafile.append("file", selectedFile);
    console.log(formDatafile)
    try {
        await axios.post(`${BASE_URL}/InterConnect/admin/uploadcompanyfile`, formDatafile, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type for file upload
          },
        }).then((response)=>{
            console.log(response)
            toast.success('Company created successfully', { position: "top-right" });
            navigate('/CompanyList');
            // setTimeout(() => {
            //   window.location.reload();
            // }, 2000);


        }).catch((error)=>{
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
                toast.error('File upload failed', { position: "top-right" });
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);
              }
        });
  
      } catch (error) {
        console.error('An error occurred:', error);
      }
      setSelectedFile(null)
  }


  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'requiredDomain') {
      const domainArray = value.split(',').map(domain => domain.trim()); 
      setFormData((prevFormData) => ({
        ...prevFormData,
        historicalData: [
          {
            ...prevFormData.historicalData[0],
            requiredDomain: domainArray,
          },
        ],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

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
    const contactNumberPattern = /^01\d{9}$/; // Pattern for contact number starting with "01" and having 11 digits
    if (!contactNumberPattern.test(formData.contactNumber)) {
      setContactNumberError('Contact number should start with "01" and have 11 digits in total');
      return;
    } else {
      setContactNumberError('');
    }


    try {
      const response = await axios.post(`${BASE_URL}/InterConnect/company/createCompany`, formData);
      console.log('Response:', response.data);
      toast.success('Company created successfully', { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Failed to create the company', { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    setFormData({
      companyID: "",
      name: "",
      historicalData: [
        {
          year: new Date().getFullYear(),
          address: "",
          requiredDomain: [],
          internsHired: 0,
          contactNumber: "",
          selectedInterns: [],
        },
      ],
      minInterns: "",
      maxInterns: "",
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
                    <button onClick={handlefileSubmit}>Create</button>          
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
              <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              {contactNumberError && <div class="error-message">{contactNumberError}</div>} 
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
                  <label> <Checkbox id="Backend Developer" name="requiredDomain" value="Backend Developer" onChange={handleChange} />  &nbsp; Backend Developer </label> 
                  <label> <Checkbox id="Frontend Developer" name="requiredDomain" value="Frontend Developer" onChange={handleChange} />  &nbsp; Frontend Developer </label> 
                  <label> <Checkbox id="Documentation" name="requiredDomain" value="Documentation" onChange={handleChange} />  &nbsp; Documentation </label> 
                  <label> <Checkbox id="QA Engineer" name="requiredDomain" value="QA Engineer" onChange={handleChange} />  &nbsp; QA Engineer </label> 
                  <label> <Checkbox id="Project Manager" name="requiredDomain" value="Project Manager" onChange={handleChange} />  &nbsp; Project Manager </label> 
                  <label> <Checkbox id="DevOps" name="requiredDomain" value="DevOps" onChange={handleChange} />  &nbsp; DevOps </label> 
                  <label> <Checkbox id="System Architect" name="requiredDomain" value="System Architect" onChange={handleChange} />  &nbsp; System Architect </label>
                  <div className="form-group">
                      <label htmlFor="other">Others</label> 
                      <input type="text" name="name" placeholder="Give other Domain if any " value={formData.name} onChange={handleChange}/>
                  </div>                
                 </div>
                  </div>
                  </div>
              </div>

              <div className="form-group">
              <label htmlFor="requiredDomain">Number of Interns Per Domain</label>
              <div className="number-interns">
                {[1, 2, 3, 4, 5, 6, 7, 8 ,9].map((index) => (
                    <input
                        key={index}
                        type="number"
                        name={`numInter${index}`}
                        min="0"
                        value={formData[`numInter${index}`] || ""}
                        onChange={handleChange}
                    />
                ))}
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