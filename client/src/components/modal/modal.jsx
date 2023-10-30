import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal("children");
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>OTP Has been Sent</h1>
        </div>
        
        <div className="footer">

          
        </div>
      </div>
    </div>
  );
}

export default Modal;