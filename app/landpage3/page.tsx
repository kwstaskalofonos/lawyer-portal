"use client";

import { useState, useEffect } from "react";

export default function LandPage3() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── NAV ─── */}
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "px-7 md:px-14 py-5 bg-[rgba(11,11,11,0.96)] backdrop-blur-md"
            : "px-7 md:px-14 py-7 bg-gradient-to-b from-[#0b0b0b] from-60% to-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/landpage3" className="flex items-baseline gap-3 no-underline">
          <span className="font-serif text-[1.3rem] tracking-[0.06em] text-[#e2e2e2]">
            Α<span className="text-[#7a8290]">&</span>Δ
          </span>
          <span className="hidden md:inline text-[0.65rem] tracking-[0.18em] uppercase text-[#4a4a4a] font-normal">
            Δικηγορική Εταιρεία
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {["Team", "Practice", "Philosophy", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#707070] hover:text-[#d0d0d0] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="border-l border-[#222] pl-10 flex gap-8">
            <a href="/" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP1
            </a>
            <a href="/landpage2" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP2
            </a>
            <a href="/landpage4" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP4
            </a>
            <a href="/landpage5" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP5
            </a>
            <a href="/landpage6" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP6
            </a>
            <a href="/landpage7" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP7
            </a>
            <a href="/landpage8" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP8
            </a>
          </li>
        </ul>
      </nav>

      {/* ─── PAGE BODY (placeholder) ─── */}
      <main className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-sm tracking-widest uppercase text-gray-300">
          Landing Page 3 — coming soon
        </p>
      </main>
    </>
  );
}
