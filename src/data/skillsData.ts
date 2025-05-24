export type SkillCategory = 'Social Media Management' | 'Content Creation' | 'HR Management' | 'Video Hosting';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillSet {
  name: SkillCategory;
  description: string;
  skills: Skill[];
}

export const skillsData: SkillSet[] = [
  {
    name: 'Social Media Management',
    description: 'Strategy development and platform-specific expertise',
    skills: [
      { name: 'Instagram Strategy', level: 95 },
      { name: 'TikTok Growth', level: 90 },
      { name: 'LinkedIn Business', level: 85 },
      { name: 'Content Calendar Management', level: 92 },
      { name: 'Audience Engagement', level: 88 },
    ],
  },
  {
    name: 'Content Creation',
    description: 'Creative production and editing capabilities',
    skills: [
      { name: 'Video Editing', level: 90 },
      { name: 'Script Writing', level: 85 },
      { name: 'Visual Storytelling', level: 88 },
      { name: 'Adobe Premiere Pro', level: 82 },
      { name: 'Final Cut Pro', level: 78 },
    ],
  },
  {
    name: 'Video Hosting',
    description: 'On-camera presence and presentation skills',
    skills: [
      { name: 'On-Camera Presentation', level: 95 },
      { name: 'Live Streaming', level: 88 },
      { name: 'Public Speaking', level: 90 },
      { name: 'Interview Techniques', level: 85 },
      { name: 'Audience Interaction', level: 92 },
    ],
  },
];