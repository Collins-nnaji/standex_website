// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroImg from '../assets/website/HeroImg.jpg';
import ManSitting from '../assets/website/ManSitting.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return <>
  <main className='bg-white duration-300'>
    <div className='container  flex mt-10 sm:mt-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2 mb-2 sm:mt-16 sm:mb-10 place-items-center'>
            {/* Text Content Section */}
            <motion.div 
            className="space-y-5 xl:pr-40"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1 
                 className="text-[#00936B] text-4xl text-center md:text-left sm:text-5xl font-bold"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Welcome to Your Digital Evolution
                </motion.h1>
                <motion.p 
                 className="text-gray-600 text-center md:text-left"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                >Enhance your journey with digital services, Dojo, and Tech Elevate training. <br />
                   Transform your business with innovative, scalable digital solutions backed by unmatched expertise and a collaborative, forward-thinking team.
                </motion.p>
            </motion.div>
            {/* Image Section */}
            <motion.div 
             className="order-1 sm:order-2 relative"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
            >
                <motion.img 
                 src={HeroImg}
                 alt=""
                 className=""
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 
                />
                <motion.img 
                 src={ManSitting}
                 alt=""
                 className='absolute -bottom-12 -left-0 md:-bottom-12 md:-left-16'
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 
                />
            </motion.div>
            
        </div>
    </div>
  </main>
  </>
};

export default Hero;