import { useEffect } from 'react';
import { useLocation } from 'react-router';
import React from 'react';
import { useThrottle } from '@react-hook/throttle';

/**
 *
 * This watches the current path of the website. When it changes, it resets the scroll position to the top.
 * This is so that when you navigate to a new page it will go to the top of the screen.
 */
export const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <></>;
};

export const ScrollToHash = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    if (location.hash != '') {
      const anchor = document.getElementById(location.hash.split('#')[1]);
      if (anchor) {
        anchor.scrollIntoView();
      }
    }
  });
  return <></>;
};

export function useScreenWidth() {
  const viewport = useViewport();
  const isMobile = viewport.width < 800;
  const width = viewport.width;
  return { width, isMobile };
}

const useViewport = () => {
  const [width, setWidth] = useThrottle(window.innerWidth, 10);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [setWidth]);

  // Return the width so we can use it in our components
  return { width };
};
