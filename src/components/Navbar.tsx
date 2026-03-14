"use client";

import Link from "next/link";
import { Instagram, Phone, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#5D4037]/95 backdrop-blur-md border-b border-parchment/10 transition-colors duration-300 text-parchment shadow-md"
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-parchment p-2"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="group flex-1 md:flex-none text-center md:text-left">
          <div className="flex flex-col items-center leading-none">
            <span className="font-playfair text-2xl font-bold tracking-wider text-golden-highlight group-hover:text-parchment transition-colors">
              PUBLIQ
            </span>
            <span className="font-libre text-xs tracking-widest text-parchment/80 uppercase">
              देहरादून
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-cinzel text-sm font-medium tracking-widest text-parchment hover:text-golden-highlight transition-colors group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-golden-highlight transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleCart}
            className="text-parchment hover:text-golden-highlight transition-colors relative p-2"
            aria-label="Cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <AnimatePresence>
              {items.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-0 right-0 w-4 h-4 bg-golden-highlight text-parchment text-[10px] font-bold flex items-center justify-center rounded-full"
                >
                  {items.length}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          
          <a
            href="tel:+919999999999"
            className="text-parchment hover:text-golden-highlight transition-colors hidden sm:block"
            aria-label="Call Us"
          >
            <Phone size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment hover:text-golden-highlight transition-colors hidden sm:block"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-parchment border-b border-deep-brown/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-cinzel text-lg font-medium text-deep-brown hover:text-golden-highlight transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center gap-6 pt-4 border-t border-deep-brown/10">
                <a href="tel:+919999999999" className="text-deep-brown">
                  <Phone size={20} />
                </a>
                <a href="https://instagram.com" className="text-deep-brown">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
