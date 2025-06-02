"use client";
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GoogleTagManager = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-K555555555555', // Replace with your GTM ID
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return null; // This component does not render anything
};

export default GoogleTagManager;
