import { useState } from 'react'
import '../components/test.css'
import Addstudent from '../components/admin/StudentCreation'
import Navbar from "../components/Navbar/navbar"
import '../components/Navbar/navbar.css'



function AddStudent() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='newAdmin'>   
          <Navbar/>
      <Addstudent />
    </div>
  )
}

export default AddStudent
