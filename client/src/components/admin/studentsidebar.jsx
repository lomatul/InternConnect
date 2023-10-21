import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Sidebar({openSidebarToggle, OpenSidebar}) {
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
                <MenuItem>LogOut</MenuItem>

            </Menu>
      
          
    </aside>
  )
}

export default Sidebar