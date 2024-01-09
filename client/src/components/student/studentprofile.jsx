// Modal.jsx
import React, { useState, useEffect } from "react";
import "./profile.css"; // Replace with the actual path to your stylesheet
import axios from "axios";
import { useAuthContext } from "../../context/useAuthcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewProfile from "./viewprofile";
import EditProfile from "./editprofile";
// import Project from "./project";
import NewProject from "./newprojects";


const StudentProfile = () => {
  const [x, setX] = useState(0);
  const [page, setPage] = useState(0);

 
    
  const navigate = useNavigate();
  const { userstudent } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [img, setimg] = useState("");
  const [user, setUser] = useState("");

  // State to manage user data and edit mode
  const [userData, setUserData] = useState({
    name: "",
    Id: "",
    email: "",
    bio: "",
    hobbies: "",
    skills: "",
    languageEfficiency: "",
    pastExperiences: "",
    externalLinks: "",
    image: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    if (userstudent) {
      try {
        axios
          .get(
            `http://localhost:4000/InterConnect/student/getStudent/${userstudent.student_id}`
          )
          .then((response) => {
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
              image: response.data.student.image,
            });
          })
          .catch((error) => {
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
        console.error("An error occurred:", error);
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
    }
  }, [userstudent]);

  const handleEditClick = () => {
    setEditMode(true); // Enable edit mode
  };

  const handleImageChange = (e) => {
    // Handle image selection
    const file = e.target.files[0];
    setNewImage(file);
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
        setimg(response.data.secure_url);
        resolve(response.data.secure_url);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  const handleSaveClick = async () => {
    // Save the updated user data to your backend
    // Disable edit mode
    setEditMode(false);
    if (newImage) {
      try {
        const imgURL = await handleimagesave();
        try {
          const response = await axios.patch(
            `http://localhost:4000/InterConnect/student/updateStudent/${userData.Id}`,
            {
              name: userData.name,
              email: userData.email,
              bio: userData.bio,
              hobbies: userData.hobbies,
              skills: userData.skills,
              languageEfficiency: userData.languageEfficiency,
              pastExperiences: userData.pastExperiences,
              externalLinks: userData.externalLinks,
              image: imgURL,
            }
          );
          console.log(response.data);
          toast.success("Profile saved successfully", { position: "top-right" });
        } catch (error) {
          console.error(error);
          toast.error("Error while saving profile", { position: "top-right" });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.patch(
          `http://localhost:4000/InterConnect/student/updateStudent/${userData.Id}`,
          {
            name: userData.name,
            email: userData.email,
            bio: userData.bio,
            hobbies: userData.hobbies,
            skills: userData.skills,
            languageEfficiency: userData.languageEfficiency,
            pastExperiences: userData.pastExperiences,
            externalLinks: userData.externalLinks,
          }
        );
        console.log(response.data);
        toast.success("Profile saved successfully", { position: "top-right" });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const navigateto = () => {
    navigate("/Updatepassword", { state: { Id: userData.Id, from: 1 } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const componentList = [
    <ViewProfile
  page={page}
  setPage={setPage}
  x={x}
  setX={setX}
  userData={userData}
/>, 

    <EditProfile
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      userData={userData}
      setUserData={setUserData}
      handleImageChange={handleImageChange}
      handleSaveClick={handleSaveClick}
    />,

    <NewProject
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,

  ];

  return (
    <div className="admin-profile">

        <div className="profile-info">
          <div>{componentList[page]}</div>
   
        </div>

    </div>
  );
};

export default StudentProfile;
