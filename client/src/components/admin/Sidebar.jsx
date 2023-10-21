import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useLogout } from '../../hooks/useLogout';
import axios from "axios";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
        try {
            axios.get('http://localhost:4000/InterConnect/admin/logout'
            ).then((response)=>{
                console.log(response)
                
                // navigate("/Admin")
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
            {/* <img
            src="logo.png"
            alt="InternConnect Logo"
            style={{ width: '200px', height: '200px' }}
        /> */}
                 InternConnect
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

    
          
            <Menu >
         
                <MenuItem icon={<img src="logo.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    Home</MenuItem>
            

                    <SubMenu label="Comapany">
                        <MenuItem>See Companylist</MenuItem>
                        <MenuItem>Add Company</MenuItem>
                    </SubMenu>

                    <SubMenu label="Student">
                        <MenuItem>See Studentlist</MenuItem>
                        <MenuItem>Add Student</MenuItem>
                    </SubMenu>

                <MenuItem>Add Guideline</MenuItem>

                <MenuItem>CV Sending</MenuItem>
                <MenuItem>Notification</MenuItem>
                <MenuItem><button onClick={handleClick}>Log out</button></MenuItem>

            </Menu>
      
          
    </aside>
  )
}

export default Sidebar