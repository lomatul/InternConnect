// In Login.js
import React from 'react';
import '../components/contact/contact.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Contacts from '../components/contact/contact';

const Studentcontact = () => {
    return (
        <div className="Aboutus">
          <Navbar/>
            <Contacts/>
          <Footer/>
        </div>
      );
}

export default Studentcontact;
