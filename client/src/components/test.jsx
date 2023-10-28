import React from 'react'
import './test.css'

function Test() {

  return (
    <div >
    <div className='admincontainer'>
        <div className='text'>
            <h3>Streamline Student Enrollment </h3>
            <h1>Add Students with Excel Upload</h1>
            <div className='button'><a href="/about">Explore Now &#8599;</a></div>
        </div>
        <div className='image'>
            <img src="adminadmin.gif" alt="" />
        </div>
    </div>

    <div className="cvguideline">           
                <ul>
                    <li>Use a clear and professional format for your CV (preferable in Latex).</li>
                    <li>Include your contact information at the top of the CV.</li>
                    <li>Highlight your skills, experience, and education.</li>
                    <li>Tailor your CV for the specific job or internship you're applying for.</li>
                </ul>
                <p>For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
         </div>

    <div className='admincard'>
       
       <input type="file" />
        
        </div>

</div>
  )
}

export default Test