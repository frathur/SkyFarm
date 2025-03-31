
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "Solutions": ["Precision Application", "Disease Detection", "Yield Prediction", "Crop Monitoring"],
    "Company": ["About Us", "Our Team", "Careers", "Partners"],
    "Resources": ["Blog", "Case Studies", "Knowledge Base", "FAQs"],
    "Support": ["Contact Us", "Technical Support", "Training", "Documentation"]
  };
  
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
              {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="bg-gray-800 hover:bg-skyfarm-green transition-colors p-2 rounded-full"
                >
                  <span className="sr-only">{platform}</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
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
