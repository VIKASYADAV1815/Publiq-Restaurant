"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface PremiumVideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  objectFit?: "cover" | "contain";
}

export default function PremiumVideoPlayer({ 
  src, 
  poster, 
  title, 
  autoPlay = false,
  aspectRatio = "video",
  objectFit = "cover"
}: PremiumVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, []);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay blocked:", error);
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  // Handle play/pause
  const togglePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Handle fullscreen
  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };



  const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[9/16]",
    wide: "aspect-[21/9]"
  };

  const encodedSrc = src.split('/').map(part => encodeURIComponent(part)).join('/').replace(/%3A/g, ':');
  const videoSrc = encodedSrc.includes("#t=") ? encodedSrc : `${encodedSrc}#t=0.001`;

  return (
    <div 
      className={`relative w-full ${aspectRatioClasses[aspectRatio]} rounded-sm overflow-hidden group bg-deep-brown shadow-2xl cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
      onTouchEnd={(e) => {
        // Only trigger if no scroll happened (simple check)
        togglePlay(e);
      }}
    >
      <video
        ref={videoRef}
        poster={poster}
        className={`relative z-10 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
        onEnded={() => setIsPlaying(false)}
        playsInline
        muted={isMuted}
        loop
        autoPlay={autoPlay}
        preload="auto"
        controls={isMobile}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {!isMobile && (
        <>
          {/* Overlays */}
          <div className={`absolute inset-0 z-20 bg-black/20 transition-opacity duration-500 pointer-events-none ${isPlaying && !isHovered ? 'opacity-0' : 'opacity-100'}`} />
          
          {/* Center Play Button (Large) */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-golden-highlight/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-golden-highlight transition-transform duration-300 hover:scale-110 pointer-events-auto">
                  {isPlaying ? (
                    <Pause size={24} strokeWidth={1.5} className="ml-0.5" />
                  ) : (
                    <Play size={24} strokeWidth={1.5} className="ml-1" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fullscreen Button */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 z-30"
              >
                <button 
                  onClick={toggleFullScreen}
                  className="p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
                >
                  <Maximize size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}


    </div>
  );
}
