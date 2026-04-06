"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import PremiumVideoPlayer from "./ui/PremiumVideoPlayer";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/1000148534.jpg.jpeg",
    title: "Crafted Cocktails",
    tag: "Mixology",
  },
  {
    src: "/images/1000148533.jpg.jpeg",
    title: "Premium Ambience",
    tag: "Atmosphere",
  },
  {
    src: "/images/1000148491.jpg.jpeg",
    title: "Heritage Dining",
    tag: "Experience",
  },
  {
    src: "/images/1000148490.jpg.jpeg",
    title: "Evening Vibes",
    tag: "Lifestyle",
  }
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="py-16 bg-parchment text-deep-brown relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Compact Header */}
        <div className="flex justify-between items-end mb-8">
          <div className="space-y-1">
            <span className="font-cinzel text-golden-highlight tracking-[0.3em] uppercase text-[8px] font-bold">Publiq Experience</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-deep-brown tracking-tighter leading-none">
              Visual <span className="italic text-golden-highlight">Journey</span>
            </h2>
          </div>
          <div className="h-px w-16 bg-golden-highlight/20 mb-2" />
        </div>

        {/* Cinematic Slim Accordion */}
        <div className="flex flex-col md:flex-row h-87.5 md:h-105 gap-3 group/container">
          {images.map((img, idx) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex-1 group overflow-hidden rounded-xs transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] hover:flex-5 border border-deep-brown/5 shadow-sm cursor-pointer"
              onClick={() => {
                if (!isMobile) return;
                setActiveIndex((prev) => (prev === idx ? null : idx));
              }}
              style={isMobile ? { flex: activeIndex === idx ? 5 : 1 } : undefined}
            >
              {/* Vibrant Image Layer */}
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="100vw"
                  className="object-cover saturate-[1.15] contrast-[1.05] transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-deep-brown/80 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

                {/* Content Layer */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="flex flex-col gap-1 overflow-hidden">
                    
                    {/* Tag Reveal */}
                    <div className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                       <span className="font-cinzel text-[7px] text-golden-highlight tracking-[0.3em] uppercase">{img.tag}</span>
                    </div>

                    {/* Title & Icon */}
                    <div className="flex justify-between items-end">
                      <h3 className="font-playfair text-xl md:text-2xl text-white tracking-tight">
                        {img.title}
                      </h3>
                      <ArrowUpRight size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                    </div>
                    
                    {/* Location Reveal */}
                    <div className="flex items-center gap-1.5 text-white/50 font-cinzel text-[7px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      <MapPin size={8} className="text-golden-highlight" />
                      Dehradun
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Highlights */}
        <div className="mt-16 md:mt-24">
          <div className="flex justify-between items-end mb-8">
            <div className="space-y-1">
              <span className="font-cinzel text-golden-highlight tracking-[0.3em] uppercase text-[8px] font-bold">Motion</span>
              <h3 className="font-playfair text-3xl md:text-4xl text-deep-brown tracking-tight leading-none">
                Live <span className="italic text-golden-highlight">Moments</span>
              </h3>
            </div>
            <div className="h-px w-12 bg-golden-highlight/20 mb-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* <PremiumVideoPlayer 
            src="/videos/MVI_0013.mp4" 
            poster="/restaurent/b14.webp"
            title="The Art of Mixology"
            aspectRatio="video"
            objectFit="contain"
          /> */}
          <PremiumVideoPlayer 
            src="/videos/MVI_0013_1.mp4" 
            poster="/images/1000148527.jpg.jpeg"
            title="Signature Cocktails"
            aspectRatio="video"
            objectFit="contain"
          />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* <PremiumVideoPlayer 
            src="/videos/0326 (2).mp4" 
            poster="/restaurent/b11.webp"
            title="Culinary Excellence"
            aspectRatio="video"
            objectFit="contain"
          /> */}
          <PremiumVideoPlayer 
            src="/videos/MVI_0013_2.mp4" 
            poster="/images/1000148528.jpg.jpeg"
            title="Craft Spirits"
            aspectRatio="video"
            objectFit="contain"
          />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
