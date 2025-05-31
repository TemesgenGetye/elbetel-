import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Elbetel Ashenafi Tola. All rights reserved.
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by
              Elbetel Tola
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
