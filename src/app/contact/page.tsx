"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import PageHero from "@/components/PageHero";
import Image from "next/image";

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
                    Publiq Dehradun, Rajpur Road,<br />
                    Dehradun, Uttarakhand 248001
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
                    +91 999 999 9999
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
                    hello@publiqdehradun.com
                  </p>
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
          src="https://www.google.com/maps?q=Rajpur+Road+Dehradun&output=embed"
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
