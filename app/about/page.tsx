// app/about.tsx

import About from "../../components/About"; // Assuming this contains the 'About Us' content
import AboutPrasajati from "../../components/AboutPrasajati"; // Import About Prasajati Section
import Experience from "../../components/Experience"; // Import Experience Section
import Certifications from "../../components/Certifications"; // Assuming this contains certifications
import Patent from "../../components/patents"; // Import Patent Section
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <About /> {/* About Us Section */}
      <AboutPrasajati /> {/* About Prasajati Section */}
      <Experience /> {/* Experience Section */}
      <Certifications /> {/* Certifications Section */}
      <Patent /> {/* Patent Section */}
      <Footer /> {/* Footer */}
    </>
  );
}
