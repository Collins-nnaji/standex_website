import React, { useEffect, useRef } from 'react';
import { ArrowRight, Cloud, Database, Workflow, CheckCircle, Zap } from 'lucide-react';

const Body2 = () => {
  const headingRef = useRef(null);
  const solutionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe heading
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    // Observe solution cards
    solutionRefs.current.forEach((ref, index) => {
      if (ref) {
        // Add a delay based on index for staggered animation
        ref.style.transitionDelay = `${index * 200}ms`;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

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
      overview: "Standex Digital's Intelligent Cloud Solutions deliver a holistic approach to cloud transformation, ensuring your business achieves flexible, resilient, and optimized cloud environments. From designing secure cloud architectures to implementing containerized microservices, we tailor solutions to meet your specific needs. Leveraging cutting-edge technologies like AI, Docker, Kubernetes, and DevOps, our solutions enable an agile, scalable, and secure infrastructure that grows and evolves alongside your business. With Standex Digital, your cloud strategy becomes a foundation for innovation and operational excellence.",
      price: "Based on project scope",
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
      overview: 
      "Our Power Platform Solutions, featuring Copilot Studio, empower your teams to design, automate, and deploy solutions with minimal coding expertise. By leveraging low-code tools like Power Apps, Power Automate, and Power BI, we deliver everything needed to automate workflows, build custom applications, and visualize data insights seamlessly. With Copilot Studio's AI-powered assistance, your teams can integrate intelligent support directly into their workflows, boosting productivity and enabling faster innovation for transformative results.",
      price: "Based on project scope",
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
      overview: "Standex Digital's Data Intelligence Solutions provide a comprehensive suite designed to transform how your organization manages, analyzes, and secures data assets. By leveraging advanced data warehousing, real-time analytics, and robust governance frameworks, we empower your team to unlock meaningful insights, maintain high data quality, and ensure regulatory compliance. This solution goes beyond simple storage—it elevates data into a strategic asset, driving business growth, enhancing operational efficiency, and enabling smarter decision-making for a future-ready organization.",
      price: "Based on project scope",
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
    <section className="py-16 bg-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headingRef}
          className="text-center mb-16 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transformative Technology Solutions
          </h2>
          <p className="text-2xl font-medium text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Accelerate growth, streamline operations, and unlock actionable insights with our comprehensive digital services.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-20 md:space-y-24 lg:space-y-28">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => solutionRefs.current[index] = el}
              className={`
                bg-white overflow-hidden opacity-0
                transition-all duration-1000 ease-in-out
              `}
            >
              <div className="flex flex-col">
                <div className="px-6 pt-6 pb-4">
                  <h3 className={`
                    text-3xl font-bold mb-2 
                    ${service.theme === 'blue' ? 'text-blue-900' : 'text-emerald-900'}
                  `}>
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-xl font-medium leading-relaxed">
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
                      bg-white/10 p-2 rounded-lg
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
                            ? 'text-blue-900 text-2xl' 
                            : 'text-emerald-900 text-2xl'
                          }
                        `}>Solution Overview</h4>
                      </div>
                      <p className="text-xl font-medium text-gray-700 leading-relaxed">
                        {service.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-2xl text-gray-900 mb-3">Key Features</h4>
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
                              <span className="text-xl font-medium text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-2xl text-gray-900 mb-3">Key Benefits</h4>
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
                              <span className="text-xl font-medium text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-2xl text-gray-900">Starting at</div>
                        <div className="font-semibold text-2xl text-gray-900">{service.price}</div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="font-semibold text-2xl text-gray-900">Timeline</div>
                        <div className="font-semibold text-2xl text-gray-900">{service.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
};

export default Body2;