export interface Experience {
  date: string;
  title: string;
  company: string;
  category: string;
  description: string;
  achievements: string[];
}

export const experienceData: Experience[] = [
  {
    date: 'Jan 2023 - Present',
    title: 'HR Specialist',
    company: 'Tech Innovations Inc.',
    category: 'HR',
    description:
      'Managed full-cycle recruitment and onboarding processes while implementing employee engagement initiatives.',
    achievements: [
      'Reduced time-to-hire by 30% through streamlined recruitment processes',
      'Improved employee retention rate by 15% with targeted engagement programs',
      'Successfully onboarded 25+ new employees in a remote work environment',
      'Developed and implemented performance review system improving goal alignment by 40%'
    ],
  },
  {
    date: 'Mar 2023 - Present',
    title: 'Social Media Manager',
    company: 'Creative Agency',
    category: 'Social Media',
    description:
      'Developed and executed comprehensive social media strategies across multiple platforms.',
    achievements: [
      'Grew Instagram following by 120% in 9 months through targeted content campaigns',
      'Achieved 45% increase in engagement rate across all platforms',
      'Managed $15,000 monthly ad budget with 3.5x ROI',
      'Created viral campaign that reached 1.2 million impressions'
    ],
  },
  {
    date: 'May 2023 - Present',
    title: 'TikTok Content Host',
    company: 'TrendWave Media',
    category: 'Content Creation',
    description:
      'Hosted weekly TikTok series focused on career development and professional growth.',
    achievements: [
      'Built audience of 50,000+ followers in 8 months',
      'Videos consistently achieving 150,000+ views',
      'Collaborated with 15+ brands for sponsored content',
      '75% audience retention rate on long-form videos'
    ],
  },
  {
    date: 'Jun 2023 - Present',
    title: 'Video Editor & Content Creator',
    company: 'Freelance',
    category: 'Content Creation',
    description:
      'Created and edited engaging video content for businesses and personal brands.',
    achievements: [
      'Produced 100+ videos across various social media platforms',
      'Developed signature editing style recognized by clients and followers',
      'Reduced turnaround time by 40% while maintaining quality',
      'Implemented SEO strategies resulting in 85% increase in organic discovery'
    ],
  },
];