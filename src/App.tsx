import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { IntroAnimation } from "./components/IntroAnimation";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";

export const App = () => (
  <div className="bg-[var(--ink)] text-[var(--ivory)]">
    <IntroAnimation />
    <Navbar />
    <main id="main-content" className="relative block">
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
