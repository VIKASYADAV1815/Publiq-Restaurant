"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import menuData from "@/data/menu.json";
import { ArrowRight, Sparkles } from "lucide-react";
import { useUIStore } from "@/store/uiStore";

export default function MenuCategories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const setTargetCategory = useUIStore((state) => state.setTargetCategory);

  const handleCategoryClick = (categoryId: string) => {
    setTargetCategory(categoryId);
    const element = document.getElementById("menu-book-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const updateConstraints = () => {
      if (scrollRef.current && containerRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        setConstraints({ left: -(scrollWidth - containerWidth), right: 0 });
      }
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <section className="py-24 bg-[#0f0a08] text-parchment relative overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-golden-highlight/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/20 blur-[120px] rounded-full" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-golden-highlight">
              <Sparkles size={16} className="animate-spin-slow" />
              <span className="font-cinzel tracking-[0.4em] uppercase text-[10px] font-bold">The Royal Palette</span>
            </div>
            <h2 className="font-playfair text-6xl md:text-8xl text-white leading-none tracking-tighter">
              Vibrant <span className="italic text-golden-highlight">Flavors</span>
            </h2>
          </div>
          <p className="font-libre text-sm md:text-lg text-white/60 max-w-sm leading-relaxed border-l-2 border-golden-highlight pl-6">
            Experience the colorful legacy of Doon's finest ingredients, served with a modern twist.
          </p>
        </div>
      </div>

      {/* Draggable Area */}
      <div 
        className="relative w-full z-20 select-none overflow-visible" 
        ref={containerRef}
        style={{ touchAction: "pan-y" }} 
      >
        <motion.div 
          ref={scrollRef}
          drag="x"
          dragDirectionLock
          dragConstraints={constraints}
          dragElastic={0.05}
          className="flex gap-8 md:gap-12 px-6 md:pl-[max(24px,calc(50vw-40rem))] w-max cursor-grab active:cursor-grabbing items-center"
        >
          {menuData.map((category, idx) => (
            <motion.div 
              key={category.id} 
              className={`relative group shrink-0 ${idx % 2 === 0 ? "mt-0" : "mt-16"} cursor-pointer`}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategoryClick(category.id)}
            >
              {/* Floating Index */}
              <div className="absolute -top-8 left-2 font-cinzel text-[11px] text-golden-highlight/40 group-hover:text-golden-highlight transition-colors">
                SECTION.0{idx + 1}
              </div>

              <div className="w-70 md:w-[360px] aspect-[4/5] relative overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-golden-highlight/40 transition-all duration-700">
                {/* Image with Color Pop */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  draggable={false}
                />
                
                {/* Colorful Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-linear-to-br from-golden-highlight/20 via-transparent to-orange-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-playfair text-3xl text-white mb-3">
                    {category.name}
                  </h3>
                  
                  <p className="font-libre text-xs md:text-sm text-white/80 mb-6 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>

                  <button className="flex items-center gap-3 text-golden-highlight font-cinzel text-[10px] tracking-[0.3em] uppercase group/btn">
                    <span>Taste Now</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>

                {/* Always Visible Title (Mobile Friendly) */}
                <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-playfair text-2xl text-white drop-shadow-lg">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="w-12 md:w-96 shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}