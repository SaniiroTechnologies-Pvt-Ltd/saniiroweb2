"use client";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GoogleAnalytics4 = () => {
  useEffect(() => {
    ReactGA.initialize('G-1234567890'); // Replace with your GA4 Measurement ID
    ReactGA.send('pageview'); // Send a pageview event on component mount
  }, []);

  return null; // This component does not render anything
};

export default GoogleAnalytics4;
