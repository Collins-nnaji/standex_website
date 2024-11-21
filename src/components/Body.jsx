// eslint-disable-next-line no-unused-vars
import React  from 'react';
import { Users, Lightbulb, Target, } from 'lucide-react';

const Body = () => {
    
  return <div>
    <section id="about" className="py-32 bg-gradient-to-br from-[#0aa57e] to-[#027398] mt-10" >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl text-white font-bold text-center mb-12">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-bl-3xl transition-all duration-300 hover:-translate-y-1 "> 
                <div className="flex items-center mb-4">
                  <Lightbulb className="text-primary mr-2" size={24} />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be the catalyst for digital innovation, empowering businesses to thrive in the ever-evolving digital landscape. We envision a world where every organization, regardless of size or industry, can harness the full potential of digital technologies to achieve unprecedented growth and success.
                </p>
              </div>
              <div className="bg-white p-6 transition-all duration-300 hover:-translate-y-1 ">
                <div className="flex items-center mb-4">
                  <Target className="text-primary mr-2" size={24} />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  Our mission is to deliver cutting-edge digital solutions that drive tangible results for our clients. We are committed to combining creativity, technology, and strategic thinking to create digital experiences that not only meet but exceed expectations. Through collaboration and innovation, we aim to elevate businesses and set new standards in the digital realm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-br-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <Users className="text-primary mr-2" size={24} />
                  <h3 className="text-xl font-semibold">Our Team</h3>
                </div>
                <p className="text-gray-600">
                  At the heart of Standex is our diverse team of passionate experts. From skilled developers and creative designers to strategic marketers and visionary leaders, our team brings together a wealth of experience and expertise. We foster a culture of continuous learning and collaboration, ensuring that we are always at the forefront of digital innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

  </div>;
}

export default Body;