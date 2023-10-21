import React from 'react'
import "./Add.css";
import axios from "axios";
import {useState} from 'react';

const Addstudent = () => {
  const [selectedFile, setSelectedFile] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    console.log("file", selectedFile)
}

const handleSubmit = async(event) => {
  event.preventDefault()

  const formData = new FormData();
  formData.append("file", selectedFile);
  console.log(formData)
  try {
      await axios.post('http://localhost:4000/InterConnect/admin/uploadfile', formData, {
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
    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Add Student by Xcell Upload</h1>
          <div className="addsections">
          {/* <div className="info">
          </div>  */}
  
            <div className="details">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="xcellupload">
              <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileSelect}/>
              <button onClick={handleSubmit}>Create</button>
            </div>
            {/* </form> */}
        
            </div>
            
          </div>
        </div>
      </div>
    );
  };
export default Addstudent