import useBackToTop from "@/hooks/useBackToTop";
import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const BackToTop = () => {
  const { scrollToTop, show } = useBackToTop();

  return (
    <div>
      {show && (
        <Button
          size={"lg"}
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 
            p-4 
            shadow-lg 
            transition-all duration-300 
            flex items-center justify-center 
            animate-fade-in
            z-50
          "
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default BackToTop;
