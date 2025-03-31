import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Technology', href: '#technology' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-lg">
      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center text-2xl font-bold text-skyfarm-green">
            <img src="/src/images/SkyFarm.png" alt="SkyFarm Logo" className="h-10 w-10" />
            <span>SkyFarm</span>
          </a>
        </div>


        {/* Centered Navigation Links */}
        <nav className="absolute inset-x-0 flex justify-center hidden md:flex">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 transition-colors hover:text-skyfarm-green"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Right Side Button (Desktop) */}
        <div className="hidden md:flex items-center ml-auto">
          <Button className="bg-skyfarm-green text-white hover:bg-skyfarm-green-dark">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center ml-auto">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 transition-colors hover:text-skyfarm-green"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-skyfarm-green text-white hover:bg-skyfarm-green-dark w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
