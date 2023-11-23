import React, { useState, useRef } from "react";
import "./Modal.css"; // Replace with the actual path to your stylesheet
import SignUp from "./SignUp";
import PersonalInfo from "./PersonalInfo";
import LocationInfo from "./LocationInfo";



const Modal = () => {

  const [x, setX] = useState(0);

  const [page, setPage] = useState(0);
  const componentList = [
    <SignUp
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <PersonalInfo
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <LocationInfo
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />, 

  ];

 
     return(
      <div className="App">
          <div className="progress-bar">
      <div style={{width: page === 0? "25%": page === 1? "50%": page === 2? "75%" : "100%"}}></div>
    </div> 

     
      <div>{componentList[page]}</div>

    
    </div>

    );
  };
export default Modal;
