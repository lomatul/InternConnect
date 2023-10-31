import React, { useState } from 'react';
import "./project.css";

const Project = () => {
        const [projects, setProjects] = useState([]);
        const [newProject, setNewProject] = useState({
          name: '',
          year: '',
          description: '',
          technologies: '',
        });
      
        const [isAdding, setIsAdding] = useState(false);
        const [editingIndex, setEditingIndex] = useState(-1);
      
        const handleAddProject = () => {
          if (editingIndex === -1) {
            setProjects([...projects, newProject]);
          } else {
            const updatedProjects = [...projects];
            updatedProjects[editingIndex] = newProject;
            setProjects(updatedProjects);
            setEditingIndex(-1);
          }
      
          setNewProject({
            name: '',
            year: '',
            description: '',
            technologies: '',
          });
      
          setIsAdding(false);
        };
      
        const handleEditProject = (index) => {
          setIsAdding(true);
          setNewProject(projects[index]);
          setEditingIndex(index);
        };
      
        const handleDeleteProject = (index) => {
          const updatedProjects = [...projects];
          updatedProjects.splice(index, 1);
          setProjects(updatedProjects);
        };
      
        return (
          <div className="view-project">
            <div className="projects">
              <h2>Projects</h2>
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>
                    <h3>{project.name}</h3>
                    <p> <span>Year:</span> {project.year}</p>
                    <p><span>Description: </span>{project.description}</p>
                    <p><span>Technologies:</span> {project.technologies}</p>
                    <div className="project-button">
                    <button onClick={() => handleEditProject(index)}>Edit</button>
                    <button onClick={() => handleDeleteProject(index)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <h3>{editingIndex === -1 ? 'Add a Project' : 'Edit Project'}</h3>
                {isAdding && (
                  <div>
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
                  </div>
                )}
                <button onClick={handleAddProject}>
                  {editingIndex === -1 ? 'Add' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        );
      };
      
      
  

export default Project;
