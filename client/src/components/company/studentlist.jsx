import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Studentlist = () => {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/company/companies')
      .then((response) => {
        setCompanies(response.data.companies);         // Setting the retrieved companies in the state
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount

  
  const handleStatusUpdate = async (email, newStatus) => { 
    try {
      const response = await axios.put(`http://localhost:4000/InterConnect/company/updateCompanyStatus/${email}`, { status: newStatus });
  
      if (response.status === 200) {
        console.error('Updated Status');
      }
    } catch (error) {
      console.error('An error occurred while updating company status:', error);
    }
  };
  

  return (
    <main className="table">
      <section className="table__header">
        <h1>Student Details </h1>

        <div className="input-group">
          <input type="search" placeholder="Search Data..." />
          <img src="search.png" alt="" />
        </div>
        

      </section>

      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Student ID </th>
              <th> Email </th>
              <th> Contact Number </th>              
              <th> CGPA </th>
              <th> CV </th>             
            </tr>
          </thead>

          <tbody>
            
              {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.email}</td>
                <td>{company.contactNumber}</td>
                <td>{company.maxInterns}</td>
                <td>{company.minInterns}</td>
              
              </tr>
            ))}
             
            </tbody>
          </table>
      </section>
    </main>
  );
};

export default Studentlist;