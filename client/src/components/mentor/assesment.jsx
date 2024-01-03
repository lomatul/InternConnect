// Import necessary libraries and components
import React, { useState } from 'react';
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
import PDFDocument from './interninforesponsepdf'
import {pdf} from '@react-pdf/renderer';

const Assesment = () => {
  const [page, setPage] = useState(0);
  const [evaluation, setEvaluation] = useState([]);
  const [interninform, setInterninform] = useState([]);
  const [evaluatform, setEvaluateform] = useState([]);
  const [companyform, setCompanyform] = useState([]);



  const handleRadiochange= (group, value) => {
    setEvaluation(prevValues => ({
      ...prevValues,
      [group]: value,
    }))
    // console.log(evaluation)
  }



  
  const handlesubmit = async() =>{

    
    var sum=0;
    Object.values(evaluation).forEach((value) =>{ sum=sum+Number(value); console.log("whole object for show", sum)});
 
  
  }
  const FormTitles = ["Intern's Basic Information", "Project Assignments", "Assessment", "Assessment","Assessment","Assessment","Your Information", "Company Information"];

  const PageDisplay = () => {
    const pages = [InternInfo,ProjectInfo,Evaluation,Evaluation2,Evaluation3,Evaluation4, MentorInfo,ComInfo ];
    const Component = pages[page];
    return <Component value={evaluation} change={handleRadiochange}/>;
  };

  return (
    <div className="mentorform">
      <div className="progressbar">
        <div style={{ width: page * 12.5 + "%" }}></div>
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
    </div>
  );
};

export default Assesment;
