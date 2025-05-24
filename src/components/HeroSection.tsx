import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-coral-300 dark:bg-coral-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Elbetel Ashenafi Tola
            </h1>
            <div className="h-1 w-24 bg-purple-600 dark:bg-purple-400 mx-auto md:mx-0 mb-6"></div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              <span className="block mb-2">Social Media Strategist</span>
              <span className="block mb-2">Content Creator</span>
              <span className="block">HR Professional</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8">
              I bring brands to life through engaging social media strategies and captivating content creation, while leveraging my HR expertise to build meaningful connections and drive results.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Elbetel Ashenafi Tola"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;