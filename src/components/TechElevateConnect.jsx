import React from 'react'
import { motion } from 'framer-motion';

const TechElevateConnect = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Enhanced animation variants for children with more pronounced movement
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000] // Custom easing for smoother animation
      }
    }
  };

  // Enhanced hover animation for buttons
  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        amount: 0.2,  // Triggers when 20% of the section is in view
        once: true   // Animation will trigger every time it comes into view
      }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          variants={itemVariants}
        >
          Connect With Us
        </motion.h2>
        
        <div className="flex flex-row items-center gap-8 max-w-4xl mx-auto">
          {/* Image container that preserves aspect ratio */}
          <motion.div 
            className="w-1/2 flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="w-full">
            <motion.img
                src="/images/ConnectImage1.svg"
                alt="Connect with us"
                className="w-full h-auto object-contain"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
            </motion.div>
          
          {/* Content container */}
          <motion.div 
            className="w-1/2 space-y-4"
            variants={itemVariants}
          >
            <motion.p 
              className="text-sm font-medium sm:text-xl lg:text-xl text-gray-700 leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              Join our vibrant community and stay updated with the latest news, updates, and exclusive offers. Connect with us on Telegram to be part of our growing network of enthusiasts and professionals.
            </motion.p>
            
            <motion.div 
              className="flex gap-3"
              variants={itemVariants}
            >
             <motion.a 
                href="https://www.linkedin.com/company/standex-tech-elevate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary hover:bg-[#007B5A] text-white font-semibold text-xl lg:text-xl transition-colors duration-300 ease-in-out"
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
               <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.36-.49 1-.74 3.92-1.71 6.52-2.83 7.82-3.38 3.72-1.56 4.49-1.83 4.99-1.84.11 0 .35.03.5.16.13.13.16.3.18.43-.01.07-.01.15-.02.23z"/>
                </motion.svg>
               Join us on Telegram
               </motion.a>

               <motion.a 
                href="mailto:techelevate@standexdigital.tech"
                className="inline-flex items-center justify-center px-4 sm:px-4 py-2 sm:py-3 bg-[#1A9AB1] hover:bg-[#027083] text-white transition-colors duration-300 ease-in-out"
                title="Email us"
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ 
                    y: [0, -3, 0],
                    rotate: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
                </motion.a>

            
              </motion.div>
          </motion.div>
        </div>
      </div>
      </motion.section>
  )
}

export default TechElevateConnect