import React, { useState } from 'react';
import '../test.css';
import 'react-toastify/dist/ReactToastify.css';

const Addgrade = () => {
  const [showSendingCvs, setShowSendingCvs] = useState(true);
  const [mentorPercentage, setMentorPercentage] = useState(0);
  const [reportPercentage, setReportPercentage] = useState(0);
  const [presentationPercentage, setPresentationPercentage] = useState(0);

  const handleSubmit = () => {
    // Perform any additional logic or API calls if needed

    // Hide the sending-cvs section
    setShowSendingCvs(false);
  };

  return (
    <div>
      <div className='admincontainer'>
        <div className='studenttext'>
          <h3>Streamline Student Betterment </h3>
          <h1>Add Grade for Students</h1>
        </div>
      </div>

      {showSendingCvs && (
        <div className="studentguideline">
          <ul>
          <li>You can give this Percentage Once in a Session . So be Carefull </li>
          </ul>
          <div className="sending-cvs">
            <div className="form-group">
              <label htmlFor=""> Percentage on Mentors Evaluation <span>*</span></label>
              <input
                type="number"
                min="1"
                value={mentorPercentage}
                onChange={(e) => setMentorPercentage(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Percentage on Report Evaluation</label>
              <input
                type="number"
                min="1"
                value={reportPercentage}
                onChange={(e) => setReportPercentage(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Percentage on Presentation Evaluation</label>
              <input
                type="number"
                min="1"
                value={presentationPercentage}
                onChange={(e) => setPresentationPercentage(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      {!showSendingCvs && (
        <div className="studentguideline">
        <div className="percentage-showing">
          <p>The Grade will be calculated based on {mentorPercentage}% Mentors Evaluation, {presentationPercentage}% Presentation, and {reportPercentage}% Report Evaluation</p>
        </div>
        {/* <button >Generate Grade</button> */}
        <button >Export Grade</button>
        </div>
      )}
    </div>
  );
};

export default Addgrade;
