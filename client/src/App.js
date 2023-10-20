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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/Updatepassword" element = {<LoginNewPassword/>} />
        {/* <Route path="/Admin" element = {<Fileupload/>} /> */}
        <Route path="/About" element = {<Aboutus/>} />
        <Route path="/CompanyList" element = {<companies/>} />
        <Route path="/Guildeline" element = {<Guildeline/>} />
        <Route path="/Admin" element = {<Admin/>} />
        <Route path="/AddCompany" element = {<AddCompany/>} />
        <Route path="/Addguideline" element = {<AddguideLine/>} />
        <Route path="/Contact" element = {<Contacts/>} />
        <Route path="/Forget" element = {<Forgets/>} />
        <Route path="/Student" element = {<Students/>} />
        {/* <Route path="/NotFound" element = {<page404/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
