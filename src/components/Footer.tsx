"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#5D4037] text-parchment pt-24 pb-12 relative overflow-hidden border-t border-[#FDF5E6]/10">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10 grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="inline-block group">
            <h2 className="font-playfair text-3xl font-bold tracking-wider text-golden-highlight group-hover:text-parchment transition-colors">
              PUBLIQ
            </h2>
            <p className="font-libre text-xs tracking-[0.3em] uppercase text-parchment/60 mt-1 group-hover:text-golden-highlight transition-colors">
              Kitchen & Spirits
            </p>
          </Link>
          <p className="font-libre text-sm text-parchment/70 leading-relaxed max-w-xs mx-auto md:mx-0">
            A tribute to the timeless charm of Dehradun. Where heritage meets modern culinary art.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-parchment/20 flex items-center justify-center hover:bg-golden-highlight hover:text-deep-brown hover:border-golden-highlight transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="font-cinzel text-lg font-semibold tracking-wide text-golden-highlight">
            Explore
          </h3>
          <ul className="space-y-3 font-libre text-sm text-parchment/80">
            {["Home", "Our Menu", "The Story", "Gallery", "Contact Us"].map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-golden-highlight transition-colors relative group inline-block">
                  {link}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-golden-highlight transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="font-cinzel text-lg font-semibold tracking-wide text-golden-highlight">
            Visit Us
          </h3>
          <div className="space-y-4 font-libre text-sm text-parchment/80 flex flex-col items-center md:items-start">
            <div className="flex gap-3 items-start max-w-xs text-left">
              <MapPin className="text-golden-highlight mt-1 flex-shrink-0" size={18} />
              <p>123, Rajpur Road, Near Clock Tower, Dehradun, Uttarakhand 248001</p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="text-golden-highlight flex-shrink-0" size={18} />
              <a href="tel:+919876543210" className="hover:text-golden-highlight transition-colors">+91 987 654 3210</a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="text-golden-highlight flex-shrink-0" size={18} />
              <a href="mailto:hello@publiq.in" className="hover:text-golden-highlight transition-colors">hello@publiq.in</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-16 pt-8 border-t border-parchment/10 text-center md:flex md:justify-between md:items-center text-xs font-libre text-parchment/40">
        <p>© 2024 PUBLIQ Dehradun. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with ❤️ in the Hills</p>
      </div>
    </footer>
  );
}
