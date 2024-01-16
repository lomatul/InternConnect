import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_URL } from '../../services/helper';


const StatusHired = () => {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    // Filter students based on search input
    const filtered = students.filter((student) => {
      const studentData = `${student.name} ${student.student_id} ${student.email} ${student.currentStatus} ${student.CGPA}`.toLowerCase();
      return studentData.includes(search.toLowerCase());
    });

    setFilteredStudents(filtered);
  }, [search, students]);

  const [buttonrow, setHiredRow] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleHired = (index) => {
    setSelectedOption('Hired');
  };

  const handleNotHired = (index) => {
    setSelectedOption('Rejected');
  };

  const [showhiredButton, setshowhiredButton] = useState(false);
  const [showRejectButton, setshowRejectButton] = useState(false);

    const handleLinkButtonClick = () => {
    setshowhiredButton(true);
    setshowRejectButton(false);
    };
  
    const handleImgButtonClick = () => {
    setshowRejectButton(false);
    setshowhiredButton(false);
    };



  useEffect(() => {
    // Fetching students
    axios.get(`${BASE_URL}/InterConnect/student/students`)
      .then((response) => {
        const fetchedStudents = response.data;
        // Fetching companies
        axios.get(`${BASE_URL}/InterConnect/company/companies`)
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
          })
          .catch((error) => {
            console.error('An error occurred while fetching companies:', error);
          });
      })
      .catch((error) => {
        console.error('An error occurred while fetching students:', error);
      });
  }, []);

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
                  {buttonrow === index && selectedOption === null && (
                    <>
                      <button onClick={() => handleHired(index)} disabled={selectedOption === 'Rejected'}>
                        Hired
                      </button>
                      <button onClick={() => handleNotHired(index)} disabled={selectedOption === 'Hired'}>
                        Rejected
                      </button>
                    </>
                  )}
                  {selectedOption === 'Hired' && <p>Hired</p>}
                  {selectedOption === 'Rejected' && <p>Rejected</p>}
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
