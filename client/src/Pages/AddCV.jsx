import '../components/test.css'
import Navbar from "../components/Navbar/stunavbar"
import '../components/Navbar/navbar.css'
import UploadCV from '../components/student/cv'




function Addcv() {


  return (
    <div className='newAdmin'>   
        <Navbar/>
      <UploadCV />
    </div>
  )
}

export default Addcv
