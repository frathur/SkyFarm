import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin, Send, User, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Our team will respond to your inquiry within 24-48 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, text: "info@skyfarm-solutions.com", href: "mailto:skyfarm0000@gmail.com " },
    { icon: Phone, text: "+233 597 877 831", href: "tel:+233597877831" },
    { icon: MapPin, text: "Multiple locations across Africa" },
    { icon: Globe, text: "www.skyfarm-solutions.com", href: "https://www.skyfarm-solutions.com" }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/Sky Farm" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/skyfarm" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/sky_farm.1" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/skyfarm" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-skyfarm-green-dark mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Have questions about SkyFarm? Interested in partnering or investing? 
            Our team is ready to assist you with any inquiries you may have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="mr-2 h-6 w-6 text-skyfarm-green" />
              <span>Send Us a Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  placeholder="Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 border-gray-200 focus:border-skyfarm-green focus:ring-1 focus:ring-skyfarm-green"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 border-gray-200 focus:border-skyfarm-green focus:ring-1 focus:ring-skyfarm-green"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-gray-200 focus:border-skyfarm-green focus:ring-1 focus:ring-skyfarm-green"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-gray-200 focus:border-skyfarm-green focus:ring-1 focus:ring-skyfarm-green min-h-[150px] resize-y"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-skyfarm-green hover:bg-skyfarm-green-dark transition-colors flex items-center justify-center gap-2 py-6"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div>
            {/* Info Box */}
            <div className="bg-skyfarm-green text-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white group-hover:text-skyfarm-green transition-colors">
                      <item.icon className="h-6 w-6" />
                    </div>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-white hover:text-gray-100 transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-white">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Box */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-5 justify-center mb-6">
                {socialMedia.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    aria-label={`Follow us on ${platform.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-skyfarm-green text-gray-600 hover:text-white transition-all duration-300 p-4 rounded-full flex items-center justify-center transform hover:scale-110"
                  >
                    <platform.icon className="h-6 w-6" />
                    <span className="sr-only">{platform.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-600 text-center">
                  Follow us on social media for the latest updates, agricultural tips, 
                  and success stories from our community of farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;