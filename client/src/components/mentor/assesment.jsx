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

const Assesment = () => {

  const [x, setX] = useState(0);

  const [page, setPage] = useState(0);
  const componentList = [
    <InternInfo
  page={page}
  setPage={setPage}
  x={x}
  setX={setX}
/>, 

    <ProjectInfo
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
  
    <Evaluation
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}
  />,
  <Evaluation2
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}
  />,
  <Evaluation3
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}
  />, 
  <Evaluation4
  page={page}
  setPage={setPage}
  x={x}
  setX={setX}
/>,
  <MentorInfo
  page={page}
  setPage={setPage}
  x={x}
  setX={setX}
/>, 
 <ComInfo
 page={page}
 setPage={setPage}
 x={x}
 setX={setX}
/>,

  ];


  return (
    
    <div className="mentorform">
     <div className="progress-bar">
      <div style={{width: page === 0? "12%": page === 1? "24%": page === 3? "35%": page === 4? "49%":page === 5? "60%":page === 6? "75%":page === 7? "84%" : "100%"}}></div>
    </div> 

     
      <div>{componentList[page]}</div>

    
    </div>

  );
};

export default Assesment;
