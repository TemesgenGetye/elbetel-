import React, { useEffect, useRef } from 'react';
import { Calendar, Users, TrendingUp, Video } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { experienceData } from '../data/experienceData';

const ExperienceTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = timelineRef.current?.querySelectorAll('.timeline-item');
    elements?.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements?.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const getIcon = (category: string) => {
    switch (category) {
      case 'HR':
        return <Users className="w-5 h-5" />;
      case 'Social Media':
        return <TrendingUp className="w-5 h-5" />;
      case 'Content Creation':
        return <Video className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Professional Experience"
          subtitle="My 1-Year Journey"
          alignment="center"
        />

        <div ref={timelineRef} className="mt-16 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex flex-col md:flex-row gap-8 mb-12 opacity-0 translate-y-10 transition-all duration-700 delay-${
                index * 200
              }`}
            >
              <div className="md:w-1/3 text-right">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1 block">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.company}
                </p>
              </div>

              <div className="timeline-marker relative">
                <div className="absolute left-0 md:left-auto md:right-0 top-0 md:translate-x-1/2 mt-1 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 z-10">
                  {getIcon(item.category)}
                </div>
                <div className="absolute left-5 md:left-auto md:right-5 top-0 h-full w-0.5 bg-purple-200 dark:bg-purple-800/50"></div>
              </div>

              <div className="md:w-2/3 pl-10 md:pl-0">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
                  {item.category}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2"></span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;