import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Body = () => {
  // Separate refs for each section
  const titleRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  // Individual inView states for each section
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.5 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.5 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.5 });
  
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return <div>
    <section 
      id="about" 
      className="py-32 bg-gradient-to-br from-[#0aa57e] to-[#027398] mt-10"
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          ref={titleRef}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={fadeInVariant}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl text-white font-bold text-center mb-12"
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            ref={visionRef}
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-6 rounded-bl-3xl transition-all duration-300 hover:-translate-y-1"
          > 
            <div className="flex items-center mb-4">
              <Lightbulb className="text-primary mr-2" size={24} />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-xl font-medium leading-relaxed">
              To be the catalyst for digital innovation, empowering businesses to thrive in the ever-evolving digital landscape. We envision a world where every organization, regardless of size or industry, can harness the full potential of digital technologies to achieve unprecedented growth and success.
            </p>
          </motion.div>
          
          <motion.div 
            ref={missionRef}
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <Target className="text-primary mr-2" size={24} />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-xl font-medium leading-relaxed">
              Our mission is to deliver cutting-edge digital solutions that drive tangible results for our clients. We are committed to combining creativity, technology, and strategic thinking to create digital experiences that not only meet but exceed expectations. Through collaboration and innovation, we aim to elevate businesses and set new standards in the digital realm.
            </p>
          </motion.div>
          
          <motion.div 
            ref={teamRef}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-6 rounded-br-3xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <Users className="text-primary mr-2" size={24} />
              <h3 className="text-2xl font-semibold">Our Team</h3>
            </div>
            <p className="text-gray-700 text-xl font-medium leading-relaxed">
              At the heart of Standex is our diverse team of passionate experts. From skilled developers and creative designers to strategic marketers and visionary leaders, our team brings together a wealth of experience and expertise. We foster a culture of continuous learning and collaboration, ensuring that we are always at the forefront of digital innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </div>;
}

export default Body;