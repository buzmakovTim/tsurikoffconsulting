import React, { useEffect, useState } from 'react';
import Reveal from 'react-reveal/Reveal';
import './ScrollToTop.scss'
import  arrowUp from './../../img/arrow-up.svg' 

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Reveal effect="fadeInUp">
          <div onClick={scrollToTop} className="totop">
            <img src={arrowUp} alt="scroll up" />
          </div>
        </Reveal>
    )}
    </>
  );
}
