import React from 'react';
import '../components/guideline/Guideline.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GuildeLine from '../components/guideline/guideline';


const Guildeline = () => {
  return (
    <div className='Guildeline'>
        <Navbar/>
        <GuildeLine/>
    </div>
  )
}

export default Guildeline