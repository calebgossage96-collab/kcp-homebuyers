"use client";
import { useState, useEffect } from "react";

const PHONE = "(678) 904-2314";
const PHONE_HREF = "tel:6789042314";

const navLinks = [
  ["How It Works", "how-it-works"],
  ["Benefits", "benefits"],
  ["About", "about"],
  ["FAQ", "faq"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900 shadow-2xl"
          : "bg-gradient-to-b from-navy-900/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-1 focus:outline-none"
          >
            <span className="text-2xl font-extrabold text-white tracking-wide">
              KCP
            </span>
            <span className="text-gold-400 text-xl font-semibold tracking-wide ml-1">
              Homebuyers
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-white/80 hover:text-gold-400 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="text-white/70 hover:text-gold-400 text-sm font-medium transition-colors duration-200"
            >
              {PHONE}
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg"
            >
              Get My Offer
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-navy-800 rounded-b-2xl border-t border-white/10 py-4 space-y-1">
            {navLinks.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left px-5 py-3 text-white/85 hover:text-gold-400 hover:bg-white/5 transition-colors text-base font-medium"
              >
                {label}
              </button>
            ))}
            <div className="px-4 pt-3 space-y-2 pb-2">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3 rounded-xl text-base transition-all"
              >
                Get My Free Cash Offer
              </button>
              <a
                href={PHONE_HREF}
                className="block text-center text-white/70 hover:text-white text-sm py-2.5 border border-white/20 rounded-xl transition-colors"
              >
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
