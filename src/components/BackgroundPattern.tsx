"use client";

import React from "react";

export default function BackgroundPattern({ opacity = 0.05, className = "" }: { opacity?: number, className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      {/* Vintage Paper Texture */}
      <div 
        className="absolute inset-0 mix-blend-multiply" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')", opacity: 0.4 }}
      />
      
      {/* Ornamental Border Pattern */}
      <div 
        className="absolute inset-0 mix-blend-overlay"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/connected.png')", opacity }}
      />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-deep-brown/10" />
    </div>
  );
}
