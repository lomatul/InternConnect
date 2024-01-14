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
import Proflie from "./Pages/StudentProfile";
import CvSend from "./Pages/Cvsend";
import AddAssesment from "./Pages/Addassesment";
import AddMentor from "./Pages/Mentor";
import Modal from "./components/modal/modal";
import ViewAssesment from "./Pages/Viewassesment"
import History from "./Pages/comhistory";
import GradeSend from "./Pages/Gradesubmit";
import TestModal from "./Pages/test";
import { ToastContainer, toast } from 'react-toastify';
import StudentStatus from "./Pages/studentstatus";
import GradeStatus from "./Pages/studentgrade";
import SendDeadline from "./Pages/deadline";
import Addreport from "./Pages/AddReport";





function App() {
  const { userstudent } = useAuthContext()
  const {useradmin} = useAuthContext()
  
  return (
    <BrowserRouter>
       <ToastContainer />
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
        <Route path="/Student" element = {userstudent?<Students/>:<Page404/>} />
        <Route path="/AddStudent" element = {useradmin?<AddStudent/>:<Page404/>} />
        <Route path="/NotFound" element = {<Page404/>} />
        <Route path="/AddCV" element = {userstudent?<Addcv/>:<Page404/>} />
        <Route path="/Addprefer" element = {userstudent?<Addprefer/>:<Page404/>} />
        <Route path="/SeeCompanies" element = {userstudent?<SeeCompanies/>:<Page404/>} />
        <Route path="/SeeStudents" element = {useradmin?<Studentslist/>:<Page404/>} />
        <Route path="/Proflie" element = {userstudent?<Proflie/>:<Page404/>} />
        <Route path="/SendNotifi" element = {useradmin?<SendNotifi/>:<Page404/>} />
        <Route path="/Test" element = {<Test/>} />
        <Route path="/Cvsend" element = {<CvSend/>} />
        <Route path="/AddAssesment" element = {<AddAssesment/>} />
        <Route path="/AddMentor" element = {<AddMentor/>} />
        <Route path="/AddMentor/:id" element = {<AddMentor/>} />
        <Route path="/Modal" element = {<TestModal/>} />
        <Route path="/AddAssesment/:mentorid/:StudentId" element = {<AddAssesment/>} />
        <Route path="/ViewAssesment/:mentorid/:StudentId" element = {<ViewAssesment/>} />
        <Route path="/GradeSend" element = {<GradeSend/>} />
        <Route path="/History" element = {<History/>} />
        <Route path="/Status" element = {<StudentStatus/>} />
        <Route path="/GradeStatus" element = {<GradeStatus/>} />
        <Route path="/Adddeadline" element = {<SendDeadline/>} />
        <Route path="/Addreport" element = {<Addreport/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
