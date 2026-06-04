import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProjectGrid } from "./components/ProjectGrid";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="app" id="top">
        <Header />
        <main>
          <Hero />
          <About />
          <ProjectGrid />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}