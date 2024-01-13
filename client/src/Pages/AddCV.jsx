import '../components/test.css'
import Navbar from "../components/Navbar/stunavbar"
import '../components/Navbar/navbar.css'
import UploadCV from '../components/student/cv'
import UploadReport from '../components/student/report'



function Addcv() {


  return (
    <div className='newAdmin'>   
        <Navbar/>
      <UploadCV />
    </div>
  )
}

export default Addcv

// function Addreport() {


//   return (
//     <div className='newAdmin'>   
//         <Navbar/>
//       <UploadReport />
//     </div>
//   )
// }

// export default Addreport

