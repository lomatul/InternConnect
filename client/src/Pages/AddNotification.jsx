import { useState } from 'react'
import '../components/admin/Dashboard.css'
import '../components/admin/Add.css'
import Sidebar from '../components/admin/Sidebar'
import SendNotification from '../components/notification/notifications'



function SendNotifi() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='AdminDashboard'>   
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <SendNotification/>
    </div>
  )
}

export default SendNotifi
