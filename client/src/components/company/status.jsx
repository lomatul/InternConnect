import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Status = () => {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);

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
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.student_id}</td>
                <td>{student.currentStatus}</td>
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
