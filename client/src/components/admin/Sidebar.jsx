import React from 'react'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                 InternConnect
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                     Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Add">
                    Add Companies
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Add Guideline
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     CV Sending
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                   Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                   Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar