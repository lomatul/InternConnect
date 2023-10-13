import React from 'react'
import Navbar from '../components/Navbar'
import '../components/style.css'
import Container from '../components/Container'
import Section from '../components/Section'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Stats from '../components/stat'
import ScrollOut from 'scroll-out';
import { useEffect } from 'react'

const Home = () => {

  // useEffect(() => {
  //   ScrollOut({
  //     targets: 'Section,Testimonials',
  //   });
  // }, []);

  return (
    <div className='home'>
        <Navbar/>
        <Container/>
        <Stats/>
        <Section/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home