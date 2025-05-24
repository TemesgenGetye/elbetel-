import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  {
    name: "Tech Innovations Inc.",
    logo: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Creative Agency",
    logo: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "TrendWave Media",
    logo: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Digital Solutions",
    logo: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Social Connect",
    logo: "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const CompanyLogos: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-12">
          Companies I've Worked With
        </h2>
        
        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
          
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-48 h-48 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 p-4"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;