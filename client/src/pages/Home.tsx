import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Bright Star Auto Ltd | Premium Auto Bodyshop North York, ON"
        description="North York's premier auto bodyshop. Expert collision repair, paint refinishing, dent removal & insurance claims. Free estimates. 4.9-star rated. Call (416) 635-0812."
      />
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <Services />
      <WhyUs />
      <Reviews />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
