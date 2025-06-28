import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Car, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        carRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Buy Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Dream Car
              </span>{" "}
              Now with Up to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">
                200% Funding!
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Quick, Simple & Trusted Car Financing From Top Banks & NBFCs
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm sm:text-base">
              {[
                "Hassle-free Documentation",
                "Loans Without Income Proof",
                "Up to 200% Funding",
                "Trusted by 20+ Banks & NBFCs",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Apply for Loan
              </button>
              <button
                onClick={() => scrollToSection("#services")}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 font-semibold rounded-xl border-2 border-cyan-600 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                Check Eligibility
              </button>
              <button
                onClick={() => window.open("tel:9299991588")}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Now</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>92 99 99 15 88</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hjfcloans@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Guntur, AP</span>
              </div>
            </div>
          </div>

          {/* Right Content - Car Illustration */}
          <div className="flex justify-center lg:justify-end px-4">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] xl:w-[550px] xl:h-[550px]">
              {/* Glowing Circle */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] 
                  lg:w-[420px] lg:h-[420px] rounded-full 
                  bg-gradient-to-br from-cyan-400 via-blue-500 to-rose-400 opacity-20 animate-pulse"
              ></div>

              {/* Car Image */}
              <div
                ref={carRef}
                className="relative z-10 w-full h-full flex items-center justify-center p-4"
              >
                <img
                  src="./hero.png"
                  alt="Hero"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};