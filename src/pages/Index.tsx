
import { Brain, ChartBar, Bot, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions tailored to your business needs.",
      icon: <Brain className="w-10 h-10" />,
      link: "/services/ai-consulting"
    },
    {
      title: "AI Agents",
      description: "AI agents to automate your business processes to improve efficiency.",
      icon: <ChartBar className="w-10 h-10" />,
      link: "/services/data-analytics"
    },
    {
      title: "AI Chatbots",
      description: "Custom AI chatbots to enhance customer service and streamline operations.",
      icon: <Bot className="w-10 h-10" />,
      link: "/services/chatbots"
    }
  ];

  return (
    <>
      <Navbar />
      
      <Hero 
        title="Automate Smarter, Grow Faster"
        subtitle="We help businesses, content creators and marketers harness the power of AI to drive growth, improve efficiency, and create competitive advantages."
        ctaText="Explore Our Services"
        ctaLink="/services"
      />
      
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of AI solutions designed to help your things thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our AI Agency?</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team consists of AI specialists, data scientists, and engineers with decades of combined experience.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                    <p className="text-gray-600">We don't believe in one-size-fits-all. Our solutions are custom-built for your specific needs.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-600">Our clients have seen measurable improvements in efficiency, revenue, and customer satisfaction.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support and updates to ensure your AI solutions evolve with your business.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary/90">Learn More About Us</Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:order-first">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-secondary aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/images/ai2.png" alt="AI Agency" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 text-xl mb-8">
              Schedule a free consultation with our AI experts to discover how we can help your business thrive.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
