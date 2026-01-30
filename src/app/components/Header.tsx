import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import imgLogo from "../../assets/images/LOGO.png";

export function Header({ lang, setLang }: { lang: 'KR' | 'EN', setLang: (lang: 'KR' | 'EN') => void }) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = ["BRAND", "PRODUCT", "STORE", "NEWS", "CONTACT"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="absolute inset-0 backdrop-blur-md bg-white/90 border-b border-black/5" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-[60px] py-6 md:py-[34px] flex items-center justify-between">
        <div className="flex items-center z-50">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <img alt="POSITIVA" className="h-4 md:h-[16px] w-auto" src={imgLogo} />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="font-['Pretendard',sans-serif] font-semibold text-sm tracking-widest text-[#09090a] hover:opacity-60 transition-opacity">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6 z-50">
          <div className="flex items-center gap-1 px-2 py-1">
            <button
              onClick={() => setLang('KR')}
              className={`font-['Gotham',sans-serif] font-bold text-[13px] transition-colors ${lang === 'KR' ? 'text-[#09090a]' : 'text-[#858588] hover:text-[#09090a]'}`}
            >
              KR
            </button>
            <span className="text-[#e8e9ea]">|</span>
            <button
              onClick={() => setLang('EN')}
              className={`font-['Gotham',sans-serif] font-bold text-[13px] transition-colors ${lang === 'EN' ? 'text-[#09090a]' : 'text-[#858588] hover:text-[#09090a]'}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-[#09090a]" /> : <Menu className="w-6 h-6 text-[#09090a]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 pt-[100px] px-6 lg:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="font-['Gotham',sans-serif] font-bold text-2xl tracking-widest text-[#09090a] hover:text-[#fcda2c] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}