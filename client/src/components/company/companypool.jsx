import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Companypool = () => {
  const [search, setSearch] = useState('');
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/company/companies')
      .then((response) => {
        const hiringCompanies = response.data.companies.filter((company) => company.status === 'Hiring');
        setCompanies(hiringCompanies);
        setFilteredCompanies(hiringCompanies); // Initially, both arrays are the same
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
  }, []);

  useEffect(() => {
    // Filter companies based on search input
    const filtered = companies.filter((company) => {
      const companyData = `${company.name} ${company.address} ${company.email} ${company.contactNumber}`.toLowerCase();
      return companyData.includes(search.toLowerCase());
    });

    setFilteredCompanies(filtered);
  }, [search, companies]);

  return (
    <main className="table">
      <section className="table__header">
        <h1>Company Details </h1>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Data..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
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
            {filteredCompanies.map((company, index) => (
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
