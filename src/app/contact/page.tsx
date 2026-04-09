"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Image from "next/image";

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    day: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    
    // Auto-select day if date is chosen
    if (name === 'date') {
      const selectedDate = new Date(value);
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = days[selectedDate.getDay()];
      setFormData(prev => ({
        ...prev,
        [name]: value,
        day: dayName
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.date || !formData.time || !formData.phone) {
      alert("Please fill in your Name, Phone, Date, and Time for the reservation.");
      return;
    }

    // Format the date to be more readable
    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A';

    // Construct the WhatsApp message with proper URL encoding for clean line breaks
    const messageText = `*Table Reservation Request* 🍽️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Guests:* ${formData.guests} Person(s)
*Date:* ${formattedDate} (${formData.day})
*Time:* ${formData.time}

*Special Requests / Message:*
${formData.message || 'None'}`;

    // Encode the entire string so newlines (%0A) and spaces are handled perfectly by the browser
    const encodedText = encodeURIComponent(messageText);
    
    // Redirect to WhatsApp using the provided test number
    const whatsappUrl = `https://wa.me/917251991199?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="relative min-h-screen bg-parchment text-deep-brown font-libre selection:bg-golden-highlight selection:text-white pt-20">
      <Navbar />

      <PageHero
        bgSrc="/images/1000148491.jpg.jpeg"
        eyebrow="Reservations"
        title="Book A Table"
        description="Experience the finest culinary art in Dehradun. Reserve your table for an unforgettable dining experience."
      />

      {/* CONTACT SECTION */}
      <section className="py-24 bg-parchment relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-golden-highlight/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-brown/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            
            {/* LEFT SIDE */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown">
                  Get in Touch
                </h2>
                <div className="w-20 h-1 bg-golden-highlight" />
                <p className="text-deep-brown/70 leading-relaxed max-w-md">
                  Whether it's a romantic dinner, a family gathering, or a corporate event, we're here to make it special.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* LOCATION */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white text-golden-highlight border border-golden-highlight/20 rounded-full flex items-center justify-center shadow-md group-hover:bg-golden-highlight group-hover:text-white transition-all duration-300">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold mb-1 tracking-widest text-deep-brown/50 uppercase">
                      Location
                    </h4>
                    <p className="text-sm font-medium text-deep-brown/80 leading-relaxed">
                      Bansal Plaza, 5, Kaulagarh Rd,<br />
                      Rajender Nagar, Dehradun
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white text-golden-highlight border border-golden-highlight/20 rounded-full flex items-center justify-center shadow-md group-hover:bg-golden-highlight group-hover:text-white transition-all duration-300">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold mb-1 tracking-widest text-deep-brown/50 uppercase">
                      Reservations
                    </h4>
                    <p className="text-sm font-medium text-deep-brown/80">
                      +91 72519 91199
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white text-golden-highlight border border-golden-highlight/20 rounded-full flex items-center justify-center shadow-md group-hover:bg-golden-highlight group-hover:text-white transition-all duration-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold mb-1 tracking-widest text-deep-brown/50 uppercase">
                      Email
                    </h4>
                    <p className="text-sm font-medium text-deep-brown/80">
                      ssdhospitality@gmail.com
                    </p>
                  </div>
                </div>

                {/* WHATSAPP */}
                <a 
                  href="https://wa.me/917251991199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-white text-green-500 border border-green-500/20 rounded-full flex items-center justify-center shadow-md group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold mb-1 tracking-widest text-deep-brown/50 uppercase">
                      WhatsApp
                    </h4>
                    <p className="text-sm font-medium text-deep-brown/80">
                      Chat with us
                    </p>
                  </div>
                </a>
              </div>

              {/* WHY CONTACT */}
              <div className="bg-white/50 backdrop-blur-sm p-8 border border-golden-highlight/10 rounded-sm space-y-4">
                <h3 className="font-cinzel text-xs tracking-[0.2em] text-golden-highlight font-bold uppercase">
                  Planning an Event?
                </h3>
                <p className="text-sm text-deep-brown/70 leading-relaxed">
                  We host private parties, corporate events, and live music nights. Contact our events team for custom packages and arrangements.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <span className="text-[11px] font-bold text-deep-brown/40 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-golden-highlight rounded-full" /> Private Dining
                  </span>
                  <span className="text-[11px] font-bold text-deep-brown/40 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-golden-highlight rounded-full" /> Birthdays
                  </span>
                  <span className="text-[11px] font-bold text-deep-brown/40 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-golden-highlight rounded-full" /> Corporate
                  </span>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="space-y-6">
                <h4 className="font-cinzel text-xs tracking-[0.2em] text-deep-brown/40 font-bold uppercase">
                  Follow Our Story
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/publiq_doon/"
                    target="_blank"
                    className="w-12 h-12 bg-white border border-deep-brown/10 rounded-full flex items-center justify-center hover:bg-deep-brown hover:text-parchment transition-all hover:scale-110 shadow-sm"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/publiqdehradun"
                    target="_blank"
                    className="w-12 h-12 bg-white border border-deep-brown/10 rounded-full flex items-center justify-center hover:bg-deep-brown hover:text-parchment transition-all hover:scale-110 shadow-sm"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl border border-deep-brown/5 relative">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-16 h-16 border-t-2 border-r-2 border-golden-highlight/20" />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-16 h-16 border-b-2 border-l-2 border-golden-highlight/20" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 text-center">
                  <h3 className="font-playfair text-3xl font-bold text-deep-brown mb-2">Book a Table</h3>
                  <p className="text-sm text-deep-brown/50 font-libre">Fill out the form to request a reservation</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-deep-brown/20 py-3 text-sm focus:border-golden-highlight outline-none transition-all placeholder:text-deep-brown/30"
                      />
                    </div>

                    <div className="relative group">
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-deep-brown/20 py-3 text-sm focus:border-golden-highlight outline-none transition-all placeholder:text-deep-brown/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-golden-highlight ml-1">Date</label>
                      <input
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-parchment/50 border border-deep-brown/10 rounded-sm p-3 text-sm focus:border-golden-highlight outline-none transition-all text-deep-brown"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-golden-highlight ml-1">Day</label>
                      <select
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        className="w-full bg-parchment/50 border border-deep-brown/10 rounded-sm p-3 text-sm focus:border-golden-highlight outline-none transition-all text-deep-brown appearance-none"
                      >
                        <option value="">Select Day</option>
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-golden-highlight ml-1">Time</label>
                      <input
                        name="time"
                        type="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-parchment/50 border border-deep-brown/10 rounded-sm p-3 text-sm focus:border-golden-highlight outline-none transition-all text-deep-brown"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-golden-highlight ml-1">Guests</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-parchment/50 border border-deep-brown/10 rounded-sm p-3 text-sm focus:border-golden-highlight outline-none transition-all text-deep-brown appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map(num => (
                          <option key={num} value={num}>{num} Person{num !== 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-golden-highlight ml-1">Special Requests</label>
                    <textarea
                      name="message"
                      placeholder="Any allergies, special occasions, or preferred seating?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-parchment/50 border border-deep-brown/10 rounded-sm p-3 text-sm min-h-24 focus:border-golden-highlight outline-none transition-all placeholder:text-deep-brown/30"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#25D366] text-white font-cinzel py-5 tracking-[0.2em] font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3 rounded-sm group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <WhatsAppIcon size={20} className="relative z-10" />
                    <span className="relative z-10">Confirm Reservation</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="relative h-100 w-full grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps?q=Bansal+Plaza+Kaulagarh+Road+Dehradun&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

        <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 text-sm shadow-lg">
          Visit Us in Dehradun
        </div>
      </section>

      <Footer />
    </main>
  );
}
