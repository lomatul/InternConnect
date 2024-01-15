import React from 'react'
// import "./Add.css";
import axios from "axios";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import "../test.css";
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';


const Mentor = () => {

    const {id} = useParams();
    const [mentors, setMentors] = useState([]);
    const [mentorName, setMentorName] = useState('');
    const [mentorEmail, setMentorEmail] = useState('');
    const [mentorPosition, setMentorPosition] = useState('');
    const [company, setCompany] = useState('');
    const [students, setStudents]=useState([]);
    const [allmentors, setAllmentors]=useState([])
    const [selectedStudentId, setSelectedStudentId] = useState('');
    const [otp, setOtp]=useState('');
    const [trigger, setTrigger]=useState(true)



    useEffect(() => {
      axios.get('http://localhost:4000/InterConnect/company/getCompanybyid/'+id)
        .then((response) => {
          setCompany(response.data);
          console.log(response)
          // setFilteredCompanies(hiringCompanies); // Initially, both arrays are the same
        })
        .catch((error) => {
          console.error('An error occurred while fetching companies:', error);
        });
    }, []);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch students
          const responseStudents = await axios.get('http://localhost:4000/InterConnect/student/students');
          const fetchedStudents = responseStudents.data;
    
          const filteredStudents = fetchedStudents.filter((student) =>
            company.selectedInterns.includes(student.student_id)
          );
    
          console.log("Filtered students:", filteredStudents);
          
    
          // Fetch mentors after students are fetched
          const responseMentors = await axios.get('http://localhost:4000/InterConnect/mentor/mentors');
          const fetchedMentors = responseMentors.data;
    
          // Use fetchedMentors as needed
          console.log("Mentors:", fetchedMentors);
    
          // Perform additional logic with fetchedMentors here
    
          // For example, filter students based on assignedStudents array in mentors
          const finalFilteredStudents = filteredStudents.filter((student) =>
            fetchedMentors.every((mentor) => mentor.assignedStudents.includes(student.student_id))
          );
          setStudents(finalFilteredStudents);
          console.log('Final filtered students:', finalFilteredStudents);
          console.log('Final  students:', students);
        } catch (error) {
          console.error('An error occurred:', error.message);
        }
      };
    
      fetchData();
    }, [trigger, company.selectedInterns]);
    
    

    const handleAddMentor = () => {
      const newMentor = {
        name: mentorName,
        email: mentorEmail,
        position: mentorPosition,
      };
  
      // Add the new mentor to the array
      setMentors((prevMentors) => [...prevMentors, newMentor]);
  
      // Clear the form fields
      setMentorName('');
      setMentorEmail('');
      setMentorPosition('');
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
         axios.post('http://localhost:4000/InterConnect/company/assignMenotors', {id, Studentid:selectedStudentId, otp:otp, newmentors: mentors })
        .then((response) => {
          console.log(response)
          toast.success('Mentors are created!')
          setMentors([]);
          setSelectedStudentId('')
          setTrigger(!trigger);

          // setFilteredCompanies(hiringCompanies); // Initially, both arrays are the same
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
      }catch(error){
        console.log("An error occured", error);
      }
    };
  
    const handleRemoveMentor = (index) => {
      // Remove the mentor at the specified index from the array
      setMentors((prevMentors) => prevMentors.filter((_, i) => i !== index));
    };
    // if(students.length==0){
    //   return(
    //     <div><p>Thanks, You have added mentors for all students.</p></div>
    //   )
    // }
    return (     
    <div >
    <div className='admincontainer'>
        <div className='studenttext'>
          
            <h1>Welcome to  InternConnect</h1>
            <div className='button'><a href="/about">Explore Now &#8599;</a></div>
        </div>
        <div className='adminimage'>
            <img src="/mentor.gif" alt="" />
        </div>
    </div>

    <div className="studentguideline">           
                <ul>
                    <li>There will be  an assessment form of the interns of the Islamic University of Technology (IUT)
                    working at your company. The internship is part of the academic curriculum, therefore there
                    is some grading associated with it. Please fill out this form and help us in the grading process.
                    </li>
                    <li> If you think that there is a mistake and you should not fill
                    this form, please -<a href="/contact">contact us</a>
                    </li>
                    <li>A copy of the submitted form will be sent to your email address. Please forward that email to
                    Internship Committee .
                    We understand that this two-step process may be of a little hassle, but we could not find a
                    more convenient way to verify that the right person is submitting the form. It is easier for us
                    to verify if you use your organizational email address.
                    </li>
                    <li>Thank you very much for supporting our students in their internships.</li>
                    <p>If you need support regarding this form, please  -<a href="/contact">contact us</a>.</p>

                </ul>

                <div className="sending-cvs">
        <div className="form-group">
          <label>Name of the Student <span>*</span> </label>
          <Select className='adselect' options={students.map((student)=>({
                      value:student.student_id,
                      label:student.name
                  }))}
                  onChange={(selectedOption) => setSelectedStudentId(selectedOption ? selectedOption.value : '')} />
        </div>
        <div className="form-group">
          <label htmlFor="">Write your OTP<span>*</span></label>
          <input type="text" required value={otp} onChange={(e)=>setOtp(e.target.value)}/>
        </div>
        
       
      </div>

      {mentors.map((mentor, index) => (
        <div key={index} className="addmentor">
          <div className="sending-cvs">
            <div className="form-group">
              <label>Name of the Mentor <span>*</span> </label>
              <input type="text" value={mentor.name}  />
            </div>

            <div className="form-group">
              <label>Email of the Mentor <span>*</span></label>
              <input type="text" value={mentor.email}  />
            </div>

            <div className="form-group">
              <label>Designation of the Mentor <span>*</span></label>
              <input type="text" value={mentor.position}  />
            </div>

            <div className="mentorbutton">
            <Button style={{background:"#f09792"  , marginTop:"44px"}} onClick={() => handleRemoveMentor(index)}>Remove Mentor</Button>
            </div>

          
          </div>
        </div>
      ))}

            <div className="form-group">
              <label>Name of the Mentor <span>*</span> </label>
              <input type="text" value={mentorName} onChange={(e)=>{setMentorName(e.target.value)}} />
            </div>

            <div className="form-group">
              <label>Email of the Mentor <span>*</span></label>
              <input type="text" value={mentorEmail} onChange={(e)=>{setMentorEmail(e.target.value)}} />
            </div>

            <div className="form-group">
              <label>Designation of the Mentor <span>*</span></label>
              <input type="text" value={mentorPosition}  onChange={(e)=>{setMentorPosition(e.target.value)}}/>
            </div>

            <div className="mentorbutton">
              <Button  onClick={handleAddMentor}>Add Mentor</Button>
            </div>
      
            <Button onClick={handleSubmit}>Submit</Button>
        
    </div>
    </div>
  );
};

export default Mentor;