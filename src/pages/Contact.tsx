
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const planFromUrl = searchParams.get("plan");
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: planFromUrl || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit data to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            message: formData.message
          }
        ]);
      
      if (error) throw error;
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try submitting your message again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions or ready to start your AI journey? Contact us today.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Interested Service/Plan</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={handleServiceChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service or plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Plan</SelectItem>
                        <SelectItem value="professional">Professional Plan</SelectItem>
                        <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                        <SelectItem value="ai-consulting">AI Consulting</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                        <SelectItem value="chatbots">AI Chatbots</SelectItem>
                        <SelectItem value="machine-learning">Machine Learning</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or ask a question..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Address</h3>
                    <p className="text-gray-600">
                      123 Tech Lane, Suite 100<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@aiagency.com<br />
                      Support: support@aiagency.com<br />
                      Careers: careers@aiagency.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      Main Office: (555) 123-4567<br />
                      Support Line: (555) 987-6543
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary rounded-lg shadow-md p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Ready for a Demo?</h3>
                <p className="mb-6">
                  Schedule a free personalized demo to see how our AI solutions can benefit your business.
                </p>
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
