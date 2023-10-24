import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Companylist = () => {
  const [search, setSearch] = useState('');
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [companyData, setCompanyData] = useState({
    Title: '',
    Address: '',
    Email:' ',
    Contact:' ',
    MaxInterns:' ',
    MinInterns:' ',
    InternsHired:' ',

   
  });
  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/company/companies')
      .then((response) => {
        setCompanies(response.data.companies);
        setFilteredCompanies(response.data.companies);
        setCompanyData({
          
        })
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = companies.filter((company) => {
      const companyData = `${company.name} ${company.address} ${company.email} ${company.contactNumber}`.toLowerCase();
      return companyData.includes(search.toLowerCase());
    });

    setFilteredCompanies(filtered);
  }, [search, companies]);

  const handleStatusUpdate = async (email, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:4000/InterConnect/company/updateCompanyStatus/${email}`, {
        status: newStatus
      });

      if (response.status === 200) {
        console.error('Updated Status');
      }
    } catch (error) {
      console.error('An error occurred while updating company status:', error);
    }
  };

  const [editRow, setEditRow] = useState(null);

  const handleEditClick = (index) => {
    setEditRow(index);
    setEditMode(true);
  };

  const handleSaveClick = (index) => {
    // Save the edited company data here, and then exit edit mode.
    setEditRow(null);
    setEditMode(false);
  };

  return (
    <main className="table">
      <section className="table__header">
        <h1>Company Details</h1>
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
              <th>Title</th>
              <th>Address</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Max Interns</th>
              <th>Min Interns</th>
              <th>Interns Hired</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCompanies.map((company, index) => (
              <tr key={index}>
                <td>
                  {editRow === index ? (
                    <input
                      type="text"
                      value={company.name}
                      onChange={(e) => {
                        // Update the company's name here
                      }}
                    />
                  ) : (
                    company.name
                  )}

                  
                </td>
                <td>{company.address}</td>
                <td>{company.email}</td>
                <td>{company.contactNumber}</td>
                <td>{company.maxInterns}</td>
                <td>{company.minInterns}</td>
                <td>{company.internsHired}</td>
                <td>
                  <input
                    type="checkbox"
                    id="running"
                    value="running"
                    checked={company.status === 'Hiring'}
                    onChange={() => {
                      const newStatus = company.status === 'Hiring' ? 'Closed' : 'Hiring';
                      handleStatusUpdate(company.email, newStatus);
                      window.location.reload();
                    }}
                  />
                </td>
                <td>
                  {editRow === index ? (
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                  ) : (
                    <button onClick={() => handleEditClick(index)}>
                      {editRow === index ? 'Save' : 'Edit'}
                    </button>
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

export default Companylist;
