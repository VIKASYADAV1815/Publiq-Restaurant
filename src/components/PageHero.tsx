 "use client";
 
 import { motion } from "framer-motion";
 
 type Props = {
   bgSrc: string;
   eyebrow?: string;
   title: string;
   subtitle?: string;
   description?: string;
   align?: "center" | "left";
 };
 
 export default function PageHero({
   bgSrc,
   eyebrow,
   title,
   subtitle,
   description,
   align = "center",
 }: Props) {
   const itemsAlign = align === "center" ? "items-center" : "items-start";
   const textAlign = align === "center" ? "text-center" : "text-left";
 
   return (
     <section className="relative h-[55vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden bg-[#1a0f0a]">
       <motion.div
         style={{ backgroundImage: `url('${bgSrc}')` }}
         initial={{ opacity: 0, scale: 1.05 }}
         animate={{ opacity: 0.6, scale: 1.1 }}
         transition={{ duration: 1 }}
         className="absolute inset-0 bg-cover bg-center"
       />
       <div className="absolute inset-0 bg-linear-to-b from-[#1a0f0a]/90 via-[#1a0f0a]/60 to-[#1a0f0a]/90" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_75%)]" />
 
       <div className={`relative z-10 px-6 w-full max-w-5xl mx-auto flex flex-col ${itemsAlign} ${textAlign}`}>
         {eyebrow && (
           <div className="flex items-center justify-center gap-4 mb-6">
             <div className="h-px w-8 bg-golden-highlight/50" />
             <span className="font-cinzel text-golden-highlight text-[10px] tracking-[0.5em] uppercase">
               {eyebrow}
             </span>
             <div className="h-px w-8 bg-golden-highlight/50" />
           </div>
         )}
         <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-parchment font-bold leading-tight tracking-tight drop-shadow-2xl">
           {title}
         </h1>
         {subtitle && (
           <h2 className="font-cinzel text-sm sm:text-base md:text-xl text-golden-highlight tracking-[0.3em] uppercase font-light mt-3">
             {subtitle}
           </h2>
         )}
         {description && (
           <p className="font-libre italic text-base md:text-lg text-parchment/80 tracking-wide mt-6 max-w-2xl leading-relaxed border-l border-golden-highlight/30 pl-6">
             {description}
           </p>
         )}
       </div>
     </section>
   );
 }
