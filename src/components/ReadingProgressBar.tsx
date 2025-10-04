"use client";

import { useState, useEffect } from 'react';

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  // Scroll event handler
  const handleScroll = () => {
    // Get the total scrollable height of the page
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Calculate the scrolled percentage
    const scrollPercentage = (window.scrollY / totalHeight) * 100;
    setWidth(scrollPercentage);
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
}