import { useState } from 'react'
import '../components/admin/Dashboard.css'
import '../components/admin/Add.css'
import Sidebar from '../components/admin/Sidebar'
import Add from '../components/admin/AddCompany'



function AddCompany() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Add/>
    </div>
  )
}

export default AddCompany
