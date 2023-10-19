import { useState } from 'react'
import '../components/admin/Dashboard.css'
import '../components/admin/Add.css'
import Sidebar from '../components/admin/Sidebar'
import Addstudent from '../components/admin/StudentCreation'



function AddStudent() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Addstudent/>
    </div>
  )
}

export default AddStudent
