import '../components/test.css'
import Navbar from "../components/Navbar/navbar"
import '../components/Navbar/navbar.css'
import SendNotification from '../components/notification/notifications'



function SendNotifi() {
 

  return (
    <div className='newAdmin'>   
     <Navbar/>
      <SendNotification/>
    </div>
  )
}

export default SendNotifi
