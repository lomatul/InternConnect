import React from 'react'
import './test.css'

function Test() {

  return (
      <div >
          <div className='admincontainer'>
          <div className='studenttext'>
              <h3>Streamline Your Internship Program</h3>
              <h1>Effortlessly Add Companies with Excel Upload!</h1>
            
          </div>
          <div className='adminimage'>
              <img src="adcompany.gif" alt="" />
          </div>
      </div>
      <div className="studentguideline">           
                  <ul>
                  <li>Use a clear and professional format for your CV (preferable in Latex).</li>
                    <li>Include your contact information at the top of the CV.</li>
                    <li>Highlight your skills, experience, and education.</li>
                    <li>Tailor your CV for the specific job or internship you're applying for.</li>
                      <p>For more detailed guidelines, please refer to our <a href="/Guildeline">Guidelines Page</a>.</p>
                  </ul>

                  <h2 style={{ display: 'flex', alignItems: 'center' }}>
            Sample CV's  </h2>


                <div className="sample-cvs">
                        <a href="cvsample1.pdf" download>Download Sample CV 1</a>  
                    </div>
                <div className="sample-cvs">
                        <a href="cvsample2.pdf" download>Download Sample CV 2</a>
                    </div>
                <div className="sample-cvs">
                        <a href="cvsample3.pdf" download>Download Sample CV 3</a>
                </div>

             <div className='xcellupload'>         
                   <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                    <button >Create</button>          
              </div>
       </div>


      
            </div>

      
    );
  };
export default Test