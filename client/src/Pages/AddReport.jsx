import '../components/test.css'
import Navbar from "../components/Navbar/stunavbar"
import '../components/Navbar/navbar.css'
import UploadReport from '../components/student/report'



function Addreport() {
  return (
    <div className='newAdmin'>   
        <Navbar/>
      <UploadReport />
    </div>
  )
}

export default Addreport

