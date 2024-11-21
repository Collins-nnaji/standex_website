import React, { useState } from 'react'
import { LineChart, Brain, Boxes, Building2,Cloud,Database,Code2,BarChart3,Shield,AppWindow } from 'lucide-react';

const TechElevateCareer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const careers = [
    {
      title: "Business Intelligence Analyst",
      icon: LineChart,
      description: "Career prospects in various industries, with a focus on data analysis and strategic decision-making.",
      salary: "£40,000 - £70,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "Data Scientist",
      icon: Brain,
      description: "Opportunities in tech companies, finance, healthcare, and more, focusing on predictive modeling and big data.",
      salary: "£50,000 - £90,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "Power Platform Developer",
      icon: Boxes,
      description: "High demand in businesses seeking to automate processes and improve efficiency with custom apps and workflows.",
      salary: "£45,000 - £80,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "Enterprise Architect",
      icon: Building2,
      description: "Key roles in designing and implementing IT infrastructure, ensuring scalability and security.",
      salary: "£60,000 - £100,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "Cloud Solutions Architect",
      icon: Cloud,
      description: "Leads cloud strategy and design in organizations, ensuring efficient and secure cloud-based solutions that scale to business needs.",
      salary: "£65,000 - £120,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "DevOps Engineer",
      icon: Code2,
      description: "Integrates development and operations, automating software deployment and ensuring smooth, reliable system performance.",
      salary: "£50,000 - £85,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "ML Operations Engineer",
      icon: Database,
      description: "Works in industries ranging from finance to healthcare, focusing on building and deploying AI models to solve complex problems.",
      salary: "£55,000 - £95,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "Power BI Specialist",
      icon: BarChart3,
      description: "Creates and manages data visualizations and dashboards, helping businesses make informed, data-driven decisions.",
      salary: "£40,000 - £70,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "Cloud Security Engineer",
      icon: Shield,
      description: "Ensures data protection and compliance in cloud environments, focusing on implementing security protocols and threat mitigation.",
      salary: "£60,000 - £100,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    },
    {
      title: "Low-Code/No-Code Solutions Consultant",
      icon: AppWindow,
      description: "Specializes in delivering custom low-code solutions, improving efficiency and accessibility for non-technical users across various industries.",
      salary: "£45,000 - £75,000",
      iconColor: "text-primary",
      salaryColor: "text-[#007B5A]"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === careers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? careers.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint
    const cardsToShow = isLargeScreen ? 3 : 1;
    let cards = [];
    
    for (let i = 0; i < cardsToShow; i++) {
      let index = (currentIndex + i) % careers.length;
      cards.push(careers[index]);
    }
    
    return cards;
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#ffffff] to-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Career Prospects & Salary Ranges
          </h2>
        </div>
        
        <div className="relative px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {getVisibleCards().map((career, index) => (
              <div 
                key={index}
                className="transition-all duration-500"
              >
                <div className="bg-[#ecffef] border border-gray-200 p-6 h-full transition-all duration-300 hover:border-primary rounded-md">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <career.icon className={`w-8 h-8 ${career.iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {career.title}
                    </h3>
                    
                    <p className="text-gray-700 text-xl font-medium leading-relaxed mb-4">
                      {career.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-900 text-2xl font-semibold">Annual Salary</span>
                        <div className="h-px flex-grow bg-gray-200"></div>
                      </div>
                      <div className={`text-2xl font-semibold ${career.salaryColor} mt-1`}>
                        {career.salary}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 "
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 "
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {careers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechElevateCareer