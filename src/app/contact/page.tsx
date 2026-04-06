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
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent 🚀");
  };

  return (
    <main className="relative min-h-screen bg-parchment text-deep-brown font-libre selection:bg-golden-highlight selection:text-white pt-20">
      <Navbar />

      <PageHero
        bgSrc="/images/1000148491.jpg.jpeg"
        eyebrow="Get In Touch"
        title="Contact Us"
        description="We would love to hear from you. Reach out for reservations, events, or just to say hello."
      />

      {/* CONTACT SECTION */}
      <section className="py-24 bg-parchment relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            
            {/* LEFT SIDE */}
            <div className="space-y-12">
              <h2 className="font-playfair text-3xl font-bold border-b border-golden-highlight/30 pb-4">
                Reach Us
              </h2>

              {/* LOCATION */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-deep-brown text-parchment rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold mb-1">
                    Our Location
                  </h4>
                  <p className="text-sm text-deep-brown/70 leading-relaxed">
                    Bansal Plaza, 5, Kaulagarh Rd, Rajender Nagar,<br />
                    Dehradun, Uttarakhand 248001, India
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-deep-brown text-parchment rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold mb-1">
                    Call Us
                  </h4>
                  <p className="text-sm text-deep-brown/70">
                    +91 72519 91199
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-deep-brown text-parchment rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold mb-1">
                    Email Us
                  </h4>
                  <p className="text-sm text-deep-brown/70">
                    ssdhospitality@gmail.com
                  </p>
                </div>
              </div>

              {/* WHATSAPP BOOKING */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold mb-2">
                    Book a Table via WhatsApp
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://wa.me/917251991199?text=Hi%20PUBLIQ%20Dehradun,%20I%20would%20like%20to%20book%20a%20table"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-deep-brown/70 hover:text-green-600 transition-colors"
                    >
                      <WhatsAppIcon size={16} /> +91 72519 91199
                    </a>
                    <a
                      href="https://wa.me/919997740501?text=Hi%20PUBLIQ%20Dehradun,%20I%20would%20like%20to%20book%20a%20table"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-deep-brown/70 hover:text-green-600 transition-colors"
                    >
                      <WhatsAppIcon size={16} /> +91 99977 40501
                    </a>
                    <a
                      href="https://wa.me/919119779191?text=Hi%20PUBLIQ%20Dehradun,%20I%20would%20like%20to%20book%20a%20table"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-deep-brown/70 hover:text-green-600 transition-colors"
                    >
                      <WhatsAppIcon size={16} /> +91 91197 79191
                    </a>
                  </div>
                </div>
              </div>

              {/* WHY CONTACT */}
              <div className="space-y-3 pt-4">
                <h3 className="font-cinzel text-xs tracking-widest text-deep-brown/60">
                  WHY CONTACT US
                </h3>
                <p className="text-sm text-deep-brown/70">• Table Reservations</p>
                <p className="text-sm text-deep-brown/70">• Private Events & Parties</p>
                <p className="text-sm text-deep-brown/70">• Corporate Bookings</p>
              </div>

              {/* SOCIAL */}
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold border-b border-golden-highlight/30 pb-4">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/publiqdehradun"
                    target="_blank"
                    className="w-12 h-12 bg-white/50 border border-deep-brown/10 rounded-full flex items-center justify-center hover:bg-deep-brown hover:text-parchment transition-all hover:scale-110"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/publiqdehradun"
                    target="_blank"
                    className="w-12 h-12 bg-white/50 border border-deep-brown/10 rounded-full flex items-center justify-center hover:bg-deep-brown hover:text-parchment transition-all hover:scale-110"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-sm shadow-xl border border-deep-brown/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 text-sm focus:border-golden-highlight outline-none transition-all focus:scale-[1.02]"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 text-sm focus:border-golden-highlight outline-none transition-all focus:scale-[1.02]"
                  />
                </div>

                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 text-sm focus:border-golden-highlight outline-none transition-all focus:scale-[1.02]"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-parchment/30 border-b border-deep-brown/20 p-2 text-sm min-h-30 focus:border-golden-highlight outline-none transition-all focus:scale-[1.02]"
                />

                <button className="w-full bg-deep-brown text-parchment font-cinzel py-4 tracking-widest font-bold hover:bg-golden-highlight hover:text-deep-brown transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 relative overflow-hidden group">
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-golden-highlight opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
                </button>
              </form>
              <div className="mt-8 relative aspect-video overflow-hidden rounded-sm border border-deep-brown/10">
                <Image
                  src="/images/1000148497.jpg.jpeg"
                  alt="Contact visual"
                  fill
                  className="object-cover"
                />
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
