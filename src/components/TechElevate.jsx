// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar';
import TechElevateHero from './TechElevateHero';
import TechElevateWhyChoose from './TechElevateWhyChoose';
import TechElevateCareer from './TechElevateCareer';
import TechElevateCourses from './TechElevateCourses';
import TechElevateConnect from './TechElevateConnect';
import Footer from './Footer';
import ScrollTop from './ScrollTop';



const TechElevate = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <TechElevateHero />
      <TechElevateWhyChoose />
      <TechElevateCareer />
      <TechElevateCourses />
      <TechElevateConnect />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default TechElevate