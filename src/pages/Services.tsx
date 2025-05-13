
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, ChartBar, Bot, FileText, Settings, Tag, Dollar, Users, Briefcase } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions tailored to your business needs.",
      icon: <Brain className="w-10 h-10" />,
      link: "/services/ai-consulting"
    },
    {
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics.",
      icon: <ChartBar className="w-10 h-10" />,
      link: "/services/data-analytics"
    },
    {
      title: "AI Chatbots",
      description: "Custom AI chatbots to enhance customer service and streamline operations.",
      icon: <Bot className="w-10 h-10" />,
      link: "/services/chatbots"
    },
    {
      title: "ML Solutions",
      description: "Custom machine learning models designed to solve your specific business challenges.",
      icon: <FileText className="w-10 h-10" />,
      link: "/services/machine-learning"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI solutions with your existing systems and workflows.",
      icon: <Settings className="w-10 h-10" />,
      link: "/services/ai-integration"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors to make data-driven decisions for your business.",
      icon: <ChartBar className="w-10 h-10" />,
      link: "/services/predictive-analytics"
    },
    {
      title: "NLP Solutions",
      description: "Natural Language Processing solutions for text analysis and understanding.",
      icon: <FileText className="w-10 h-10" />,
      link: "/services/nlp-solutions"
    },
    {
      title: "Computer Vision",
      description: "Image and video recognition systems for various industry applications.",
      icon: <Tag className="w-10 h-10" />,
      link: "/services/computer-vision"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive AI solutions designed to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Service Process</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We begin by understanding your business, challenges, and objectives to identify how AI can create value.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
                    <p className="text-gray-600">
                      Our experts design a custom AI solution tailored specifically to address your unique needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Development & Implementation</h3>
                    <p className="text-gray-600">
                      We build and deploy your solution, ensuring seamless integration with your existing systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Training & Support</h3>
                    <p className="text-gray-600">
                      We provide comprehensive training and ongoing support to ensure your team gets the most from your AI investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md aspect-square bg-white p-8">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-primary mb-4">
                    <Settings className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                  <p className="text-gray-600 mb-6">
                    Don't see exactly what you need? Contact us to discuss a custom AI solution tailored to your specific business requirements.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90">Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
