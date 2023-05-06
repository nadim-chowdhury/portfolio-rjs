import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Hobbies from "../components/Hobbies";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <About />
      <Skills />
      <Services />
      <Hobbies />
    </section>
  );
}
