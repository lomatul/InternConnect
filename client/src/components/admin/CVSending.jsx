import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sendcv = () => {
  const [showTable, setShowTable] = useState(false);
  const [cvList, setCvList] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [sort,setSort]=useState([]);
  const [number, setNumber]=useState('');
  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleOkayButtonClick = async(e) => {
    e.preventDefault();
    setShowTable(true);
    console.log("company Id", selectedCompany)
    try{
      await axios.post('http://localhost:4000/InterConnect/admin/getMatchedStudents', {company:selectedCompany, number, type:sort})
      .then((response)=>{
        console.log("upcoming list", response.data.returnStudentId);
        setCvList(response.data.returnStudentId);
        if(response.data.returnStudentId?.length==0){
          toast.warning('No optimal student matches found', { position: "top-right" });
        }else{
          toast.success('Student matches', { position: "top-right" });
        }
        

    }).catch((error)=>{
        if (error.response) {
            toast.error('Error while getting matched student', { position: "top-right" });
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
    });
    }catch(error){
      console.log("An Error Occured", error);
    }
    
  };


  const sortingways=[  
    {value:1, label:"Default"},
    {value:2, label:"CGPA"}
]

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

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/student/students')
      .then((response) => {
        const allStudents = response.data;

        if (!allStudents || allStudents.length === 0) {
          console.log('No students found.');
          return;
        }

        const filteredStudents = allStudents.filter((student) => student.accountActivationStatus && student.currentStatus == null && !cvList.includes(student.student_id));
        setStudents(filteredStudents);
      })
      .catch((error) => {
        console.error('An error occurred while fetching students:', error);
      });
  }, [cvList]);

  const handleRemoveRow = (index) => {
    const updatedCvList = [...cvList];
    updatedCvList.splice(index, 1);
    setCvList(updatedCvList);
  };

  const handleAddButtonClick = () => {
    // Logic to add a new CV to the list with the selected student
    if (selectedStudent) {
      const newCv = selectedStudent;
      setCvList([...cvList, newCv]);
      setSelectedStudent(null);
    }
  };

  const handleSendButtonClick= async() =>{
    setLoading(true);
    try{
      await axios.post('http://localhost:4000/InterConnect/admin/sendcvtocompany', {companyID:selectedCompany, students:cvList})
      .then((response)=>{
        console.log(response);
        toast.success('Cvs has been sent to the companies!')
        setTimeout(() => {
          window.location.reload();
        }, 2000);
    }).catch((error)=>{
        if (error.response) {
            toast.error('Error while getting matched student', { position: "top-right" });
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
    }).finally(() => {
      setLoading(false); // Set loading to false regardless of success or failure
    });
    }catch(error){
      console.log("An Error Occured", error);
    }
  }

  return (
    <div>
        <div className='admincontainer'>
          <div className='studenttext'>
              <h3>Unlock Opportunities: </h3>
              <h1> Send CV for Exciting Prospects </h1>
              <div className='button'><a href="/about">Explore Now &#8599;</a></div>
          </div>
          <div className='adminimage'>
              <img src="sendcv.gif" alt="" />
          </div>
      </div>
  
      <div className="studentguideline">           
                  <ul>
                      <li>The software will feature an automated process for sending student CVs to various companies.</li>
                      <li>The administrator will determine the number of CVs to send to a particular company, ensuring it meets the company's minimum acceptance criteria. </li>
                      <li>The CVs will undergo sorting based on specified parameters, including CGPA or other criteria defined by the admin, such as student's technical preference, distance and location, intern’s probable position in the company.</li>
                      <li>Admin Selection: In the initial phase, the admin will select the companies to which all CVs will be sent.Multiple Phases: The system allows for multiple phases in this process, enabling flexibility as needed.CV Sorting: The system will automatically sort the CVs based on the specified parameters. Also, All Students have to answer some basic questions , based on the answers of the questions we can sort the CVs and send to the companies. </li>
                      <p>For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
                  </ul>        
                  <div className="sending-cvs">
                    <div className="form-group">
                            <label htmlFor=""> Number of CVs<span>*</span></label>
                            <input type="number" min="1" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Name of the Company:</label>
                        <Select className='adselect' options={companies.map((company)=>({
                                  value:company._id,
                                  label:company.name
                            }))} onChange={(selectedOption) => setSelectedCompany(selectedOption.value)}/>        
                    </div>
                    
                    <div className="form-group">
                        <label>Sorting Method:</label>
                        <Select className='adselect'   onChange={(selectedOption) => setSort(selectedOption.value)}/>             
                    </div>
                  </div>


          <button onClick={handleOkayButtonClick}>Okay</button>
          </div>

      <div className="cvSending">
      {loading && <p>Loading...</p>}
        {showTable && (
          <div className="companies">
            <main className="table">
              <section className="table__header">
                
              </section>
              <section className="table__body">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Student ID</th>
                      <th>CV</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cvList.map((cv, index) => (
                      <tr key={index}>
                        <td>{cv.name}</td>
                        <td>{cv.student_id}</td>
                        <td>{cv.CV}</td>
                        <td>
                          <button onClick={() => handleRemoveRow(index)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <div className="sending-cvs">
              <div className="form-group">
                <Select
                  className='adselect'
                  // value={selectedStudent?{ value: selectedStudent, label: selectedStudent.student_id }:null}
                  options={students.map((student)=>({
                      value:student,
                      label:student.student_id
                  }))}
                  onChange={(selectedOption) => setSelectedStudent(selectedOption.value)}
                />
                </div>
                <div className="table-button">
                <button onClick={handleAddButtonClick}>Add</button>             
                </div>
                </div>
                <div className="form-button">
                <button onClick={handleSendButtonClick}>Send</button>      
                </div>
                      
            </main>
                      
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Sendcv;
