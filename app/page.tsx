import Header from "../components/Header";
import Hero from "../components/Hero";
import TopProducts from "../components/TopProducts";
import About from "../components/About";
import Statistics from "../components/Statistics"; // New import
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TopProducts />
      <About />
      <Statistics /> {/* Newly added section */}
      {/* Removed Certifications and FAQ components */}
      <Contact />
      <Footer />
    </>
  );
}
