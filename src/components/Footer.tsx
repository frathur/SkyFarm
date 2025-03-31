import { ChevronRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "Solutions": ["Precision Application", "Disease Detection", "Yield Prediction", "Crop Monitoring"],
    "Company": ["About Us", "Our Team", "Careers", "Partners"],
    "Resources": ["Blog", "Case Studies", "Knowledge Base", "FAQs"],
    "Support": ["Contact Us", "Technical Support", "Training", "Documentation"]
  };
  
  const socialIcons = [
    { name: "Facebook", href: "#facebook", Icon: Facebook },
    { name: "Twitter", href: "#twitter", Icon: Twitter },
    { name: "Instagram", href: "#instagram", Icon: Instagram },
    { name: "LinkedIn", href: "#linkedin", Icon: Linkedin }
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">SkyFarm</h2>
            <p className="text-gray-400 mb-4">
              Revolutionizing agriculture with AI-driven drone technology for precision farming, 
              sustainable practices, and improved yields across Africa.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="bg-gray-800 hover:bg-skyfarm-green transition-colors p-2 rounded-full"
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-skyfarm-green transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SkyFarm Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-skyfarm-green">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-skyfarm-green">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-skyfarm-green">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
