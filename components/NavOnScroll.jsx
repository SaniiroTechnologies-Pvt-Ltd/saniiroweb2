"use client"; // This ensures the component runs only on the client

import { useState, useEffect } from "react";
import NavigationAppbar from "./Navbar/NavigationAppbar";
// import ResponsiveAppBar from "./Navbar/ResponsiveAppBar";

export default function NavOnScroll({ threshold, isAlwaysVisible = false }) {
  const [showNav, setShowNav] = useState(isAlwaysVisible);

  useEffect(() => {
    // If nav should be always visible, no need for scroll listener
    if (isAlwaysVisible) {
      setShowNav(true);
      return;
    }

    let lastScrollY = undefined;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show nav when scrolling down past threshold
          if (currentScrollY > threshold) {
            setShowNav(true);
          }
          // Hide nav when scrolling up past threshold
          else if (currentScrollY < threshold && currentScrollY > 0) {
            setShowNav(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, isAlwaysVisible]);

  return showNav && <NavigationAppbar isAppbarLight={false} />;
};
