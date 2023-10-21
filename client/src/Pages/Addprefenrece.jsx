import { useState } from 'react'
import '../components/admin/Dashboard.css'
import '../components/admin/Add.css'
import Sidebar from '../components/admin/studentsidebar'
import Prefernces from '../components/student/preference'
import '../components/student/cv'


function Addprefer() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Prefernces/>
    </div>
  )
}

export default Addprefer
