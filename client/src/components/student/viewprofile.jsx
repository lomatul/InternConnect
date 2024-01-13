import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';



const ViewProfile = ({ userData, page, setPage, x, setX }) => {
  const [hired, setHired] = useState(false);
  const [companyName, setCompanyName] = useState('');


  const handleHiredClick = async () => { 
    try {
      if (!companyName) {
        console.error('Company name is required.');
        return;
      }
  
      const { name, Id } = userData;

      await axios.post('http://localhost:4000/InterConnect/company/sendHiredNotifyingMail', { companyName, studentId: Id, studentName: name, });
  
      setHired(true);

    } catch (error) {
      console.error('Error sending hired notification:', error);
    }
  };


  return (
    <div>

       <a style={{ marginRight:"50px", textDecoration:"underline" ,fontSize:"18px" , cursor:"pointer"}}  
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setPage(page);
          setX(0);
        }}
        > 
       <img src="user.png"alt="InternConnect Logo"   style={{width: '40px', height: '40px' , marginBottom:"-10px" }}   />
      Profile
    </a>



    <a style={{ marginRight:"50px", textDecoration:"underline" ,fontSize:"18px" , cursor:"pointer" }}   
      onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setPage(page + 1);
            setX(1000);
          }}
          > 
        <img src="edit.png"alt="InternConnect Logo"   style={{width: '40px', height: '40px' , marginBottom:"-10px"}}    />
        Edit Profile
      </a>



      <a style={{ marginRight:"30px", textDecoration:"underline" ,fontSize:"18px",  cursor:"pointer" }}  
     onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setPage(page + 2);
          setX(2000);
        }}> 
       <img src="project.png"alt="InternConnect Logo"   style={{width: '40px', height: '40px' , marginBottom:"-10px"}}    />
      Projects
    </a>




      <motion.div
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
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

        {!hired && (
          <div className="Hiringform">
            <p>
              If You are already hired by any company for Internship please fill
              out the form
            </p>
            <div className="form-group">
              <label htmlFor="" name="companyName"> Company Name<span>*</span></label>
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Give name" />            
            </div>

            <div className="form-group">
              <label htmlFor=""> Position <span>*</span></label>
              <input type="text" placeholder="Position" />
            </div>

            <div className="form-group">
              <label htmlFor="">
                {" "}
                Hired Date <span>*</span>
              </label>
              <input type="date" placeholder="Select Date" />
            </div>
            <div className="hired">
              <button onClick={handleHiredClick}>Hired</button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ViewProfile;
