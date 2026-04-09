"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { X, Gift } from "lucide-react";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  const triggerInstantConfetti = () => {
    const commonConfig = {
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#C5A059", "#FFFFFF"],
      ticks: 200, // Makes particles disappear faster
      gravity: 1.2,
      scalar: 0.8, // Smaller particles feel "sharper" and less blurry
    };

    // Two sharp, instant bursts from the sides
    confetti({ ...commonConfig, angle: 60, origin: { x: 0, y: 0.7 } });
    confetti({ ...commonConfig, angle: 120, origin: { x: 1, y: 0.7 } });
  };

  useEffect(() => {
    if (!sessionStorage.getItem("publiq_welcome_seen")) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        triggerInstantConfetti();
        sessionStorage.setItem("publiq_welcome_seen", "true");
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }} // Simple ease is lighter than spring
            className="relative w-full max-w-85 bg-white p-8 rounded-sm shadow-xl border border-neutral-100"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-black/40 hover:text-[#C5A059]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <Gift className="w-8 h-8 text-[#C5A059] mx-auto mb-4" />
              
              <h2 className="text-lg font-serif italic mb-1 text-gray-900">
                The PUBLIQ Privilege
              </h2>
              
              <div className="text-3xl font-bold text-[#C5A059] my-3 tracking-tighter">
                20% OFF
              </div>
              
              <p className="text-xs text-gray-600 leading-relaxed mb-6 px-4">
                Enjoy 20% off your bill when you reserve directly through our website.
              </p>

              <button
                onClick={() => setIsVisible(false)}
                className="w-full py-3 bg-[#1a1a1a] text-white text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#C5A059] transition-colors"
              >
                Claim Offer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}