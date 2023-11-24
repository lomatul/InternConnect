// ViewProfile.jsx
import React from 'react';
import { motion } from "framer-motion";


const ViewProfile = ({ userData, page, setPage,x,setX }) => {
  return (
    <div>

<button
      onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page); setX(0);  }}>
      Profile </button>
      
          <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page + 1); setX(1000);}}>
              Edit 
            </button>
          <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page + 2); setX(2000);}}>
              Project 
            </button>


    <motion.div                            //updated the div tag
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      > 
      

   
    <div className="view-profile">
      
    <img
            src={userData.image}
            alt="Profile"
          />

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
        <p><span>{userData.hobbies}</span></p>
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
        <p className='link'><span>{userData.externalLinks}</span></p>
      </div>

    

    </div>

    </motion.div>

    </div>
  );
};

export default ViewProfile;
