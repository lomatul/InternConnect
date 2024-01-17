import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../services/helper';


const Gradesheet = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [viewassesment, setViewassesment] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/InterConnect/student/students`)
      .then((response) => {

        const studentsData = response.data;

        if (!studentsData || studentsData.length === 0) {
          console.log('No students found.');
          return;
        }

        setStudents(studentsData);
        setFilteredStudents(studentsData);
  
      })
      .catch((error) => {
        console.error('An error occurred while fetching students:', error);
      });
  }, []);


  useEffect(() => {
    axios.get(`${BASE_URL}/InterConnect/mentor/getViewAssesment`)
      .then((response) => {
        console.log(response.data.assesment)
        setViewassesment(response.data.assesment);
      })
      .catch((error) => {
        console.error('An error occurred while fetching students:', error);
      });
  }, []);

  const handleSaveClick = async (index) => {
    try {
      const editedStudent = filteredStudents[index];

      const response = await axios.post(`${BASE_URL}/InterConnect/admin/postMarks/${editedStudent.student_id}`, {
        internshipReportMarks: editedStudent.internshipReportMarks,
        presentationMarks: editedStudent.presentationMarks,
      });

      toast.success('Marks Have Been Updated', { position: "top-right" });
      setTimeout(() => {
        window.location.reload();
      }, 3000);

      if (response.status === 200) {
        console.log('Student data updated successfully!');
        setEditMode(false);
        setEditIndex(null);

        // Refresh the data after saving
        axios.get(`${BASE_URL}/InterConnect/student/students`)
          .then((response) => {

            const studentsData = response.data;

            if (!studentsData || studentsData.length === 0) {
              console.log('No students found.');
              return;
            }
            setStudents(studentsData);
            setFilteredStudents(studentsData);

          })
          .catch((error) => {
            console.error('An error occurred while fetching students:', error);
          });
      } else {
        console.error('Failed to update student data. Server returned:', response.status, response.data);
      }
    } catch (error) {
      console.error('An error occurred while updating student data:', error);
    }
  };

  const handleReportClick = (studentId) => {
    window.open(`${BASE_URL}/InterConnect/student/getStudentReport/${studentId}`, '_blank');
  };
  if(!viewassesment){
    return(
      <div>Loading...</div>
    )
  }

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
              {/* Add Presentation Marks header if needed */}
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
                {viewassesment[student.student_id] ? (
                  <td>
                      {viewassesment[student.student_id].map((el) => (
                      <a href={`/ViewAssesment/${el}/${student.student_id}`}>View Assessment</a>
                  ))}
                  </td>
                    ) : (
                  <td>'N/A'</td>
                  )}
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
                    max="100"
                    value={student.internshipReportMarks}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/^0+(\d)/, '$1'); // Remove leading zeros
                      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
                        const updatedStudents = [...filteredStudents];
                        updatedStudents[index].internshipReportMarks = inputValue;
                        setFilteredStudents(updatedStudents);
                      }
                    }}
                  />
                  ) : (
                    student.internshipReportMarks
                  )}
                </td>
                {/* Add Presentation Marks column if needed */}
                <td>
                  {editMode && editIndex === index ? (
                                      <input
                                      type="number"
                                      min="0"
                                      max="100"
                                      value={student.presentationMarks}
                                      onChange={(e) => {
                                        const inputValue = e.target.value.replace(/^0+(\d)/, '$1'); // Remove leading zeros
                                        if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
                                          const updatedStudents = [...filteredStudents];
                                          updatedStudents[index].presentationMarks = e.target.value;
                                          setFilteredStudents(updatedStudents);
                                        }
                                      }}
                                    />            
                  ) : (
                    student.presentationMarks
                  )}
                </td>
                <td>
                  {editMode && editIndex === index ? (
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