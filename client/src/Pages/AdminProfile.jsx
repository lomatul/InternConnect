import { useState } from 'react'
import '../components/admin/Dashboard.css'
import '../components/admin/Add.css'
import Sidebar from '../components/admin/Sidebar'
import Adminprofile from '../components/admin/adprofile'


function profileadmin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
          {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Adminprofile/>
    </div>
  )
}

export default  profileadmin;

