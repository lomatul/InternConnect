
import React from 'react';
// import '../components/login.css';


const Updatepassword = () => {
  return (
    <div className="logincontainer">
      <form>
        <p>Update Password</p>
        <input type="password" placeholder="Enter your new Password" required /> <br />
        <input type="password" placeholder="Confirm your password" required /> <br />
        <input type="password" placeholder="Enter your old Password" required /> <br />
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
