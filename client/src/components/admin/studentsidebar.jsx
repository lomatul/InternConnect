import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import axios from "axios";


function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate();
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
        try {
            axios.get('http://localhost:4000/InterConnect/admin/logout'
            ).then((response)=>{
                console.log(response)
                
                navigate("/")
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
          } catch (error) {
            console.error('An error occurred:', error);
          }
    }
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img
            src="Ourlogobk.png"
            alt="InternConnect Logo"
            style={{ width: '150px', height: '150px' }}
        />
             
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

    
          
            <Menu >
         
                <MenuItem icon={<img src="home.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                <a href="/">
                     Home
                </a></MenuItem>
               
                    <MenuItem icon={<img src="stu.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    <a href=" /Student"> Profile</a></MenuItem>
                    <MenuItem icon={<img src="cvcv.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    <a href=" /AddCV"> CV Upload </a></MenuItem>
                    <MenuItem icon={<img src="notifi.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                        Notification</MenuItem>
                    <MenuItem icon={<img src="logout.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    <button onClick={handleClick}>Log out</button></MenuItem>

            </Menu>
      
          
    </aside>
  )
}

export default Sidebar