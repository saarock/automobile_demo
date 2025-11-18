import React, { useEffect, useState } from "react";

const useBackToTop = () => {

  const [currentScreenHeight, setCurrentScreenHeight] = useState<number>(0);
  useEffect(() => {
    const runEvent = () => {
      alert()
      if (currentScreenHeight < window.screenX) {
        alert("");
      }
    };

    window.document.addEventListener("scroll", runEvent);
  }, []);
};

export default useBackToTop;
