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
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay blocked:", error);
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  // Handle play/pause
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  // Handle mute/unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
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

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[9/16]",
    wide: "aspect-[21/9]"
  };

  return (
    <div 
      className={`relative w-full ${aspectRatioClasses[aspectRatio]} rounded-sm overflow-hidden group bg-deep-brown shadow-2xl cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => togglePlay()}
    >
      {/* Video Element with blurred background for portrait videos in landscape mode */}
      {objectFit === 'contain' && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-xl scale-110 opacity-50"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={`relative z-10 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-1000 group-hover:scale-105`}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        playsInline
        muted={isMuted}
        loop
        autoPlay={autoPlay}
      />

      {/* Overlays */}
      <div className={`absolute inset-0 z-20 bg-black/40 transition-opacity duration-500 pointer-events-none ${isPlaying && !isHovered ? 'opacity-0' : 'opacity-100'}`} />
      
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

      {/* Top Title Overlay */}
      {title && (
        <div className={`absolute top-0 left-0 w-full p-6 z-30 pointer-events-none bg-linear-to-b from-black/80 to-transparent transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="font-playfair text-xl md:text-3xl text-parchment drop-shadow-md">{title}</h3>
          <div className="w-12 h-px bg-golden-highlight mt-3 opacity-70" />
        </div>
      )}

      {/* Bottom Controls Bar */}
      <div className={`absolute bottom-0 left-0 w-full p-4 md:p-6 z-30 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-4 transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-golden-highlight transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between text-parchment">
          <div className="flex items-center gap-6">
            <button 
              onClick={(e) => { e.stopPropagation(); togglePlay(e); }}
              className="hover:text-golden-highlight transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button 
              onClick={toggleMute}
              className="hover:text-golden-highlight transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
          
          <button 
            onClick={toggleFullScreen}
            className="hover:text-golden-highlight transition-colors"
          >
            <Maximize size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
