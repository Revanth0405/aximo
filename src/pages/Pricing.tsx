
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const enterpriseFeatures = [
    { text: "AI Strategy Consultation", included: true },
    { text: "Comprehensive Data Analysis", included: true },
    { text: "Unlimited AI Model Implementations", included: true },
    { text: "Real-time Performance Dashboard", included: true },
    { text: "24/7 Priority Support", included: true },
    { text: "Advanced Analytics Dashboard", included: true },
    { text: "Custom AI Model Development", included: true },
    { text: "Dedicated Account Manager", included: true },
  ];

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer AI-powered automation tools including email automation, WhatsApp automation, workflow automation, and custom solutions tailored to your business needs."
    },
    {
      question: "Do I need technical knowledge to use your services?",
      answer: "No. Our tools are designed to be user-friendly, and we also provide guidance and support to help you get started."
    },
    {
      question: "Can you automate WhatsApp, Gmail, or social media?",
      answer: "Yes. We support automation for platforms like Gmail, WhatsApp, Instagram, Google Sheets, Telegram, Slack, and more."
    },
    {
      question: "Is my data safe with your platform?",
      answer: "Absolutely. We use encryption and follow best practices to ensure your data is secure and confidential at all times."
    },
    {
      question: "Do you build custom workflows?",
      answer: "Yes. We can create custom automation workflows specifically tailored to your business processes and goals."
    },
    {
      question: "How long does it take to get started?",
      answer: "Most clients are onboarded within 24–48 hours after the initial consultation and requirement gathering."
    }
  ];
  

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">
              Contact us now to know the best pricing for your business needs
            </p>
          </div>
        </div>
      </div>
      
      <section className="">
        <div className="container px-4">
          <div className="grid">
            <PricingCard
              title="Enterprise"
              price="Custom"
              period="pricing"
              description="Tailored solutions for large organizations with complex needs"
              features={enterpriseFeatures}
              ctaText="Contact Us"
              ctaLink="/contact"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Still have questions about which plan is right for you?
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90">Talk to an Expert</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Pricing;
