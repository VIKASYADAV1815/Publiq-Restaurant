"use client";

import { motion } from "framer-motion";
import PremiumVideoPlayer from "./ui/PremiumVideoPlayer";

const highlightVideos = [
  {
    src: "/videos/MVI_0013_1.mp4",
    poster: "/images/1000148527.jpg.jpeg",
    title: "Signature Cocktails"
  },
  {
    src: "/videos/MVI_0013_2.mp4",
    poster: "/images/1000148528.jpg.jpeg",
    title: "Craft Spirits"
  }
];

export default function VideoHighlight() {
  return (
    <section className="py-24 bg-[#1a0f0a] relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }} 
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-cinzel text-golden-highlight tracking-[0.4em] uppercase text-xs font-bold mb-4 block">
              Live Experience
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl text-parchment tracking-tight mb-6">
              Moments at <span className="italic text-golden-highlight">Publiq</span>
            </h2>
            <div className="h-px w-24 bg-golden-highlight/30 mx-auto" />
          </motion.div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlightVideos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <PremiumVideoPlayer 
                src={video.src} 
                poster={video.poster}
                title={video.title}
                aspectRatio="portrait"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
