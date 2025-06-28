import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl font-bold">hj</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Hari Janardhana Fin Corp</h3>
                <p className="text-cyan-400 text-sm">FIN TODAY</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted financial partner for all car financing needs. Quick, simple, and reliable solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">New Car Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Used Car Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Car Refinance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Personal Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Business Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Insurance Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Our Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Apply Now</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Check Eligibility</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">+91 92999 91588</p>
                  <p className="text-gray-400 text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">hjfcloans@gmail.com</p>
                  <p className="text-gray-400 text-sm">Quick response guaranteed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">#31-14-1239, 14/2 Arundelpet, Guntur</p>
                  <p className="text-gray-400 text-sm">Visit us for personalized service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Hari Janardhana Fin Corp. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Representative: K. Sambasivarao</span>
              <span>•</span>
              <span>Trade Name: FIN TODAY</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};