import useBackToTop from "@/hooks/useBackToTop";
import React from "react";

const BackToTop = () => {
  const { scrollToTop, show } = useBackToTop();

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            background: "blue",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTop;
