export type PortfolioCategory =
  | "TikTok Videos"
  | "Digital Marketing And Content"
  | "Video Editing"
  | "Social Media Hosting & Management"
  | "HR Projects";

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
  title: "Yetnot",
  category: "Food & Location Discovery",
  description:
    "A food location discovery platform that helps users find restaurants, cafés, and bars around Addis Ababa, showcasing popular spots and local favorites.",
  imageUrl: "./yet.png",
  link: "https://www.tiktok.com/@yetnot3/video/7588907494294949176?_r=1&_t=ZM-92FDlaE8oai", 
},

  {
    title: "PS Market Campaign – Video 1",
    category: "TikTok Videos",
    description:
      "Promotional TikTok video for PS Market showcasing featured products with engaging visuals and narration.",
    imageUrl: "./Tik.png",
    link: "https://www.tiktok.com/@the_ps_market/video/7509426071595486520",
  },
  {
    title: "PS Market Campaign – Video 2",
    category: "TikTok Videos",
    description:
      "Creative TikTok ad highlighting daily deals and offers for The PS Market.",
    imageUrl: "./Tik1.png",
    link: "https://www.tiktok.com/@the_ps_market/video/7477177001212759302",
  },
  {
    title: "PS Market Campaign – Video 3",
    category: "TikTok Videos",
    description:
      "Engaging product-focused TikTok video campaign designed to increase awareness and drive conversions.",
    imageUrl: "./Tik2.png",
    link: "https://www.tiktok.com/@the_ps_market/video/7492113303980756229",
  },
  {
    title: "Instagram Product Highlights",
    category: "Digital Marketing And Content",
    description:
      "Instagram post featuring top-selling products with curated visuals and compelling captions for The PS Market.",
    imageUrl: "./Inst.png",
    link: "https://www.instagram.com/p/DECDcjtMMnv/",
  },
  {
    title: "Misseso Homes Promo Videos",
    category: "Digital Marketing And Content",
    description:
      "Video editing and social media management for Misseso Homes — focused on promoting real estate listings.",
    imageUrl: "./mese.png", // Replace with actual thumbnail if you have it
    link: "https://drive.google.com/file/d/1V_Rc9Of2lapVLK5qLKV6-EyZJyLItIxf/view?usp=sharing&t=32",
  },
  {
    title: "DSTV Series: እንደ አንድ (Edited)",
    category: "Video Editing",
    description:
      "Edited a drama series aired on DSTV titled 'እንደ አንድ', contributing to episode visuals and pacing.",
    imageUrl: "./DSTV.jpg", // Replace with actual movie scene image if available
    link: "https://www.youtube.com/watch?v=w2_VNeLO1Ys",
  },

  {
    title: "DSTV Series: እንደ አንድ (Edited)",
    category: "Video Editing",
    description:
      "Edited a drama series aired on DSTV titled 'እንደ አንድ', contributing to episode visuals and pacing.",
    imageUrl: "./film2.png", // Replace with actual movie scene image if available
    link: "https://www.youtube.com/watch?v=w2_VNeLO1Ys",
  },

  {
    title: "Misseso Homes Promo Videos",
    description:
      "Video editing and social media management for Misseso Homes — focused on promoting real estate listings.",
    category: "Video Editing",
    imageUrl: "./p4.png", // Replace with actual movie scene image if available
    link: "vid4.mp4",
  },
  {
    title: "PS Market Campaign",
    category: "Video Editing",
    description:
      "Edited a tiktok video campaign for PS Market, showcasing daily deals and offers.",
    imageUrl: "./o1.png", // Replace with actual movie scene image if available
    link: "./vid1.mp4",
  },

  {
    title: "PS Market Campaign",
    category: "Video Editing",
    description:
      "Edited a ps market video campaign, showcasing daily deals and offers.",
    imageUrl: "./p2.png", // Replace with actual movie scene image if available
    link: "./vid2.mp4",
  },

  {
    title: "PS Market Campaign",
    category: "Video Editing",
    description:
      "Edited a tiktok video campaign for PS Market, showcasing daily deals and offers.",
    imageUrl: "./p3.png", // Replace with actual movie scene image if available
    link: "./vid3.mp4",
  },
  {
    title: "HR Support – NOAH Real Estate",
    category: "HR Projects",
    description:
      "Assisted HR operations at NOAH Real Estate, contributing to employee onboarding and document processing.",
    imageUrl: "./noah.jpg", // Replace with your actual photo once uploaded
    link: "https://drive.google.com/file/d/1zg5p8Mcg2bBabSDavg04vEnl13txkUW0/view?usp=sharing",
  },

  {
    title: "Belmont Bistro",
    category: "Social Media Hosting & Management",
    description:
      "Hosted and managed social media accounts for Belmont Bistro, creating engaging content and driving engagement.",
    imageUrl: "./burger.png", // Replace with actual movie scene image if available
    link: "https://www.tiktok.com/@belmontbistro/video/7516943186619616518?_r=1&_t=ZM-8xIkas4j3vK",
  },
  {
    title: "Belmont Bistro",
    category: "Social Media Hosting & Management",
    description:
      "Hosted and managed social media accounts for Belmont Bistro, creating engaging content and driving engagement.",
    imageUrl: "./burger1.png", // Replace with actual movie scene image if available
    link: "https://www.tiktok.com/@belmontbistro/video/7517943171314158853?_r=1&_t=ZM-8xIkas4j3vK",
  },
  {
    title: "Belmont Bistro",
    category: "Social Media Hosting & Management",
    description:
      "Hosted and managed social media accounts for Belmont Bistro, creating engaging content and driving engagement.",
    imageUrl: "./burger2.png", // Replace with actual movie scene image if available
    link: "https://www.tiktok.com/@belmontbistro/video/7516470165169556792?_r=1&_t=ZM-8xIkas4j3vK",
  },

  {
    title: "Lula Machinaries",
    category: "Social Media Hosting & Management",
    description:
      "Hosted and managed social media accounts for Lula Machinaries, creating engaging content and driving engagement.",
    imageUrl: "./lula.png", // Replace with actual movie scene image if available
    link: "https://www.tiktok.com/@lulamachinery1/video/7527939854299155718?_r=1&_t=ZM-8yLXfIq5hmX",
  },
];
