// eslint-disable-next-line no-unused-vars
import React  from 'react';
import { useState } from 'react';
import { Users, Lightbulb, Target, } from 'lucide-react';
import { Cloud, ArrowRight, Smartphone, Database, BarChart, } from 'lucide-react';



const ServiceCategory = ({ title, description, icon: Icon, services }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="bg-[#e2ffe7] rounded-md p-8  transition-all duration-300 hover:shadow-sm">
        <div className="flex items-center mb-6">
          <Icon className="mr-4 text-primary" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="mb-6 text-gray-800">{description}</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center text-primary font-semibold hover:text-[#007B5A] transition-colors duration-300"
        >
          {isOpen ? 'Hide' : 'View'} Services Details
          <ArrowRight className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} size={20} />
        </button>
        {isOpen && (
          <div className="mt-8 space-y-12">
            {services.map((service, index) => (
              <div key={index} className="border-t border-gray-200 pt-8">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
                  />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="font-bold mb-3 text-xl text-gray-800">{service.title}</h4>
                    <p className="mb-4 text-gray-600">{service.description}</p>
                    <p className="text-sm text-gray-500"><strong>Project Duration:</strong> {service.duration}</p>
                    <p className="text-sm text-gray-500"><strong>Price Range:</strong> {service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
const Body = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceCategories = [
    {
      title: "Cloud and IT Strategy Consulting",
      description: "Navigate the Cloud Technology Landscape with our comprehensive cloud services, including migration, disaster recovery, and cost management.",
      icon: Cloud,
      services: [
        {
          title: "Cloud Migration",
          description: "Seamlessly transition your infrastructure to the cloud with minimal downtime. Our team ensures a smooth migration process, from planning to execution.",
          duration: "3-6 months",
          price: "£5000 - £20000",
          imageUrl: "/images/cloudMigrationImage.png"
        },
        {
          title: "Disaster Recovery",
          description: "Protect your data with our robust disaster recovery solutions. We implement strategies to ensure your business can quickly recover from any data loss.",
          duration: "Ongoing",
          price: "£2000 - £10000/year",
          imageUrl: "/images/disasterRecoveryImage.png"
        },
        {
          title: "Cost Management",
          description: "Optimize your cloud expenditure with our cost management services. We help you identify cost-saving opportunities and implement best practices.",
          duration: "Ongoing",
          price: "£1500 - £8000/year",
          imageUrl: "/images/costManagementImage.png"
          
        },
        {
          title: "Enterprise Architecture Design",
          description: "Develop a robust and scalable enterprise architecture with our comprehensive design services, focusing on data and solution architecture.",
          duration: "3-9 months",
          price: "£5000 - £25000",
          imageUrl: "/images/enterpriseArchitectureDesignImage.png"
          
        }
      ]
    },
    {
      title: "Web & Mobile App Development",
      description: "Bring your web and mobile ideas to life with our custom development services, from eCommerce platforms to progressive web apps.",
      icon: Smartphone,
      services: [
        {
          title: "eCommerce Development",
          description: "Launch your online store with our custom eCommerce development services. We create scalable and secure platforms to enhance your sales.",
          duration: "3-6 months",
          price: "£10000 - £50000",
          imageUrl: "/images/ecommerceDevelopmentImage.png"
          
        },
        {
          title: "API Integration",
          description: "Integrate third-party services and enhance your app's functionality with our API integration solutions, ensuring seamless connectivity and performance.",
          duration: "1-3 months",
          price: "£5000 - £20000",
          imageUrl: "./images/apiIntegrationImage.png"
          
        },
        {
          title: "Progressive Web and Mobile Apps",
          description: "Develop high-performance progressive web and mobile apps that offer a native app-like experience, focusing on performance optimization and responsive design.",
          duration: "3-6 months",
          price: "£15000 - £60000",
          imageUrl: "/images/progressiveWebAndMobileAppsImage.png"
          
        },
        {
          title: "Setting up Power Apps",
          description: "Automate your business processes and create custom applications with Power Apps, streamlining operations and improving efficiency.",
          duration: "1-6 months",
          price: "£2000 - £10000",
          imageUrl: "/images/settingUpPowerAppsImage.png"
          
        }
      ]
    },
    {
      title: "Digital Marketing Services",
      description: "Elevate your online presence with our tailored digital marketing strategies, including SEO, PPC advertising, and email campaigns.",
      icon: BarChart,
      services: [
        {
          title: "SEO Optimization",
          description: "Enhance your online visibility with our comprehensive SEO services, from keyword research to on-page and off-page optimization.",
          duration: "6-12 months",
          price: "£1500 - £8000",
          imageUrl: "/images/seoOptimizationImage.png"
          
        },
        {
          title: "Ads (Google, YouTube, Social Media)",
          description: "Drive targeted traffic to your website with our expertly managed ad campaigns across various platforms, optimized for maximum ROI.",
          duration: "Ongoing",
          price: "£500 - £2000/month",
          imageUrl: "/images/adsImage.png"
          
        },
        {
          title: "Analytics Setup",
          description: "Gain comprehensive insights into user behavior with our analytics setup, using tools like Google Analytics and Microsoft Clarity.",
          duration: "1-3 months",
          price: "£500 - £3000",
          imageUrl: "/images/analyticsSetupImage.png"
          
        },
        {
          title: "Email Marketing",
          description: "Boost your engagement and conversions with our tailored email marketing campaigns, keeping your audience informed and engaged.",
          duration: "Ongoing",
          price: "£300 - £1500/month",
          imageUrl: "/images/emailMarketingImage.png"
          
        }
      ]
    },
    {
      title: "Data Science and AI Solutions",
      description: "Harness the power of Data and AI to gain valuable insights and automate processes, empowering informed decision-making and operational efficiency.",
      icon: Database,
      services: [
        {
          title: "Predictive Analytics",
          description: "Leverage predictive analytics to forecast trends and make data-driven decisions, staying ahead of the competition.",
          duration: "2-6 months",
          price: "£3000 - £15000",
          imageUrl: "/images/predictiveAnalyticsImage.png"
          
        },
        {
          title: "NLP Solutions",
          description: "Implement natural language processing solutions to automate text analysis and enhance user interactions with custom NLP models.",
          duration: "3-9 months",
          price: "£4000 - £20000",
          imageUrl: "/images/nlpSolutionsImage.png"
          
        },
        {
          title: "Business Intelligence Services",
          description: "Unlock the full potential of your data with our business intelligence services, providing actionable insights for strategic decision-making.",
          duration: "1-6 months",
          price: "£3000 - £15000",
          imageUrl: "/images/businessIntelligenceServicesImage.png"
          
        },
        {
          title: "AI-driven Automation",
          description: "Automate repetitive tasks and improve efficiency with our AI-driven automation solutions, integrating with tools like Power Automate.",
          duration: "3-12 months",
          price: "£5000 - £25000",
          imageUrl: "/images/aiDrivenAutomationImage.png"
          
        }
      ]
    }
  ];
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {serviceCategories.map((category, index) => (
                <ServiceCategory key={index} {...category} />
              ))}
            </div>
          </div>
        </section>
  </div>;
}

export default Body;