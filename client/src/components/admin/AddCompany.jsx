import React, { useState } from 'react';
import "./Add.css";
import axios from "axios";


const Add = () => {
  const [selectedFile, setSelectedFile] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    console.log("file", selectedFile)
  }

  

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/InterConnect/company/createCompany', formData);
      console.log('Response:', response.data);
      // Handle success and error cases
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error cases
    }
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
            <label htmlFor="">Add Companies by Xcell Upload</label>
            <div className="xcellupload">
              <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileSelect}/>
              <button onClick={handlefileSubmit}>Create</button>
            </div>
          
              <label htmlFor="name">Company Title<span>*</span></label> 
              <input type="text" name="name" placeholder="Give Company name" value={formData.name} onChange={handleChange}/>
  
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>
  
              <label htmlFor="address">Address<span>*</span></label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} />

              <label htmlFor="email">Email <span>*</span></label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />

              <label htmlFor="contactNumber">Contact Number<span>*</span></label>
              <input type="number" name="contactNumber" min="0" value={formData.contactNumber} onChange={handleChange} />

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