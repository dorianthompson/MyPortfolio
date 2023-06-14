import React from 'react';
import './scrollup.css';

const ScrollUp = () => {
  const handleScroll = function() {
      const scrollUp = document.querySelector(".scrollup");
    
      if (this.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
      } else {
          scrollUp.classList.remove("show-scroll")
      }
  }

  window.addEventListener("scroll", handleScroll)
  
  return (
    <a href="" className="scrollup">
        <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  )
}

export default ScrollUp