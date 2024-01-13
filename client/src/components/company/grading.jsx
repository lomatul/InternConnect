import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

const Gradesheet = () => {


    const [search, setSearch] = useState('');
    const [companies, setCompanies] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [companyData, setCompanyData] = useState({
      Name: '',
      ID: '',
      MentorGrade: '',
      ReportGrade: '',
      PresentationGrade: '',  
     
    });

    useEffect(() => {
      axios.get('http://localhost:4000/InterConnect/company/companies')
        .then((response) => {
          setCompanies(response.data || []);
          setFilteredCompanies(response.data || []);
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
          <h1>Student Grade Details</h1>
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
                <th>Name</th>
                <th>ID</th>
                <th>Mentor's Marks</th>
                <th>Mentor's Assesment</th>
                <th>Student's Report </th>
                <th>Report Marks</th>
                <th>Presentation Marks</th>
                <th></th>
              </tr>
            </thead>
  
            <tbody>
              {filteredCompanies.map((company, index) => (
                <tr key={index}>
  
  
                  <td>                                  
                      Lomatul Mahzabin                                   
                  </td>            
                  <td>                 
                      200042113                    
                    </td>
                   <td>                 
                      A                 
                  </td>
                  <td>                 
                      200042113_assesment              
                  </td>
                  <td>                 
                      200042113_report.pdf            
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

export default Gradesheet;
