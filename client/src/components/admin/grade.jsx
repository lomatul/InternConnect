import React, { useState } from 'react';
import '../test.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../services/helper';



const Addgrade = () => {
  const [showSendingCvs, setShowSendingCvs] = useState(true);
  const [mentorPercentage, setMentorPercentage] = useState(0);
  const [reportPercentage, setReportPercentage] = useState(0);
  const [presentationPercentage, setPresentationPercentage] = useState(0);

  const handleSubmit = () => {
    setShowSendingCvs(false);
  };

  const handlementorsend = async() =>{
    try{
      axios.get(`${BASE_URL}/InterConnect/company/sendmentorsforms`)
      .then((response) => {
        console.log(response);
        toast.success('Mail Send', { position: "top-right" })
        
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
    } catch (error) {
      console.error('An error occurred while updating company status:', error);
    }
  }

  const handleSubmitExport = async() => {
    try {
      const response = await axios.post(`${BASE_URL}/InterConnect/admin/getGradeExcel`, {
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
          <li> Based on percentage on mentor's evaluation, report evaluation and presentation evaluation marks will be calculated. Bear in mind that the numbers are set out of 100 </li>
          </ul>
          <div className="sending-cvs">
            <p>Click The button for Send Assesment Form to Mentors</p>
            <button onClick={handlementorsend} style={{ marginTop:"-10px"}} >Send</button>
            </div>

          <div className="sending-cvs">
            <div className="form-group">
              <label htmlFor=""> Percentage on Mentors Evaluation <span>*</span></label>
              <input
                type="number"
                min="1" max="100"
                value={mentorPercentage}
                onChange={(e) => setMentorPercentage(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Percentage on Report Evaluation <span>*</span> </label>
              <input
                type="number"
                min="1" max="100"
                value={reportPercentage}
                onChange={(e) => setReportPercentage(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Percentage on Presentation Evaluation<span>*</span> </label>
              <input
                type="number"
                min="1" max="100"
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
