export type PortfolioCategory = 'TikTok Videos' | 'Social Media Campaigns' | 'Video Editing' | 'HR Projects';

export interface PortfolioItem {
  title: string;
  category: PortfolioCategory;
  description: string;
  imageUrl: string;
  link: string;
  stats?: Record<string, string>;
}

export const portfolioData: PortfolioItem[] = [
  {
    title: 'Career Growth TikTok Series',
    category: 'TikTok Videos',
    description: 'Weekly series providing career advice and professional growth tips for young professionals.',
    imageUrl: 'https://images.pexels.com/photos/5967929/pexels-photo-5967929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.tiktok.com/',
    stats: {
      'Views': '1.2M+',
      'Followers': '50K+',
      'Engagement': '8.5%',
      'Videos': '48'
    }
  },
  {
    title: 'Tech Brand Instagram Growth',
    category: 'Social Media Campaigns',
    description: 'Comprehensive Instagram strategy that increased follower growth and engagement for a tech startup.',
    imageUrl: 'https://images.pexels.com/photos/35177/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.instagram.com/',
    stats: {
      'Growth': '120%',
      'Engagement': '45%',
      'Reach': '250K+',
      'ROI': '3.5x'
    }
  },
  {
    title: 'Product Launch Video Series',
    category: 'Video Editing',
    description: 'Edited and produced a series of product launch videos with a cohesive visual style and narrative.',
    imageUrl: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.youtube.com/',
    stats: {
      'Videos': '12',
      'Views': '80K+',
      'Conversions': '15%',
      'Avg Watch': '2:45'
    }
  },
  {
    title: 'Remote Onboarding Program',
    category: 'HR Projects',
    description: 'Developed and implemented a comprehensive remote employee onboarding program.',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    stats: {
      'Employees': '25+',
      'Satisfaction': '95%',
      'Retention': '92%',
      'Time Saved': '40%'
    }
  },
  {
    title: 'Beauty Brand TikTok Campaign',
    category: 'Social Media Campaigns',
    description: 'Viral TikTok campaign for a beauty brand featuring user-generated content and influencer partnerships.',
    imageUrl: 'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.tiktok.com/',
    stats: {
      'Impressions': '1.5M+',
      'UGC Videos': '350+',
      'Sales Increase': '65%',
      'New Followers': '45K+'
    }
  },
  {
    title: 'Corporate Training Videos',
    category: 'Video Editing',
    description: 'Series of professional development videos for corporate training and employee education.',
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.youtube.com/',
    stats: {
      'Videos': '18',
      'Completion Rate': '87%',
      'Knowledge Retention': '92%',
      'Feedback Score': '4.8/5'
    }
  },
];