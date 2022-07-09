import { useEffect } from 'react';
import { useLocation } from 'react-router';
import React from 'react';

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
