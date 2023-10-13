import React from 'react';
import '../components/Guideline.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GuildeLine from '../components/guideline';


const Guildeline = () => {
  return (
    <div className='Guildeline'>
        <Navbar/>
        <GuildeLine/>
        <Footer/>
    </div>
  )
}

export default Guildeline