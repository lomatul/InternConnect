import '../components/test.css'
import Navbar from "../components/Navbar/navbar"
import '../components/Navbar/navbar.css'
import Adddeadline from '../components/admin/deadline'


function SendDeadline() {
 

  return (
    <div className='newAdmin'>   
     <Navbar/>
      <Adddeadline/>
    </div>
  )
}

export default SendDeadline
