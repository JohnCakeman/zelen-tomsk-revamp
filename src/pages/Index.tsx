
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
