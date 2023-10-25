import React, { useEffect, useState }  from 'react'
import "../admin/Add.css";
import {useAuthContext} from "../../context/useAuthcontext";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Prefernces = () => {
  const { userstudent } = useAuthContext();
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [firstchoicecompany, setFirstchoicecompany]=useState('')
  const [secondchoicecompany, setSecondchoicecompany]=useState('')
  const [thirdchoicecompany, setThirdchoicecompany]=useState('')
  const [firstchoicedomain, setFirstchoicedomain]=useState('')
  const [secondchoicedomain, setSecondchoicedomain]=useState('')
  const [thirdchoicedomain, setThirdchoicedomain]=useState('')
  // const [filteredCompanies, setFilteredCompanies] = useState([]);
  useEffect(() => {
    if (userstudent) {
      setId(userstudent.student_id);
      setLoading(false); // Set loading to false when data is available
    } 

  }, [userstudent]);

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/company/companies')
      .then((response) => {
        const hiringCompanies = response.data.companies.filter((company) => company.status === 'Hiring');
        setCompanies(hiringCompanies);
        console.log(companies)
        // setFilteredCompanies(hiringCompanies); // Initially, both arrays are the same
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
  }, []);
  
  console.log(firstchoicecompany, secondchoicecompany, thirdchoicecompany);
  console.log(firstchoicedomain, secondchoicedomain, thirdchoicedomain)

  const handleSubmit = async(event) => {
    event.preventDefault()

    try {
      await axios.post('http://localhost:4000/InterConnect/student/setprefer/'+id,{firstchoicecompany, secondchoicecompany, thirdchoicecompany, firstchoicedomain, secondchoicedomain, thirdchoicedomain 
    }).then((response)=>{
        console.log(response)
        toast.success('Your Preferences have been submitted.')
    }).catch((error)=>{
      toast.error("Error occured, please try again")
        if (error.response) {
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
    });

    } catch (error) {
      console.error('An error occurred:', error);
    }

    setFirstchoicecompany('');
    setSecondchoicecompany('');
    setThirdchoicecompany('');
    setFirstchoicedomain('');
    setSecondchoicedomain('');
    setThirdchoicedomain('')

    
  }
  
    return (
      <div className="add">
        <div className="addcontainer">
          <h1>Add Your Preferences</h1>
          <div className="addsections">
          <div className="details">
              <label htmlFor="">Name<span>*</span></label> 
              <input type="text" placeholder="Give name" />

            
              <label htmlFor=""> Preferable Location (if any) </label>
              <input type="email"/>
  
              <label htmlFor="">Contact Number<span>*</span></label>
              <input type="number" min="0"/>


                <h2>Give Company Preferences</h2>
              <label htmlFor="">Choice 1<span>*</span> </label>
                     <select value={firstchoicecompany} onChange={(e) => setFirstchoicecompany(e.target.value)}>
                     {companies.map((company) => (
                        <option key={company._id} value={company._id}>
                        {company.name}
                        </option>
                      ))}
                    
                      </select> 
              <label htmlFor="">Choice 2 </label>
                      <select value={secondchoicecompany} onChange={(e) => setSecondchoicecompany(e.target.value)}>
                      {companies.map((company) => (
                        <option key={company._id} value={company._id}>
                        {company.name}
                        </option>
                      ))}
                      </select> 
              <label htmlFor="">Choice 3 </label>
                      <select value={thirdchoicecompany} onChange={(e) => setThirdchoicecompany(e.target.value)}>
                      {companies.map((company) => (
                        <option key={company._id} value={company._id}>
                        {company.name}
                        </option>
                      ))}
                      </select>
                     
          </div> 
          
            <div className="details">

            <h2>Give Domain Preferences</h2>
              <label htmlFor="">Choice 1 <span>*</span></label>
                      <select onChange={(e) => setFirstchoicedomain(e.target.value)}>
                        <option value="Software Engineer ">Software Engineer </option>
                        <option value="Frontend Developer">Frontend Developer </option>
                        <option value="Backend Developer">Backend Developer </option>
                        <option value="Project Manager">Project Manager </option>
                        <option value="Dev Ops">Dev Ops </option>
                     </select>
              <label htmlFor="">Choice 2 </label>
                      <select onChange={(e) => setSecondchoicedomain(e.target.value)}>
                        <option value="Software Engineer ">Software Engineer </option>
                        <option value="Frontend Developer">Frontend Developer </option>
                        <option value="Backend Developer">Backend Developer </option>
                        <option value="Project Manager">Project Manager </option>
                        <option value="Dev Ops">Dev Ops </option>
                      </select> 
              <label htmlFor="">Choice 3 </label>
                      <select onChange={(e) => setThirdchoicedomain(e.target.value)}>
                        <option value="Software Engineer ">Software Engineer </option>
                        <option value="Frontend Developer">Frontend Developer </option>
                        <option value="Backend Developer">Backend Developer </option>
                        <option value="Project Manager">Project Manager </option>
                        <option value="Dev Ops">Dev Ops </option>
                      </select>
          
              <label htmlFor="">Short Description<span>*</span></label>
              <textarea name="" id="" placeholder="Short description of the company" cols="30" rows="10"></textarea>
  
              <button onClick={handleSubmit}>Send</button>
              

           
            </div>
          </div>
        </div>
      </div>
      
    );
  };
export default Prefernces