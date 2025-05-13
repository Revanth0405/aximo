
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const basicFeatures = [
    { text: "AI Strategy Consultation", included: true },
    { text: "Basic Data Analysis", included: true },
    { text: "1 AI Model Implementation", included: true },
    { text: "Monthly Performance Report", included: true },
    { text: "Email Support", included: true },
    { text: "Advanced Analytics Dashboard", included: false },
    { text: "Custom AI Model Development", included: false },
    { text: "Dedicated Account Manager", included: false },
  ];

  const proFeatures = [
    { text: "AI Strategy Consultation", included: true },
    { text: "Advanced Data Analysis", included: true },
    { text: "3 AI Model Implementations", included: true },
    { text: "Weekly Performance Reports", included: true },
    { text: "Priority Email & Phone Support", included: true },
    { text: "Advanced Analytics Dashboard", included: true },
    { text: "Custom AI Model Development", included: false },
    { text: "Dedicated Account Manager", included: false },
  ];

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
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and PayPal. For enterprise plans, we can also arrange other payment methods as needed."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. Downgrades will take effect at the beginning of the next billing cycle."
    },
    {
      question: "Is there a contract or commitment period?",
      answer: "Our monthly plans can be canceled anytime. Annual plans provide a discount but commit you for a 12-month period."
    },
    {
      question: "Do you offer a free trial?",
      answer: "We offer a 14-day free trial for our Basic and Pro plans so you can experience the value before committing."
    },
    {
      question: "What kind of support is included?",
      answer: "All plans include email support. Pro plans add phone support during business hours, while Enterprise plans include 24/7 priority support."
    },
    {
      question: "Can the plans be customized?",
      answer: "Enterprise plans are fully customizable to your specific needs. For Basic and Pro plans, you can add specific services as needed."
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
              Choose the plan that works best for your business needs
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$999"
              period="month"
              description="Perfect for small businesses starting with AI"
              features={basicFeatures}
              ctaText="Get Started"
              ctaLink="/contact?plan=basic"
            />
            
            <PricingCard
              title="Professional"
              price="$2,499"
              period="month"
              description="For growing businesses ready to leverage AI at scale"
              features={proFeatures}
              popular={true}
              ctaText="Get Started"
              ctaLink="/contact?plan=professional"
            />
            
            <PricingCard
              title="Enterprise"
              price="Custom"
              period="pricing"
              description="Tailored solutions for large organizations with complex needs"
              features={enterpriseFeatures}
              ctaText="Contact Us"
              ctaLink="/contact?plan=enterprise"
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
