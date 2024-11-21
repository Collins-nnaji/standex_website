// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from './Hero'
import Body from './Body'
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import Body2 from './Body2';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Body />
      <Body2 />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default Home