// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ArrowRight, Cloud, Database, Workflow, CheckCircle, Zap } from 'lucide-react';

const Body2 = () => {
  const services = [
    {
      theme: 'emerald',
      icon: <Cloud className="w-12 h-12 text-emerald-600" />,
      images: {
        small: "/images/CloudSolutionSmall.png",
        medium: "/images/CloudSolutionMedium.png",
        large: "/images/CloudSolutionLarge.png"
      },
      imageAlt: "Cloud computing infrastructure visualization",
      title: "Intelligent Cloud Solutions",
      description: "Empower your business with scalable, secure, and efficient cloud-based systems that foster innovation and adaptability.",
      overview: "Standex Digital's Intelligent Cloud Solutions provide a holistic approach to cloud transformation. From designing secure cloud architecture to implementing containerized microservices, our service enables flexible, resilient, and optimized cloud environments. Our team leverages the latest advancements in AI, Docker, Kubernetes, and DevOps to provide you with an agile, scalable, and secure infrastructure that evolves with your business.",
      price: "$20,000 - $75,000",
      timeline: "8 - 16 weeks",
      features: [
        "Cloud Strategy & Architecture",
        "DevOps & CI/CD Pipelines",
        "Containerization & Orchestration",
        "AI & Machine Learning Models"
      ],
      benefits: [
        "Enhanced Flexibility and Scalability",
        "Reduced Operational Costs",
        "Agile, Reliable Deployment",
        "Data-Driven Decision-Making"
      ]
    },
    {
      theme: 'blue',
      icon: <Workflow className="w-12 h-12 text-blue-600" />,
      images: {
        small: "/images/PowerPlatformSmall.png",
        medium: "/images/PowerPlatformMedium.png",
        large: "/images/PowerPlatformLarge.png"
      },
      imageAlt: "Power Platform dashboard interface",
      title: "Power Platform Solutions",
      description: "Accelerate innovation and automation through low-code solutions enhanced by AI-powered Copilot Studio.",
      overview: "Our Power Platform Solutions, featuring Copilot Studio, enable your teams to design, automate, and deploy solutions with minimal coding knowledge. With low-code tools, Power Apps, Power Automate, and Power BI, we provide everything needed to automate workflows, build custom applications, and visualize data insights effortlessly. Copilot Studio brings AI assistance directly into your workflows, driving productivity and empowering teams to innovate faster than ever.",
      price: "$15,000 - $45,000",
      timeline: "6 - 10 weeks",
      features: [
        "Copilot Studio for AI-Powered Assistance",
        "Power Apps Development",
        "Power Automate",
        "Power BI Analytics"
      ],
      benefits: [
        "Empowerment with Minimal Coding Skills",
        "Increased Efficiency through Automation",
        "Actionable Insights with Visual Dashboards",
        "AI-Enhanced Innovation"
      ]
    },
    {
      theme: 'emerald',
      icon: <Database className="w-12 h-12 text-emerald-600" />,
      images: {
        small: "/images/DataIntelligenceSmall.png",
        medium: "/images/DataIntelligenceMedium.png", 
        large: "/images/DataIntelligenceLarge.png"
      },
      imageAlt: "Data intelligence and analytics visualization",
      title: "Data Intelligence Solutions",
      description: "Transform your data into a strategic asset with comprehensive data warehousing, analytics, and governance.",
      overview: "Standex Digital's Data Intelligence Solutions offer a complete suite for managing, analyzing, and securing your data assets. Through data warehousing, real-time analytics, and governance frameworks, we empower your organization to access meaningful insights, maintain data quality, and ensure compliance. This solution goes beyond mere storage, turning data into a valuable resource for strategic growth and operational optimization.",
      price: "$18,000 - $60,000",
      timeline: "8 - 12 weeks",
      features: [
        "Data Warehousing & Integration",
        "Advanced Analytics & Reporting",
        "Data Governance & Security",
        "Real-Time Decision-Making"
      ],
      benefits: [
        "Unified, Accessible Data",
        "Enhanced Data Accuracy & Compliance", 
        "Strategic Business Intelligence",
        "Real-Time Decision-Making"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transformative Technology Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accelerate growth, streamline operations, and unlock actionable insights with our comprehensive digital services.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-20 md:space-y-24 lg:space-y-28">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`
                bg-white overflow-hidden 
                transition-all duration-300
              `}
            >
              <div className="flex flex-col">
                <div className="px-6 pt-6 pb-4">
                  <h3 className={`
                    text-2xl font-bold mb-2 
                    ${service.theme === 'blue' ? 'text-blue-900' : 'text-emerald-900'}
                  `}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="relative h-72 overflow-hidden">
                  <picture>
                    <source 
                      media="(min-width: 1024px)" 
                      srcSet={service.images.large} 
                    />
                    <source 
                      media="(min-width: 640px)" 
                      srcSet={service.images.medium} 
                    />
                    <img 
                      src={service.images.small}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className={`
                      bg-white/10  p-2 rounded-lg
                      ${service.theme === 'blue' 
                        ? 'bg-blue-500/10' 
                        : 'bg-emerald-500/10'
                      }
                    `}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    <div className={`
                      bg-gradient-to-br p-6 rounded-xl 
                      ${service.theme === 'blue' 
                        ? 'from-blue-50 to-blue-50/50' 
                        : 'from-emerald-50 to-emerald-50/50'
                      }
                    `}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`
                          p-2 rounded-lg 
                          ${service.theme === 'blue' 
                            ? 'bg-blue-100' 
                            : 'bg-emerald-100'
                          }
                        `}>
                          <Zap className={`
                            w-5 h-5 
                            ${service.theme === 'blue' 
                              ? 'text-blue-600' 
                              : 'text-[#1A9AB1]'
                            }
                          `} />
                        </div>
                        <h4 className={`
                          font-semibold 
                          ${service.theme === 'blue' 
                            ? 'text-blue-900' 
                            : 'text-emerald-900'
                          }
                        `}>Solution Overview</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {service.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-2">
                              <ArrowRight className={`
                                w-4 h-4 flex-shrink-0 mt-1 
                                ${service.theme === 'blue' 
                                  ? 'text-blue-500' 
                                  : 'text-emerald-500'
                                }
                              `} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, bIndex) => (
                            <div key={bIndex} className="flex items-start gap-2">
                              <CheckCircle className={`
                                w-4 h-4 flex-shrink-0 mt-1 
                                ${service.theme === 'blue' 
                                  ? 'text-blue-500' 
                                  : 'text-emerald-500'
                                }
                              `} />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">Starting at</div>
                        <div className="font-semibold text-gray-900">{service.price}</div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-sm text-gray-600">Timeline</div>
                        <div className="font-semibold text-gray-900">{service.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body2;