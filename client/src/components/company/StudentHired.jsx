import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_URL } from '../../services/helper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lightGreen } from '@mui/material/colors';

const StatusHired = () => {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);


  useEffect(() => {
    axios.get(`${BASE_URL}/InterConnect/student/students`)     // Fetching students
      .then((response) => {
        const fetchedStudents = response.data;

        axios.get(`${BASE_URL}/InterConnect/company/companies`)         // Fetching companies
          .then((response) => {
            const fetchedCompanies = response.data;

            // Iterating over students and adding company name based on "companyStatus"
            const studentsWithCompanyNames = fetchedStudents.map(student => {
              const matchingCompany = fetchedCompanies.find(company => 
                String(company._id) === student.companyStatus
              );

              const companyName = matchingCompany ? matchingCompany.name : 'N/A';

              return {
                ...student,
                companyName,
              };
            });

            setStudents(studentsWithCompanyNames);
            setCompanies(fetchedCompanies);
            setButtonVisibility(Array(studentsWithCompanyNames.length).fill(true));
          })
          .catch((error) => {
            console.error('An error occurred while fetching companies:', error.message);
          });
      })
      .catch((error) => {
        console.error('An error occurred while fetching students:', error.message);
      });
  }, []);


  useEffect(() => {
    // Filter students based on search input
    const filtered = students.filter((student) => {
      const studentData = `${student.name} ${student.student_id} ${student.email} ${student.currentStatus} ${student.CGPA}`.toLowerCase();
      return studentData.includes(search.toLowerCase());
    });

    setFilteredStudents(filtered);
  }, [search, students]);


  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonVisibility, setButtonVisibility] = useState([]);
  const [operationMessage, setOperationMessage] = useState('');

  const updateButtonVisibility = (index, value) => {
    setButtonVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = value;
      return newVisibility;
    });
  };

  const handleHired = async (index) => {
    try {
      const studentId = filteredStudents[index].student_id;
      await axios.post(`${BASE_URL}/InterConnect/student/updateCurrentStatusByIdToHired/${studentId}`);

      setOperationMessage('Operation Done!');
      updateButtonVisibility(index, false);
      setSelectedOption('Hired');
      toast.success('Operation Done Successfully', { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error updating student status to Hired:', error.message);
    }
  };

  const handleNotHired = async (index) => {
    try {
      const studentId = filteredStudents[index].student_id;
      await axios.post(`${BASE_URL}/InterConnect/student/updateCurrentStatusByIdToRejected/${studentId}`);

      setOperationMessage('Operation Done!');
      updateButtonVisibility(index, false);
      setSelectedOption('Rejected');
      toast.success('Operation Done Successfully', { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error updating student status to Rejected:', error.message);
    }
  };

  const handleLinkButtonClick = () => {
    setButtonVisibility(Array(students.length).fill(true));
  };

  const handleImgButtonClick = () => {
    setButtonVisibility(Array(students.length).fill(false));
  };


  return (
    <main className="table">
      <section className="table__header">
        <h1> Student Status </h1>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Data by Student Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src='search.png' alt="Search Icon" />
        </div>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Id </th>
              <th> Company Name </th>
              <th> Status </th>
            </tr>
          </thead>
          <tbody>
          {filteredStudents.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.student_id}</td>
            <td>{student.companyName}</td>
            <td>
              {student.currentStatus === 'In Progress' ? (
                <>
                  {buttonVisibility[index] && (
                    <div className="hired">
                      <button  onClick={() => handleHired(index)} disabled={selectedOption === 'Rejected'}>
                      Set Hired 
                    </button>
                    </div>
                    
                  )}
                  {buttonVisibility[index] && (
                    <div className="rejected">
                    <button onClick={() => handleNotHired(index)} disabled={selectedOption === 'Hired'}>
                      Set Rejected
                    </button>
                    </div>

                  )}
                  {!buttonVisibility[index] && <p>{operationMessage}</p>}
                </>
              ) : (
                student.currentStatus === 'Hired' ? (
                  <p style={{ color: 'green' }}>Hired  <img src="check.png"alt="InternConnect Logo"   style={{width: '30px', height: '30px' ,marginLeft:"10px", marginRight:"10px" , marginBottom:"-5px"}}   /> </p>
                ) : (
                  <p style={{ color: 'orange' }}>Pending <img src="cross.png"alt="InternConnect Logo"   style={{width: '30px', height: '30px' ,marginLeft:"10px", marginRight:"10px" , marginBottom:"-5px"}}  /> </p>
                )
              )}
            </td>
          </tr>
        ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default StatusHired;