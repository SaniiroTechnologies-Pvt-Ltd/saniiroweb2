"use client";

import React, { useEffect, useState } from "react";
import ResourceBanner from "./parts/ResourceBanner";
import Readytosign from "../Contact/Readytosign"; 

const Resources = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
          {showNav && <Nav/>}

      <ResourceBanner />
      <Readytosign />
    </>
  );
};

export default Resources;
