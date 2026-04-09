"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroDish() {
  const { scrollY } = useScroll();
  
  // Parallax effect for the dish
  const yDish = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <div className="relative w-full h-0 z-40 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: yDish }}
        className="absolute left-1/2 -translate-x-1/2 -top-28 sm:-top-40 md:-top-56 lg:-top-72 xl:-top-80 w-[95%] max-w-125 sm:max-w-147.5 md:max-w-212.5 lg:max-w-275 xl:max-w-325 flex justify-center"
      >
        <div className="relative w-full aspect-4/3 md:aspect-video">
          <Image
            src="/restaurent/h3.png"
            alt="Signature Dish"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
            priority
          />
          {/* Layered realistic shadow */}
          <div className="absolute bottom-[10%] md:bottom-[15%] left-1/2 -translate-x-1/2 w-[60%] h-[10%] bg-black/30 blur-[25px] md:blur-2xl rounded-[100%]" />
          <div className="absolute bottom-[12%] md:bottom-[18%] left-1/2 -translate-x-1/2 w-[30%] h-[4%] bg-black/50 blur-[15px] md:blur-[25px] rounded-[100%]" />
        </div>
      </motion.div>
    </div>
  );
}
