"use client";

import React from "react";
import ResourceBanner from "./parts/ResourceBanner";
import Readytosign from "../Contact/Readytosign";
import NavOnScroll from "../NavOnScroll";

const Resources = () => {

  return (
    <>
      <NavOnScroll threshold={300} />
      <ResourceBanner />
      <Readytosign />
    </>
  );
};

export default Resources;
