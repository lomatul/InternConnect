import React from 'react'

const Section = () => {
  return (
    <div className='section'>
        <div className='inner-section'>
            <div className='section-text'>
            
                <h1>Discover the power of our Internship Management System</h1>
                <p>This software would significantly streamline the entire internship placement process, alleviating the burdens faced by everyone involved. Our goal is to develop a user-friendly web application that will not only eliminate these issues but also enhance the overall experience of all stakeholders.</p>
                <div className='button'><a href="/">Explore Now</a></div>
            </div>
            <div className='section-image'>
                <img src="Ourlogo.png" alt="" />
            </div>
        </div>
        <h1>Our Features</h1>
        <div className='card-section'>
       
            <div className='cards'>
                
                <div className='card'>
                    <img src="report.png" alt="" />
                    <h1>Reporting + Metrics</h1>
                    <p>Flexible standard and custom report dropping for intern and more.Students will be required to submit reports within a designated time frame ( usually weekly / bi-weekly).</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="evaluation.png" alt="" />
                    <h1>Autometic Evaluations</h1>
                    <p>The software will offer a feature that provides mentors (supervisors and project managers)  with access to a dedicated link for evaluating interns.</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="student.png" alt="" />
                    <h1>Student account creation</h1>
                    <p>The "Student Account Creation" feature is a fundamental component of our Internship Management System, allowing students to create their accounts seamlessly with the help of administrative data provided through an Excel sheet.
</p>
                    <a href="/">learn &rarr;</a>
                </div>


                
            </div>


            <div className='cards'>
                <div className='card'>
                    <img src="cv.png" alt="" />
                    <h1>CV Dropping</h1>
                    <p>The "CV Dropping" feature in the Internship Management System is designed to allow students to submit their curriculum vitae (CV) in PDF format as part of the internship application process.</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="Preference.png" alt="" />
                    <h1>Student Preference</h1>
                    <p>The software will include a feature for students to indicate their preferences. This will encompass two types of preferences: ‘Student’s Technical Preference’ and company preferences. 
</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="notification.png" alt="" />
                    <h1>Notification Feature</h1>
                    <p>The software will include a comprehensive notification system designed to keep users informed about important events, deadlines, and other essential updates.</p>
                    <a href="/">learn &rarr;</a>
                </div>


                
            </div>


        </div>
    </div>
  )
}

export default Section