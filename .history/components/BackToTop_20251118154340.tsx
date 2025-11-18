import useBackToTop from "@/hooks/useBackToTop";
import { ArrowUpIcon } from "lucide-react";
import React from "react";


const BackToTop = () => {
  const { scrollToTop, show } = useBackToTop();

  return (
    <div>
      {show && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 
            bg-blue-600 text-white 
            p-4 rounded-full 
            shadow-lg 
            hover:bg-blue-700 
            transition-all duration-300 
            flex items-center justify-center 
            animate-fade-in
            z-50
          "
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
