import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LoginNewPassword from "./Pages/UpdatePassword";
import Aboutus from "./Pages/AboutUs";
import Guildeline from "./Pages/GuideLine";
import AddCompany from "./Pages/AddCompany";
import AddguideLine from "./Pages/AddGuideline";
import Admin from "./Pages/Admindashboard";
import Contacts from "./components/contact/contact";
import Forgets from "./components/contact/forget";
import Students from "./Pages/Student";
import Companies from "./Pages/CompanyList";
import AdminLogin from "./components/login/Adminlogin";
import AddStudent from "./Pages/AddStudent";
import Addcv from "./Pages/AddCV";
import Addprefer from "./Pages/Addprefenrece";
import SeeCompanies from "./Pages/SeeCompany";
import Page404 from "./components/notfound";
import Studentslist from "./Pages/SeeStudent";
import { useAuthContext } from "./context/useAuthcontext";
import SendNotifi from "./Pages/AddNotification";
import { Toaster } from 'react-hot-toast';
import Test from "./components/test";
import Dropdown from "./components/modal/select";
import Proflie from "./Pages/StudentProfile";

function App() {
  const { userstudent } = useAuthContext()
  const {useradmin} = useAuthContext()
  
  return (
    <BrowserRouter>
      <Toaster  position="top-right" reverseOrder={false} />
      <Routes>
    
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/Updatepassword" element = {<LoginNewPassword/>} />
        <Route path="/About" element = {<Aboutus/>} />
        <Route path="/CompanyList" element = {useradmin?<Companies/>:<Page404/>} />
        <Route path="/Guildeline" element = {<Guildeline/>} />
        <Route path="/Admin" element = {useradmin?<Admin/>:<Page404/>} />
        <Route path="/AddCompany" element = {useradmin?<AddCompany/>:<Page404/>} />
        <Route path="/Addguideline" element = {<AddguideLine/>} />
        <Route path="/Contact" element = {<Contacts/>} />
        <Route path="/Forget" element = {<Forgets/>} />
        <Route path="/Select" element = {<Dropdown/>} />
        <Route path="/Student" element = {userstudent?<Students/>:<Page404/>} />
        <Route path="/Adminlogin" element = {<AdminLogin/>} />
        <Route path="/AddStudent" element = {useradmin?<AddStudent/>:<Page404/>} />
        <Route path="/NotFound" element = {<Page404/>} />
        <Route path="/AddCV" element = {userstudent?<Addcv/>:<Page404/>} />
        <Route path="/Addprefer" element = {userstudent?<Addprefer/>:<Page404/>} />
        <Route path="/SeeCompanies" element = {userstudent?<SeeCompanies/>:<Page404/>} />
        <Route path="/SeeStudents" element = {useradmin?<Studentslist/>:<Page404/>} />
        <Route path="/Proflie" element = {userstudent?<Proflie/>:<Page404/>} />
        <Route path="/SendNotifi" element = {useradmin?<SendNotifi/>:<Page404/>} />
        <Route path="/Test" element = {<Test/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
