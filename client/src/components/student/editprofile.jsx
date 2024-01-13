// EditProfile.jsx
import React from 'react';
import { motion } from "framer-motion";

const EditProfile = ({ userData, setUserData, handleImageChange, handleSaveClick , page, setPage,x,setX }) => {
  return (

    <div>


            <a style={{ marginRight:"50px", textDecoration:"underline" ,fontSize:"18px" , cursor:"pointer"}}  
                   onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page-1); setX(-1000);  }}>
                  <img src="user.png"alt="InternConnect Logo"   style={{width: '40px', height: '40px' , marginBottom:"-10px" }}   />
                  Profile
                </a>



                <a style={{ marginRight:"50px", textDecoration:"underline" ,fontSize:"18px" , cursor:"pointer" }}   
                  onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page); setX(0);}}>
                    <img src="edit.png"alt="InternConnect Logo"   style={{width: '40px', height: '40px' , marginBottom:"-10px"}}    />
                    Edit Profile
                </a>



                <a style={{ marginRight:"30px", textDecoration:"underline" ,fontSize:"18px",  cursor:"pointer" }}  
                  onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setPage(page +1); setX(1000);}}>
                  <img src="project.png"alt="InternConnect Logo"   style={{width: '40px', height: '40px' , marginBottom:"-10px"}}    />
                  Projects
               </a>





    <motion.div                            //updated the div tag
    initial={{ x: x }}
    transition={{ duration: 1 }}
    animate={{ x: 0 }}
  >


    <div className="edit-profile">
      <label htmlFor=""> Hobby</label>
      <input
        type="text"
        name="Hobby"
        value={userData.hobbies}
        onChange={(e) => setUserData({ ...userData, hobbies: e.target.value })}
      />
      <label htmlFor=""> Skills</label>
      <input
        type="text"
        name="Skills"
        value={userData.skills}
        onChange={(e) => setUserData({ ...userData, skills: e.target.value })}
      />
      <label htmlFor=""> Language Preference</label>
      <input
        type="text"
        name="Language Preference"
        value={userData.languageEfficiency}
        onChange={(e) => setUserData({ ...userData, languageEfficiency: e.target.value })}
      />
      <label htmlFor=""> Experience</label>
      <input
        type="text"
        name="Experience"
        value={userData.pastExperiences}
        onChange={(e) => setUserData({ ...userData, pastExperiences: e.target.value })}
      />

      <label htmlFor=""> Link </label>
      <input
        type="text"
        name="link"
        value={userData.externalLinks}
        onChange={(e) => setUserData({ ...userData, externalLinks: e.target.value })}
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

</motion.div>

</div>
  );
};

export default EditProfile;
