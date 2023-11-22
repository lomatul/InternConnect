import React, { useState, useRef } from "react";
import "./Modal.css"; // Replace with the actual path to your stylesheet

const Modal = () => {
  const [current, setCurrent] = useState(1);
  const slidePage = useRef(null);
  const bullet = useRef([]);
  const progressCheck = useRef([]);
  const progressText = useRef([]);

  const handleNext = (margin) => {
    setCurrent(current + 1);

    slidePage.current.style.marginLeft = margin;
    bullet.current[current - 1].classList.add("active");
    progressCheck.current[current - 1].classList.add("active");
    progressText.current[current - 1].classList.add("active");
  };

  const handlePrev = (margin) => {
    setCurrent(current - 1);

    slidePage.current.style.marginLeft = margin;
    bullet.current[current - 2].classList.remove("active");
    progressCheck.current[current - 2].classList.remove("active");
    progressText.current[current - 2].classList.remove("active");
  };

  const handleSubmit = () => {
    setCurrent(current + 1);

    bullet.current[current - 1].classList.add("active");
    progressCheck.current[current - 1].classList.add("active");
    progressText.current[current - 1].classList.add("active");

    setTimeout(() => {
      alert("Your Form Successfully Signed up");
      window.location.reload();
    }, 800);
  };

  
    return (
      <div className="modalcontainer">
        <header>Signup Form</header>
        <div className="progress-bar">
          <div className={`step ${current >= 1 ? 'active' : ''}`}>
            <p>Name</p>
            <div className="bullet">
              <span>1</span>
            </div>
            {current > 1 && <div className="check fas fa-check"></div>}
          </div>
          <div className={`step ${current >= 2 ? 'active' : ''}`}>
            <p>Contact</p>
            <div className="bullet">
              <span>2</span>
            </div>
            {current > 2 && <div className="check fas fa-check"></div>}
          </div>
          <div className={`step ${current >= 3 ? 'active' : ''}`}>
            <p>Birth</p>
            <div className="bullet">
              <span>3</span>
            </div>
            {current > 3 && <div className="check fas fa-check"></div>}
          </div>
          <div className={`step ${current >= 4 ? 'active' : ''}`}>
            <p>Submit</p>
            <div className="bullet">
              <span>4</span>
            </div>
            {current > 4 && <div className="check fas fa-check"></div>}
          </div>
        </div>
        <div className="form-outer">
          <form action="#">
            <div className={`page slide-page ${current === 1 ? 'active' : ''}`}>
              <div className="title">Basic Info:</div>
              <div className="field">
                <div className="label">First Name</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Last Name</div>
                <input type="text" />
              </div>
              <div className="field">
                <button className="firstNext next" onClick={() => handleNext("-25%")}>
                  Next
                </button>
              </div>
            </div>
            <div className={`page ${current === 2 ? 'active' : ''}`}>
              <div className="title">Contact Info:</div>
              <div className="field">
                <div className="label">Email Address</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Phone Number</div>
                <input type="Number" />
              </div>
              <div className="field btns">
                <button className="prev-1 prev" onClick={() => handlePrev("0%")}>
                  Previous
                </button>
                <button className="next-1 next" onClick={() => handleNext("-50%")}>
                  Next
                </button>
              </div>
            </div>
            <div className={`page ${current === 3 ? 'active' : ''}`}>
              <div className="title">Date of Birth:</div>
              <div className="field">
                <div className="label">Date</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Gender</div>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field btns">
                <button className="prev-2 prev" onClick={() => handlePrev("-25%")}>
                  Previous
                </button>
                <button className="next-2 next" onClick={() => handleNext("-75%")}>
                  Next
                </button>
              </div>
            </div>
            <div className={`page ${current === 4 ? 'active' : ''}`}>
              <div className="title">Login Details:</div>
              <div className="field">
                <div className="label">Username</div>
                <input type="text" />
              </div>
              <div className="field">
                <div className="label">Password</div>
                <input type="password" />
              </div>
              <div className="field btns">
                <button className="prev-3 prev" onClick={() => handlePrev("-50%")}>
                  Previous
                </button>
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default Modal;
