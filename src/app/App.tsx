import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Excellence } from "./components/Excellence";
import { AboutSection } from "./components/AboutSection";
import { Products } from "./components/Products";
import { Standard } from "./components/Standard";
import { StoreBanner } from "./components/StoreBanner";
import { News } from "./components/News";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MobileBottomNav } from "./components/MobileBottomNav";

export default function App() {
  const [lang, setLang] = React.useState<'KR' | 'EN'>('KR');

  return (
    <div className="min-h-screen bg-white selection:bg-[#fcda2c] selection:text-black">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Excellence lang={lang} />
        <AboutSection lang={lang} />
        <Products lang={lang} />
        <Standard lang={lang} />
        <StoreBanner lang={lang} />
        <News lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileBottomNav lang={lang} />
    </div>
  );
}