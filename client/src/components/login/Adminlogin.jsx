import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {useAuthContext} from "../../context/useAuthcontext"

const AdminLogin= () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {dispatch} = useAuthContext();

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
        await axios.post('http://localhost:4000/InterConnect/admin/postlogin', {username, password}
        ).then((response)=>{
            console.log(response)
            const User = response.data.User
            console.log(User)
            dispatch({type: 'LOGINADMIN', payload: User})
            //temporary saving in local storage
            localStorage.setItem('adminuser', JSON.stringify(User))
            navigate("/Admin")
        }).catch((error)=>{
            if (error.response) {
              if(error.response.status===308){
                console.log("status", error.response.data.redirectUrl)
                navigate(error.response.data.redirectUrl, {state: {Id:error.response.data.id}});
                }
                console.log(error.response);
                console.log("server responded");
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);
              }
        });

      } catch (error) {
        console.error('An error occurred:', error);
      }
}
  return (
    <div className="logincontainer">
      <form onSubmit={handleSubmit}>
        <p>Welcome</p>
        <input type="Text" placeholder="Enter your Username" required value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        <input type="password" placeholder="Enter your password" required  onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
        <input type="submit" value="Sign in" /> <a href="/Admin"></a><br />
        {/* <a href="/Forget">Forget Password ?</a><br /> */}
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

export default AdminLogin;
