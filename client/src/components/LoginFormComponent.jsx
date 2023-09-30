// In LoginFormComponent.js
import React from 'react';
import '../components/login.css';

const LoginFormComponent = () => {
  return (
    <div className="logincontainer">
      <form>
        <p>Welcome</p>
        <input type="email" placeholder="Enter your Email" required /> <br />
        <input type="password" placeholder="Enter your password" required /> <br />
        <input type="submit" value="Sign in" /> <a href="/Updatepassword"></a><br />
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

export default LoginFormComponent;
