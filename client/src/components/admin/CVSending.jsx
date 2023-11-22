import React, { useState } from 'react';
import Select from 'react-select';

const Sendcv = () => {
  const [showTable, setShowTable] = useState(false);
  const [cvList, setCvList] = useState([
    { name: 'Lomatul Mahzabin', studentId: '200042113', cv: '200042113_cv' },
    { name: 'Lomatul Mahzabin', studentId: '200042113', cv: '200042113_cv' },
    { name: 'Lomatul Mahzabin', studentId: '200042113', cv: '200042113_cv' },
    { name: 'Lomatul Mahzabin', studentId: '200042113', cv: '200042113_cv' },
    // Add more initial data if needed
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleOkayButtonClick = () => {
    setShowTable(!showTable);
  };


  const sortingways=[  
    {value:"Default", label:"Default"},
    {value:"CGPA", label:"CGPA"}
]

  const handleRemoveRow = (index) => {
    const updatedCvList = [...cvList];
    updatedCvList.splice(index, 1);
    setCvList(updatedCvList);
  };

  const handleAddButtonClick = () => {
    // Logic to add a new CV to the list with the selected student
    if (selectedStudent) {
      const newCv = {
        name: selectedStudent.name,
        studentId: selectedStudent.studentId,
        cv: `${selectedStudent.studentId}_cv`, // You may need to generate a unique CV identifier
      };
      setCvList([...cvList, newCv]);
      setSelectedStudent(null);
    }
  };

  return (
    <div>
        <div className='admincontainer'>
          <div className='studenttext'>
              <h3>Unlock Opportunities: </h3>
              <h1> Send CV for Exciting Prospects </h1>
              <div className='button'><a href="/about">Explore Now &#8599;</a></div>
          </div>
          <div className='adminimage'>
              <img src="sendcv.gif" alt="" />
          </div>
      </div>
  
      <div className="studentguideline">           
                  <ul>
                      <li>The software will feature an automated process for sending student CVs to various companies.</li>
                      <li>The administrator will determine the number of CVs to send to a particular company, ensuring it meets the company's minimum acceptance criteria. </li>
                      <li>The CVs will undergo sorting based on specified parameters, including CGPA or other criteria defined by the admin, such as student's technical preference, distance and location, intern’s probable position in the company.</li>
                      <li>Admin Selection: In the initial phase, the admin will select the companies to which all CVs will be sent.Multiple Phases: The system allows for multiple phases in this process, enabling flexibility as needed.CV Sorting: The system will automatically sort the CVs based on the specified parameters. Also, All Students have to answer some basic questions , based on the answers of the questions we can sort the CVs and send to the companies. </li>
                      <p>For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
                  </ul>        
                  <div className="sending-cvs">
                    <div className="form-group">
                            <label htmlFor=""> Number of CVs<span>*</span></label>
                            <input type="number" min="0"/>
                    </div>

                    <div className="form-group">
                        <label>Name of the Company:</label>
                        <Select className='adselect' />        
                    </div>
                    
                    <div className="form-group">
                        <label>Sorting Method:</label>
                        <Select className='adselect'  options={sortingways} />             
                    </div>
                  </div>


          <button onClick={handleOkayButtonClick}>Okay</button>
          </div>

      <div className="cvSending">
        {showTable && (
          <div className="companies">
            <main className="table">
              <section className="table__header">
                
              </section>
              <section className="table__body">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Student ID</th>
                      <th>CV</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cvList.map((cv, index) => (
                      <tr key={index}>
                        <td>{cv.name}</td>
                        <td>{cv.studentId}</td>
                        <td>{cv.cv}</td>
                        <td>
                          <button onClick={() => handleRemoveRow(index)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <div className="sending-cvs">
              <div className="form-group">
                <Select
                  className='adselect'
                  value={selectedStudent}
                  options={[
                    { value: '1', label: 'Student 1', name: 'Student 1', studentId: '1' },
                    { value: '2', label: 'Student 2', name: 'Student 2', studentId: '2' },
                    // Add more students as needed
                  ]}
                  onChange={(selectedOption) => setSelectedStudent(selectedOption)}
                />
                </div>
                <div className="table-button">
                <button onClick={handleAddButtonClick}>Add</button>             
                </div>
                </div>
                <div className="form-button">
                <button >Send</button>      
                </div>
                      
            </main>
                      
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Sendcv;
