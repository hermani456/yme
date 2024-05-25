import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardSection from "./components/Cardsection";
import Contact from "./components/Contact";
import MovingText from "./components/MovingText";
import Expertise from "./components/Expertise";
import PhotoSection from "./components/PhotoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      <Expertise />
      <PhotoSection />
      <Contact />
      <Footer />
    </>
  );
}
