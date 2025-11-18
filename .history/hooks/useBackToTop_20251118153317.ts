import React, { useEffect, useState } from 'react'

const useBackToTop = () => {

  const [currentScreenHeight, setCurrentScreenHeight] = useState<number>(0);
  useEffect(() => {
    if (currentScreenHeight < window.screenX) {
      alert("")
    }
  }, []);

}

export default userBackToTop