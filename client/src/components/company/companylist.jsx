import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

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
              <th>Min Interns</th>
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
                        const updatedCompanies = [...companies];
                        updatedCompanies[index].name = e.target.value;
                        setCompanies(updatedCompanies);
                      }}
                    />
                  ) : (
                    company.name
                  )}                  
                </td>


                <td>
                {editRow === index ? (
                    <input
                      type="text"
                      value={company.address}
                      onChange={(e) => {
                        const updatedCompanies = [...companies];
                        updatedCompanies[index].address = e.target.value;
                        setCompanies(updatedCompanies);
                      }}
                    />
                  ) : (
                    company.address
                  )}</td>

                <td>
                {editRow === index ? (
                    <input
                      type="email"
                      value={company.email}
                      onChange={(e) => {
                        const updatedCompanies = [...companies];
                        updatedCompanies[index].email = e.target.value;
                        setCompanies(updatedCompanies);
                      }}
                    />
                  ) : (
                    company.email
                  )}
                  </td>


                <td>
                {editRow === index ? (
                    <input
                      type="text"
                      value={company.contactNumber}
                      onChange={(e) => {
                        const updatedCompanies = [...companies];
                        updatedCompanies[index].contactNumber = e.target.value;
                        setCompanies(updatedCompanies);
                      }}
                    />
                  ) : (
                    company.contactNumber
                  )}
                </td>


                <td>
                {editRow === index ? (
                    <input
                      type="number" min={"0"}
                      value={company.minInterns}
                      onChange={(e) => {
                        const updatedCompanies = [...companies];
                        updatedCompanies[index].minInterns = e.target.value;
                        setCompanies(updatedCompanies);
                      }}
                    />
                  ) : (
                    company.minInterns
                  )}
                </td>

                <td>
                  <Checkbox
                    
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
                    <div className="save">
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    </div>
                  ) : (
                    <div className="edit">
                    <button onClick={() => handleEditClick(index)}>
                      {editRow === index ? 'Save' : 'Edit'}
                    </button>
                    </div>
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
