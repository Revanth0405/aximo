
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Stats from "@/components/Stats";

const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      bio: "With over 15 years in AI and machine learning, Alex founded AIAgency to help businesses leverage the power of artificial intelligence.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Chen",
      position: "Chief AI Officer",
      bio: "Sarah leads our AI research and development, bringing expertise from her time at leading tech companies and research institutions.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Roberts",
      position: "Head of Client Solutions",
      bio: "Michael ensures our clients receive tailored solutions that address their unique business challenges and deliver measurable results.",
      image: "/placeholder.svg"
    },
    {
      name: "Priya Patel",
      position: "Data Science Director",
      bio: "Priya oversees our data science team, transforming complex data into actionable insights that drive business value.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About AIAgency</h1>
            <p className="text-xl text-gray-600">
              We're on a mission to make artificial intelligence accessible, practical, and transformative for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, AIAgency began with a simple vision: to bridge the gap between cutting-edge AI technology and practical business applications. We recognized that while AI was revolutionizing industries, many businesses lacked the expertise to implement these solutions effectively.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Alex Johnson, assembled a team of AI specialists, data scientists, and business strategists with a shared passion for making AI accessible and impactful for organizations of all sizes.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped over 50 companies across various industries harness the power of AI to drive growth, improve efficiency, and create competitive advantages in their markets.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden bg-secondary aspect-square relative flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-800">Our Mission</div>
            </div>
          </div>
        </div>
      </section>
      
      <Stats />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-600">
              These core principles guide everything we do at AIAgency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                We stay at the forefront of AI advancements to deliver cutting-edge solutions that create real business value.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Trust</h3>
              <p className="text-gray-600 text-center">
                We build strong relationships based on transparency, ethical AI practices, and delivering on our promises.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Collaboration</h3>
              <p className="text-gray-600 text-center">
                We work closely with our clients, becoming true partners in their AI journey and ensuring their success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the experts behind AIAgency's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can address your unique challenges and help you achieve your business goals.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
