"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // High-End Parallax Logic - Disabled on mobile for performance
  const yContent = useTransform(scrollY, [0, 1000], [0, isMobile ? 0 : -150]);
  const yAccents = useTransform(scrollY, [0, 1000], [0, isMobile ? 0 : -300]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, isMobile ? 1 : 0]);

  // Smooth spring for the entrance
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a0f0a] selection:bg-golden-highlight selection:text-white"
    >
      {/* Layer 1: Static Background (Parallax removed for performance) */}
      <motion.div 
        style={{ backgroundImage: "url('/restaurent/ban2.jpg')" }}
        className="absolute inset-0 bg-cover bg-center opacity-60"
      />
      
      {/* Layer 2: Sophisticated Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1a0f0a] via-transparent to-[#1a0f0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_80%)]" />

      {/* Layer 3: Fast-Moving Parallax Accents */}
      <motion.div 
        style={{ y: yAccents, opacity: opacityFade }}
        className="absolute top-1/4 right-[10%] text-golden-highlight/10 blur-[1px] hidden lg:block"
      >
        <Utensils size={300} strokeWidth={0.5} />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yContent, opacity: opacityFade }}
        className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto flex flex-col items-center pb-24 md:pb-32"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="h-px w-8 bg-golden-highlight/50" />
             <span className="font-cinzel text-golden-highlight text-[10px] tracking-[0.5em] uppercase">
               Est. 2024
             </span>
             <div className="h-px w-8 bg-golden-highlight/50" />
          </div>

          <h1 className="font-playfair text-6xl sm:text-7xl md:text-9xl text-parchment font-bold leading-none tracking-tighter drop-shadow-2xl">
            PUBLIQ
          </h1>

          <h2 className="font-cinzel text-sm sm:text-lg md:text-2xl text-golden-highlight tracking-[0.4em] uppercase font-light mt-4">
            Kitchen & Spirits
          </h2>

          <p className="font-libre italic text-base md:text-xl text-parchment/80 tracking-wide mt-8 max-w-xl mx-auto leading-relaxed border-l border-golden-highlight/30 pl-6">
            "Where the heritage of Dehradun meets the spirit of modern dining."
          </p>
        </motion.div>

        {/* Premium Action Buttons */}
        <div className="flex flex-row gap-4 sm:gap-8 justify-center mt-14 w-full max-w-md sm:max-w-none">
          
          {/* Primary Button: Shimmer & Lift */}
          <Link href="/menu" className="group relative flex-1 sm:flex-none overflow-hidden px-8 md:px-14 py-4 md:py-5 bg-golden-highlight text-[#2D1A12] font-cinzel text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:translate-y-0">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Menu <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            {/* The Premium Shimmer Reveal */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <div className="absolute inset-0 bg-parchment scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 z-0" />
          </Link>

          {/* Secondary Button: Ghost to Solid Morph */}
          <Link href="/contact" className="group relative flex-1 sm:flex-none px-8 md:px-14 py-4 md:py-5 border border-parchment/30 text-parchment font-cinzel text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden backdrop-blur-sm">
            <span className="relative z-10 group-hover:text-[#2D1A12] transition-colors duration-500">Contact</span>
            {/* Liquid Fill Reveal */}
            <div className="absolute inset-0 bg-parchment translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
          </Link>
          
        </div>
      </motion.div>

      {/* Floating Light Leak */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-golden-highlight/10 blur-[120px] rounded-full" />

      {/* Infinite Scroll Line (Hidden behind image now, keeping for structure) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent via-golden-highlight/50 to-transparent opacity-30 z-10" />
    </section>
  );
}
