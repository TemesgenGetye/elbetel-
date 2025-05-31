export type PortfolioCategory =
  | "TikTok Videos"
  | "Digital Marketing And Content"
  | "Video Editing"
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
    link: "#",
  },
  {
    title: "HR Support – NOAH Real Estate",
    category: "HR Projects",
    description:
      "Assisted HR operations at NOAH Real Estate, contributing to employee onboarding and document processing.",
    imageUrl: "./noah.jpg", // Replace with your actual photo once uploaded
    link: "#",
  },
];
