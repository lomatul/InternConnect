import { useState } from 'react'
import '../components/admin/Dashboard.css'
import Sidebar from '../components/admin/Sidebar'
import Addguideline from '../components/admin/AddGuideline'


function AddguideLine() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
          {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Addguideline/>
    </div>
  )
}

export default AddguideLine
