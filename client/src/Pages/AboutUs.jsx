// In Login.js
import React from 'react';
import '../components/aboutus/aboutus.css';
import AboutUs from '../components/aboutus/aboutus';
import FAQ from '../components/FAQ';
import '../components/style.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Aboutus = () => {
    return (
        <div className="Aboutus">
          <Navbar/>
          <AboutUs />
          <FAQ/>
          <Footer/>
        </div>
      );
}

export default Aboutus;
