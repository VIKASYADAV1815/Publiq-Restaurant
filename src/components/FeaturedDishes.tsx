"use client";

import { motion } from "framer-motion";
import { Star, Leaf, Flame, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import menuData from "@/data/menu.json";
import { useRef } from "react";

export default function FeaturedDishes() {
  const addItem = useCartStore((state) => state.addItem);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Flatten all items from all categories for the carousel
  const allDishes = menuData
    .sort((a, b) => {
      // Prioritize Food categories (Burgers, Main Course, Tandoor, etc.)
      const foodCategories = ["burgers-pizza", "main-course", "tandoor", "appetizers", "soup-salads"];
      const aIsFood = foodCategories.includes(a.id);
      const bIsFood = foodCategories.includes(b.id);
      if (aIsFood && !bIsFood) return -1;
      if (!aIsFood && bIsFood) return 1;
      return 0;
    })
    .flatMap(category => 
    category.items.map(item => ({
      ...item,
      categoryImage: category.image, // Use category image as fallback/base
      rating: (4.0 + Math.random()).toFixed(1)
    }))
  );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleAddToCart = (dish: any) => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      veg: dish.veg
    });
  };

  return (
    <section className="py-24 bg-[#FCF4E5] relative overflow-hidden group/section">
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-wood.png')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex justify-between items-end mb-12 px-4 md:px-0">
          <div className="space-y-4">
            <span className="font-cinzel text-[#FDF5E6] tracking-[0.3em] uppercase text-sm opacity-90">Chef&apos;s Specials</span>
            <h2 className="heading-primary text-[#FDF5E6]">
              Signature <span className="italic text-[#D4AF37]">Creations</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Left Arrow - Positioned absolutely to the left */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-[#FDF5E6] text-[#5D4037] shadow-lg hover:bg-[#D4AF37] hover:text-[#5D4037] transition-all duration-300 opacity-0 group-hover/section:opacity-100 focus:opacity-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory hide-scrollbar px-4 md:px-0 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allDishes.map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-[340px] snap-center group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col mb-4"
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={dish.categoryImage || "https://images.unsplash.com/photo-1546833999-b9f5816029bd?q=80&w=800&auto=format&fit=crop"}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm z-10">
                    {dish.veg ? (
                      <Leaf size={16} className="text-green-600" />
                    ) : (
                      <Flame size={16} className="text-red-600" />
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-3 relative z-10 bg-parchment/30 backdrop-blur-md -mt-12 mx-4 rounded-lg border border-white/50 shadow-sm flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="font-playfair text-xl font-bold text-deep-brown group-hover:text-golden-highlight transition-colors leading-tight line-clamp-2">
                      {dish.name}
                    </h3>
                    <div className="flex items-center gap-1 text-golden-highlight bg-deep-brown/5 px-1.5 py-0.5 rounded-sm flex-shrink-0">
                      <Star size={10} fill="currentColor" />
                      <span className="text-xs font-bold">{dish.rating}</span>
                    </div>
                  </div>
                  
                  <p className="font-libre text-sm text-deep-brown/70 line-clamp-2 flex-1">
                    {dish.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-deep-brown/10 flex justify-between items-center mt-auto">
                    <span className="font-cinzel text-lg font-bold text-deep-brown">
                      ₹{dish.price}
                    </span>
                    <button 
                      onClick={() => handleAddToCart(dish)}
                      className="flex items-center gap-2 text-xs font-cinzel tracking-wider uppercase bg-deep-brown text-parchment px-5 py-2.5 hover:bg-golden-highlight hover:text-deep-brown transition-all duration-300 rounded-sm shadow-md hover:shadow-lg active:scale-95"
                    >
                      <Plus size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow - Positioned absolutely to the right */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-[#FDF5E6] text-[#5D4037] shadow-lg hover:bg-[#D4AF37] hover:text-[#5D4037] transition-all duration-300 opacity-0 group-hover/section:opacity-100 focus:opacity-100"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
