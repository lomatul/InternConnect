
import React from 'react';
import '../components/login/login.css';
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
// import '../components/login.css';


const Updatepassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const Id=location.state.Id;

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [checkpassword, setCheckPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')




  useEffect(() => {
    if(newPassword!==checkpassword){
      setConfirmpassword("Password doesn't match");
    }else{
      setConfirmpassword('');
    }
  }, [checkpassword])

  const handleSubmit = async(event) => {
    event.preventDefault()
    if(newPassword===checkpassword){
      try {
          await axios.post('http://localhost:4000/InterConnect/student/updatePassword/'+Id, {currentPassword, newPassword}
          ).then((response)=>{
              console.log(response)
              navigate('/');
          }).catch((error)=>{
              if (error.response) {
                console.log(error.response);
                console.log("server responded");
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);
              }
          });

          // if (response.status === 200) {
          //   console.log('File uploaded successfully');
          // } else {
          //   console.error('File upload failed');
          // }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }else{
        setConfirmpassword("Password doesn't match");
      }
    }
  return (
    <div className="logincontainer">
      <form onSubmit={handleSubmit}>
        <p>Update Password</p>
        <input type="password" placeholder="Enter your new Password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /> <br />
        <input type="password" placeholder="Confirm your password" required value={checkpassword} onChange={(e) =>setCheckPassword(e.target.value)}/> <br />
        {confirmpassword && <div>{confirmpassword}</div>}
        <input type="password" placeholder="Enter your old Password" required value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/> <br />
        <input type="submit" value="Sign in" /><br />
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
        <div className="drop drop-6"></div>
        <div className="drop drop-7"></div>
        <div className="drop drop-8"></div>
      </div>
    </div>
  );
}

export default Updatepassword;
