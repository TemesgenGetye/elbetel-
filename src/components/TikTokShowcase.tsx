import React, { useState } from "react";
import { motion } from "framer-motion";

const TikTokShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle scroll to update active video
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const children = Array.from(container.children);
    const scrollTop = container.scrollTop;
    let closestIdx = 0;
    let minDiff = Infinity;
    children.forEach((child, idx) => {
      const diff = Math.abs((child as HTMLElement).offsetTop - scrollTop);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setActiveIndex(closestIdx);
  };

  // TikTok video IDs to display
  const videoIds = [
    "7477177001212759302",
    "7506156026832424198",
    "7509426071595486520",
    "7509003006784916741",
    "7496911368726138118",
    "7496147038053076229",
    "7497697119734631685",
  ];

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
            className="relative 
             
            w-[340px] h-[750px] m-auto
            
            md:h-[790px] md:w-[375px]
            
            bg-[#444242] rounded-[55px] shadow-3xl transform rotate-[15deg]"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
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
                <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center z-20">
                  <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* TikTok Videos Fullscreen Scrollable Container */}
              <div
                className="w-full h-full bg-[#1B1B1B] overflow-y-scroll rounded-[60px] scrollbar-hide snap-y snap-mandatory relative"
                onScroll={handleScroll}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Hide scrollbar for Webkit browsers */}
                <style>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {videoIds.map((id, idx) => (
                  <div
                    key={id}
                    className="w-full h-full relative overflow-hidden snap-start flex-shrink-0"
                    style={{ minHeight: "100%", minWidth: "100%" }}
                  >
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${id}?embedType=embed&lang=en-US&autoplay=${
                        activeIndex === idx ? 1 : 0
                      }&controls=0`}
                      className="absolute top-[-12%] left-0 w-full h-[124%] scale-[1.13]"
                      style={{
                        border: "none",
                        transform: "scale(1.13)",
                        transformOrigin: "top center",
                        height: "124%",
                        top: "-12%",
                      }}
                      onLoad={handleIframeLoad}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {/* Overlay to cover TikTok metadata at the bottom */}
                    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[18%] bg-gradient-to-t from-black/90 to-transparent z-30" />
                    {/* Show indicator if more videos below */}
                    {idx < videoIds.length - 1 && idx === activeIndex && (
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center animate-bounce">
                        <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
                          </svg>
                        </div>
                        <span className="text-xs text-white mt-1">
                          scroll to load more videos
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Camera System */}
            {/* <div className="absolute top-4 right-8 w-[40px] h-[40px] bg-[#222] rounded-[12px] flex items-center justify-center">
              <div className="relative w-[35px] h-[35px]">
                <div className="absolute top-1 left-1 w-7 h-7 bg-[#1B1B1B] rounded-full">
                  <div className="absolute inset-1 bg-[#2B2B2B] rounded-full"></div>
                </div>
              </div>
            </div> */}

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
