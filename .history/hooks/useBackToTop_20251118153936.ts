import React, { useEffect, useState } from "react";

const useBackToTop = () => {
  const [currentScreenHeight, setCurrentScreenHeight] = useState<number>(0);
  useEffect(() => {
    const runEvent = () => {
      if (currentScreenHeight < window.scrollY && window.scrollY > 200) {
        alert("ga");
      }
    };

    window.addEventListener("scroll", runEvent);
  }, []);
};

export default useBackToTop;
