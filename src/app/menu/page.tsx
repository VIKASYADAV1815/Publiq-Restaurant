import BookMenu from "@/components/BookMenu";
import Navbar from "@/components/Navbar";

export default function MenuPage() {
  return (
    <main className="relative min-h-screen bg-deep-brown">
      <Navbar />
      <div className="pt-20"> {/* Offset for sticky navbar */}
        <BookMenu />
      </div>
    </main>
  );
}
