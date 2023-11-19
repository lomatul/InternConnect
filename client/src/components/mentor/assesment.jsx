// Import necessary libraries and components
import React, { useState } from 'react';
import "../test.css";
import "./mentor.css";
import ComInfo from './companyinfo';
import ProjectInfo from './projectassesment';
import MentorInfo from './mentorinfo';
import Evaluation from './evalute';

const Assesment = () => {
  const [page, setPage] = useState(0);

  const FormTitles = ["Company Info", "Project Assignments", "Mentor Info", "Evaluation"];

  const PageDisplay = () => {
    const pages = [ComInfo, ProjectInfo, MentorInfo, Evaluation];
    const Component = pages[page];
    return <Component />;
  };

  return (
    <div className="mentorform">
      <div className="progressbar">
        <div style={{ width: page * 25 + "%" }}></div>
      </div>

      <div className="form-container">
        <div className="mentorheader">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="page-transition-container">
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
