import React from 'react'
import "../admin/Add.css";

const UploadCV = () => {
    return (
      <div className="add">
        <div className="addcontainer">
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
            <img src="guide.gif" alt="Icon" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
            CV Guidelines  </h2>

          <div className="cvguideline">           
                <ul>
                    <li>Use a clear and professional format for your CV (preferable in Latex).</li>
                    <li>Include your contact information at the top of the CV.</li>
                    <li>Highlight your skills, experience, and education.</li>
                    <li>Tailor your CV for the specific job or internship you're applying for.</li>
                </ul>
                <p>For more detailed guidelines, please refer to our <a href="/cv-guidelines">CV Guidelines Page</a>.</p>
         </div>

         <h2 style={{ display: 'flex', alignItems: 'center'  }}>
            <img src="cv.gif" alt="Icon" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
            Upload Your CV  </h2>
       
          <div className="addsections" >   
            <div className="details">                      
            <div className="xcellupload">             
              <input type="file" />
              <button>Upload</button>
            </div>       
            </div>           
          </div>


          <h2 style={{ display: 'flex', alignItems: 'center' }}>
            <img src="samplecv.gif" alt="Icon" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
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
        </div>
      </div>
    );
  };
export default UploadCV