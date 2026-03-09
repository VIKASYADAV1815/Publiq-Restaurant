"use client";

import React from "react";

export default function BackgroundPattern({ opacity = 0.05, className = "" }: { opacity?: number, className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      {/* Vintage Paper Texture */}
      <div 
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" 
        style={{ opacity: 0.4 }}
      />
      
      {/* Ornamental Border Pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] mix-blend-overlay"
        style={{ opacity }}
      />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-deep-brown/10" />
    </div>
  );
}
