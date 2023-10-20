import React from 'react'

const Testimonials = () => {
  return (
    <div className='testimonials'>
 {/* <h1>Our Features</h1> */}
        <div className='testimonial-cards'>
            <div className='card'>
                <img src="ui.gif" alt="" />
                <p> UI/UX designers are responsible for crafting the look and feel of digital products, ensuring they are visually appealing</p>
                <div className='icons'>
                    <a href="/">UI/UX Designer</a>
   
                </div>
            </div>
            <div className='card'>
                <img src="frontend.gif" alt="" />
                <p>Frontend developers focus on the user interface and user experience, creating the visual elements and interactions that users see and interact with in web applications.</p>
                <div className='icons'>
                    <a href="/">Frontend Developer</a>
           
                </div>
            </div>
            <div className='card'>
                <img src="backend.gif" alt="" />
                <p> Backend developers work on the server-side of web applications, managing databases, server infrastructure, and ensuring data is securely and efficiently processed.</p>
                <div className='icons'>
                    <a href="/">Backend Developer</a>
                
                </div>
            </div>
            <div className='card'>
                <img src="swe.gif" alt="" />
                <p>Software engineers design, develop, and maintain software applications, using various programming languages and tools to create functional and efficient solutions.</p>
                <div className='icons'>
                    <a href="/">Software Engineer</a>
        
                </div>
            </div>

            <div className='card'>
                <img src="gf.gif" alt="" />
                <p>Project managers oversee and coordinate all aspects of a project, from planning and execution to closure, ensuring it's delivered on time and within scope and budget.</p>
                <div className='icons'>
                    <a href="/">Project Manager</a>
                   
                </div>
            </div>

            <div className='card'>
                <img src="dev.gif" alt="" />
                <p>DevOps engineers bridge the gap between development and IT operations, automating processes, managing infrastructure, and ensuring smooth and efficient software deployment and maintenance.</p>
                <div className='icons'>
                    <a href="/">DevOps</a>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials