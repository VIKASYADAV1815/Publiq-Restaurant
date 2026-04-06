"use client";

import React, { useState, forwardRef, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Leaf, Flame, ArrowRight, ShoppingBag } from "lucide-react";
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
    <div {...props} className="demoPage bg-[#8D6E63] text-[#3E2723] h-full flex flex-col items-center justify-center p-6 border-2 border-deep-brown relative shadow-2xl rounded-r-md overflow-hidden group" ref={ref}>
      {/* Rich Texture */}
      <div 
        className="absolute inset-0 opacity-80 mix-blend-multiply" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')" }} 
      />
      <div className="absolute inset-0 bg-linear-to-br from-[#A1887F]/30 to-black/40 mix-blend-overlay" />
      
      {/* Embossed Border */}
      <div className="absolute inset-4 border border-parchment/30 rounded-sm pointer-events-none z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]" />
      <div className="absolute inset-5 border border-[#3E2723]/40 rounded-sm pointer-events-none z-10" />
      
      {/* Corner Ornaments (CSS shapes) */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-parchment/60 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-parchment/60 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-parchment/60 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-parchment/60 rounded-br-lg" />

      {/* Spine Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-black/50 via-[#3E2723] to-transparent z-20" />
      
      {/* 3D Thickness Effect */}
      <div className="absolute right-0 top-1 bottom-1 w-2 bg-deep-brown shadow-xl transform translate-x-0.5 rounded-r-sm" />
      <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-[#3E2723] shadow-lg transform translate-x-0.75 opacity-80" />

      <div className="relative z-20 text-center w-full transform group-hover:scale-[1.02] transition-transform duration-700">
        <span className="font-cinzel text-[10px] tracking-[0.4em] uppercase mb-6 block text-parchment opacity-90 drop-shadow-md">Est. 2024</span>
        
        <div className="relative inline-block">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-3 text-parchment drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-wide bg-clip-text bg-linear-to-b from-[#FFF8E1] to-parchment select-none">
            PUBLIQ
          </h1>
          <h1 className="absolute top-0 left-0 font-playfair text-5xl md:text-7xl font-bold mb-3 text-black/20 drop-shadow-none tracking-wide -z-10 transform translate-x-0.5 translate-y-0.5 select-none blur-[1px]">
            PUBLIQ
          </h1>
        </div>

        <h2 className="font-cinzel text-lg tracking-widest uppercase mb-6 text-[#3E2723] font-bold drop-shadow-sm">Kitchen & Spirits</h2>
        <h3 className="font-playfair text-3xl text-parchment mb-10 drop-shadow-md">देहरादून</h3>
        
        <div className="w-24 h-24 border-2 border-parchment/40 rotate-45 flex items-center justify-center mb-10 mx-auto bg-deep-brown shadow-[0_10px_20px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="w-16 h-16 border border-parchment/60 flex items-center justify-center bg-[#8D6E63] relative z-10 shadow-inner">
            <Leaf size={32} className="text-parchment drop-shadow-md" />
          </div>
        </div>
        
        <div className="mt-8 border-t border-[#3E2723]/30 pt-4 w-3/4 mx-auto">
             <p className="font-libre italic text-sm text-parchment opacity-90 tracking-wide">&ldquo;the people’s place&rdquo;</p>
        </div>
      </div>
    </div>
  );
});

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
    <div {...props} className="demoPage bg-[#8D6E63] h-full flex flex-col items-center justify-center p-8 relative shadow-2xl rounded-l-md border-2 border-deep-brown" ref={ref}>
      <div 
        className="absolute inset-0 opacity-60 mix-blend-multiply" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')" }} 
      />
       
      {/* 3D Thickness Effect (Left Side) */}
      <div className="absolute left-0 top-1 bottom-1 w-1.5 bg-deep-brown shadow-lg transform -translate-x-px" />
      <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#3E2723] shadow-lg transform -translate-x-0.5 opacity-80" />

       <div className="relative z-20 text-center">
          <h3 className="font-playfair text-3xl font-bold text-parchment mb-4 drop-shadow-lg">PUBLIQ</h3>
          <p className="font-cinzel text-[10px] tracking-widest text-[#3E2723] uppercase font-bold">
             Dehradun
          </p>
          <div className="mt-8 flex gap-4 justify-center text-parchment/60">
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
const MenuItem = ({ item }: { item: { id: string; name: string; price: number; veg: boolean; desc: string; image?: string } }) => {
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
  
  const stopPropagation = (e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    e.stopPropagation();
    if (e.nativeEvent) {
      e.nativeEvent.stopImmediatePropagation();
    }
  };
  
  return (
    <div className="mb-4 border-b border-deep-brown/5 pb-3 last:border-0 group hover:bg-deep-brown/5 transition-colors p-2 rounded-sm -mx-2 flex gap-3 items-start">
      {/* Thumbnail Image */}
      {imageSrc && (
        <div className="w-16 h-16 relative shrink-0 rounded-sm overflow-hidden border border-deep-brown/10 shadow-sm">
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
        <div className="flex justify-between items-start gap-2">
          <p className="font-libre text-[10px] text-deep-brown/60 italic flex-1 leading-tight line-clamp-2">{item.desc}</p>
          <div className="flex items-center gap-2 mt-1">
            {item.veg ? (
              <Leaf size={10} className="text-green-600" />
            ) : (
              <Flame size={10} className="text-red-600" />
            )}
            {/* <button 
              onClick={handleAdd}
              onMouseDown={stopPropagation}
              onTouchStart={stopPropagation}
              onPointerDown={stopPropagation}
              className="md:opacity-0 group-hover:opacity-100 opacity-100 transition-all bg-deep-brown text-parchment p-1 rounded-full hover:bg-golden-highlight hover:text-deep-brown active:scale-90"
              title="Add to Cart"
            >
              <Plus size={12} />
            </button> */}
          </div>
        </div>
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

  const nextFlip = () => {
    if (book.current) {
      book.current.pageFlip().flipNext();
    }
  };

  const prevFlip = () => {
    if (book.current) {
      book.current.pageFlip().flipPrev();
    }
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const goToPage = (categoryId: string) => {
     if (pageMap[categoryId] !== undefined) {
        book.current?.pageFlip()?.flip(pageMap[categoryId]);
     }
  };

  const goToIndex = () => {
    // Index page is at index 2 (0: Cover, 1: InsideLeft, 2: Index)
    if (book.current) {
      book.current.pageFlip().flip(2);
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper to split items into pages of max 5 items (reduced for space with images)
  const ITEMS_PER_PAGE = 5;
  
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
  }, [menu]);

  // Effect to handle navigation from store
  useEffect(() => {
    if (targetCategory && pageMap[targetCategory] !== undefined && book.current) {
        setTimeout(() => {
            book.current.pageFlip()?.flip(pageMap[targetCategory]);
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
            onFlip={onFlip}
            flippingTime={1000}
            usePortrait={isMobile} // Force single page on mobile
            startZIndex={0}
            autoSize={true}
            clickEventForward={false}
            useMouseEvents={true}
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
