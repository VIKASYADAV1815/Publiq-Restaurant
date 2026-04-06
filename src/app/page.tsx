import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroDish from "@/components/HeroDish";
import StorySection from "@/components/StorySection";
import MenuCategories from "@/components/MenuCategories";
// import FeaturedDishes from "@/components/FeaturedDishes";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import BookMenu from "@/components/BookMenu";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-parchment text-deep-brown font-libre selection:bg-golden-highlight selection:text-white">
      <Navbar />
      <Hero />
      {/* <HeroDish /> */}
      <StorySection />
      <MenuCategories />
          {/* <FeaturedDishes /> */}
      <BookMenu />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}
