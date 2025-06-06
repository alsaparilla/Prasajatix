import Header from "../components/Header";
import Hero from "../components/Hero";
import TopProducts from "../components/TopProducts";
import About from "../components/About";
import Certifications from "../components/Certifications";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TopProducts />
      <About />
      <Certifications />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
