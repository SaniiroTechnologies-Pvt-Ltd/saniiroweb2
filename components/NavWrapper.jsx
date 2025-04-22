"use client"; // This ensures the component runs only on the client

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Navbar/Nav";

const NavWrapper = () => {
  const pathname = usePathname();
  // const isLandingPage = pathname === "/" || pathname === "Solutions/By-Industries"; // Check if it's the landing page
  const isPage = pathname === "/" 
  // || pathname === "/Solutions/By-Industries"
  || pathname === "/About-us"; // Ensure correct path matching

  const [showNav, setShowNav] = useState(isPage); // Default to true on landing page

  useEffect(() => {
    if (isPage) return; // Always show Nav on landing page

    const handleScroll = () => {
      setShowNav(window.scrollY > 570); // Show/hide Nav based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPage]);

  return showNav && <Nav />; // Render Nav only when condition is met
};

export default NavWrapper;
