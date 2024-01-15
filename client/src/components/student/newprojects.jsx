import React, { useState, useEffect } from "react";
import "./newproject.css";
import { motion } from "framer-motion";
import { useAuthContext } from "../../context/useAuthcontext";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewProject = ({ page, setPage, x, setX }) => {
  const initialProject = {
    name: "",
    year: "",
    description: "",
    technologies: "",
    link: "",
  };
  const { userstudent } = useAuthContext();

  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(initialProject);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Fetch projects from the backend when the component mounts
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/InterConnect/student/getProjects/${userstudent.student_id}`);
        setProjects(response.data.projects); // Updated this line
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [userstudent.student_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({ ...prevProject, [name]: value }));
  };

  const handleAddProject = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/InterConnect/student/addProjects/${userstudent.student_id}`, newProject);
      setProjects((prevProjects) => [...prevProjects, response.data.student.projects]);
      setNewProject(initialProject);
      setShowAddForm(false);
      toast.success('Project added successfuly');
      window.location.reload();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleDeleteProject = async (index, project_id) => {
    try {
      await axios.delete(`http://localhost:4000/InterConnect/student/deleteProjects/${userstudent.student_id}/${project_id}`);
      setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div>
      <a style={{ marginRight: "50px", textDecoration: "underline", fontSize: "18px", cursor: "pointer" }}
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage(page - 2); setX(-2000); }}>
        <img src="user.png" alt="InternConnect Logo" style={{ width: '40px', height: '40px', marginBottom: "-10px" }} />
        Profile
      </a>

      <a style={{ marginRight: "50px", textDecoration: "underline", fontSize: "18px", cursor: "pointer" }}
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage(page - 1); setX(-1000); }}>
        <img src="edit.png" alt="InternConnect Logo" style={{ width: '40px', height: '40px', marginBottom: "-10px" }} />
        Edit Profile
      </a>

      <a style={{ marginRight: "30px", textDecoration: "underline", fontSize: "18px", cursor: "pointer" }}
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage(page); setX(0); }}>
        <img src="project.png" alt="InternConnect Logo" style={{ width: '40px', height: '40px', marginBottom: "-10px" }} />
        Projects
      </a>

      <motion.div
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
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
                  <button onClick={() => handleDeleteProject(index, project._id)}>Delete</button>
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
                  <div className="add-project">
                    <button onClick={handleAddProject}>Add Project</button>
                  </div>
                </div>
              </div>
            )}

            <div className="add-project">
              <button onClick={() => setShowAddForm(true)}>Add New</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewProject;
