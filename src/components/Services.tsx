import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, RefreshCcw, Home, User, Building2, Shield, Heart, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Car,
    title: 'New & Used Car Loans',
    description: 'Up to 90% loan facility with best deals on financing',
    features: ['Quick approval', 'Minimal documentation', 'Competitive rates']
  },
  {
    icon: RefreshCcw,
    title: 'Refinance Clear Track',
    description: '150%-200% funding on existing loans without ownership transfer',
    features: ['No ownership shift', 'Instant release', 'Higher funding']
  },
  {
    icon: Home,
    title: 'Home Loans',
    description: 'Affordable home financing solutions',
    features: ['Low interest rates', 'Flexible tenure', 'Quick processing']
  },
  {
    icon: User,
    title: 'Personal Loans',
    description: 'Unsecured personal loans for all your needs',
    features: ['No collateral', 'Fast approval', 'Flexible repayment']
  },
  {
    icon: Building2,
    title: 'Business Loans',
    description: 'Grow your business with our funding solutions',
    features: ['Working capital', 'Equipment finance', 'Easy eligibility']
  },
  {
    icon: Shield,
    title: 'Car Insurance',
    description: 'Comprehensive car insurance coverage',
    features: ['Third party', 'Comprehensive', 'Add-on covers']
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Protect your family with health coverage',
    features: ['Family floater', 'Cashless claims', 'Wide network']
  },
  {
    icon: Globe,
    title: 'Online Services',
    description: 'Digital assistance for all loan processes',
    features: ['Online application', 'Status tracking', 'Digital docs']
  }
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-[1400px] container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Core Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el!}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};