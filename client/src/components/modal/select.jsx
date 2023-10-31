import React, { useState } from 'react';
import "./Modal.css";


const Dropdown = () => {
  const [editMode, setEditMode] = useState(false);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: '',
    year: '',
    description: '',
    technologies: '',
  });

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({
      name: '',
      year: '',
      description: '',
      technologies: '',
    });
  };

  const handleEditProject = (index) => {

    setEditMode(true);

    const updatedProjects = [...projects];
    updatedProjects[index] = newProject;
    setProjects(updatedProjects);
    setNewProject({
      name: '',
      year: '',
      description: '',
      technologies: '',
    });
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <div className="view-profile2">
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>Year: {project.year}</p>
              <p>Description: {project.description}</p>
              <p>Technologies: {project.technologies}</p>
              <button onClick={() => handleEditProject(index)}>Edit</button>
              <button onClick={() => handleDeleteProject(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>Add a Project</h3>
          <input
            type="text"
            placeholder="Name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Year"
            value={newProject.year}
            onChange={(e) => setNewProject({ ...newProject, year: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Technologies"
            value={newProject.technologies}
            onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
          />
          <button onClick={handleAddProject}>Add</button>
        </div>
      </div>


      
    </div>
  );
};

export default Dropdown;
