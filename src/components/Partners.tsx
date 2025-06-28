import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: 'ICICI Bank', type: 'bank' },
  { name: 'HDFC Bank', type: 'bank' },
  { name: 'Axis Bank', type: 'bank' },
  { name: 'YES Bank', type: 'bank' },
  { name: 'IndusInd Bank', type: 'bank' },
  { name: 'IDFC FIRST Bank', type: 'bank' },
  { name: 'Kotak Mahindra', type: 'bank' },
  { name: 'TATA Capital', type: 'nbfc' },
  { name: 'Bajaj Finserv', type: 'nbfc' },
  { name: 'Cholamandalam', type: 'nbfc' },
  { name: 'TVS Credit', type: 'nbfc' },
  { name: 'Hero FinCorp', type: 'nbfc' },
  { name: 'Poonawalla Finance', type: 'nbfc' },
  { name: 'Sundaram Finance', type: 'nbfc' },
  { name: 'Muthoot Finance', type: 'nbfc' },
  { name: 'Mahaveer Finance', type: 'nbfc' },
  { name: 'Piramal Finance', type: 'nbfc' },
  { name: 'Equitas SFB', type: 'nbfc' },
  { name: 'Magma Fincorp', type: 'nbfc' },
  { name: 'IKF Finance', type: 'nbfc' }
];

export const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(gridRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="partners" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Trusted Partners</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Partnered with 20+ leading banks and NBFCs to offer you the best deals
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-600"
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  partner.type === 'bank' 
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
                    : 'bg-gradient-to-br from-cyan-500 to-teal-600'
                }`}>
                  {partner.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">
                  {partner.type === 'bank' ? 'Bank' : 'NBFC'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            And many more financial institutions to serve you better
          </p>
        </div>
      </div>
    </section>
  );
};