import React, { useState, useEffect} from 'react';
import "../admin/Add.css";
import {useAuthContext} from "../../context/useAuthcontext"
import axios from "axios";

const UploadCV = () => {
  const { userstudent } = useAuthContext();
  const [selectedFile, setSelectedFile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('')

  useEffect(() => {
    if (userstudent) {
      setId(userstudent.student_id)
      setLoading(false); // Set loading to false when data is available
    } 
    // Fetch user data from your API or storage on component mount
    // Update the 'userData' state with the fetched data
    // For simplicity, we are using mock data here.
  }, [userstudent]);

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
      await axios.post('http://localhost:4000/InterConnect/student/uploadCV/'+id, formData, {
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
  

  if (loading) {
    return <div>Loading...</div>;
  }

    return (
      <div className="add">
        <div className="addcontainer">
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
            <img src="guide.gif" alt="Icon" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
            CV Guidelines  </h2>

          <div className="cvguideline">           
                <ul>
                    <li>Use a clear and professional format for your CV (preferable in Latex).</li>
                    <li>Include your contact information at the top of the CV.</li>
                    <li>Highlight your skills, experience, and education.</li>
                    <li>Tailor your CV for the specific job or internship you're applying for.</li>
                </ul>
                <p>For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
         </div>

         <h2 style={{ display: 'flex', alignItems: 'center'  }}>
            <img src="cv.gif" alt="Icon" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
            Upload Your CV  </h2>
       
          <div className="addsections" >   
            <div className="details">                      
            <div className="xcellupload">             
              <input type="file" accept=".pdf" onChange={handleFileSelect}/>
              <button onClick={handleSubmit}>Upload</button>
            </div>       
            </div>           
          </div>


          <h2 style={{ display: 'flex', alignItems: 'center' }}>
            <img src="samplecv.gif" alt="Icon" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
            Sample CV's  </h2>


                <div className="sample-cvs">
                        <a href="cvsample1.pdf" download>Download Sample CV 1</a>  
                    </div>
                <div className="sample-cvs">
                        <a href="cvsample2.pdf" download>Download Sample CV 2</a>
                    </div>
                <div className="sample-cvs">
                        <a href="cvsample3.pdf" download>Download Sample CV 3</a>
                </div>
        </div>
      </div>
    );
  };
export default UploadCV