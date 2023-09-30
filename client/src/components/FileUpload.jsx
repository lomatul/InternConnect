import { useState } from "react";
import './admin.css'
import {MdCloudUpload,MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import axios from "axios";


function FileUpload(){
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
            await axios.post('http://localhost:3000/InterConnect/student/uploadfile', formData, {
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
    }

    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileSelect}/>
                <input type="submit" value="Submit"></input><br />
            </form>
        </main>
    )
}
export default FileUpload