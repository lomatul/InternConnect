import Add from '../components/admin/AddCompany'
import '../components/test.css'
import Navbar from "../components/Navbar/navbar"
import '../components/Navbar/navbar.css'


function AddCompany() {


  return (
    <div className='newAdmin'>   
       <Navbar/>
      <Add/>
    </div>
  )
}

export default AddCompany
