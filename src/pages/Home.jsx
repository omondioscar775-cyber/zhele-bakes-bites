import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/layout/Hero/Hero";
import Features from "../components/home/Features/Features";
import Categories from "../components/home/Categories/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";
import DailySpecial from "../components/home/DailySpecial/DailySpecial";
import Testimonials from "../components/home/Testimonials/Testimonials";
import Footer from "../components/layout/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      <DailySpecial />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;