import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuCategories from "@/components/MenuCategories";
import FeaturedDishes from "@/components/FeaturedDishes";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import BookMenu from "@/components/BookMenu";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-parchment text-deep-brown font-libre selection:bg-golden-highlight selection:text-white">
      <Navbar />
      <Hero />
      <StorySection />
      <MenuCategories />
          {/* <FeaturedDishes /> */}
      <BookMenu />
  
      <Gallery />
      <Footer />
    </main>
  );
}
