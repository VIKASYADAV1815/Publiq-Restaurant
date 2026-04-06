import BookMenu from "@/components/BookMenu";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function MenuPage() {
  return (
    <main className="relative min-h-screen bg-deep-brown">
      <Navbar />
      <div className="pt-16 md:pt-20"> {/* Offset for sticky navbar */}
        <BookMenu />
      </div>
      <Testimonials />
      <Footer />
    </main>
  );
}
