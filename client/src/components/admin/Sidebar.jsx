import React from 'react'


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

        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <a href="/">
                     Home
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Admin">
                     Add Students
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/AddCompany">
                    Add Companies
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/AddguideLine">
                     Add Guideline
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                     CV Sending
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                   Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                   Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar