import React from 'react'
// import "./profile.css";
// import "./Add.css";
import { useState, useEffect } from 'react';


const StudentProfile = () => {
  // State to manage user data and edit mode
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software Engineer',
  });
  const [editMode, setEditMode] = useState(false);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    // Fetch user data from your API or storage on component mount
    // Update the 'userData' state with the fetched data
    // For simplicity, we are using mock data here.
  }, []);

  const handleEditClick = () => {
    // Enable edit mode
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Save the updated user data to your backend
    // Disable edit mode
    setEditMode(false);
  };

  const handleImageChange = (e) => {
    // Handle image selection
    const file = e.target.files[0];
    setNewImage(file);
  };

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
          {/* <img
            src={userData.profileImage}
            alt="Profile"
          /> */}

        <img
            src="admin.png"
            alt="InternConnect Logo"
            style={{ width: '100px', height: '100px' }}
        />
          <h2>Name : <span>{userData.name}</span></h2>
          <p>ID : <span>{userData.email}</span></p>
          <p>Computer Science and Engineering Department</p>
          <p>{userData.bio}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}


</div>

  );

  
};

export default StudentProfile