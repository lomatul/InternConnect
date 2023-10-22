import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Companypool = () => {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/company/companies')
      .then((response) => {
        const hiringCompanies = response.data.companies.filter((company) => company.status === 'Hiring');
        setCompanies(hiringCompanies);         // Setting the retrieved companies in the state
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount

  return (
    <main className="table">
      <section className="table__header">
        <h1>Company Details </h1>
      </section>

      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Title </th>
              <th> Address </th>
              <th> Email </th>
              <th> Contact Number </th>
              <th> Max Interns </th>
              <th> Min Interns </th>
              <th> Interns Hired </th>             
            </tr>
          </thead>

          <tbody>

              {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.address}</td>
                <td>{company.email}</td>
                <td>{company.contactNumber}</td>
                <td>{company.maxInterns}</td>
                <td>{company.minInterns}</td>
                <td>{company.internsHired}</td>
              </tr>
            ))}
             
            </tbody>
          </table>
      </section>
    </main>
  );
};

export default Companypool;