import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Partnership } from "./components/Partnership";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Hero />
      <About />
      <Partnership />
      <Benefits />
      <Contact />
      <Toaster />
    </div>
  );
}