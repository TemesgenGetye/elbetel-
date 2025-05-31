"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  TrendingUp,
  Camera,
  FileVideo,
  PenTool,
  UserCheck,
  BarChartIcon as ChartBar,
  MessageCircle,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const skills = [
  {
    category: "Social Media",
    items: [
      {
        name: "Instagram Management",
        icon: <Instagram className="w-6 h-6" />,
      },
      {
        name: "TikTok Strategy",
        icon: <Linkedin className="w-6 h-6" />,
      },
      {
        name: "Digital Marketing",
        icon: <TrendingUp className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Content Creation",
    items: [
      {
        name: "Video Production",
        icon: <Camera className="w-6 h-6" />,
      },
      {
        name: "Video Editing",
        icon: <FileVideo className="w-6 h-6" />,
      },
      {
        name: "Script Writing",
        icon: <PenTool className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "HR Management",
    items: [
      {
        name: "Recruitment",
        icon: <UserCheck className="w-6 h-6" />,
      },
      {
        name: "Performance Analysis",
        icon: <ChartBar className="w-6 h-6" />,
      },
      {
        name: "Employee Relations",
        icon: <MessageCircle className="w-6 h-6" />,
      },
    ],
  },
];

const SkillsShowcase: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Skills & Expertise"
          subtitle="What I Bring to the Table"
          alignment="center"
        />

        <div className="mt-10 space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                {category.category}
              </h3>

              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ y: -3 }}
                    className="group"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full text-white shadow-md transform transition-transform group-hover:scale-110 duration-300">
                        {skill.icon}
                      </div>

                      <h4 className="text-sm md:text-base font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
