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

      const response = await axios.post(`http://localhost:4000/InterConnect/admin/postMarks/${editedStudent.student_id}`, {
        internshipReportMarks: editedStudent.internshipReportMarks,
        presentationMarks: editedStudent.presentationMarks,
      });

      if (response.status === 200) {
        console.log('Student data updated successfully!');
        setEditMode(false);
        setEditIndex(null);

        // Refresh the data after saving
        axios.get('http://localhost:4000/InterConnect/student/students')
          .then((response) => {
            setStudents(response.data || []);
            setFilteredStudents(response.data || []);
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
                {/* Add Presentation Marks column if needed */}
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
