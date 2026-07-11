import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </>
  );
}