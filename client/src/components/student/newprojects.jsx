import React, { useState } from "react";
import "./newproject.css";
import { motion } from "framer-motion";

const NewProject = ({page, setPage,x,setX} ) => {
  const initialProject = {
    name: "",
    year: "",
    description: "",
    technologies: "",
    link:"",
  };

  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(initialProject);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({ ...prevProject, [name]: value }));
  };

  const handleAddProject = () => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setNewProject(initialProject);
    setShowAddForm(false);
  };

  // const handleEditProject = (index) => {
  //   setIsAdding(true);
  //   setNewProject(projects[index]);
  //   setEditingIndex(index);
  //   console.log("Edit project at index", index);
  // };

  const handleDeleteProject = (index) => {
    setProjects((prevProjects) =>
      prevProjects.filter((_, i) => i !== index)
    );
  };


  // const handleSaveProject = async () => {
  //   try {
  //     let response;

  //     if (editingIndex === -1) {
  //       // Add new project
  //       response = await axios.post(`http://localhost:4000/InterConnect/student/addProjects/${userstudent.student_id}`, newProject);
  //     } else {
  //       // Update existing project
  //       response = await axios.patch(`http://localhost:4000/InterConnect/student/editProjects/${userstudent.student_id}/${projects[editingIndex]?._id}`, newProject);
  //     }

  //     // Ensure the response structure matches the expected format
  //     const updatedProject = response.data.student?.projects;

  //     if (updatedProject) {
  //       const updatedProjects = [...projects];

  //       if (editingIndex === -1) {
  //         updatedProjects.push(updatedProject);
  //       } else {
  //         updatedProjects[editingIndex] = updatedProject;
  //       }

  //       setProjects(updatedProjects);
  //       setEditingIndex(-1);

  //       // Reset newProject to the initial state
  //       setNewProject({
  //         name: '',
  //         year: '',
  //         description: '',
  //         technologies: '',
  //       });

  //       setIsAdding(false);
  //       window.location.reload();
  //     } else {
  //       console.error('Invalid response format:', response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error adding/updating project:', error);
  //   }
  // };

  return (
    <div>

    <button
          onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page-2); setX(-2000);  }}>
          Profile </button>
          
              <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page - 1); setX(-1000);}}>
                  Edit 
                </button>
              <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page); setX(0);}}>
                  Project 
                </button>
    
    
        <motion.div                            //updated the div tag
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
              {/* <button onClick={() => handleEditProject(index)}>Edit</button> */}
              <button onClick={() => handleDeleteProject(index)}>Delete</button>
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
                name="Github Link"
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
        <button onClick={() => setShowAddForm(true)}>Add Project</button>
        </div>
        
      </div>
      </div>
      </motion.div>

</div>
  );
};
export default NewProject;
