import React, { useState } from 'react';
import '../test.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Addgrade = () => {
  const [showSendingCvs, setShowSendingCvs] = useState(true);
  const [mentorPercentage, setMentorPercentage] = useState(0);
  const [reportPercentage, setReportPercentage] = useState(0);
  const [presentationPercentage, setPresentationPercentage] = useState(0);

  const handleSubmit = () => {
    setShowSendingCvs(false);
  };

  const handleSubmitExport = async() => {
    try {
      const response = await axios.post('http://localhost:4000/InterConnect/admin/getGradeExcel', {
        mentorpart: mentorPercentage,
        reportpart: reportPercentage,
        presentationpart: presentationPercentage
      }, { responseType: 'arraybuffer' });
  
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Grade_Report.xlsx';
      link.click();
  

      toast.success('Excel File Downloaded Successfully', { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error('An error occurred:', error);
    }

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
        <button onClick={handleSubmitExport}>Export Grade</button>
        </div>
      )}
    </div>
  );
};

export default Addgrade;
