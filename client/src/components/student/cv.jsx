import React, { useState, useEffect} from 'react';
import "../admin/Add.css";
import {useAuthContext} from "../../context/useAuthcontext"
import axios from "axios";
import download from 'js-file-download';


const UploadCV = () => {
  const { userstudent } = useAuthContext();
  const [selectedFile, setSelectedFile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('')
  const [hascv, setHascv]=useState(false)
  const [cv, setCv]=useState('')

  useEffect(() => {
    if (userstudent) {
      setId(userstudent.student_id);
      if(userstudent.student_id){
        try{
          axios.get(`http://localhost:4000/InterConnect/student/getStudent/${userstudent.student_id}`).then((response)=>{
          if(response.data.student.CV){
            setHascv(true);
          }
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
          }catch (error) {
            console.error('An error occurred:', error);
          }
      }
      if(userstudent.CV){
        setHascv(true);
      }
      setLoading(false); // Set loading to false when data is available
    } 
    // Fetch user data from your API or storage on component mount
    // Update the 'userData' state with the fetched data
    // For simplicity, we are using mock data here.
  }, [userstudent]);
  
  useEffect(()=>{
    if(id){
    try {
        console.log("came here")
        axios.get('http://localhost:4000/InterConnect/student/getOnestudent/'+id).then((response)=>{
          setCv(response.data.students.CV)
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
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  })

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
        window.location.reload();
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

  const handleview = async(event) => {
    event.preventDefault()
    try {
      await axios.get('http://localhost:4000/InterConnect/student/getcv/'+id ).then((response)=>{
        console.log(response)
        var fileName=id+".pdf"
        download(response.data, fileName);
         
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
              {hascv?<button onClick={handleSubmit}>Upload</button>:<button onClick={handleSubmit}>Upload</button>}
            </div>
            
            {/* {hascv&&<button onClick={handleview}>View your own submitted CV</button>}        */}

            {hascv&&<button><a href={"http://localhost:4000/InterConnect/student/getcv/"+id} download={id+".pdf"}>Download PDF</a></button>}
          
          
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