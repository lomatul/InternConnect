import React, { useState , useEffect} from 'react';
import '../test.css';
import 'react-toastify/dist/ReactToastify.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../services/helper';


const Adddeadline = () => {
  
  const [selectedCvDate, setSelectedCvDate] = useState(null);
  const [selectedReportDate, setSelectedReportDate] = useState(null);
  const [cvSubmitWarningShown, setCvSubmitWarningShown] = useState(false);
  const [reportSubmitWarningShown, setReportSubmitWarningShown] = useState(false);
  const [existingCvDeadline, setExistingCvDeadline] = useState(null);
  const [existingReportDeadline, setExistingReportDeadline] = useState(null);

  const handleSubmitcv = async(e) => {
    e.preventDefault()
    const currentDate = new Date();
    
    try{

      if (!selectedCvDate) {
        if (!cvSubmitWarningShown) {
          toast.warning("Please select a date for CV submission", { position: "top-right" });
          setCvSubmitWarningShown(true);
          setTimeout(() => {
            setCvSubmitWarningShown(false);
          }, 4000);
        }
        return;
      }

      if (new Date(selectedCvDate) < currentDate) {
        if (!cvSubmitWarningShown) {
          toast.error("CV submission date should be later than the current date", { position: "top-right" });
          setCvSubmitWarningShown(true);
          setTimeout(() => {
            setCvSubmitWarningShown(false);
          }, 4000);
        }
        return;
      }

      const reportDeadlineResponse = await axios.get(`${BASE_URL}/InterConnect/admin/getReportdeadline`);
      const existingReportDeadline = reportDeadlineResponse.data.Deadline;

      // Check if existing Report deadline is earlier than selectedCvDate
      if (existingReportDeadline && new Date(existingReportDeadline.time) <= new Date(selectedCvDate)) {
        if (!cvSubmitWarningShown) {
          toast.error("CV submission date should be earlier than the existing Report submission date", { position: "top-right" });
          setCvSubmitWarningShown(true);
          setTimeout(() => {
            setCvSubmitWarningShown(false);
          }, 4000);
        }
        return;
      }

      await axios.post(`${BASE_URL}/InterConnect/admin/postCvdeadline`, {time:selectedCvDate}
          ).then((response)=>{
              console.log(response);
              toast.success("New deadline is posted", { position: "top-right" })
              setTimeout(() => {
                window.location.reload();
              }, 2000);
          }).catch((error)=>{
              if (error.response) {
                toast.error('Error while creating deadline', { position: "top-right" });
                console.log(error.response);
                console.log("server responded");
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);
              }
      });
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
    setSelectedCvDate(null);
    setCvSubmitWarningShown(false);
  }
 

  const handleSubmitreport = async(e) => {
    e.preventDefault()
    const currentDate = new Date();

    try{

      if (!selectedReportDate) {
        if (!reportSubmitWarningShown) {
          toast.warning("Please select a date for report submission", { position: "top-right" });
          setReportSubmitWarningShown(true);
          setTimeout(() => {
            setReportSubmitWarningShown(false);
          }, 4000);
        }
        return;
      }

      if (new Date(selectedReportDate) < currentDate) {
        if (!reportSubmitWarningShown) {
          toast.error("Report submission date should be later than the current date", { position: "top-right" });
          setReportSubmitWarningShown(true);
          setTimeout(() => {
            setReportSubmitWarningShown(false);
          }, 4000);
        }
        return;
      }

      // Check if CV submission date is earlier than Report submission date
      if (selectedCvDate && new Date(selectedCvDate) >= new Date(selectedReportDate)) {
        if (!reportSubmitWarningShown) {
          toast.error("Report submission date should be later than CV submission date", { position: "top-right" });
          setReportSubmitWarningShown(true);
          setTimeout(() => {
            setReportSubmitWarningShown(false);
          }, 4000);
        }
        return;
      }

    const cvDeadlineResponse = await axios.get(`${BASE_URL}/InterConnect/admin/getCvdeadline`);
    const existingCvDeadline = cvDeadlineResponse.data.Deadline;

    // Check if existing CV deadline is later than selectedReportDate
    if (existingCvDeadline && new Date(existingCvDeadline.time) >= new Date(selectedReportDate)) {
      if (!reportSubmitWarningShown) {
        toast.error("Report submission date should be later than the existing CV submission date", { position: "top-right" });
        setReportSubmitWarningShown(true);
        setTimeout(() => {
          setReportSubmitWarningShown(false);
        }, 4000);
      }
      return;
    }

      await axios.post(`${BASE_URL}/InterConnect/admin/postReportdeadline`, {time:selectedReportDate}
          ).then((response)=>{
              console.log(response);
              toast.success("New deadline is posted", { position: "top-right" });
              setTimeout(() => {
                window.location.reload();
              }, 2000);
          }).catch((error)=>{
              if (error.response) {
                 toast.error('Error while creating deadline', { position: "top-right" });
                  console.log(error.response);
                  console.log("server responded");
                } else if (error.request) {
                  console.log("network error");
                } else {
                  console.log(error);
                }
      });
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
    setSelectedReportDate(null);
    setReportSubmitWarningShown(false);
  }
 
  useEffect(() => {
    const fetchExistingDeadlines = async () => {
      try {
        const cvDeadlineResponse = await axios.get(`${BASE_URL}/InterConnect/admin/getCvdeadline`);
        const reportDeadlineResponse = await axios.get(`${BASE_URL}/InterConnect/admin/getReportdeadline`);

        setExistingCvDeadline(cvDeadlineResponse.data.Deadline ? cvDeadlineResponse.data.Deadline.time : "No Deadline Set");
        setExistingReportDeadline(reportDeadlineResponse.data.Deadline ? reportDeadlineResponse.data.Deadline.time : "No Deadline Set");

      } catch (error) {
        console.error('Error fetching existing deadlines:', error.message);
      }
    };
    fetchExistingDeadlines();
  }, []);

  return (
    <div>
      <div className='admincontainer'>
        <div className='studenttext'>
          <h3>Streamline Student Betterment </h3>
          <h1>Add Deadlines for Students</h1>
        </div>
      </div>


        <div className="studentguideline">
          <ul>
          <li>You Need to set the deadlines for students. </li>
              {existingCvDeadline && (
                <li> <strong>Existing CV Deadline: {new Date(existingCvDeadline).toLocaleDateString()} </strong></li>
              )}
              {existingReportDeadline && (
                <li> <strong> Existing Report Deadline: {new Date(existingReportDeadline).toLocaleDateString()} </strong></li>
              )}
          </ul>
        </div>
      
        <div className="date">
            <label> Set Deadline for Cv Submission</label>
            <div className="datepicker">
            <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker onChange={(e)=>{setSelectedCvDate(e.toISOString())}}/>
            </LocalizationProvider>
            </div>      
            <div className="date-button">
            <button onClick={handleSubmitcv}>Submit</button>
            </div>
        </div>
        


        <div className="date">
        <label> Set Deadline for Report Submission </label>
        <div className="datepicker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(e)=>{setSelectedReportDate(e.toISOString())}}/>
            </LocalizationProvider>
        </div>  
            <div className="date-button">
            <button onClick={handleSubmitreport}>Submit</button>
            </div>    
        </div>


    </div>
  );
};

export default Adddeadline;



