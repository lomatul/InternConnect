import React, { useState, useEffect} from 'react';
import "../admin/Add.css";
import {useAuthContext} from "../../context/useAuthcontext"
import axios from "axios";
import download from 'js-file-download';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const UploadReport = () => {
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
        toast.success('Cv has been uploaded.')
        setTimeout(() => {
          window.location.reload();
        }, 1500);

    }).catch((error)=>{
        toast.error("Error occured, try again")
        if (error.response) {
            console.log(error.response);
            console.log("server responded");
            toast.error('Failed to upload', { position: "top-right" });
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
            toast.error('Failed to upload', { position: "top-right" });
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
      <div >
            <div className='admincontainer'>
                <div className='studenttext'>
                    <h3>Empower Your Journey</h3>
                    <h1> Unleash Your Potential with Your Report</h1>
                  
                </div>
                  <div className='adminimage'>
                      <img src="cv-up.gif" alt="" />
                  </div>
            </div>
      
            <div className="studentguideline">           
                     <ul>
                        <li>Use a clear and professional format for your CV (preferable in Latex).</li>
                          <li>Include your contact information at the top of the Report.</li>
                          <li>Highlight your skills, experience, and education.</li>
                          <li>Tailor your CV for the specific job or internship you're applying for.</li>
                          <p>For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
                       </ul>

                


                  <div className="sample-cvs">
                          <a href="cvsample1.pdf" download>Download Sample Report 1</a>  
                          <a href="cvsample2.pdf" download>Download Sample Report 2</a>
                          <a href="cvsample3.pdf" download>Download Sample Report 3</a>
                  </div>

                <div className="xcellupload">             
                  <input type="file" accept=".pdf" onChange={handleFileSelect}/>
                  {hascv?<button onClick={handleSubmit}>Upload</button>:<button onClick={handleSubmit}>Upload</button>}
                </div>
                   {hascv&&<button><a style={{color:'white'}} href={"http://localhost:4000/InterConnect/student/getcv/"+id} download={id+".pdf"}>Download your Report </a></button>}
             </div>
          
        </div>
  
    );
  };
export default UploadReport