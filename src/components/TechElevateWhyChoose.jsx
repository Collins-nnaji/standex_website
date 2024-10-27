// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react';
import { Shield, Wrench, Briefcase, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const MicrosoftLogo = () => (
    <svg className="w-5 h-5" viewBox="0 0 23 23">
      <path fill="#F25022" d="M11 11H0V0h11v11z" />
      <path fill="#00A4EF" d="M23 11H12V0h11v11z" />
      <path fill="#7FBA00" d="M11 23H0V12h11v11z" />
      <path fill="#FFB900" d="M23 23H12V12h11v11z" />
    </svg>
  );

const TechElevateWhyChoose = () => {
    const features = [
        {
          icon: Shield,
          extraIcon: MicrosoftLogo,
          title: "Microsoft Partnership",
          description: "Learn with the latest tools and resources, ensuring you're prepared for the tech world."
        },
        {
          icon: Wrench,
          title: "Access to Tools",
          description: "Get hands-on experience with Power BI, Azure, SQL, and more for one year."
        },
        {
          icon: Briefcase,
          title: "Job References",
          description: "Stand out to employers with real job experience and professional references."
        },
        {
          icon: BookOpen,
          title: "Free Resources",
          description: "Receive textbooks and materials to support your learning journey."
        }
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
      const [isPaused, setIsPaused] = useState(false);
    
      useEffect(() => {
        if (!isPaused) {
          const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % features.length);
          }, 5000);
          return () => clearInterval(interval);
        }
      }, [isPaused, features.length]);
    
      const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % features.length);
      };
    
      const prevSlide = () => {
        setActiveIndex((current) => (current - 1 + features.length) % features.length);
      };
    
      const goToSlide = (index) => {
        setActiveIndex(index);
      };

  return (
    <section className="py-24 bg-gradient-to-br from-[#027398] to-[#0AA525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Tech Elevate
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="relative"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          {/* Carousel Container */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative p-8 bg-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-3 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-[#00936B]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center flex items-center justify-center gap-2">
                      {feature.title}
                      {feature.extraIcon && <feature.extraIcon />}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 transition-transform duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 transition-transform duration-200 hover:scale-110"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    
  )
}

export default TechElevateWhyChoose