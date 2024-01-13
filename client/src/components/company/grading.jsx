import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Gradesheet = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/student/students')
      .then((response) => {
        setStudents(response.data || []);
        setFilteredStudents(response.data || []);
      })
      .catch((error) => {
        console.error('An error occurred while fetching students:', error);
      });
  }, []);

  const handleSaveClick = async (index) => {
    try {
      const editedStudent = filteredStudents[index];

      const response = await axios.post(`http://localhost:4000/InterConnect/admin/postReportMarks/${editedStudent.student_id}`, {
        reportMarks: editedStudent.internshipReportMarks,
        // presentationMarks: editedStudent.presentationMarks,
      });

      if (response.status === 200) {
        console.log('Student data updated successfully!');
        setEditMode(false);
        setEditIndex(null);
      } else {
        console.error('Failed to update student data. Server returned:', response.status, response.data);
      }
    } catch (error) {
      console.error('An error occurred while updating student data:', error);
    }
  };

  const handleReportClick = (studentId) => {
    window.open(`http://localhost:4000/InterConnect/student/getStudentReport/${studentId}`, '_blank');
  };

  return (
    <main className="table">
      <section className="table__header">
        <h1>Student Grade Details</h1>
      </section>

      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Mentor's Marks</th>
              <th>Mentor's Assessment</th>
              <th>Internship Report</th>
              <th>Report Marks</th>
              <th>Presentation Marks</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.student_id}</td>
                <td>{student.evaluatedMentorMarks || 'N/A'}</td>
                <td>{student.mentorsAssessment || 'N/A'}</td>
                <td>
                  <Link to="#" onClick={() => handleReportClick(student.student_id)}>
                    {student.internshipReport || 'N/A'}
                  </Link>
                </td>
                <td>
                  {editMode && editIndex === index ? (
                    <input
                      type="number"
                      min="0"
                      value={student.internshipReportMarks}
                      onChange={(e) => {
                        const updatedStudents = [...filteredStudents];
                        updatedStudents[index].internshipReportMarks = e.target.value;
                        setFilteredStudents(updatedStudents);
                      }}
                    />
                  ) : (
                    student.internshipReportMarks
                  )}
                </td>
                <td>
                  {editMode && editIndex === index ? (
                    <input
                      type="number"
                      min="0"
                      value={student.presentationMarks}
                      onChange={(e) => {
                        const updatedStudents = [...filteredStudents];
                        updatedStudents[index].presentationMarks = e.target.value;
                        setFilteredStudents(updatedStudents);
                      }}
                    />
                  ) : (
                    student.presentationMarks
                  )}
                </td>
                <td>
                  {editMode && editIndex === index ? (
                    <div className="save">


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
                      <button onClick={() => { setEditMode(true); setEditIndex(index); }}>
                        {editMode === true && editIndex === index ? 'Save' : 'Edit'}
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
