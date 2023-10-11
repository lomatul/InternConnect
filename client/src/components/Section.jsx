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
        <div className='card-section'>
            <div className='cards'>
                <div className='card'>
                    <img src="globe.png" alt="" />
                    <h1>Easy Account Registration</h1>
                    <p>Global banking made easy and available in 140+ countries</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="2.png" alt="" />
                    <h1>Easy Account Registration</h1>
                    <p>Global banking made easy and available in 140+ countries.</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="3.png" alt="" />
                    <h1>Easy Account Registration</h1>
                    <p>Global banking made easy and available in 140+ countries.</p>
                    <a href="/">learn &rarr;</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section