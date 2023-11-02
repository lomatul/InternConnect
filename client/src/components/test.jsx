import React from 'react';

import { useState } from "react";
  function Test(){

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
              <form action="#" className="admin-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>

              </form>
              <form action="#" className="student-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>

              </form>
            </div>
          </div>
    
          <div className="panels-logincontainer">
            <div className="panel left-panel">
              <div className="logincontent">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid!
                </p>
                <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                  Sign up
                </button>
              </div>
              <img src="img/log.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="logincontent">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
                <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                  Sign in
                </button>
              </div>
              <img src="img/register.svg" className="image" alt="" />
            </div>
          </div>
        </div>
      );
    };

  export default Test