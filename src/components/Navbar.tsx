"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
// import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function Navbar() {
  // const items = useCartStore((state) => state.items);
  // const toggleCart = useCartStore((state) => state.toggleCart);
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
      className="fixed top-0 left-0 w-full z-50 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-parchment/10 transition-colors duration-300 text-parchment shadow-md"
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20 transition-all duration-300">
        {/* Left: Mobile Menu Button (Only visible on mobile) */}
        <div className="flex-1 flex items-center md:hidden">
          <button 
            className="text-parchment p-2 -ml-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Desktop Layout (Split into Logo, Links, Socials) */}
        <div className="hidden md:flex w-full items-center justify-between h-full">
          {/* Logo - Left aligned but with equal container space */}
          <div className="w-[200px] flex justify-start items-center h-full">
            <Link href="/" className="group flex items-center py-1 transition-all duration-300 h-full">
              <div className="relative w-64 h-18 transition-all duration-300">
                <Image 
                  src="/logo1.png" 
                  alt="PUBLIQ Dehradun"   
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-1 flex justify-center items-center h-full">
            <div className="flex items-center gap-8">
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
          </div>

          {/* Social Icons - Right aligned but with equal container space */}
          <div className="w-[200px] flex justify-end gap-2">
            <a
              href="tel:+919999999999"
              className="text-parchment hover:text-golden-highlight transition-colors p-2"
              aria-label="Call Us"
            >
              <Phone size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-parchment hover:text-golden-highlight transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Mobile Layout (Logo Center, Icons Right) */}
        <div className="flex md:hidden flex-none justify-center">
          <Link href="/" className="group flex items-center py-1">
            <div className="relative w-44 h-14 transition-all duration-300">
              <Image 
                src="/logo1.png" 
                alt="PUBLIQ Dehradun"   
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex md:hidden flex-1 items-center justify-end gap-2">
          <a
            href="tel:+919999999999"
            className="text-parchment hover:text-golden-highlight transition-colors p-2"
            aria-label="Call Us"
          >
            <Phone size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment hover:text-golden-highlight transition-colors p-2"
            aria-label="Instagram"
          >
            <Instagram size={18} strokeWidth={1.5} />
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
