"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartSidebar() {
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const cartRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node) && isOpen) {
        toggleCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleCart]);

  // Disable body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Sidebar */}
          <motion.div
            ref={cartRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-parchment border-l border-deep-brown/20 shadow-2xl z-70 flex flex-col"
          >
            {/* Receipt Top Pattern */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 z-0 pointer-events-none" />
            <div className="w-full h-2 bg-[radial-gradient(circle,transparent_50%,#FDF5E6_50%)] bg-size-[16px_16px] rotate-180 absolute top-0 z-10"></div>

            {/* Header */}
            <div className="p-6 pt-8 border-b-2 border-dashed border-deep-brown/20 flex items-center justify-between bg-white/40 backdrop-blur-md relative z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-deep-brown text-parchment rounded-full flex items-center justify-center shadow-lg">
                   <ShoppingBag size={20} />
                </div>
                <div>
                   <h2 className="font-cinzel text-xl font-bold text-deep-brown leading-none">Your Order</h2>
                   <p className="font-libre text-[10px] text-deep-brown/60 uppercase tracking-widest mt-1">Table 01</p>
                </div>
              </div>
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-deep-brown/10 rounded-full transition-colors text-deep-brown"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-blend-multiply">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <div className="w-24 h-24 border-4 border-dashed border-deep-brown/30 rounded-full flex items-center justify-center">
                    <ShoppingBag size={40} strokeWidth={1} className="text-deep-brown" />
                  </div>
                  <p className="font-libre text-lg text-deep-brown italic">Your cart is empty</p>
                  <button 
                    onClick={toggleCart}
                    className="font-cinzel text-sm border-b border-deep-brown pb-1 text-deep-brown font-bold"
                  >
                    View Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-4 border-b border-deep-brown/10 last:border-0"
                  >
                    {/* Quantity Controls - Compact */}
                    <div className="flex flex-col items-center justify-center gap-1 bg-white border border-deep-brown/10 rounded-full px-1 py-1 h-fit shadow-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-deep-brown hover:text-parchment rounded-full transition-colors text-deep-brown"
                      >
                        <Plus size={12} />
                      </button>
                      <span className="font-cinzel font-bold text-sm w-4 text-center text-deep-brown">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-deep-brown hover:text-parchment rounded-full transition-colors text-deep-brown"
                      >
                        <Minus size={12} />
                      </button>
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 space-y-1 pt-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-playfair font-bold text-deep-brown text-lg leading-tight">
                          {item.name}
                        </h3>
                        <p className="font-cinzel text-deep-brown font-bold text-sm ml-4">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                         <p className="font-libre text-xs text-deep-brown/60 italic">
                           ₹{item.price} each
                         </p>
                         <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500/40 hover:text-red-600 transition-colors text-xs uppercase tracking-wider font-bold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="relative z-20">
                {/* Receipt Zigzag Top */}
                <div className="w-full h-2 bg-[linear-gradient(45deg,transparent_75%,#fff_75%),linear-gradient(-45deg,transparent_75%,#fff_75%)] bg-size-[16px_16px] bg-repeat-x absolute -top-2"></div>
                
                <div className="p-8 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] space-y-4">
                  <div className="space-y-2 border-b-2 border-dashed border-deep-brown/10 pb-4">
                    <div className="flex justify-between items-center font-libre text-sm text-deep-brown/70">
                      <span>Subtotal</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between items-center font-libre text-sm text-deep-brown/70">
                      <span>Service Charge (5%)</span>
                      <span>₹{Math.round(totalAmount * 0.05)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center font-cinzel font-bold text-2xl text-deep-brown pt-2">
                    <span>Total</span>
                    <span>₹{totalAmount + Math.round(totalAmount * 0.05)}</span>
                  </div>
                  
                  <button className="w-full bg-deep-brown text-parchment font-cinzel tracking-widest uppercase py-4 text-sm font-bold shadow-lg hover:bg-[#3E2723] transition-colors flex items-center justify-center gap-2 mt-4">
                    <span>Confirm Order</span>
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
