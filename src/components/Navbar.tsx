"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Instagram, Phone, Menu as MenuIcon, X, MessageCircle, Star } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
// import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  // const items = useCartStore((state) => state.items);
  // const toggleCart = useCartStore((state) => state.toggleCart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

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
    { name: "Testimonials", href: "/#testimonials" },
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
      className="fixed top-0 left-0 w-full z-50 bg-[#141514] border-b border-parchment/10 transition-colors duration-300 text-parchment shadow-md"
    >
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-24 flex items-center justify-between h-16 md:h-20 transition-all duration-300">
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
          <div className="flex-1 flex justify-start items-center h-full">
            <Link href="/" className="group flex items-center py-1 transition-all duration-300 h-full">
              <div className="relative w-64 h-18 transition-all duration-300">
                <Image 
                  src="/logo1.png" 
                  alt="PUBLIQ Dehradun"   
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-auto flex justify-center items-center h-full">
            <div className="flex items-center gap-8 xl:gap-12">
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
          <div className="flex-1 flex justify-end items-center gap-2 lg:gap-4">
            <a
              href="tel:+917251991199"
              className="text-parchment hover:text-golden-highlight transition-colors p-1.5 lg:p-2"
              aria-label="Call Us"
            >
              <Phone size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/publiq_doon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-parchment hover:text-golden-highlight transition-colors p-1.5 lg:p-2"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/917251991199"
              target="_blank"
              rel="noopener noreferrer"
              className="text-parchment hover:text-[#25D366] transition-colors p-1.5 lg:p-2"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
            <Link 
              href="/contact" 
              className="ml-2 px-4 py-2 border border-golden-highlight text-golden-highlight hover:bg-golden-highlight hover:text-[#141514] font-cinzel text-xs font-bold tracking-widest transition-all duration-300 whitespace-nowrap"
            >
              BOOK TABLE
            </Link>
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
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex md:hidden flex-1 items-center justify-end gap-1">
          <a
            href="tel:+917251991199"
            className="text-parchment hover:text-golden-highlight transition-colors p-1 hidden sm:block"
            aria-label="Call Us"
          >
            <Phone size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.instagram.com/publiq_doon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment hover:text-golden-highlight transition-colors p-1 hidden sm:block"
            aria-label="Instagram"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://wa.me/917251991199"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment hover:text-[#25D366] transition-colors p-1"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <Link 
            href="/contact" 
            className="ml-1 px-2 py-1.5 border border-golden-highlight text-golden-highlight hover:bg-golden-highlight hover:text-[#141514] font-cinzel text-[10px] font-bold tracking-wider transition-all duration-300 whitespace-nowrap"
          >
            BOOK TABLE
          </Link>
        </div>
      </div>

      {/* Premium Moving Banner - Only show on home page */}
      {pathname === '/' && (
        <div className="w-full bg-[#141514] border-t border-b border-golden-highlight/20 py-1.5 sm:py-2 marquee-container">
          <div className="marquee-content">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="px-4 md:px-8 font-cinzel text-[10px] sm:text-xs text-golden-highlight tracking-[0.2em] uppercase font-semibold flex items-center whitespace-nowrap">
                <Star size={10} className="text-golden-highlight mr-4 md:mr-8" />
                Avail 20% discount on bookings through website.
              </span>
            ))}
          </div>
        </div>
      )}

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
                <a href="tel:+917251991199" className="text-deep-brown">
                  <Phone size={20} />
                </a>
                <a href="https://www.instagram.com/publiq_doon/" className="text-deep-brown" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/917251991199" target="_blank" rel="noopener noreferrer" className="text-deep-brown">
                  <MessageCircle size={20} />
                </a>
                {/* <a href="https://g.co/kgs/YourBusinessID" target="_blank" rel="noopener noreferrer" className="text-deep-brown">
                  <Star size={20} />
                </a> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
