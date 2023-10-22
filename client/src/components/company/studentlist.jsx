import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Studentlist = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/InterConnect/student/students')

      .then((response) => {
        setStudents(response.data.students);            // Set the retrieved students in the state
      })

      .catch((error) => {
        console.error('An error occurred while fetching students:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount


  return (
    <main className="table">
      <section className="table__header">
        <h1>Student Details </h1>
      </section>

      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Student ID </th>
              <th> Email </th>
              <th> Current Status </th>    
              <th> Account Status </th>                        
              <th> CGPA </th>
              <th> CV </th>             
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.student_id}</td>
                <td>{student.email}</td>
                <td>{student.currentStatus}</td>
                <td style={{ color: student.accountActivationStatus ? 'green' : 'red' }}>
                  {student.accountActivationStatus ? 'Activated' : 'Deactivated'}
                </td>
                <td>{student.CGPA}</td>
                <td>{student.CV}</td>
              </tr>
            ))}

            </tbody>
          </table>
      </section>
    </main>
  );
};

export default Studentlist;