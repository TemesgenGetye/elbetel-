import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, TrendingUp, Video, Instagram, Linkedin, Youtube, FileVideo, PenTool, UserCheck, BarChart as ChartBar, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const skills = [
  {
    category: "Social Media",
    items: [
      { name: "Instagram Management", icon: <Instagram className="w-8 h-8" />, image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "LinkedIn Strategy", icon: <Linkedin className="w-8 h-8" />, image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Content Strategy", icon: <TrendingUp className="w-8 h-8" />, image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
    ]
  },
  {
    category: "Content Creation",
    items: [
      { name: "Video Production", icon: <Camera className="w-8 h-8" />, image: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Video Editing", icon: <FileVideo className="w-8 h-8" />, image: "https://images.pexels.com/photos/1474158/pexels-photo-1474158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Script Writing", icon: <PenTool className="w-8 h-8" />, image: "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
    ]
  },
  {
    category: "HR Management",
    items: [
      { name: "Recruitment", icon: <UserCheck className="w-8 h-8" />, image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Performance Analysis", icon: <ChartBar className="w-8 h-8" />, image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Employee Relations", icon: <MessageCircle className="w-8 h-8" />, image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
    ]
  }
];

const SkillsShowcase: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Skills & Expertise"
          subtitle="What I Bring to the Table"
          alignment="center"
        />

        <div className="mt-16 space-y-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="relative group overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-600/90 rounded-lg">
                          {skill.icon}
                        </div>
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                      </div>
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