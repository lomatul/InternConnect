import React, { useState, useEffect } from "react";
import "./profile.css"; // Replace with the actual path to your stylesheet
import axios from "axios";
import "./newproject.css";
import { useAuthContext } from "../../context/useAuthcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentProfile = () => {

    const navigate = useNavigate();
    const { userstudent } = useAuthContext();
    const [loading, setLoading] = useState(true);
    const [img, setimg] = useState("");
    const [user, setUser] = useState("");

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

      

      const initialProject = {
        name: "",
        year: "",
        description: "",
        technologies: "",
        link: "",
      };
    
      const [projects, setProjects] = useState([]);
      const [newProject, setNewProject] = useState(initialProject);
      const [showAddForm, setShowAddForm] = useState(false);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setNewProject((prevProject) => ({ ...prevProject, [name]: value }));
      };

      


  return (
    <div>

  
    <div className="admin-profile">
            <div className="profile-info">
        <div className="view-profile">
          <img src={userData.image} alt="Profile" />
          <div className="view-profile3">
            <h2>
              Name : <span>{userData.name}</span>
            </h2>
            <p>
              <img
                src="id.png"
                alt="InternConnect Logo"
                style={{ width: "23px", height: "20px", marginTop: "10px" }}
              />
              ID : <span>{userData.Id}</span>
            </p>
            <p>
              <img
                src="mail.png"
                alt="InternConnect Logo"
                style={{ width: "23px", height: "18px", marginTop: "10px" }}
              />
              Email: <span>{userData.email}</span>{" "}
            </p>

            <div className="view-profile2">
              <h3>Hobbies:</h3>
              <p>
                <span>{userData.hobbies}</span>
              </p>
            </div>
            <div className="view-profile2">
              <h3>Skills:</h3>
              <p><span>{userData.skills}</span></p>
            </div>

            <div className="view-profile2">
              <h3>Language Efficiency:</h3>
              <p><span>{userData.languageEfficiency}</span></p>
            </div>

            <div className="view-profile2">
              <h3>Past Experiences:</h3>
              <p><span>{userData.pastExperiences}</span></p>
            </div>

            <div className="view-profile2">
              <h3>External Links:</h3>
              <p className="link">
                <span>{userData.externalLinks}</span>
              </p>
            </div>

          </div>
        </div>
    </div> 
    </div>


        <div className="containermodal">
          <div className="projectmodal">
                {projects.map((project, index) => (
                <div className="Project" key={index}>
                <div className="Project-header">
                <img
                src="coding.jpg"
                alt="rover"
                />
                </div>
                <div className="Project-body">
                <span className="tag tag-teal">Github Link <a href={project.link}></a></span>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="user">
                <div className="user-info">
                    <h5>Technologies: {project.technologies}</h5>
                    <small>{project.year}</small>
                </div>
                </div>
                </div>
                </div>
                ))}
                </div>



        <div className="projectmodal">
            {showAddForm && (
            <div className="Project">
            <div className="Project-body">
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            value={newProject.name}
            onChange={handleInputChange}
            />
            <label htmlFor="year">Year:</label>
            <input
            type="text"
            id="year"
            name="year"
            value={newProject.year}
            onChange={handleInputChange}
            />
             <label htmlFor="description">Description:</label>
             <textarea
                id="description"
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                ></textarea>
                <label htmlFor="technologies">Technologies:</label>
                <input
                type="text"
                id="technologies"
                name="technologies"
                value={newProject.technologies}
                onChange={handleInputChange}
                />
            <label htmlFor="link">Github Link :</label>
            <input
            type="text"
            id="link"
            name="link"
            value={newProject.link}
            onChange={handleInputChange}
            />
        </div>
        </div>
        )}
        </div>
        </div>
    </div>
    
  );
};

export default StudentProfile;
