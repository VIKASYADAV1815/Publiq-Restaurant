"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  { src: "https://dehraduntourism.co.in/images/tourist-places/forest-research-institute-dehradun/forest-research-institute-dehradun-india-tourism-history.jpg", span: "md:col-span-4 md:row-span-4" },
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/11/08145031/landour.jpeg", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000", span: "md:col-span-2 md:row-span-3" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000", span: "md:col-span-2 md:row-span-3" },
  { src: "https://mohitbangari.com/wp-content/uploads/2025/03/pexels-photo-2070307-2070307-1536x1024.jpg", span: "md:col-span-2 md:row-span-3" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", span: "md:col-span-3 md:row-span-3" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000", span: "md:col-span-3 md:row-span-3" },
  { src: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1000", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1000", span: "md:col-span-2 md:row-span-2" },
];

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = () => setSelectedIdx((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  const prevImage = () => setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));

  return (
    <main className="min-h-screen bg-parchment text-deep-brown selection:bg-golden-highlight">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-golden-highlight" />
            <span className="font-cinzel text-golden-highlight tracking-[0.4em] text-[10px] font-bold">The Visual Experience</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-6xl md:text-8xl text-deep-brown mb-4"
          >
            Publiq <span className="italic text-golden-highlight">Archive</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="font-libre text-deep-brown/60 text-lg italic max-w-2xl"
          >
            A curated narrative of craft mixology and culinary heritage.
          </motion.p>
        </header>

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
      </div>

      {/* High-End Animated Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-parchment/95 backdrop-blur-2xl p-4"
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
                className="absolute top-0 right-0 p-4 text-deep-brown/40 hover:text-deep-brown transition-colors z-[120]"
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