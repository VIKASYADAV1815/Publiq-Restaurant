"use client";

import { motion } from "framer-motion";
import { Mountain, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StorySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  quote?: string;
  quoteAuthor?: string;
  imageSrc?: string;
  eyebrow?: string;
}

export default function StorySection({
  title = "A Taste of",
  subtitle = "Dehradun",
  description = "Nestled in the heart of the valley, PUBLIQ brings you the nostalgic charm of old Mussoorie evenings and the vibrant spirit of Dehradun.",
  quote = "\"To know a place, one must taste its memories. In every corner of these hills, there is a story waiting to be told over a warm meal.\"",
  quoteAuthor = "Ruskin Bond Inspiration",
  imageSrc = "/restaurent/b11.webp",
  eyebrow = "Heritage Narrative"
}: StorySectionProps) {
  return (
    <section className="pt-40 pb-24 md:pt-64 lg:pt-80 md:pb-40 bg-parchment relative overflow-hidden">
      {/* Texture & Ambient Blur */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: "url('/restaurent/b6.webp')" }} 
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-8">
          
          {/* Image Side - Focused & Framed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[42%]"
          >
            <div className="relative aspect-3/4 w-full max-w-95 mx-auto overflow-hidden shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 bg-deep-brown/10 z-10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
              
              <Image
                src={imageSrc}
                alt="Heritage Interior"
                fill
                className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
              />

              {/* Minimalist Year Tag */}
              <div className="absolute bottom-0 right-0 bg-parchment p-6 z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)]">
                <span className="font-cinzel text-[9px] tracking-[0.4em] text-deep-brown/40 block mb-1">SINCE</span>
                <span className="font-playfair text-3xl font-bold text-deep-brown">2024</span>
              </div>
            </div>

            {/* Hairline Accents */}
            <div className="absolute top-10 -left-6 w-px h-32 bg-golden-highlight/30 hidden lg:block" />
            <div className="absolute -top-6 left-10 w-32 h-px bg-golden-highlight/30 hidden lg:block" />
          </motion.div>

          {/* Text Side - Refined & Spaced */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[50%] flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-10">
              <Mountain size={14} className="text-golden-highlight animate-pulse" />
              <span className="font-cinzel text-[10px] tracking-[0.5em] text-deep-brown/60 uppercase">{eyebrow}</span>
            </div>
            
            <h2 className="font-playfair text-5xl md:text-6xl text-deep-brown leading-[1.1] mb-12">
              {title} <span className="italic text-golden-highlight">{subtitle}</span>
            </h2>
            
            <div className="relative pl-8 mb-12 border-l border-golden-highlight/40">
              <p className="font-libre text-lg md:text-xl italic text-deep-brown leading-relaxed opacity-90 max-w-lg">
                {quote}
              </p>
              <p className="font-cinzel text-[9px] text-deep-brown/40 mt-6 tracking-widest uppercase">— {quoteAuthor}</p>
            </div>
            
            <p className="font-libre text-deep-brown/60 text-base md:text-lg leading-relaxed max-w-md mb-12">
              {description}
            </p>

            {/* High-Interaction Button Group */}
            <div className="flex items-center gap-10">
              <Link href="/about" className="group relative px-10 py-4 overflow-hidden border border-deep-brown/10 rounded-sm transition-all duration-500 hover:border-golden-highlight">
                {/* Magnetic-style Label */}
                <span className="relative z-10 font-cinzel text-[11px] tracking-[0.3em] uppercase text-deep-brown group-hover:text-parchment transition-colors duration-500 flex items-center gap-2">
                  Our Story 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Liquid Fill Reveal */}
                <div className="absolute inset-0 bg-deep-brown translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                
                {/* Secondary Highlight Glow */}
                <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-golden-highlight/20 to-transparent group-hover:left-full transition-all duration-1000 delay-100" />
              </Link>
              
              <div className="flex items-center gap-2 text-deep-brown/40 font-cinzel text-[9px] tracking-[0.2em] uppercase cursor-help hover:text-golden-highlight transition-colors">
                <MapPin size={12} />
                <span>Rajpur Road</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
