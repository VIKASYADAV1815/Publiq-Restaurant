import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-parchment text-deep-brown font-libre selection:bg-golden-highlight selection:text-white">
      <Navbar />
      <PageHero
        bgSrc="/restaurent/ban2.jpg"
        eyebrow="Our Heritage"
        title="About PUBLIQ"
        description="Inspired by the colonial charm of Dehradun and the timeless elegance of Mussoorie, PUBLIQ is more than just a restaurant — it is a tribute to our roots."
      />
      
      <section className="py-24 bg-parchment relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm shadow-2xl border-4 border-white/50">
              <Image 
                src="/restaurent/b1.webp"
                alt="Publiq Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-playfair text-3xl md:text-4xl text-deep-brown italic border-b border-golden-highlight/30 pb-4">The Vision</h2>
                <p className="text-deep-brown/80 leading-relaxed font-libre">
                  Our journey began with a simple idea: to create a space that celebrates the unique 
                  spirit of the Doon Valley. We wanted to blend the sophistication of heritage 
                  architecture with the warmth of traditional hospitality.
                </p>
                <p className="text-deep-brown/80 leading-relaxed font-libre">
                  Every corner of PUBLIQ tells a story, from the carefully selected parchment-toned 
                  walls to the deep mahogany accents that remind us of the old colonial estates 
                  of Landour.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-deep-brown/10">
                <div>
                  <h4 className="font-cinzel text-2xl font-bold text-golden-highlight">2024</h4>
                  <p className="font-libre text-xs uppercase tracking-widest text-deep-brown/60">Established</p>
                </div>
                <div>
                  <h4 className="font-cinzel text-2xl font-bold text-golden-highlight">Heritage</h4>
                  <p className="font-libre text-xs uppercase tracking-widest text-deep-brown/60">Inspired</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StorySection 
        title="Our Culinary"
        subtitle="Philosophy"
        description="We believe that dining is an art form. Our chefs meticulously blend locally sourced ingredients with global techniques to create a menu that is both familiar and surprising."
        quote={'"Great food is not just about taste; it is about the stories it tells and the people it brings together."'}
        quoteAuthor="The Publiq Kitchen"
        imageSrc="/restaurent/b22.webp"
        eyebrow="Gastronomy"
      />
      
      {/* Values Section */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
               <h3 className="font-playfair text-2xl font-bold text-deep-brown">Authenticity</h3>
               <p className="font-libre text-sm text-deep-brown/70 leading-relaxed">
                 We believe in staying true to our flavors and our history, ensuring every dish 
                 and every interaction feels genuine.
               </p>
            </div>
            <div className="space-y-4">
               <h3 className="font-playfair text-2xl font-bold text-deep-brown">Excellence</h3>
               <p className="font-libre text-sm text-deep-brown/70 leading-relaxed">
                 From the selection of ingredients to the final presentation, we strive for 
                 perfection in everything we serve.
               </p>
            </div>
            <div className="space-y-4">
               <h3 className="font-playfair text-2xl font-bold text-deep-brown">Community</h3>
               <p className="font-libre text-sm text-deep-brown/70 leading-relaxed">
                 PUBLIQ is a space for everyone – a public square where friends meet, families 
                 celebrate, and memories are made.
               </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
