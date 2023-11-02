import '../components/test.css'
import Navbar from "../components/Navbar/navbar"
import '../components/Navbar/navbar.css'
import Dashboard from "../components/admin/Dashboard"

function Admin() {
 
  return (
    <div className='newAdmin'>   
    <Navbar/>
    <Dashboard/> 
    </div>
  )
}

export default Admin
