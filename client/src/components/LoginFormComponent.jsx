// In LoginFormComponent.js
import React from 'react';
import '../components/login.css';
import axios from "axios";
import { useState } from "react";

const LoginFormComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
        await axios.post('http://localhost:3000/InterConnect/student/login', {email, password}
        ).then((response)=>{
            console.log(response)
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
}
  return (
    <div className="logincontainer">
      <form onSubmit={handleSubmit}>
        <p>Welcome</p>
        <input type="email" placeholder="Enter your Email" required value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="password" placeholder="Enter your password" required  onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
        <input type="submit" value="Sign in" /> <a href="/"></a><br />
        <a href="/Updatepassword">Forget Password ?</a><br />
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
