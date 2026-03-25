 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
 import PageHero from "@/components/PageHero";
 
 export default function ContactPage() {
   return (
     <main className="relative min-h-screen bg-parchment text-deep-brown font-libre selection:bg-golden-highlight selection:text-white">
       <Navbar />
       <PageHero
         bgSrc="/restaurent/b10.webp"
         eyebrow="Get In Touch"
         title="Contact Us"
         description="We would love to hear from you. Reach out for reservations, events, or just to say hello."
       />
       <section className="py-24 bg-[#FDF5E6] relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
             <span className="font-cinzel text-golden-highlight tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Get In Touch</span>
             <h1 className="font-playfair text-5xl md:text-7xl text-deep-brown mb-8">Contact Us</h1>
             <p className="font-libre text-lg md:text-xl text-deep-brown/70 italic max-w-3xl mx-auto leading-relaxed">
               Reach out for reservations, events, or just to say hello.
             </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             <div className="space-y-12">
               <div className="space-y-6">
                 <h2 className="font-playfair text-3xl font-bold text-deep-brown border-b border-golden-highlight/30 pb-4">Reach Us</h2>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-deep-brown text-parchment rounded-full flex items-center justify-center shrink-0 shadow-lg">
                     <MapPin size={20} />
                   </div>
                   <div>
                     <h4 className="font-cinzel text-sm font-bold text-deep-brown mb-1">Our Location</h4>
                     <p className="font-libre text-sm text-deep-brown/70 leading-relaxed">
                       123 Rajpur Road, Near Jakhan,<br />
                       Dehradun, Uttarakhand 248001
                     </p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-deep-brown text-parchment rounded-full flex items-center justify-center shrink-0 shadow-lg">
                     <Phone size={20} />
                   </div>
                   <div>
                     <h4 className="font-cinzel text-sm font-bold text-deep-brown mb-1">Call Us</h4>
                     <p className="font-libre text-sm text-deep-brown/70 leading-relaxed">+91 999 999 9999</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-deep-brown text-parchment rounded-full flex items-center justify-center shrink-0 shadow-lg">
                     <Mail size={20} />
                   </div>
                   <div>
                     <h4 className="font-cinzel text-sm font-bold text-deep-brown mb-1">Email Us</h4>
                     <p className="font-libre text-sm text-deep-brown/70 leading-relaxed">hello@publiqdehradun.com</p>
                   </div>
                 </div>
               </div>
               <div className="space-y-6">
                 <h2 className="font-playfair text-3xl font-bold text-deep-brown border-b border-golden-highlight/30 pb-4">Follow Us</h2>
                 <div className="flex gap-4">
                   <a href="#" className="w-12 h-12 bg-white/50 border border-deep-brown/10 rounded-full flex items-center justify-center hover:bg-deep-brown hover:text-parchment transition-all shadow-sm">
                     <Instagram size={20} />
                   </a>
                   <a href="#" className="w-12 h-12 bg-white/50 border border-deep-brown/10 rounded-full flex items-center justify-center hover:bg-deep-brown hover:text-parchment transition-all shadow-sm">
                     <Facebook size={20} />
                   </a>
                 </div>
               </div>
             </div>
             <div className="bg-white/40 backdrop-blur-md p-8 rounded-sm shadow-xl border border-deep-brown/5">
               <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="font-cinzel text-[10px] uppercase tracking-widest text-deep-brown/60 font-bold">Name</label>
                     <input type="text" className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 font-libre text-sm focus:border-golden-highlight outline-none transition-colors" placeholder="Your Name" />
                   </div>
                   <div className="space-y-2">
                     <label className="font-cinzel text-[10px] uppercase tracking-widest text-deep-brown/60 font-bold">Email</label>
                     <input type="email" className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 font-libre text-sm focus:border-golden-highlight outline-none transition-colors" placeholder="Your Email" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="font-cinzel text-[10px] uppercase tracking-widest text-deep-brown/60 font-bold">Subject</label>
                   <input type="text" className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 font-libre text-sm focus:border-golden-highlight outline-none transition-colors" placeholder="Subject" />
                 </div>
                 <div className="space-y-2">
                   <label className="font-cinzel text-[10px] uppercase tracking-widest text-deep-brown/60 font-bold">Message</label>
                   <textarea className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 font-libre text-sm focus:border-golden-highlight outline-none transition-colors min-h-[120px]" placeholder="Your Message"></textarea>
                 </div>
                 <button className="w-full bg-deep-brown text-parchment font-cinzel py-4 tracking-widest font-bold hover:bg-golden-highlight hover:text-deep-brown transition-all shadow-lg active:scale-95">
                   Send Message
                 </button>
               </form>
             </div>
           </div>
         </div>
       </section>
       <section className="h-[400px] w-full bg-deep-brown/5 grayscale opacity-80 hover:grayscale-0 transition-all duration-1000">
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.872288126155!2d78.0664!3d30.3664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c351c88887%3A0x4d34e9e027668637!2sRajpur%20Rd%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710433227443!5m2!1sen!2sin"
           width="100%"
           height="100%"
           style={{ border: 0 }}
           allowFullScreen={true}
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
       </section>
       <Footer />
     </main>
   );
 }
