import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TikTokShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="relative max-w-[375px] mx-auto">
          {/* iPhone 14 Pro Max frame */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-[375px] h-[765px] bg-[#1B1B1B] rounded-[55px] shadow-2xl transform rotate-[15deg]"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37.33px] bg-black rounded-full mt-2 z-20">
              <div className="absolute top-1/2 right-7 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1B1B1B]"></div>
              <div className="absolute top-1/2 left-7 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1B1B1B]"></div>
            </div>

            {/* Screen Content */}
            <div className="absolute top-1 left-1 right-1 bottom-1 rounded-[54px] overflow-hidden bg-black">
              {/* Loading Skeleton */}
              {isLoading && (
                <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* TikTok Video Container */}
              <div className="w-full h-full flex items-center justify-center bg-black">
                <iframe
                  src="https://www.tiktok.com/embed/v2/7477177001212759302"
                  className="w-full h-full scale-[1.015]"
                  style={{
                    border: 'none',
                    transform: 'scale(1.015)',
                    transformOrigin: 'center'
                  }}
                  onLoad={handleIframeLoad}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Camera System */}
            <div className="absolute top-4 right-8 w-[40px] h-[40px] bg-[#222] rounded-[12px] flex items-center justify-center">
              <div className="relative w-[35px] h-[35px]">
                <div className="absolute top-1 left-1 w-7 h-7 bg-[#1B1B1B] rounded-full">
                  <div className="absolute inset-1 bg-[#2B2B2B] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Volume Buttons */}
            <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-[#2B2B2B] rounded-r-lg"></div>
            <div className="absolute left-[-2px] top-[170px] w-[3px] h-[60px] bg-[#2B2B2B] rounded-r-lg"></div>

            {/* Power Button */}
            <div className="absolute right-[-2px] top-[120px] w-[3px] h-[60px] bg-[#2B2B2B] rounded-l-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TikTokShowcase;