import { useState } from 'react'
import '../components/admin/Dashboard.css'
import Sidebar from '../components/admin/studentsidebar'
import UploadCV from '../components/student/cv'




function Addcv() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
          {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <UploadCV />
    </div>
  )
}

export default Addcv
