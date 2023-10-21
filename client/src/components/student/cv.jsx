import React from 'react'
import "../admin/Add.css";

const UploadCV = () => {
    return (
      <div className="add">
           <img
            src="cv.png"
            alt="InternConnect Logo"
            style={{ width: '100px', height: '100px', marginTop:'50px'}}
        />
        <div className="addcontainer">
          <h1> Upload your CV here</h1> 
       
          <div className="addsections"  style={{ marginTop:'100px' }}>     
            <div className="details">           
            <label htmlFor=""   style={{ color:'red' }} >See Guideline page for details*</label>
            <div className="xcellupload">
             
              <input type="file" />
              <button>Upload</button>
            </div>       
            </div>           
          </div>
          <h1>Some Sample CV's</h1> 
          <div className="sample-cvs">
                <a href="sample_cv_1.pdf" download>Download Sample CV 1</a>
                <a href="sample_cv_2.pdf" download>Download Sample CV 2</a>
                <a href="sample_cv_3.pdf" download>Download Sample CV 3</a>
          </div>
        </div>
      </div>
    );
  };
export default UploadCV