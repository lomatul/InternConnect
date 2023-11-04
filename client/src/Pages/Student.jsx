import '../components/test.css'
import Navbar from "../components/Navbar/stunavbar"
import '../components/Navbar/navbar.css'
import StudentDashboard from '../components/student/studentDashboard'

function Students() {
 
  return (
    <div className='newAdmin'>   
   <Navbar/>
   <StudentDashboard/>
    </div>
  )
}

export default Students
