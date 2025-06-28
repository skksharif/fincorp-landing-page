import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, User, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Best deals on car financing',
  'Loans with or without income proof',
  'Up to 200% funding on existing loans',
  'Hassle-free refinance options',
  'Minimal documentation required',
  'No vehicle ownership transfer needed',
  'Bundled insurance services',
  'Pre-owned car assistance'
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(featuresRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Hari Janardhana Fin Corp</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Your trusted financial partner for all car financing needs. We specialize in providing 
              quick, simple, and reliable car loans with competitive rates and flexible terms.
            </p>

            {/* Representative Info */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-cyan-600" />
                Our Representative
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">K. Sambasivarao</p>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-cyan-600" />
                  <span>92 99 99 15 88</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-cyan-600" />
                  <span>hjfcloans@gmail.com</span>
                </div>
                <div className="flex items-start text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 mt-1 text-cyan-600 flex-shrink-0" />
                  <span>#31-14-1239, 14/2 Arundelpet, Guntur</span>
                </div>
              </div>
            </div>

            {/* Trade Name */}
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Trade Name: <span className="font-bold text-cyan-600 dark:text-cyan-400">FIN TODAY</span>
              </p>
            </div>
          </div>

          {/* Right Content - Features */}
          <div ref={featuresRef}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose <span className="text-cyan-600 dark:text-cyan-400">Us?</span>
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-100 dark:border-cyan-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To make car ownership dreams come true by providing accessible, transparent, 
                and customer-centric financial services with the highest standards of integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};