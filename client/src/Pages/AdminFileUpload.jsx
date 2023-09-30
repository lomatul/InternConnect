// In Login.js
import React from 'react';
import '../components/admin.css';
import FileUpload from '../components/FileUpload';

const Fileupload = () => {
    return (
        <div className="Admin">
          <header className="Admindashboard">
            <h1>Admin Dashboard</h1>
            <FileUpload />
          </header>
        </div>
      );
}

export default Fileupload;
