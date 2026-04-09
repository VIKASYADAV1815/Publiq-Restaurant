"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wine, GlassWater, Beer, Sparkles, Crown, ArrowRight } from "lucide-react";

export default function PubliqPrivilege() {
  return (
    <section className="py-12 bg-[#FAF9F6] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl w-full bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 overflow-hidden"
      >
        {/* Subtle Paper Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />

        <div className="relative z-10 grid md:grid-cols-3 divide-x divide-neutral-100">
          
          {/* COLUMN 1: THE STORY */}
          <div className="p-8 flex flex-col justify-between bg-white">
            <div>
              <Crown className="w-5 h-5 text-[#C5A059] mb-6" strokeWidth={1.5} />
              <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-4">The Privilege</h2>
              <h3 className="text-3xl font-serif tracking-tighter leading-tight mb-6 text-neutral-900">
                An Invitation <br />to <span className="italic">Indulge</span>
              </h3>
              <div className="space-y-4 text-[13px] text-neutral-600 leading-relaxed font-light">
                <p>Step away from the ordinary and into a more rewarding experience.</p>
                <p>At <span className="text-neutral-900 font-medium border-b border-[#C5A059]/30">PUBLIQ देहरादून</span>, we believe true hospitality deserves to be savoured without compromise.</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-50">
              <p className="text-[11px] italic text-neutral-400 leading-relaxed">
                "Every detail, flavour, and moment is thoughtfully elevated."
              </p>
            </div>
          </div>

          {/* COLUMN 2: THE MAIN OFFER (HIGHLIGHTED) */}
          <div className="p-8 bg-[#FDFCFB] flex flex-col justify-center items-center text-center">
            <div className="w-full bg-[#1A1A1A] p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10"><Sparkles className="text-white w-8 h-8" /></div>
              
              <h4 className="text-[9px] tracking-[0.4em] uppercase text-[#C5A059] font-bold mb-4">Culinary Experience</h4>
              <div className="text-6xl font-serif text-white tracking-tighter mb-2">20%</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white font-light mb-6">Privilege Savings</div>
              
              <p className="text-[10px] text-[#C5A059] italic leading-relaxed border-t border-white/10 pt-4">
                Extended exclusively to guests who reserve via our official website.
              </p>
            </div>
            <p className="mt-6 text-[11px] text-neutral-500 font-light leading-relaxed">
              Bypass the commonplace. Embrace a setting where excellence is standard.
            </p>
          </div>

          {/* COLUMN 3: THE SPIRITS & CTA */}
          <div className="p-8 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-neutral-900 font-bold border-b pb-2 border-neutral-100">
                A Celebration of Spirits
              </h4>
              
              <div className="space-y-4">
                {[
                  { icon: GlassWater, name: "Cocktails", desc: "Two Crafted, One Complimented" },
                  { icon: Wine, name: "Liquors", desc: "One Enjoyed, One Presented" },
                  { icon: Beer, name: "Beers", desc: "Curated Combos" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <item.icon className="w-4 h-4 text-[#C5A059] mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-[11px] font-bold text-neutral-900 uppercase tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-neutral-400 italic leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4 text-center">
              <p className="text-[9px] text-neutral-400 uppercase tracking-widest leading-tight">
                ⚜️ Website Bookings Only ⚜️
              </p>
              <Link href="/contact" className="w-full bg-neutral-900 text-white py-4 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#C5A059] transition-all flex items-center justify-center gap-2 group">
                Reserve <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[10px] italic text-neutral-900 font-medium">
                Arrive in style. Indulge.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}