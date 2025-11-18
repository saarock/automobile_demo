import React, { useEffect, useState } from "react";

const useBackToTop = () => {

  const [currentScreenHeight, setCurrentScreenHeight] = useState<number>(0);
  useEffect(() => {
    const runEvent = () => {
      
      alert(window.screenX)
      if (currentScreenHeight < window.screenX) {
        alert("ga");
      }
    };

    window.addEventListener("scroll", runEvent);
  }, []);
};

export default useBackToTop;
