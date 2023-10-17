import { useState } from 'react'
import '../components/admin/Dashboard.css'
import Sidebar from '../components/admin/Sidebar'
import Dashboard from '../components/admin/Dashboard'
import AdminProfile from '../components/admin/adminprofile'


function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
          {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminProfile />
    </div>
  )
}

export default Admin
