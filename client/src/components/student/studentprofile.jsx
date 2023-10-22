import React from 'react'
import "./profile.css";
import axios from "axios";
// import "./Add.css";
import { useState, useEffect } from 'react';
import {useAuthContext} from "../../context/useAuthcontext"

const user = JSON.parse(localStorage.getItem('user'))
const student_id = user.student_id

const StudentProfile = () => {
  const { userstudent } = useAuthContext();
  const [loading, setLoading] = useState(true);
  
  // State to manage user data and edit mode
  const [userData, setUserData] = useState({
    name: '',
    Id: '',
    email: '',
    bio: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    if (userstudent) {
      setUserData({
        name: userstudent.name,
        Id: userstudent.student_id,
        email: userstudent.email,
        bio: userstudent.bio,
      });
      setLoading(false); // Set loading to false when data is available
    } 
    // Fetch user data from your API or storage on component mount
    // Update the 'userData' state with the fetched data
    // For simplicity, we are using mock data here.
  }, [userstudent]);

  const handleEditClick = () => {
    // Enable edit mode
    setEditMode(true);
  };

  const handleSaveClick = async() => {
    // Save the updated user data to your backend
    // Disable edit mode
    setEditMode(false);

    try {
      const response = await axios.patch(`http://localhost:4000/InterConnect/student/updateStudent/${student_id}`, {
        name: userData.name,
        email: userData.email,
        bio: userData.bio,
      });
      // Handle the response if needed
      console.log(response.data); // This is just for demonstration
    } catch (error) {
      // Handle errors
      console.error(error);
    }

  };

  const handleImageChange = (e) => {
    // Handle image selection
    const file = e.target.files[0];
    setNewImage(file);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    
    <div className="admin-profile">

      {editMode ? (
        <div className="edit-profile">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
          />
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <textarea
            name="bio"
            value={userData.bio}
            onChange={(e) =>
              setUserData({ ...userData, bio: e.target.value })
            }
          />
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="view-profile">
          <img
            src={userData.profileImage}
            alt="Profile"
          />

        {/* <img
            src="student.gif"
            alt="InternConnect Logo"
            style={{ width: '100px', height: '100px' }}
        /> */}
          <h2>Name : <span>{userData.name}</span></h2>
          <p>ID : <span>{userData.Id}</span></p>
          <p>Email : <span>{userData.email}</span></p>
          <p>Computer Science and Engineering Department</p>
          <p>{userData.bio}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}


</div>

  );

  
};

export default StudentProfile