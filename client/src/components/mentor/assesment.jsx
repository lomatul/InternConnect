// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import "../test.css";
import "./mentor.css";
import ComInfo from './companyinfo';
import ProjectInfo from './projectassesment';
import MentorInfo from './mentorinfo';
import Evaluation from './evalute';
import Evaluation2 from './evalute2';
import Evaluation3 from './evalute3';
import Evaluation4 from './evaluate4';
import InternInfo from './interninfo';
import  html2pdf  from 'html2pdf.js';
import {pdf} from '@react-pdf/renderer';
import axios from "axios";
import {useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Assesment = () => {
  const {mentorid, StudentId} = useParams();

  const [x, setX] = useState(0);

  const [page, setPage] = useState(0);
  const [evaluation, setEvaluation] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [isdone, setIsdone]=useState(false);
  const [notassessedstudents, setNotassessedstudents] = useState([])
  const [mentor, setMentor] = useState('')




  const handleRadiochange= (group, value) => {
    setEvaluation(prevValues => ({
      ...prevValues,
      [group]: value,
    }))
    console.log(evaluation)
  }


  const handlefeedback= (group, value) => {
    setFeedback(prevValues => ({
      ...prevValues,
      [group]: value,
    }))
  }

  useEffect(() => {
    console.log("Id check", mentorid, StudentId);
    try{
      const fetchdata = async () => {
        await axios.get('http://localhost:4000/InterConnect/mentor/getmentorbyid/'+mentorid)
        .then((response) => {
          console.log(response)
          setMentor(response.data.Mentor);
        })
        .catch((error) => {
          console.error('An error occurred while fetching companies:', error);
        });
      }
      fetchdata();
    } catch (error) {
      console.error('An error occurred while fetching mentor data:', error);
    }
    
  }, []);

  useEffect(() => {
    console.log("Id check", mentorid, StudentId);
    try{
      console.log("Mentor", mentor);
      const assessedstudents= mentor.response.map((element)=>{return element.student_id})
      if(assessedstudents.includes(StudentId)){
        setIsdone(true);
        const unassesedstudents=mentor.assignedStudents.filter((element)=>!assessedstudents.includes(element));
        setNotassessedstudents(unassesedstudents);
      }
    } catch (error) {
      console.error('An error occurred while fetching mentor data:', error);
    }
    
  }, [mentor]);


  
  const handlesubmit = async() =>{

    console.log(feedback);
    
    var sum=0;
    Object.values(evaluation).forEach((value) =>{ sum=sum+Number(value); console.log("whole object for show", sum)});
    try {
      await axios.post('http://localhost:4000/InterConnect/mentor/AddAssesment', {Answer:feedback, mentorid, StudentId}
      ).then((response)=>{
      console.log(response)
      toast.success('Assesment stored', { position: "top-right" });
      }).catch((error)=>{
          if (error.response) {
              console.log(error.response);
              console.log("server responded");
              toast.error(error.response, { position: "top-right" });
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }



  
  }
  const FormTitles = ["Intern's Basic Information", "Project Assignments", "Assessment", "Assessment","Assessment","Assessment","Your Information", "Company Information"];

  const PageDisplay = () => {
    const pages = [InternInfo,ProjectInfo,Evaluation,Evaluation2,Evaluation3,Evaluation4, MentorInfo,ComInfo ];
    const Component = pages[page];
    return <Component value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}/>;
  };
  if(isdone){
    return(
    <div>You already have assessed this student.
      <div>Your unassessed students: 
        {notassessedstudents.map((element)=>
        (<div>element</div>)
        )}
      </div>
    </div>
    )
  }
  const componentList = [
    <InternInfo
  page={page}
  setPage={setPage}
  x={x}
  setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
/>, 

    <ProjectInfo
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
    />,
  
    <Evaluation
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
  />,
  <Evaluation2
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
  />,
  <Evaluation3
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
  />, 
  <Evaluation4
  page={page}
  setPage={setPage}
  x={x}
  setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
/>,
  <MentorInfo
  page={page}
  setPage={setPage}
  x={x}
  setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
/>, 
 <ComInfo
 page={page}
 setPage={setPage}
 x={x}
 setX={setX}  value={evaluation} change={handleRadiochange} feedback={handlefeedback} feedbackvalue={feedback}
/>,

  ];


  return (
    
    <div className="mentorform">
     <div className="progress-bar">
      <div style={{width: page === 0? "12%": page === 1? "24%": page === 3? "35%": page === 4? "49%":page === 5? "60%":page === 6? "75%":page === 7? "84%" : "100%"}}></div>
    </div> 

      <div className="form-container" id="form-container">
        <div className="mentorheader">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="page-container">
          {PageDisplay()}
        </div>
        <div className="mentorfooter">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handlesubmit();
                alert("FORM SUBMITTED");
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
     
      <div>{componentList[page]}</div>

    
    </div>

  );
};

export default Assesment;
