import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LoginNewPassword from "./Pages/UpdatePassword";
import Fileupload from "./Pages/AdminFileUpload";
import Aboutus from "./Pages/AboutUs";
import companies from "./Pages/CompanyList";
import Guildeline from "./Pages/GuideLine";
import Admin from "./Pages/Admin";
import AddCompany from "./Pages/AddCompany";


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
