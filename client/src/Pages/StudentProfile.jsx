import '../components/test.css'
import Navbar from "../components/Navbar/stunavbar"
import '../components/Navbar/navbar.css'
import StudentProfile from '../components/student/studentprofile'
// import Project from '../components/student/project'

function Proflie() {
 
  return (
    <div className='newAdmin'>   
   <Navbar/>
   <StudentProfile/>
   {/* <Project/> */}
    </div>
  )
}

export default Proflie
