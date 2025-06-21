import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import {
  portfolioData,
  PortfolioItem,
  PortfolioCategory,
} from "../data/portfolioData";

const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    PortfolioCategory | "all"
  >("all");
  const [visibleItems, setVisibleItems] =
    useState<PortfolioItem[]>(portfolioData);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleItems(portfolioData);
    } else {
      setVisibleItems(
        portfolioData.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "scale-100");
            entry.target.classList.remove("opacity-0", "scale-95");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = galleryRef.current?.querySelectorAll(".portfolio-item");
    elements?.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements?.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [visibleItems]);

  const categories: PortfolioCategory[] = [
    "TikTok Videos",
    "Digital Marketing And Content",
    "Video Editing",
    "HR Projects",
    "Social Media Hosting & Management",
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Portfolio"
          subtitle="Recent Work & Projects"
          alignment="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All Work
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={galleryRef}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item opacity-0 scale-95 transition-all duration-500 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <span className="px-2 py-1 text-xs font-medium bg-purple-600/80 text-white rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                {item.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(item.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <span className="block text-xl font-bold text-purple-600 dark:text-purple-400">
                          {value}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {key}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedItem(item);
                  }}
                  className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-5xl w-full max-h-[95vh] overflow-y-auto relative p-6">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
              {selectedItem.title}
            </h3>
            {/* Media Display Logic */}
            {(() => {
              const link = selectedItem.link;
              if (link.match(/\.(mp4|mov|webm)$/i)) {
                // Local video
                return (
                  <video
                    src={link.replace(/^\./, "")}
                    controls
                    className="w-full rounded mb-4 max-h-[70vh] object-contain"
                    poster={selectedItem.imageUrl}
                  />
                );
              } else if (link.includes("tiktok.com")) {
                // TikTok embed (taller)
                const videoId = link.split("/video/")[1]?.split("?")[0];
                return videoId ? (
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${videoId}`}
                    className="w-full rounded mb-4"
                    style={{ height: "700px", minHeight: "500px" }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={selectedItem.title}
                  />
                ) : null;
              } else if (link.includes("instagram.com")) {
                // Instagram embed (extract code)
                const match = link.match(/instagram.com\/p\/([\w-]+)/);
                const code = match ? match[1] : null;
                return code ? (
                  <iframe
                    src={`https://www.instagram.com/p/${code}/embed`}
                    className="w-full rounded mb-4"
                    style={{ minHeight: "500px", height: "600px" }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={selectedItem.title}
                  />
                ) : null;
              } else if (link.includes("drive.google.com")) {
                // Google Drive video embed
                const fileIdMatch = link.match(/\/d\/(.*?)(\/|$)/);
                const fileId = fileIdMatch ? fileIdMatch[1] : null;
                return fileId ? (
                  <iframe
                    src={`https://drive.google.com/file/d/${fileId}/preview`}
                    className="w-full aspect-video rounded mb-4"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={selectedItem.title}
                  />
                ) : null;
              } else if (
                link.includes("youtube.com") ||
                link.includes("youtu.be")
              ) {
                // YouTube embed
                let videoId = null;
                if (link.includes("youtube.com")) {
                  try {
                    const url = new URL(link);
                    videoId = url.searchParams.get("v");
                  } catch {
                    /* ignore error */
                  }
                } else if (link.includes("youtu.be")) {
                  videoId = link.split("youtu.be/")[1]?.split(/[?&]/)[0];
                }
                return videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className="w-full rounded mb-4"
                    style={{ minHeight: "400px", height: "500px" }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={selectedItem.title}
                  />
                ) : null;
              } else {
                // Default: show image
                return (
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full rounded mb-4 max-h-[70vh] object-contain"
                  />
                );
              }
            })()}
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 text-center">
              {selectedItem.description}
            </p>
            <div className="flex justify-center">
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline text-sm"
              >
                Open Original Link
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
