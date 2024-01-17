import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { BASE_URL } from '../../services/helper.js';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Companylist = () => {
  const [search, setSearch] = useState('');
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [notAssessedstudentforcompany, setNotAssessedstudentforcompany] = useState(null)
  const [isButtonClicked, setIsButtonClicked] = useState(false); 
  
  const [editMode, setEditMode] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [buttonrow, setMailRow] = useState(null);

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
    axios.get(`${BASE_URL}/InterConnect/company/companies`)
      .then((response) => {
        const companiesData = response.data;

        if (!companiesData || companiesData.length === 0) {
          console.log('No companies found.');
          return;
        }

        setCompanies(companiesData);
        setFilteredCompanies(companiesData);
        setCompanyData({
          
        })
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
  }, []);

  useEffect(() => {
    try{
      axios.get(`${BASE_URL}/InterConnect/company/getmentoredAssignedStudents`)
      .then((response) => {
        setNotAssessedstudentforcompany(response.data.notassignedstudent);
        console.log(response.data.notassignedstudent);
        
      })
      .catch((error) => {
        console.error('An error occurred while fetching companies:', error);
      });
    } catch (error) {
      console.error('An error occurred while updating company status:', error);
    }
    
  }, [isButtonClicked]);

  useEffect(() => {
    const filtered = companies.filter((company) => {
      const companyData = `${company.name} ${company.address} ${company.email} ${company.contactNumber}`.toLowerCase();
      return companyData.includes(search.toLowerCase());
    });

    setFilteredCompanies(filtered);
  }, [search, companies]);


  const handleStatusUpdate = async (email, newStatus) => {
    try {
      const response = await axios.put(`${BASE_URL}/InterConnect/company/updateCompanyStatus/${email}`, {
        status: newStatus
      });

      if (response.status === 200) {
        console.log('Updated Status');
      }
    } catch (error) {
      console.error('An error occurred while updating company status:', error);
    }
  };

  const handleAddMentor = async(index,company) => {
    try {
      const response = await axios.get(`${BASE_URL}/InterConnect/admin/sendFroms/${company._id}`);

      if (response.status === 200) {
        console.log('Mail Send');
        toast.success('Mail Send')
      }
    } catch (error) {
      console.error('An error occurred while updating company status:', error);
    }
    setMailRow(index);

    setIsButtonClicked(true);
    console.log(company)
  };

  const handleEditClick = (index) => {
    setEditRow(index);
    setEditMode(true);
  };

  const handleSaveClick = async (index) => {
    try {
      const companyToUpdate = companies[index];
      console.log('Updated Company Data:', companyToUpdate);

      const response = await axios.put(`${BASE_URL}/InterConnect/company/updateCompany/${companyToUpdate.email}`, {
        name: companyToUpdate.name,
        email: companyToUpdate.email,
        address: companyToUpdate.address,
        contactNumber: companyToUpdate.contactNumber,
        minInterns: companyToUpdate.minInterns,
      });

      if (response.status === 200) {
        console.log('Company information updated successfully');
        
        toast.success('Company information updated successfully', { position: "top-right" });
  
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error('An error occurred while updating company information:', error);
    }

 
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
           <img src='search.png'></img>
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
                
                <td>

                  {buttonrow === index ? (
                      <p>{'Form Sent'}</p>
                    ) : (
                      notAssessedstudentforcompany && notAssessedstudentforcompany[company._id]?.length > 0? (<button onClick={() => handleAddMentor(index,company)}>Add Mentor</button>) : (<p>N/A</p>)           
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
