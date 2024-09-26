import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardSection from "./components/Cardsection";
import Contact from "./components/Contact";
import MovingText from "./components/MovingText";
import Expertise from "./components/Expertise";
import PhotoSection from "./components/PhotoSection";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CardSection />
      <Expertise />
      <PhotoSection />
      <Contact />
      <Footer />
    </>
  );
}
