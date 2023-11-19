import React from "react";
import "./Modal.css";
import axios from "axios";
import { useState } from "react";

  const Modal = () => {
    const [isAdminMode, setIsAdminMode] = useState(false);

    const handleSignUpClick = () => {
      setIsAdminMode(true);
    };
  
    const handleSignInClick = () => {
      setIsAdminMode(false);
    };
  
    return (


      <div className={`logincontainer ${isAdminMode ? 'admin-mode' : ''}`}>
            <div className="forms-logincontainer">
                  <div className="signin-signup">
      
                    <form className="admin-form">
                    
      
                      <input type="Text" placeholder="Enter your Username" /> <br />
                      <input type="password" placeholder="Enter your password" required  /> <br />
                      <span style={{ color: 'red' }}></span>
                      <input type="submit" value="Sign in" /> <a href="/Admin"></a><br />
                      {/* <a href="/Forget">Forget Password ?</a><br /> */}
                    </form>
      
      
                    <form  className="student-form">
                      
      
                      
                        <input type="Text" placeholder="Enter your Student ID" /> <br />
                        
                              
                      <input type="password" placeholder="Enter your password"/> <br />      
                        
      
                      <input type="submit" value="Sign in" /> <a href="/Student"></a><br />
                  <a href="/Forget">Forgot Password ?</a><br />
      
                    </form>
                  </div>
                </div>
          
                <div className="panels-logincontainer">
                  <div className="panel left-panel">
                    <div className="logincontent">
                    <h2 className="title">Welcome Admin Login</h2>
                        <p>You are not a Admin ? Go to Student Login</p>
                      <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                        Student Login
                      </button>
                    </div>
                    <img src="admin-login.png" className="image" alt="" />
                  </div>
                  <div className="panel right-panel">
                    <div className="logincontent">
                     <h2 className="title">Welcome Student Login</h2>
                        <p>You are not a Student ? Go to Admin Login </p>
                      <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                        Admin Login
                      </button>
                    </div>
                    <img src="stu-login.png" className="image" alt="" />
                  </div>
                </div>
              </div>
      
      
        );
      }
      
export default Modal;