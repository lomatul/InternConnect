import React, { useState, useEffect } from 'react';
import "./profile.css";
import axios from "axios";
// import "./Add.css";
import {useAuthContext} from "../../context/useAuthcontext"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const user = JSON.parse(localStorage.getItem('user')) || {"student_id" : "100"};
// const student_id = user.student_id

const StudentProfile = () => {
  const navigate = useNavigate();
  const { userstudent } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [img, setimg] = useState('')
  const [user, setUser] = useState('')
  
  // State to manage user data and edit mode
  const [userData, setUserData] = useState({
    name: '',
    Id: '',
    email: '',
    bio: '',
    hobbies: '',
    skills: '',
    languageEfficiency: '',
    pastExperiences: '',
    externalLinks: '',
    image: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {

    
    if (userstudent) {
      try{
      console.log("came here",userstudent.student_id)
        axios.get(`http://localhost:4000/InterConnect/student/getStudent/${userstudent.student_id}`).then((response)=>{
          console.log(response.data.student)
          setUserData({
            name: response.data.student.name,
            Id: userstudent.student_id,
            email: response.data.student.email,
            bio: response.data.student.bio,
            hobbies: response.data.student.hobbies,
            skills: response.data.student.skills,
            languageEfficiency: response.data.student.languageEfficiency,
            pastExperiences: response.data.student.pastExperiences,
            externalLinks: response.data.student.externalLinks,
            image: response.data.student.image
          });
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
        setUserData({
        name: userstudent.name,
        Id: userstudent.student_id,
        email: userstudent.email,
        bio: userstudent.bio,
        hobbies: userstudent.hobbies,
        skills: userstudent.skills,
        languageEfficiency: userstudent.languageEfficiency,
        pastExperiences: userstudent.pastExperiences,
        externalLinks: userstudent.externalLinks,
      });
      }

   
      setLoading(false); // Set loading to false when data is available
      console.log(userData);
      
    } 
   

  }, [userstudent]);

  



  const handleEditClick = () => {
    setEditMode(true);              // Enable edit mode
  };

  const handleimagesave = () => {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData();
      formData.append("file", newImage);
      formData.append("upload_preset", "Product_image");
  
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcpremwwm/image/upload",
          formData
        );
        console.log("Cloudinary", response.data.secure_url);
        setimg(response.data.secure_url);
        resolve(response.data.secure_url);
      } catch (error) {
        console.log(error);
        reject(error);
      }
      
    });
  };
  

  const handleSaveClick = async() => {
    console.log(userData)
    // Save the updated user data to your backend
    // Disable edit mode
    setEditMode(false);
    if(newImage){
      try{
      // handleimagesave()
      // console.log("image", img)
      const imgURL =await handleimagesave();
      console.log("image", imgURL);
      try {
        const response = await axios.patch(`http://localhost:4000/InterConnect/student/updateStudent/${userData.Id}`, {
          name: userData.name,
          email: userData.email,
          bio: userData.bio,
          hobbies: userData.hobbies,
          skills: userData.skills,
          languageEfficiency: userData.languageEfficiency,
          pastExperiences: userData.pastExperiences,
          externalLinks: userData.externalLinks,
          image:imgURL
        });
        // Handle the response if needed
        console.log(response.data); // This is just for demonstration
        toast.success('Profile saved successfully', { position: "top-right" });
        // window.location.reload();
      }
       catch (error) {
        // Handle errors
        console.error(error);
        toast.error('Error while saving profile', { position: "top-right" });
      }
  
    }catch(error){
      
        // Handle errors from handleimagesave
        console.error(error);
      }
    }
    else{
    try {
      const response = await axios.patch(`http://localhost:4000/InterConnect/student/updateStudent/${userData.Id}`, {
        name: userData.name,
        email: userData.email,
        bio: userData.bio,
        hobbies: userData.hobbies,
        skills: userData.skills,
        languageEfficiency: userData.languageEfficiency,
        pastExperiences: userData.pastExperiences,
        externalLinks: userData.externalLinks,
      });
      // Handle the response if needed
      console.log(response.data); // This is just for demonstration
      toast.success('Profile saved successfully', { position: "top-right" });
    } catch (error) {
      // Handle errors
      console.error(error);
    }

  }
};

  const handleImageChange = (e) => {
    // Handle image selection
    const file = e.target.files[0];
    setNewImage(file);
  };

  const navigateto =() => {
    navigate("/Updatepassword", {state: {Id:userData.Id, from:1}});
  }
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    
    <div className="admin-profile">
        <div className="profile">
          <img
            src={userData.image}
            alt="Profile"
          />
        
          <div className="profile-info">
          <h2>Name : <span>{userData.name}</span></h2>
          <p><img src="id.png"  alt="InternConnect Logo" style={{ width: '23px', height: '20px' , marginTop:'10px'}}/>ID : <span>{userData.Id}</span></p>
          <p><img src="mail.png"  alt="InternConnect Logo" style={{ width: '23px', height: '18px' , marginTop:'10px'}}/>
           Email: <span>{userData.email}</span> </p>
           <button  onClick={handleEditClick}>Edit Profile</button>

          {/* <button onClick={handleEditClick}>Edit Profile</button>
        <button ><a href="/Updatepassword"> Update Password</a></button>
       */}
        </div>
      
        </div>

       

{editMode  ? (
        <div className="edit-profile" >
          <label htmlFor=""> Hobby</label>
          <input
            type="text"
            name="Hobby"
            value={userData.hobbies}
            onChange={(e) =>
              setUserData({ ...userData, hobbies: e.target.value })
            }
          />
           <label htmlFor=""> Skills</label>
          <input
            type="text"
            name="Skills"
            value={userData.skills}
            onChange={(e) =>
              setUserData({ ...userData, skills: e.target.value })
            }
          />
           <label htmlFor=""> Language Prefernce</label>
          <input
            type="text"
            name="Language Prefernce"
            value={userData.languageEfficiency}
            onChange={(e) =>
              setUserData({ ...userData, languageEfficiency: e.target.value })
            }
          />
           <label htmlFor=""> Experience</label>
          <input
            type="text"
            name="Experience"
            value={userData.pastExperiences}
            onChange={(e) =>
              setUserData({ ...userData, pastExperiences: e.target.value })
            }
          />

          <label htmlFor=""> link </label>
          <input
            type="text"
            name="link"
            value={userData.externalLinks}
            onChange={(e) =>
              setUserData({ ...userData, externalLinks: e.target.value })
            }
          />

          <label htmlFor="" >Upload your Profile Picture</label>
          <input  
           style={{ marginTop: '20px' }}
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button style={{ marginTop: '40px' }} onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="view-profile">

         <div className="view-profile2">
          <h3>Hobby (s) :</h3>
          <p><span>{userData.hobbies}</span></p>
          </div>


          <div className="view-profile2">
          <h3>Skills :</h3>
          <p> <span>{userData.skills}</span></p>
          </div>


          <div className="view-profile2">
          <h3>Language Efficiency (s) :</h3>
          <p><span>{userData.languageEfficiency}</span></p>
          </div>


          <div className="view-profile2">
          <h3>Past Experiences  :</h3>
          <p><span>{userData.pastExperiences}</span></p>
          </div>

          <div className="view-profile2">
          <h3>Externel Link (s) :</h3>
          <p className='link'><span>{userData.externalLinks}</span></p>
          </div>
        </div>
      )}

</div>

  );

  
};

export default StudentProfile