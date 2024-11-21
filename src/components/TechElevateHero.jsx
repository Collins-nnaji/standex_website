import React from 'react'
import TechElevateHeroImage from '../assets/website/TechElevateHeroImage.png';
import AiBot from '../assets/website/AiBot.png'
import { motion } from 'framer-motion';

const TechElevateHero = () => {
  return (
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
                 className="text-[#00936B] text-5xl text-center md:text-left sm:text-6xl font-bold"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Tech Elevate
                </motion.h1>
                <motion.h2 
                 className='text-[#1b1b1b] text-4xl text-center md:text-left sm:text-4xl font-bold leading-relaxed'
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Your Gateway to Advanced Tech Skills
                </motion.h2>
                <motion.p 
                 className="text-gray-700 text-2xl font-semibold text-center md:text-left leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                >Welcome to Tech Elevate, where industry professionals teach practical technology training programs
                 to help you gain real-world skills for immediate job placement.
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
                 src={TechElevateHeroImage}
                 alt=""
                 className=""
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 
                />
                <motion.img 
                 src={AiBot}
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
  )
}

export default TechElevateHero