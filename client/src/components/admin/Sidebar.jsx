import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useLogout } from '../../hooks/useLogout';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../services/helper';


function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate();
    const { logout } = useLogout()
    const handleClick = () => {
        logout()
        try {
            axios.get(`${BASE_URL}/InterConnect/admin/logout`
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
         
                <MenuItem className='side-menu' icon={<img src="home.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                <a href="/">
                     Home
                </a></MenuItem>
            

                    <SubMenu label="Comapany" icon={<img src="com.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                        <MenuItem>  <a href="/CompanyList"> See CompanyList</a></MenuItem>
                        <MenuItem>  <a href="/AddCompany"> Add Company</a></MenuItem>
                    </SubMenu>

                    <SubMenu label="Student" icon={<img src="stu.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    <MenuItem>  <a href="/SeeStudents"> See StudentList</a></MenuItem>
                        <MenuItem>  <a href="/AddStudent"> Add Student</a></MenuItem>
                    </SubMenu>

                    <MenuItem icon={<img src="guide.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    <a href="/AddguideLine">
                     Add Guideline
                </a></MenuItem>
                    <MenuItem icon={<img src="cvcv.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                        CV Sending</MenuItem>
                    <MenuItem icon={<img src="notifi.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    <a href="/SendNotifi">
                     Notification
                </a></MenuItem>
                    <MenuItem onClick={handleClick} icon={<img src="logout.png"alt="InternConnect Logo"   style={{ width: '20px', height: '20px' }}   />}>
                    Log out</MenuItem>
                

            </Menu>
      
          
    </aside>
  )
}

export default Sidebar