import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Status = () => {
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


  useEffect(() => {
    // Fetching students
    axios.get('http://localhost:4000/InterConnect/student/students')
      .then((response) => {
        const fetchedStudents = response.data;
        // Fetching companies
        axios.get('http://localhost:4000/InterConnect/company/companies')
          .then((response) => {
            const fetchedCompanies = response.data;
            
            // Iterateing over students and adding company name based on "companyStatus"
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
          <img src='search.png'></img>
        </div>

      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Id </th>
              <th> Status </th>
              <th> Company Name </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.student_id}</td>
                <div className="status">
                  {!student.currentStatus&&
                  <div className="notstart">
                  <td>{student.currentStatus}</td>
                  </div>
                  }
                  {student.currentStatus==="In Progress"&&
                  <div className="somthing">
                  <td>{student.currentStatus}</td>
                  </div>
                  }
                  {student.currentStatus==="Hired"&&
                  <div className="something">
                  <td>{student.currentStatus}</td>
                  </div>
                  }
                </div>
                <td>{student.companyName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Status;
