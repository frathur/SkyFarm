
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technology from "../components/Technology";
import Solutions from "../components/Solutions";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Technology />
        <Solutions />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
