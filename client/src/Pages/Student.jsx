import { useState } from 'react'
import '../components/admin/Dashboard.css'
import Sidebar from '../components/admin/studentsidebar'
import StudentProfile from '../components/student/studentprofile'


function Students() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
          {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <StudentProfile />
    </div>
  )
}

export default Students
