import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Building2, Car, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 200, suffix: '%', label: 'Max Funding', icon: Target },
  { value: 20, suffix: '+', label: 'Financial Partners', icon: Building2 },
  { value: 500, suffix: '+', label: 'Cars Funded', icon: Car },
  { value: 1000, suffix: '+', label: 'Happy Clients', icon: Users }
];

export const Statistics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        gsap.to({}, {
          duration: 2,
          onUpdate: function() {
            const progress = this.progress();
            const currentValue = Math.round(progress * stat.value);
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = currentValue;
              return newCounters;
            });
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        });
      });
    };

    animateCounters();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300">Success Story</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Numbers that speak for our commitment and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const gradientColors = [
              'from-orange-400 to-rose-500',
              'from-cyan-400 to-blue-500',
              'from-rose-400 to-pink-500',
              'from-blue-400 to-indigo-500'
            ];
            
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradientColors[index]} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-cyan-100 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};