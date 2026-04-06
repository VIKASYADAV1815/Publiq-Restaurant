"use client";

import React, { useState, forwardRef, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Leaf, Flame, ArrowRight, ShoppingBag, Info } from "lucide-react";
import menuData from "@/data/menu.json";
// import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import Image from "next/image";

// Props types
interface PageProps {
  children: React.ReactNode;
  number?: number;
  className?: string;
  isCover?: boolean;
}

// Page Component
const Page = forwardRef<HTMLDivElement, PageProps>(({ children, number, className, isCover }, ref) => {
  return (
    <div className={`demoPage bg-parchment relative overflow-hidden h-full border-r border-deep-brown/10 ${className}`} ref={ref}>
      {/* Paper Texture */}
      <div 
        className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} 
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/5 via-transparent to-black/5 pointer-events-none" />
      
      {/* 3D Stacked Page Effect */}
      {!isCover && (
        <>
           <div className="absolute right-0 top-0 bottom-0 w-0.75 bg-linear-to-l from-black/20 to-transparent pointer-events-none" />
           <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
           {/* Inner Shadow near spine */}
           <div className="absolute left-0 top-0 bottom-0 w-4 bg-linear-to-r from-black/10 to-transparent pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 h-full p-4 md:p-8 flex flex-col ${isCover ? '' : 'pl-4 md:pl-10'}`}>
        {children}
      </div>

      {/* Page Number */}
      {number && (
        <div className="absolute bottom-3 w-full text-center left-0 pointer-events-none">
          <span className="font-cinzel text-[10px] text-deep-brown/40 tracking-widest">- {number} -</span>
        </div>
      )}
    </div>
  );
});

Page.displayName = "Page";

// Cover Page Component
const CoverPage = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div {...props} className="demoPage bg-[#1A1A1A] text-[#C5A059] h-full flex flex-col items-center justify-center p-6 border-2 border-deep-brown relative shadow-2xl rounded-r-md overflow-hidden group" ref={ref}>
      {/* Rich Texture */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')" }} 
      />
      <div className="absolute inset-0 bg-linear-to-br from-[#2C2C2C]/30 to-black/60 mix-blend-overlay" />
      
      {/* Embossed Border */}
      <div className="absolute inset-4 border border-golden-highlight/20 rounded-sm pointer-events-none z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]" />
      <div className="absolute inset-5 border border-golden-highlight/10 rounded-sm pointer-events-none z-10" />
      
      {/* Corner Ornaments (CSS shapes) */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-golden-highlight/40 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-golden-highlight/40 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-golden-highlight/40 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-golden-highlight/40 rounded-br-lg" />

      {/* Spine Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-black/70 via-[#111111] to-transparent z-20" />
      
      {/* 3D Thickness Effect */}
      <div className="absolute right-0 top-1 bottom-1 w-2 bg-[#0A0A0A] shadow-xl transform translate-x-0.5 rounded-r-sm" />
      <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-[#111111] shadow-lg transform translate-x-0.75 opacity-80" />

      <div className="relative z-20 text-center w-full transform group-hover:scale-[1.02] transition-transform duration-700">
        <span className="font-cinzel text-[10px] tracking-[0.4em] uppercase mb-6 block text-golden-highlight opacity-90 drop-shadow-md">Est. 2024</span>
        
        <div className="relative inline-block">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-3 text-parchment drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-wide bg-clip-text bg-linear-to-b from-[#FFF8E1] to-golden-highlight select-none">
            PUBLIQ
          </h1>
          <h1 className="absolute top-0 left-0 font-playfair text-5xl md:text-7xl font-bold mb-3 text-black/40 drop-shadow-none tracking-wide -z-10 transform translate-x-1 translate-y-1 select-none blur-[2px]">
            PUBLIQ
          </h1>
        </div>

        <h2 className="font-cinzel text-lg tracking-widest uppercase mb-6 text-golden-highlight font-bold drop-shadow-sm">Kitchen & Spirits</h2>
        <h3 className="font-playfair text-3xl text-parchment mb-10 drop-shadow-md">देहरादून</h3>
        
        <div className="w-24 h-24 border-2 border-golden-highlight/40 rotate-45 flex items-center justify-center mb-10 mx-auto bg-[#0A0A0A] shadow-[0_15px_30px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="w-16 h-16 border border-golden-highlight/30 flex items-center justify-center bg-[#1A1A1A] relative z-10 shadow-inner">
            <Leaf size={32} className="text-golden-highlight drop-shadow-md" />
          </div>
        </div>
        
        <div className="mt-8 border-t border-golden-highlight/20 pt-4 w-3/4 mx-auto">
             <p className="font-libre italic text-sm text-parchment opacity-80 tracking-wide">&ldquo;the people’s place&rdquo;</p>
        </div>
      </div>
    </div>
  );
});

CoverPage.displayName = "CoverPage";

CoverPage.displayName = "CoverPage";

// Index Page Component
const IndexPage = forwardRef<HTMLDivElement, { onNavigate: (id: string) => void; categories: any[] }>((props, ref) => {
  // We need to calculate page numbers manually or pass map
  // Simplified for now: just rendering list
  return (
    <div className="demoPage bg-parchment relative shadow-inner overflow-hidden h-full border-r border-deep-brown/10 p-8" ref={ref}>
       <div 
         className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none" 
         style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} 
       />
       <div className="h-full flex flex-col items-center justify-center border-4 double border-deep-brown/10 p-6">
          <h3 className="font-playfair text-3xl font-bold text-deep-brown mb-2">Table of Contents</h3>
          <p className="font-cinzel text-xs text-deep-brown/60 tracking-widest mb-8 uppercase">विषय - सूची</p>
          
          <div className="w-full space-y-3 overflow-y-auto max-h-100 pr-2 scrollbar-thin scrollbar-thumb-deep-brown/20">
             {props.categories.map((category, idx) => (
               <button 
                 key={idx}
                 onClick={() => props.onNavigate(category.id)}
                 className="w-full flex justify-between items-baseline border-b border-deep-brown/10 pb-1 hover:text-golden-highlight transition-colors group text-left"
               >
                 <span className="font-cinzel text-sm font-bold text-deep-brown group-hover:text-golden-highlight truncate pr-2">
                   {category.name}
                 </span>
                 <span className="font-libre text-[10px] text-deep-brown/50 italic shrink-0">
                   {category.hindiName}
                 </span>
               </button>
             ))}
          </div>
       </div>
    </div>
  );
});
IndexPage.displayName = "IndexPage";


// Inside Cover (Left) - Logo Page
const InsideCoverLeft = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div {...props} className="demoPage bg-parchment relative shadow-inner overflow-hidden h-full border-r border-deep-brown/10 flex items-center justify-center" ref={ref}>
      <div 
        className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} 
      />
      
      {/* Full width logo/image area */}
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <div className="relative w-full aspect-3/4 max-h-[80%] border-4 border-deep-brown/20 p-2 shadow-inner bg-white/50 transform -rotate-1">
           <div className="relative w-full h-full overflow-hidden transition-all duration-700">
             <Image 
               src="/images/1000148496.jpg.jpeg" 
               alt="Restaurant Interior" 
               fill 
               className="object-cover opacity-100 shadow-deep-brown"
               priority
             />
           </div>
           <div className="absolute bottom-4 left-0 w-full text-center">
             <p className="font-cinzel text-[10px] tracking-widest text-deep-brown/60">EST. 2024</p>
           </div>
        </div>
      </div>
    </div>
  );
});
InsideCoverLeft.displayName = "InsideCoverLeft";

// Back Cover Component
const BackCover = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div {...props} className="demoPage bg-[#1A1A1A] h-full flex flex-col items-center justify-center p-8 relative shadow-2xl rounded-l-md border-2 border-deep-brown" ref={ref}>
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')" }} 
      />
       
      {/* 3D Thickness Effect (Left Side) */}
      <div className="absolute left-0 top-1 bottom-1 w-1.5 bg-[#0A0A0A] shadow-lg transform -translate-x-px" />
      <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#111111] shadow-lg transform -translate-x-0.5 opacity-80" />

       <div className="relative z-20 text-center">
          <h3 className="font-playfair text-3xl font-bold text-parchment mb-4 drop-shadow-lg">PUBLIQ</h3>
          <p className="font-cinzel text-[10px] tracking-widest text-golden-highlight uppercase font-bold">
             Dehradun
          </p>
          <div className="mt-8 flex gap-4 justify-center text-golden-highlight/40">
             <div className="w-1.5 h-1.5 rounded-full bg-current" />
             <div className="w-1.5 h-1.5 rounded-full bg-current" />
             <div className="w-1.5 h-1.5 rounded-full bg-current" />
          </div>
       </div>
    </div>
  );
});

BackCover.displayName = "BackCover";


// Menu Item Component
const MenuItem = ({ item }: { item: { id: string; name: string; price: number; veg: boolean; desc: string; image?: string; story?: string } }) => {
  // const addItem = useCartStore((state) => state.addItem);
  
  // const handleAdd = (e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
  //   e.stopPropagation();
  //   if (e.nativeEvent) {
  //     e.nativeEvent.stopImmediatePropagation();
  //   }
  //   addItem({ id: item.id, name: item.name, price: item.price, veg: item.veg });
  // };
  
  const getFallbackImage = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("carlsberg")) return "/images/1000148534.jpg.jpeg";
    if (n.includes("bud")) return "/images/1000148533.jpg.jpeg";
    if (n.includes("corona")) return "/images/1000148491.jpg.jpeg";
    if (n.includes("breezer")) return "/images/1000148500.jpg.jpeg";
    // if (n.includes("cream of tomato") || n.includes("tomato")) return "/restaurent/b22.webp";
    if (n.includes("cream of tomato") || n.includes("tomato")) return "/images/1000148497.jpg.jpeg";
    if (n.includes("lemon") || n.includes("coriander")) return "/images/1000148528.jpg.jpeg";
    // if (n.includes("soup")) return "/restaurent/b15.webp";
    if (n.includes("soup")) return "/images/1000148527.jpg.jpeg";
    if (n.includes("salad")) return "/images/1000148530.jpg.jpeg";
    // if (n.includes("burger")) return "/restaurent/b1.webp";
    if (n.includes("burger")) return "/images/1000148490.jpg.jpeg";
    // if (n.includes("pizza")) return "/restaurent/b2.webp";
    if (n.includes("pizza")) return "/images/1000148489.jpg.jpeg";
    if (n.includes("pasta")) return "/images/1000148526.jpg.jpeg";
    if (n.includes("paneer")) return "/images/1000148504.jpg.jpeg";
    if (n.includes("chicken")) return "/images/1000148531.jpg.jpeg";
    if (n.includes("mutton")) return "/images/1000148530.jpg.jpeg";
    return "/images/1000148486.jpg.jpeg";
  };
  
  const [imageSrc, setImageSrc] = React.useState<string | null>(item.image ?? null);
  const [showInfo, setShowInfo] = React.useState(false);
  const getItemStory = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("blender")) return "An Indian blended whisky known for a mellow, rounded profile. Best enjoyed neat or with a splash of water.";
    if (n.includes("100 pipers")) return "A Scotch blend associated with Highland character and gentle smoke, aged for depth and smoothness.";
    if (n.includes("black dog")) return "Aged Scotch blend with a creamy palate and subtle oak, often sipped over ice.";
    if (n.includes("black & white") || n.includes("black and white")) return "Historic Scotch blend recognized for its light body and clean grain-malt balance.";
    if (n.includes("ballantine")) return "Classic Scotch blend focusing on balance: honeyed grain, soft vanilla and gentle spice.";
    if (n.includes("jameson")) return "Irish whiskey triple‑distilled for smoothness, with notes of cereal, vanilla and orchard fruit.";
    if (n.includes("camino") || n.includes("tequila")) return "Blue agave spirit from Mexico; traditionally slow‑roasted and double‑distilled for bright, peppery notes.";
    if (n.includes("bombay") || n.includes("sapphire")) return "London dry gin infused with botanicals for a citrus‑floral profile; great in a G&T.";
    if (n.includes("jack daniel")) return "Tennessee whiskey charcoal‑mellowed for a rounded, slightly sweet, oaky finish.";
    if (n.includes("jim beam")) return "Kentucky straight bourbon with corn sweetness, vanilla and oak; ideal for classic cocktails.";
    if (n.includes("red label")) return "Vigorous Scotch blend with lively grain and smoky accents, popular for highballs.";
    if (n.includes("black label")) return "Iconic 12‑year Scotch blend offering layered smoke, dried fruit and vanilla oak.";
    if (n.includes("bacardi")) return "Light rum distilled for a clean, crisp profile—versatile for refreshing cocktails.";
    if (n.includes("jäger") || n.includes("jager")) return "German herbal liqueur steeped with botanicals; rich, bittersweet and aromatic.";
    if (n.includes("old monk")) return "Indian dark rum with warm molasses and vanilla notes; a nostalgic, bold sipper.";
    if (n.includes("absolut")) return "Swedish vodka distilled to a clean, neutral finish—excellent base for fruit‑forward mixes.";
    if (n.includes("smirnoff")) return "Classic vodka known for a smooth, neutral character suited to many cocktails.";
    if (n.includes("bud") || n.includes("carlsberg") || n.includes("corona")) return "International lager with a crisp, light body and gentle hop bitterness—served well‑chilled.";
    if (n.includes("breezer")) return "Rum‑based cooler with fruit flavors—light, sparkling and easy to sip.";
    if (n.includes("liit") || n.includes("long island")) return "A high‑spirited mix of white spirits topped with cola and citrus—bold yet balanced.";
    if (n.includes("bull frog")) return "Vibrant long drink of mixed spirits and citrus with an energy twist—zesty and punchy.";
    if (n.includes("zombie")) return "Tiki classic blending rums with tropical juices and spice—fruity with a warming finish.";
    if (n.includes("mai tai")) return "Rum, lime and orgeat with a hint of orange—a bright, nutty tiki staple.";
    if (n.includes("cosmo")) return "Vodka, cranberry, lime and orange liqueur—crisp, tart and ruby‑hued.";
    if (n.includes("pina") || n.includes("colada")) return "Rum shaken with pineapple and coconut—creamy, tropical and smooth.";
    if (n.includes("sex on the beach")) return "Vodka with peach, orange and cranberry—juicy, refreshing and summery.";
    if (n.includes("whiskey sour")) return "Whiskey shaken with lemon and sugar, optionally with egg white—tangy and silky.";
    if (n.includes("salty dog")) return "Gin or vodka with grapefruit over a salt‑rim—brisk citrus with a savory edge.";
    if (n.includes("jäger bomb") || n.includes("jager bomb")) return "A lively blend of herbal liqueur and energy drink—sweet, herbal and effervescent.";
    if (n.includes("cream of tomato")) return "Silky purée of tomatoes simmered with butter and cream—comforting and mildly tangy.";
    if (n.includes("lemon") && n.includes("coriander")) return "Light broth scented with fresh coriander and lemon—bright and aromatic.";
    if (n.includes("lung fung")) return "Indo‑Chinese style soup with egg drop texture and peppery warmth.";
    if (n.includes("munchow") || n.includes("manchow") || n.includes("hot & sour") || n.includes("hot and sour")) return "Spicy‑tangy Indo‑Chinese broth with soy, vinegar and chilies—lively and robust.";
    if (n.includes("green salad") || n.includes("salad")) return "A crisp medley of seasonal greens with simple seasoning for freshness.";
    if (n.includes("burger")) return "Toasted bun with seasoned patty and toppings—grilled for a juicy, layered bite.";
    if (n.includes("pizza")) return "Hand‑stretched base baked hot for a blistered crust, topped with cheese and sauce.";
    if (n.includes("pasta")) return "Durum wheat pasta tossed in house sauces—al dente for a perfect bite.";
    if (n.includes("malai paneer") || n.includes("paneer tikka")) return "Paneer marinated in cream, yogurt and spices, skewered and roasted in a tandoor.";
    if (n.includes("soya") || n.includes("chaap")) return "Soya protein marinated and charred for a smoky, succulent finish.";
    if (n.includes("seekh kebab")) return "Minced mix shaped on skewers, spiced and cooked over high heat for a smoky edge.";
    if (n.includes("tandoori")) return "Marinated in yogurt and spices, roasted in a clay oven for char and tenderness.";
    if (n.includes("murg tikka") || n.includes("chicken tikka")) return "Boneless chicken marinated overnight and seared in a tandoor for juicy bites.";
    if (n.includes("fish tikka") || n.includes("machi")) return "Fish fillets marinated with spices and grilled hot for flaky, aromatic pieces.";
    if (n.includes("dal makhani")) return "Slow‑cooked black lentils finished with butter and cream for a velvety texture.";
    if (n.includes("shahi paneer") || n.includes("paneer butter")) return "Paneer in a rich tomato‑cashew gravy with butter and gentle spices.";
    if (n.includes("kadai paneer")) return "Paneer tossed with capsicum, onion and kadai masala for a rustic, spiced flavor.";
    if (n.includes("butter chicken") || n.includes("makhan wala")) return "Tandoor‑roasted chicken simmered in a creamy tomato gravy with butter.";
    if (n.includes("rogan josh") || n.includes("lal maas")) return "Slow‑braised meat in a robust Kashmiri‑style gravy with aromatic spices.";
    if (n.includes("egg curry")) return "Boiled eggs in a spiced onion‑tomato gravy—comforting and hearty.";
    if (n.includes("biryani")) return "Layers of aromatic basmati and spiced curry gently steamed for infused flavor.";
    if (n.includes("naan") || n.includes("roti")) return "Hand‑rolled bread baked on tandoor walls for a soft center and charred blisters.";
    if (n.includes("mojito")) return "Mint and lime muddled with soda over ice—crisp and refreshing.";
    if (n.includes("blue lagoon")) return "Citrusy blue cooler with lemon notes and a sparkling finish.";
    if (n.includes("smoothie") || n.includes("shake")) return "Creamy blended drink with fruit or chocolate—cooling and satisfying.";
    if (n.includes("fresh lime")) return "Lime juice with sugar and soda or water—bright, zesty and cooling.";
    return "Prepared with care using fresh ingredients and balanced seasoning, offering an authentic, satisfying taste.";
  };
  const story = item.story ?? getItemStory(item.name);
  
  const stopPropagation = (e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    e.stopPropagation();
    if (e.nativeEvent) {
      e.nativeEvent.stopImmediatePropagation();
    }
  };
  
  return (
    <div className="mb-3 border-b border-deep-brown/5 pb-2 last:border-0 group hover:bg-deep-brown/5 transition-colors p-2 rounded-sm -mx-2 flex gap-3 items-start">
      {/* Thumbnail Image */}
      {imageSrc && (
        <div className="w-14 h-14 md:w-16 md:h-16 relative shrink-0 rounded-sm overflow-hidden border border-deep-brown/10 shadow-sm">
          <Image 
            src={imageSrc} 
            alt={item.name}
            fill
            className="object-cover"
            onError={() => setImageSrc(getFallbackImage(item.name))}
          />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h4 className="font-playfair text-sm font-bold text-deep-brown group-hover:text-golden-highlight transition-colors truncate pr-2">{item.name}</h4>
          <span className="font-cinzel text-xs text-deep-brown font-semibold whitespace-nowrap">
            {item.price > 0 ? `₹${item.price}` : "MRP"}
          </span>
        </div>
        <div className="mt-0.5 flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-1">
            <button
              onClick={(e) => { stopPropagation(e); setShowInfo((s) => !s); }}
              onMouseDown={stopPropagation}
              onTouchStart={stopPropagation}
              onPointerDown={stopPropagation}
              className={`text-[9px] px-1.5 py-0.5 rounded-full border border-deep-brown/20 transition-colors inline-flex items-center gap-1 shrink-0 ${showInfo ? 'bg-deep-brown text-parchment' : 'text-deep-brown hover:bg-deep-brown/10'}`}
              title="Details"
            >
              <Info size={10} />
              {showInfo ? "Close" : "Details"}
            </button>
            <div className="flex items-center gap-2 shrink-0 ml-auto">
              {item.veg ? (
                <Leaf size={10} className="text-green-600" />
              ) : (
                <Flame size={10} className="text-red-600" />
              )}
            </div>
          </div>
          <p className="font-libre text-[10px] text-deep-brown/60 italic flex-1 leading-tight line-clamp-1">{item.desc}</p>
        </div>
        
        {showInfo && (
          <div className="mt-2 p-2 bg-deep-brown/5 rounded-sm border-l-2 border-golden-highlight">
            <p className="font-libre text-[10px] text-deep-brown/80 leading-relaxed mb-1">{item.desc}</p>
            <p className="font-libre text-[10px] text-deep-brown/70 italic leading-snug">{story}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function BookMenu() {
  const book = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageMap, setPageMap] = useState<Record<string, number>>({});
  const menu = React.useMemo(() => menuData, []);
  
  const targetCategory = useUIStore((state) => state.targetCategory);
  const setTargetCategory = useUIStore((state) => state.setTargetCategory);

  const getCorner = (direction: "next" | "prev" | "toTarget", targetPage?: number) => {
    // These corners match the library's typical expectations for flip direction.
    if (direction === "next") return "bottom" as const;
    // On iOS portrait, "bottom" generally matches the fold gesture for prev as well.
    if (direction === "prev") return "bottom" as const;

    const current = book.current?.pageFlip()?.getCurrentPageIndex?.();
    const next = typeof current === "number" ? (targetPage ?? current) > current : true;
    return next ? ("bottom" as const) : ("top" as const);
  };

  const flipRequestIdRef = React.useRef(0);
  const didFlipRef = React.useRef(false);
  const isFlippingRef = React.useRef(false);

  const flipWithFallback = (pf: any, animated: () => void, snap: () => void) => {
    const before = pf?.getCurrentPageIndex?.();
    const requestId = ++flipRequestIdRef.current;
    didFlipRef.current = false;

    animated();

    // On some iOS/Safari combinations the animated flip can be swallowed;
    // only fall back if we never received an onFlip update.
    if (!isMobile) return;
    // Slightly above flippingTime to avoid mid-animation snapping, but reduce perceived delay.
    const fallbackDelayMs = 1150;

    window.setTimeout(() => {
      if (flipRequestIdRef.current !== requestId) return; // newer navigation started
      if (didFlipRef.current) return; // onFlip fired, no fallback needed

      const after = pf?.getCurrentPageIndex?.();
      if (typeof before === "number" && typeof after === "number" && after === before) {
        snap();
        const idx = pf?.getCurrentPageIndex?.();
        if (typeof idx === "number") setCurrentPage(idx);
      }
    }, fallbackDelayMs);
  };

  const nextFlip = () => {
    const pf = book.current?.pageFlip();
    if (!pf) return;
    if (isFlippingRef.current) return;
    flipWithFallback(pf, () => pf.flipNext?.(getCorner("next")), () => pf.turnToNextPage?.());
  };

  const prevFlip = () => {
    const pf = book.current?.pageFlip();
    if (!pf) return;
    if (isFlippingRef.current) return;
    flipWithFallback(pf, () => pf.flipPrev?.(getCorner("prev")), () => pf.turnToPrevPage?.());
  };

  const onFlip = (e: any) => {
    const next = typeof e?.data === "number" ? e.data : Number.parseInt(String(e?.data), 10);
    setCurrentPage(Number.isFinite(next) ? next : 0);
    didFlipRef.current = true;
  };

  const goToPage = (categoryId: string) => {
     if (pageMap[categoryId] !== undefined) {
        const pf = book.current?.pageFlip();
        const pageNum = pageMap[categoryId];
        if (!pf) return;
        if (isFlippingRef.current) return;
        const corner = getCorner("toTarget", pageNum);
        flipWithFallback(
          pf,
          () => pf?.flip?.(pageNum, corner),
          () => pf?.turnToPage?.(pageNum)
        );
     }
  };

  const goToIndex = () => {
    // Index page is at index 2 (0: Cover, 1: InsideLeft, 2: Index)
    const pf = book.current?.pageFlip();
    if (!pf) return;
    if (isFlippingRef.current) return;
    const corner = getCorner("toTarget", 2);
    flipWithFallback(
      pf,
      () => pf?.flip?.(2, corner),
      () => pf?.turnToPage?.(2)
    );
  };

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper to split items into pages of max 5 items (reduced for space with images)
  const ITEMS_PER_PAGE = isMobile ? 4 : 5;
  
  // Calculate page structure to build map
  useEffect(() => {
    let counter = 3; // Cover(0), InsideLeft(1), Index(2) -> Start at 3
    const map: Record<string, number> = {};
    
    menu.forEach((category: any) => {
      map[category.id] = counter;
      const totalItems = category.items.length;
      const totalCategoryPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
      counter += totalCategoryPages;
    });
    setPageMap(map);
  }, [menu, ITEMS_PER_PAGE]);

  // Effect to handle navigation from store
  useEffect(() => {
    if (targetCategory && pageMap[targetCategory] !== undefined && book.current) {
        setTimeout(() => {
            const pf = book.current?.pageFlip();
            if (!pf) return;
            const pageNum = pageMap[targetCategory];
            const corner = getCorner("toTarget", pageNum);
            if (isFlippingRef.current) return;
            flipWithFallback(
              pf,
              () => pf?.flip?.(pageNum, corner),
              () => pf?.turnToPage?.(pageNum)
            );
            setTargetCategory(null); // Reset target
        }, 500);
    }
  }, [targetCategory, pageMap, setTargetCategory]);

  const renderCategoryPages = (category: { id: string; name: string; hindiName?: string; description: string; items: any[] }, startPageNum: number) => {
    const pages = [];
    const totalItems = category.items.length;
    const totalCategoryPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    for (let i = 0; i < totalCategoryPages; i++) {
      const pageItems = category.items.slice(i * ITEMS_PER_PAGE, (i + 1) * ITEMS_PER_PAGE);
      const isFirstPage = i === 0;
      const isLastPage = i === totalCategoryPages - 1;

      pages.push(
        <Page number={startPageNum + i} key={`${category.id}-${i}`}>
          <div className="text-center mb-6 relative">
            {isFirstPage && (
              <>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[3rem] text-deep-brown/5 font-playfair font-bold whitespace-nowrap z-0 select-none pointer-events-none">
                  {category.name.split(' ')[0]}
                </span>
                <div className="relative z-10">
                   <h3 className="font-cinzel text-xl font-bold text-deep-brown border-b border-golden-highlight inline-block pb-1 mb-1">
                     {category.name}
                   </h3>
                   {category.hindiName && (
                      <p className="font-playfair text-sm text-deep-brown/80 mb-1">{category.hindiName}</p>
                   )}
                   <p className="text-[10px] font-libre italic text-deep-brown/50 uppercase tracking-widest">{category.description}</p>
                </div>
              </>
            )}
            {!isFirstPage && (
               <h3 className="font-cinzel text-sm font-bold text-deep-brown/60 inline-block pb-1 mb-1 relative z-10">
                  {category.name} (Cont.)
               </h3>
            )}
          </div>
          
          <div className="space-y-1 flex-1">
            {pageItems.map((item: any) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>

          {isLastPage && (
             <div className="mt-auto pt-4 text-center">
                <div className="w-8 h-px bg-deep-brown/20 mx-auto mb-2" />
                <p className="font-cinzel text-[10px] text-golden-highlight italic">"A flavor to remember"</p>
             </div>
          )}
        </Page>
      );
    }
    return pages;
  };

  // Calculate pages dynamically for rendering
  // (Removed local pageCounter to avoid reassignment during render)

  return (
    <section id="menu-book-section" className="relative min-h-screen bg-parchment flex flex-col items-center justify-center p-2 py-12 md:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} 
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/5 pointer-events-none" />
      
      {/* Top Controls */}
      <div className="absolute top-4 md:top-8 left-4 right-4 md:left-auto md:right-8 z-30 flex items-center justify-between md:justify-end gap-2 md:gap-4 pointer-events-none">
        <button 
          onClick={goToIndex}
          className="flex items-center gap-2 text-deep-brown hover:text-[#3E2723] transition-colors group px-3 py-1.5 md:px-4 md:py-2 bg-parchment/80 backdrop-blur-sm rounded-full border border-deep-brown/20 shadow-sm pointer-events-auto"
        >
           <span className="font-cinzel text-[10px] md:text-xs tracking-widest uppercase font-bold">Index</span>
        </button>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              const element = document.getElementById("menu-book-section");
              if (element) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="p-1.5 md:p-2 border border-deep-brown/20 rounded-full hover:bg-deep-brown/10 transition-colors text-deep-brown hover:text-[#3E2723] pointer-events-auto"
            title="Back to Top"
          >
            <ArrowRight className="-rotate-90" size={16} />
          </button>
        </div>
      </div>

      <div className="relative z-20 mb-4 text-center mt-8 md:mt-0">
         <h2 className="font-cinzel text-deep-brown text-xs md:text-sm tracking-[0.4em] uppercase mb-2 drop-shadow-sm font-bold">The Menu</h2>
         <p className="font-libre text-deep-brown/70 text-[10px] md:text-xs italic">Tap arrows or drag corners to flip</p>
      </div>

      {/* Book Container - Centering Logic */}
      {/* When cover (page 0) is shown in landscape (desktop), it appears on the right. 
          We translate it left to center it. 
          Mobile is single page, so no translation needed usually, or handled by usePortrait.
      */}
      <div className="relative w-full max-w-7xl flex items-center justify-center gap-4 md:gap-8">
        
        {/* Left Arrow */}
        <button 
          onClick={prevFlip} 
          className="hidden md:flex p-4 text-deep-brown/60 hover:text-deep-brown transition-all hover:scale-110 active:scale-95 disabled:opacity-30 z-20"
          disabled={currentPage === 0}
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>

        <div 
           className={`relative z-10 w-full max-w-6xl aspect-3/4 md:aspect-[1.8/1] flex items-center justify-center perspective-2000 transition-transform duration-700 ease-in-out ${!isMobile && currentPage === 0 ? 'md:-translate-x-[25%]' : 'translate-x-0'}`}
        >
          {/* Center Spine Bump Effect - Only visible when open */}
          {!isMobile && currentPage > 0 && (
             <div className="absolute left-1/2 top-[2%] bottom-[2%] w-16 -ml-8 bg-linear-to-r from-black/20 via-transparent to-black/20 z-30 pointer-events-none rounded-sm blur-md opacity-40 transition-opacity duration-500" />
          )}
  
          {/* 3D Page Stack Effect (Bottom/Side) when closed/open */}
          <div className={`absolute transition-all duration-700 pointer-events-none z-0 
               ${!isMobile && currentPage === 0 
                  ? 'right-[25%] top-[5%] bottom-[5%] w-6 bg-parchment shadow-[20px_20px_40px_rgba(0,0,0,0.3)] transform skew-y-1 border-r border-[#D7CCC8]' 
                  : 'opacity-0'}`} 
          >
             {/* Realistic Page Lines on Stack */}
             <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,#00000005_2px)]" />
          </div>
  
          {/* @ts-ignore - React PageFlip types issue */}
          <HTMLFlipBook
            width={isMobile ? 320 : 450}
            height={isMobile ? 500 : 600}
            size="stretch"
            minWidth={isMobile ? 280 : 300}
            maxWidth={500}
            minHeight={400}
            maxHeight={650}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="shadow-2xl"
            ref={book}
            onInit={(e: any) => {
              const next = typeof e?.page === "number" ? e.page : undefined;
              if (typeof next === "number") {
                setCurrentPage(next);
                return;
              }
              // Fallback: read from the underlying PageFlip instance.
              try {
                const idx = book.current?.pageFlip()?.getCurrentPageIndex?.();
                if (typeof idx === "number") setCurrentPage(idx);
              } catch {
                // Ignore; currentPage will be updated on the first flip.
              }
            }}
            onFlip={onFlip}
            onChangeState={(e: any) => {
              // e.data is one of: 'user_fold' | 'fold_corner' | 'flipping' | 'read'
              const state = e?.data;
              isFlippingRef.current = state === "user_fold" || state === "fold_corner" || state === "flipping";
            }}
            flippingTime={1000}
            usePortrait={isMobile} // Force single page on mobile
            startZIndex={0}
            autoSize={true}
            clickEventForward={false}
            useMouseEvents={!isMobile}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={true}
          >
            {/* Cover (Page 0) */}
            <CoverPage />
  
            {/* Inside Cover Left (Page 1) */}
            <InsideCoverLeft />
  
            {/* Index Page (Page 2) */}
            <IndexPage onNavigate={goToPage} categories={menu} />
  
            {/* Dynamic Menu Pages (Page 3+) */}
            {menu.reduce<{ pages: React.ReactNode[], counter: number }>((acc, category) => {
              const pages = renderCategoryPages(category, acc.counter);
              return {
                pages: [...acc.pages, ...pages],
                counter: acc.counter + pages.length
              };
            }, { pages: [], counter: 3 }).pages}
  
            {/* Last Page */}
            <Page number={(() => {
              const totalMenuPages = menu.reduce((acc: number, cat: any) => acc + Math.ceil(cat.items.length / ITEMS_PER_PAGE), 0);
              return 3 + totalMenuPages;
            })()}>
              <div className="flex flex-col h-full justify-center items-center text-center space-y-6">
                <h3 className="font-playfair text-xl font-bold text-deep-brown">Thank You</h3>
                <p className="font-libre text-xs text-deep-brown/70 italic">
                  We hope you enjoyed your meal.
                </p>
                <div className="mt-8 pt-8 border-t border-deep-brown/10 w-full text-center">
                   <ShoppingBag className="w-8 h-8 text-deep-brown/20 mx-auto mb-4" />
                   <p className="font-cinzel text-[10px] text-deep-brown/50">Service Charge as applicable</p>
                   <p className="font-cinzel text-[10px] text-deep-brown/50 mt-1">Govt. Taxes Extra</p>
                </div>
                
                <div className="mt-auto opacity-40">
                   <Image src="/logo1.png" width={80} height={80} alt="Logo" className="grayscale" />
                </div>
              </div>
            </Page>
  
            {/* Back Cover */}
            <BackCover />
          </HTMLFlipBook>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextFlip} 
          className="hidden md:flex p-4 text-deep-brown/60 hover:text-deep-brown transition-all hover:scale-110 active:scale-95 z-20"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden flex gap-6 text-deep-brown z-20 bg-parchment/80 backdrop-blur-md px-6 py-2 rounded-full border border-deep-brown/10 mt-6 shadow-lg">
        <button 
          onClick={prevFlip} 
          className="p-2 hover:text-[#3E2723] transition-colors active:scale-90 disabled:opacity-30"
          disabled={currentPage <= 0}
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-cinzel self-center tracking-widest text-[10px] opacity-80 font-bold uppercase">
          Flip Pages
        </span>
        <button 
          onClick={nextFlip} 
          className="p-2 hover:text-[#3E2723] transition-colors active:scale-90"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
