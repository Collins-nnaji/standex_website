import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const TechElevateCourses = () => {
    const courses = [
        {
          title: "Cloud Engineering, AI & DevOps",
          description: "Master the fundamentals of cloud architecture, artificial intelligence, and DevOps practices. Learn to design, deploy, and manage scalable cloud solutions while implementing AI technologies and automated workflows.",
          primaryLink: "https://buy.stripe.com/cN29CF2Uw5dk30A6op",
          secondaryLink: "https://example.com/business-intelligence",
          imagePath: "/images/CloudCourse.svg", // Add your image path here
        },
        {
          title: "Power Platform: Low Code - No Code",
          description: "Discover how to build professional applications without traditional coding. Learn to use Microsoft Power Platform to create efficient business solutions through low-code and no-code approaches.",
          primaryLink: "https://buy.stripe.com/bIY1693YAcFMbx66os",
          secondaryLink: "https://example.com/business-intelligence",
          imagePath: "/images/PowerPlatformCourse.svg", // Add your image path here
        },
        {
          title: "Business Intelligence",
          description: "Transform raw data into meaningful insights. Learn to use BI tools to create powerful visualizations, reports, and dashboards that drive informed business decisions.",
          primaryLink: "https://buy.stripe.com/bIYaGJeDe0X47gQ5kn",
          secondaryLink: "https://example.com/business-intelligence",
          imagePath: "/images/BusinessIntelligenceCourse.svg", // Add your image path here
        }
      ];
    
      const CourseCard = ({ course }) => (
        <div className="bg-[#ecffef] rounded-md  overflow-hidden transform transition duration-300 hover:scale-101 mb-8">
          {/* Using grid instead of flex for better responsive behavior */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image container - takes 7 columns on large screens */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full pt-[50%]">
                <img
                  src={course.imagePath}
                  alt={course.title}
                  className="absolute top-0 left-0 w-full h-full object-contain bg-gray-50"
                />
              </div>
            </div>
            
            {/* Content container - takes 5 columns on large screens */}
            <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-gray-700 text-xl font-medium lg:text-xl leading-relaxed">{course.description}</p>
              </div>
              
              {/* Buttons container with improved responsive layout */}
              <div className="flex flex-col xs:flex-row gap-3 mt-6">
                <a
                  href={course.primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 bg-primary text-white font-semibold text-xl lg:text-xl  hover:bg-[#007B5A] transition-colors"
                >
                  Enroll Now
                  <ArrowUpRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </a>
                
                <a
                  href={course.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3  bg-[#1A9AB1] text-white font-semibold text-xl lg:text-xl  hover:bg-[#027083] transition-colors"
                >
                  Brochure
                  <ArrowUpRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );

  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">Our Courses</h2>
        
        {/* Courses list */}
        <div className="space-y-6 lg:space-y-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechElevateCourses