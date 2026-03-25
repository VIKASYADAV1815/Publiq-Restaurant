"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PremiumVideoPlayer from "@/components/ui/PremiumVideoPlayer";

const galleryImages = [
  { src: "/restaurent/ban2.jpg", span: "md:col-span-4 md:row-span-4" },
  { src: "/restaurent/ban1.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/banner2.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/momo.webp", span: "md:col-span-2 md:row-span-3" },
  { src: "/restaurent/b1.webp", span: "md:col-span-2 md:row-span-3" },
  { src: "/restaurent/b2.webp", span: "md:col-span-2 md:row-span-3" },
  { src: "/restaurent/b3.webp", span: "md:col-span-3 md:row-span-3" },
  { src: "/restaurent/b4.webp", span: "md:col-span-3 md:row-span-3" },
  { src: "/restaurent/b6.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/b7.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/b8.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/b9.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/b10.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/b11.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/b12.webp", span: "md:col-span-2 md:row-span-3" },
  { src: "/restaurent/b13.webp", span: "md:col-span-3 md:row-span-3" },
  { src: "/restaurent/b14.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/restaurent/b15.webp", span: "md:col-span-2 md:row-span-2" },
];

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'stills' | 'motion'>('stills');

  const nextImage = () => setSelectedIdx((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  const prevImage = () => setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));

  return (
    <main className="min-h-screen bg-parchment text-deep-brown selection:bg-golden-highlight">
      <Navbar />
      <PageHero
        bgSrc="/restaurent/b11.webp"
        eyebrow="The Visual Experience"
        title="Publiq Archive"
        description="A curated narrative of craft mixology and culinary heritage."
      />
      
      <div className="py-16 md:py-24 px-6 max-w-7xl mx-auto min-h-[80vh]">
        {/* Premium Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center p-1.5 bg-deep-brown/5 rounded-full border border-deep-brown/10 shadow-inner">
            {/* Sliding Indicator */}
            <motion.div
              className="absolute h-[calc(100%-12px)] top-1.5 bg-deep-brown rounded-full shadow-md"
              initial={false}
              animate={{
                left: activeTab === 'stills' ? '6px' : '50%',
                width: 'calc(50% - 6px)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />

            <button
              onClick={() => setActiveTab('stills')}
              className={`relative z-10 w-32 md:w-40 py-3 text-xs font-cinzel font-bold tracking-widest uppercase transition-colors duration-500 ${
                activeTab === 'stills' ? 'text-parchment' : 'text-deep-brown/60 hover:text-deep-brown'
              }`}
            >
              Stills
            </button>
            <button
              onClick={() => setActiveTab('motion')}
              className={`relative z-10 w-32 md:w-40 py-3 text-xs font-cinzel font-bold tracking-widest uppercase transition-colors duration-500 ${
                activeTab === 'motion' ? 'text-parchment' : 'text-deep-brown/60 hover:text-deep-brown'
              }`}
            >
              Motion
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'motion' && (
            <motion.div
              key="motion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className="text-center mb-12">
                <span className="font-cinzel text-deep-brown/60 tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Motion</span>
                <h2 className="font-playfair text-4xl md:text-5xl text-deep-brown tracking-tight">
                  Cinematic <span className="italic text-golden-highlight">Moments</span>
                </h2>
                <div className="h-px w-24 bg-golden-highlight/30 mx-auto mt-6" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PremiumVideoPlayer 
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
                  poster="/restaurent/b14.webp"
                  title="The Art of Mixology"
                />
                <PremiumVideoPlayer 
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                  poster="/restaurent/b11.webp"
                  title="Culinary Excellence"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'stills' && (
            <motion.div
              key="stills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className="text-center mb-12">
                <span className="font-cinzel text-deep-brown/60 tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Stills</span>
                <h2 className="font-playfair text-4xl md:text-5xl text-deep-brown tracking-tight">
                  Curated <span className="italic text-golden-highlight">Captures</span>
                </h2>
                <div className="h-px w-24 bg-golden-highlight/30 mx-auto mt-6" />
              </div>

              {/* Tight-Gap Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 auto-rows-[90px] md:auto-rows-[110px]">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              layoutId={`card-${idx}`}
              onClick={() => setSelectedIdx(idx)}
              className={`${image.span} relative group cursor-pointer overflow-hidden rounded-sm bg-deep-brown/5`}
              whileHover={{ scale: 0.995 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={image.src}
                alt="Publiq Lifestyle"
                fill
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-deep-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Plus className="text-parchment" size={32} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* High-End Animated Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-parchment/95 backdrop-blur-2xl p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIdx(null)}
                className="absolute top-0 right-0 p-4 text-deep-brown/40 hover:text-deep-brown transition-colors z-120"
              >
                <X size={40} strokeWidth={1} />
              </button>

              {/* Image Navigation with Framer Transition */}
              <div className="relative w-full h-[80vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIdx}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={galleryImages[selectedIdx].src}
                      alt="Full view"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-0 pointer-events-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="pointer-events-auto w-16 h-16 flex items-center justify-center text-deep-brown/20 hover:text-deep-brown transition-all -ml-4 md:-ml-20"
                >
                  <ChevronLeft size={64} strokeWidth={1} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="pointer-events-auto w-16 h-16 flex items-center justify-center text-deep-brown/20 hover:text-deep-brown transition-all -mr-4 md:-mr-20"
                >
                  <ChevronRight size={64} strokeWidth={1} />
                </button>
              </div>

              {/* Info Counter */}
              <div className="mt-8 overflow-hidden">
                <motion.div 
                  key={selectedIdx}
                  initial={{ y: 20 }} animate={{ y: 0 }}
                  className="font-cinzel text-[10px] tracking-[0.6em] text-deep-brown/40 uppercase"
                >
                  Gallery Item {selectedIdx + 1} // {galleryImages.length}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}
