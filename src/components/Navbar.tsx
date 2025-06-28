import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Partners', href: '#partners' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-600 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">hj</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
               HJ Fin Corp
              </h1>
              <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600 font-medium">
                FIN TODAY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Side - Contact & Actions */}
          <div className="flex items-center space-x-4">
            {/* Contact Info (Desktop only) */}
            <div className="hidden xl:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                <Phone className="w-3 h-3" />
                <span>+91 92999 91588</span>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <DarkModeToggle isDark={isDark} toggle={toggleDarkMode} />

            {/* Apply Now Button (Desktop) */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:block bg-gradient-to-r from-orange-500 to-rose-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Apply Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl mt-2 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg mx-2"
              >
                {item.name}
              </button>
            ))}
            
            <div className="px-4 py-2 space-y-3 border-t border-gray-200 dark:border-gray-700 mt-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+91 92999 91588</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hjfcloans@gmail.com</span>
              </div>
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-orange-500 to-rose-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};