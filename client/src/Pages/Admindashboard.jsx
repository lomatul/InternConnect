import { useState } from 'react'
import '../components/admin/Dashboard.css'
import Sidebar from '../components/admin/Sidebar'
import Addstudent from '../components/admin/StudentCreation'




function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
          {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Addstudent />
    </div>
  )
}

export default Admin
