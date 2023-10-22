import {BrowserRouter, Routes, Route} from "react-router-dom"
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







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/Updatepassword" element = {<LoginNewPassword/>} />
        <Route path="/About" element = {<Aboutus/>} />
        <Route path="/CompanyList" element = {<Companies/>} />
        <Route path="/Guildeline" element = {<Guildeline/>} />
        <Route path="/Admin" element = {<Admin/>} />
        <Route path="/AddCompany" element = {<AddCompany/>} />
        <Route path="/Addguideline" element = {<AddguideLine/>} />
        <Route path="/Contact" element = {<Contacts/>} />
        <Route path="/Forget" element = {<Forgets/>} />
        <Route path="/Student" element = {<Students/>} />
        <Route path="/Adminlogin" element = {<AdminLogin/>} />
        <Route path="/AddStudent" element = {<AddStudent/>} />
        <Route path="/NotFound" element = {<Page404/>} />
        <Route path="/AddCV" element = {<Addcv/>} />
        <Route path="/Addprefer" element = {<Addprefer/>} />
        <Route path="/SeeCompanies" element = {<SeeCompanies/>} />
        <Route path="/SeeStudents" element = {<Studentslist/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
