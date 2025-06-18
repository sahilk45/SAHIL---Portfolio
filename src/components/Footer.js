import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Sahil Kumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;