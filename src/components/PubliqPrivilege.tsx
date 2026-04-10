"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wine, GlassWater, Beer, Crown, ArrowRight } from "lucide-react";

export default function PubliqPrivilege() {
  return (
    <section className="py-12 bg-[#FAF9F6] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl w-full bg-white shadow-xl border border-neutral-100 overflow-hidden"
      >
        {/* Tilted Announcement Badge */}
        <div className="absolute top-0 right-0 z-20 overflow-hidden w-40 h-40 pointer-events-none">
          <div className="bg-[#C5A059] text-white text-xs font-bold uppercase tracking-wider text-center py-2 w-50 absolute top-8 -right-12 rotate-45 shadow-md">
            20% Discount
          </div>
        </div>

        {/* Subtle Paper Grain */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
        />

        <div className="relative z-10 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
          
          {/* COLUMN 1: THE STORY */}
          <div className="p-10 flex flex-col justify-between bg-white">
            <div>
              <Crown className="w-6 h-6 text-[#C5A059] mb-6" strokeWidth={1.5} />
              <h2 className="text-sm tracking-widest uppercase text-[#C5A059] font-semibold mb-3">The Privilege</h2>
              <h3 className="text-4xl font-serif leading-tight mb-6 text-neutral-900">
                An Invitation <br />to <span className="italic">Indulge</span>
              </h3>
              
              <div className="space-y-4 text-base text-neutral-600 leading-relaxed font-normal">
                <p>
                  At <span className="text-neutral-900 font-semibold">PUBLIQ देहरादून</span>, 
                  we believe true hospitality deserves to be savoured without compromise.
                </p>
                <p className="text-sm font-medium text-[#C5A059] bg-[#C5A059]/5 p-3 rounded-sm border-l-2 border-[#C5A059]">
                  Exclusive 20% savings for guests who reserve via our official website.
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-neutral-100">
              <p className="text-sm italic text-neutral-400">
                "Every detail and moment is thoughtfully elevated."
              </p>
            </div>
          </div>

          {/* COLUMN 2: THE SPIRITS & CTA */}
          <div className="p-10 flex flex-col justify-between bg-[#FDFCFB]">
            <div className="space-y-8">
              <h4 className="text-xs tracking-widest uppercase text-neutral-900 font-bold border-b pb-3 border-neutral-200">
                A Celebration of Spirits
              </h4>
              
              <div className="space-y-6">
                {[
                  { icon: GlassWater, name: "Cocktails", desc: "Buy Two, Get One Complimented" },
                  { icon: Wine, name: "Liquors", desc: "One Enjoyed, One Presented" },
                  { icon: Beer, name: "Beers", desc: "Curated Combos & Buckets" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-2 bg-white rounded-full shadow-sm border border-neutral-100">
                        <item.icon className="w-5 h-5 text-[#C5A059]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900 uppercase tracking-wide">{item.name}</p>
                      <p className="text-sm text-neutral-500 italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <Link href="/contact" className="w-full bg-neutral-900 text-white py-4 px-6 text-sm tracking-widest uppercase font-bold hover:bg-[#C5A059] transition-all flex items-center justify-center gap-3 group rounded-sm shadow-lg">
                Book Your Table <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-center">
                <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-1">
                   Website Bookings Only 
                </p>
                <p className="text-sm italic text-neutral-900 font-medium">
                  Arrive in style. Indulge.
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}