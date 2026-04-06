"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarthak Negi",
    role: "Local Guide · 84 reviews",
    content: "The place was cozy and atmosphere was good, the staff was also good but they did not have the coolers which we wanted, and the other thing the fizz was not available in the coolers which had soda in it. The snacks were also not good, the crispy corn was having cornflour seen over it, chilli potato was smelling foul.",
    rating: 3,
    time: "2 months ago"
  },
  {
    name: "Shivani Kwankin",
    role: "2 reviews",
    content: "The ambiance is good & cozy — perfect for hanging out with friends or enjoying a small gathering. The food was delicious and beautifully presented, especially the starters and mocktails. The staff was courteous and attentive, making sure everything was perfect. Music added to the overall great vibe.",
    rating: 5,
    time: "4 months ago"
  },
  {
    name: "Sakshi Saklani",
    role: "1 review",
    content: "This restaurant is a gem! I recently visited and was blown away by the experience. The food is incredibly delicious, and the presentation is artful. Beyond the fantastic cuisine, the restaurant's ambiance is stunning, creating a warm and inviting atmosphere. It's perfect for a family and friends.",
    rating: 5,
    time: "a month ago"
  },
  {
    name: "Anshika Rai",
    role: "5 reviews",
    content: "We booked anniversary decoration at the restaurant, and I must say the arrangement was absolutely beautiful. The décor was elegant and perfectly organized. I would especially like to thank Aradhana Ji for her incredible support. She was extremely cooperative, attentive, and made sure everything was managed smoothly.",
    rating: 5,
    time: "a month ago"
  },
  {
    name: "Family Gathering Guest",
    role: "Regular Guest",
    content: "The ambiance was gr8t,gr8t staff and food , highly recommend for family gathering ,parties we had celebrated our father's retirement party and it went above ,standard thankyou team publiq for this experience 🎉🎉🎉👍👍",
    rating: 5,
    time: "recent"
  },
  {
    name: "Happy Diner",
    role: "Local Foodie",
    content: "A good go-to place for both lunch and dinner. They have a lovely outdoor seating area as well as a comfortable indoor space. The staff is amazing and the service is excellent. It’s perfect for a family dinner as well as small parties.",
    rating: 5,
    time: "recent"
  },
  {
    name: "Evening Hangout Guest",
    role: "Local Guide",
    content: "Its a good place to spend your evening with friends and close ones. The food is good. Good ambience nice warm and pleasing. Staff is gentle and helpful. Lighting and sound quality is also good. Overall a good place to hangout.",
    rating: 5,
    time: "recent"
  },
  {
    name: "Music Lover",
    role: "Reviewer",
    content: "Amazing experience,awesome vibes,cool ambience,live music is a joy to listen to those refined vocals,the swings for kids is really a cool concept,friendly staff and the food is excellent!!A must visit place",
    rating: 5,
    time: "recent"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentPage] = useState(0);
  
  // For desktop we show 3 items, for mobile we show 1.
  // We'll calculate the max index based on screen size in the render, 
  // but for logic we'll just advance by 1.
  
  const nextTestimonial = () => {
    setCurrentPage((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentPage((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to get visible items (handles wrapping around the array)
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-24 bg-parchment relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} 
      />

      <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-golden-highlight" />
            <span className="font-cinzel text-xs tracking-[0.4em] text-golden-highlight uppercase font-bold">Guest Stories</span>
            <div className="h-px w-8 bg-golden-highlight" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl text-deep-brown"
          >
            What People <span className="italic text-golden-highlight">Say</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Controls - Left */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 text-deep-brown/40 hover:text-golden-highlight transition-colors bg-parchment/80 md:bg-transparent rounded-full shadow-sm md:shadow-none"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden px-4 md:px-8 py-4">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <div 
                    key={`${currentIndex}-${idx}`}
                    className={`bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-golden-highlight/20 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative group flex flex-col h-full ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                  >
                    <Quote className="absolute top-4 right-4 text-golden-highlight/10 group-hover:text-golden-highlight/20 transition-colors" size={40} />
                    
                    <div className="flex gap-1 mb-4 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < testimonial.rating ? "fill-golden-highlight text-golden-highlight" : "fill-transparent text-golden-highlight/30"} 
                        />
                      ))}
                    </div>

                    <p className="font-libre text-deep-brown/80 text-sm leading-relaxed italic mb-6 relative z-10 flex-1">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4 border-t border-deep-brown/10 pt-4 relative z-10 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-deep-brown/10 flex items-center justify-center font-cinzel text-deep-brown font-bold text-sm shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-cinzel text-xs font-bold text-deep-brown tracking-widest uppercase truncate">{testimonial.name}</h4>
                        <p className="font-libre text-[10px] text-deep-brown/60 italic truncate">{testimonial.role} • {testimonial.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls - Right */}
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 text-deep-brown/40 hover:text-golden-highlight transition-colors bg-parchment/80 md:bg-transparent rounded-full shadow-sm md:shadow-none"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 h-1.5 bg-golden-highlight' : 'w-1.5 h-1.5 bg-deep-brown/20 hover:bg-deep-brown/40'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
