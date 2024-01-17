// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import "../../test.css";
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
import { BASE_URL } from "../../../services/helper.js"

const Assesment = () => {
  const {mentorid, StudentId} = useParams();
  const [page, setPage] = useState(0);
  const [feedback, setFeedback] = useState([]);


  useEffect(() => {
    console.log("Id check", mentorid, StudentId);
    try{
      const fetchdata = async () => {
        await axios.get(`${BASE_URL}/InterConnect/mentor/getAssesment/${mentorid}/${StudentId}`)
        .then((response) => {
          console.log(response)
          setFeedback(response.data.assesment.assesment);
        })
        .catch((error) => {
          console.error('An error occurred while fetching Assesment:', error);
        });
      }
      fetchdata();
    } catch (error) {
      console.error('An error occurred while fetching assesment data:', error);
    }
    
  }, []);



  const FormTitles = ["Intern's Basic Information", "Project Assignments", "Assessment", "Assessment","Assessment","Assessment","Your Information", "Company Information"];

  const PageDisplay = () => {
    const pages = [InternInfo,ProjectInfo,Evaluation,Evaluation2,Evaluation3,Evaluation4, MentorInfo,ComInfo ];
    const Component = pages[page];
    return <Component  feedbackvalue={feedback} />;
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

              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
