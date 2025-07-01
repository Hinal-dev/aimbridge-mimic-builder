
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ImageCarousel />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
