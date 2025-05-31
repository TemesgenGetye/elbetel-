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
    date: "Jan 2023 - Present",
    title: "HR Specialist",
    company: "NOAH Real Estate",
    category: "HR",
    description:
      "Handled full-cycle recruitment, onboarding, and employee development programs while contributing to organizational HR strategies.",
    achievements: [
      "Streamlined hiring process, reducing time-to-fill by 30%",
      "Enhanced employee satisfaction through structured feedback systems",
      "Onboarded and trained 30+ employees across departments",
      "Supported performance evaluations and internal HR audits",
    ],
  },
  {
    date: "Mar 2023 - Present",
    title: "Social Media Manager",
    company: "The PS Market",
    category: "Social Media",
    description:
      "Led and executed multi-platform social media strategies to increase brand visibility and engagement.",
    achievements: [
      "Boosted Instagram followers by 130% with targeted campaigns",
      "Increased monthly engagement rate by over 50%",
      "Planned and managed seasonal campaigns with measurable ROI",
      "Established consistent brand voice and content themes",
    ],
  },
  {
    date: "May 2023 - Present",
    title: "TikTok Content Host",
    company: "Personal Brand / Freelance / The PS Market",
    category: "Content Creation",
    description:
      "Created and hosted TikTok content focused on career tips, lifestyle, and industry trends with consistent audience engagement.",
    achievements: [
      "Built TikTok following of 50,000+ users in under a year",
      "Created viral videos with over 150,000+ views regularly",
      "Collaborated with multiple brands for influencer marketing",
      "Maintained 75%+ audience retention rate on long-form content",
    ],
  },
  {
    date: "Jun 2023 - Present",
    title: "Digital Marketer & Content Creator",
    company: "The PS Market",
    category: "Content Creation",
    description:
      "Designed and executed digital marketing strategies while producing content for social growth and product awareness.",
    achievements: [
      "Created over 100 digital assets including videos, reels, and ads",
      "Improved social media reach by 90% through SEO and trends",
      "Developed a content calendar to optimize posting schedules",
      "Increased product inquiries through high-converting campaigns",
    ],
  },
];
