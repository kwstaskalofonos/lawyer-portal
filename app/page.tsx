"use client";

import { useEffect, useState } from "react";

const practiceAreas = [
  "Αστικές Διαφορές",
  "Εταιρικό Δίκαιο",
  "Δίκαιο Ακινήτων",
  "Εμπορικές Διαφορές",
  "Κανονιστική Σμμόρφωση",
];

const stats = [
  { num: "25", suffix: "+", label: "Years of Practice" },
  { num: "400", suffix: "+", label: "Cases Won" },
  { num: "98", suffix: "%", label: "Client Satisfaction" },
  { num: "3", suffix: "", label: "Jurisdictions" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Nav scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const reveals = document.querySelectorAll<Element>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── NAV ─── */}
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "px-7 md:px-14 py-5 bg-[rgba(10,10,10,0.92)] backdrop-blur-md"
            : "px-7 md:px-14 py-7 bg-gradient-to-b from-site-black from-60% to-transparent"
        }`}
      >
        <a
          href="#"
          className="font-serif text-[1.35rem] tracking-[0.08em] text-off-white no-underline"
        >
          Μπακόπουλος<span className="text-gold">.</span>
        </a>
        <ul className="hidden md:flex gap-11 list-none m-0 p-0">
          {["About", "Practice", "Philosophy", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-silver hover:text-off-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="flex gap-8 border-l border-ash pl-11">
            <a href="/landpage2" className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-muted hover:text-silver transition-colors duration-300">
              LP2
            </a>
            <a href="/landpage3" className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-muted hover:text-silver transition-colors duration-300">
              LP3
            </a>
            <a href="/landpage4" className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-muted hover:text-silver transition-colors duration-300">
              LP4
            </a>
            <a href="/landpage5" className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-muted hover:text-silver transition-colors duration-300">
              LP5
            </a>
            <a href="/landpage6" className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-muted hover:text-silver transition-colors duration-300">
              LP6
            </a>
            <a href="/landpage7" className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-muted hover:text-silver transition-colors duration-300">
              LP7
            </a>
            <a href="/landpage8" className="nav-link text-[0.72rem] font-normal tracking-[0.18em] uppercase text-muted hover:text-silver transition-colors duration-300">
              LP8
            </a>
          </li>
        </ul>

        {/* Mobile-only animated scales emblem */}
        <div className="md:hidden hero-float opacity-70">
          <svg
            viewBox="0 0 80 56"
            width="52"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pillar */}
            <line x1="40" y1="6" x2="40" y2="44" stroke="#B8A88A" strokeWidth="0.9" opacity="0.5" />
            {/* Pillar top finial */}
            <circle cx="40" cy="6" r="2.2" stroke="#B8A88A" strokeWidth="0.8" opacity="0.6" />
            <circle cx="40" cy="6" r="0.9" fill="#B8A88A" opacity="0.6" />
            {/* Pillar base */}
            <line x1="32" y1="44" x2="48" y2="44" stroke="#B8A88A" strokeWidth="0.9" opacity="0.55" />
            <line x1="29" y1="47" x2="51" y2="47" stroke="#B8A88A" strokeWidth="0.7" opacity="0.4" />

            {/* Scales group — reuses same tilt animation */}
            <g className="scales-tilt">
              {/* Beam */}
              <line x1="8" y1="16" x2="72" y2="16" stroke="#B8A88A" strokeWidth="1.2" opacity="0.85" />
              {/* Center pivot */}
              <circle cx="40" cy="16" r="2.5" stroke="#B8A88A" strokeWidth="0.8" opacity="0.8" />
              <circle cx="40" cy="16" r="1"   fill="#B8A88A" opacity="0.8" />
              {/* Beam tip dots */}
              <circle cx="8"  cy="16" r="1.8" stroke="#B8A88A" strokeWidth="0.6" opacity="0.55" />
              <circle cx="72" cy="16" r="1.8" stroke="#B8A88A" strokeWidth="0.6" opacity="0.55" />

              {/* Left chain */}
              <line x1="8" y1="18" x2="8" y2="30" stroke="#B8A88A" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.5" />
              {/* Left pan */}
              <path d="M1 30 Q8 36 15 30" stroke="#B8A88A" strokeWidth="1.2" opacity="0.8" />
              <line x1="1" y1="30" x2="15" y2="30" stroke="#B8A88A" strokeWidth="0.5" opacity="0.35" />

              {/* Right chain */}
              <line x1="72" y1="18" x2="72" y2="30" stroke="#B8A88A" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.5" />
              {/* Right pan */}
              <path d="M65 30 Q72 36 79 30" stroke="#B8A88A" strokeWidth="1.2" opacity="0.8" />
              <line x1="65" y1="30" x2="79" y2="30" stroke="#B8A88A" strokeWidth="0.5" opacity="0.35" />
            </g>
          </svg>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-7 md:px-14 pt-40 md:pt-32 pb-16 relative z-[2]">
          <p className="animate-fade-up-1 text-[0.68rem] font-medium tracking-[0.3em] uppercase text-gold mb-8">
            Δικηγορος · Αθηνα, Ελλαδα
          </p>
          <h1
            className="animate-fade-up-2 font-serif font-light text-warm-white leading-[1.08] mb-8"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
          >
            Νομική συμβουλή
            <br />
            θεμελιωμένη σε
            <br />
            <em className="italic text-gold">πεποίθηση.</em>
          </h1>
          <div className="animate-expand-divider h-px bg-gold mb-8" />
          <p className="animate-fade-up-3 text-[0.95rem] text-silver max-w-[420px] leading-[1.85] mb-12">
            Παροχή στρατηγικής νομικής συμβουλής σε αστικές, εμπορικές, και
            εταιρικές υποθέσεις με ακρίβεια και διακριτικότητα.
          </p>
          <a
            href="#contact"
            className="animate-fade-up-4 group inline-flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.22em] uppercase text-off-white px-[2.4rem] py-[1.1rem] border border-ash hover:border-gold hover:text-gold hover:[background:rgba(184,168,138,0.15)] transition-all duration-300 w-fit"
          >
            Κλείστε Ραντεβού
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Decorative image panel */}
        <div className="hidden md:block hero-image-panel">
          <div className="hero-image-inner relative flex items-center justify-center">
            {/* Pulsing glow */}
            <div className="hero-glow absolute pointer-events-none" />

            {/* Floating SVG composition */}
            <div className="hero-float absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 500 700"
                className="w-[68%] max-w-[380px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer decorative frame */}
                <rect x="30" y="40" width="440" height="620" stroke="#B8A88A" strokeWidth="0.4" opacity="0.18" />
                {/* Corner bracket accents */}
                <path d="M30 90 L30 40 L80 40"   stroke="#B8A88A" strokeWidth="1"   opacity="0.55" />
                <path d="M420 40 L470 40 L470 90" stroke="#B8A88A" strokeWidth="1"   opacity="0.55" />
                <path d="M30 610 L30 660 L80 660"  stroke="#B8A88A" strokeWidth="1"   opacity="0.55" />
                <path d="M420 660 L470 660 L470 610" stroke="#B8A88A" strokeWidth="1" opacity="0.55" />

                {/* Background concentric rings */}
                <circle cx="250" cy="330" r="205" stroke="#B8A88A" strokeWidth="0.4" opacity="0.06" className="hero-ring-outer" />
                <circle cx="250" cy="330" r="155" stroke="#B8A88A" strokeWidth="0.4" opacity="0.09" className="hero-ring-inner" />
                <circle cx="250" cy="330" r="105" stroke="#B8A88A" strokeWidth="0.35" opacity="0.06" />

                {/* Horizontal decorative rules */}
                <line x1="60" y1="120" x2="440" y2="120" stroke="#B8A88A" strokeWidth="0.5" opacity="0.25" />
                <line x1="60" y1="560" x2="440" y2="560" stroke="#B8A88A" strokeWidth="0.5" opacity="0.25" />
                {/* Diamond accents on rules */}
                <rect x="246" y="116" width="8" height="8" transform="rotate(45 250 120)" fill="#B8A88A" opacity="0.4" />
                <rect x="246" y="556" width="8" height="8" transform="rotate(45 250 560)" fill="#B8A88A" opacity="0.4" />
                <rect x="56"  y="116" width="6" height="6" transform="rotate(45 60 120)"  fill="#B8A88A" opacity="0.2" />
                <rect x="436" y="116" width="6" height="6" transform="rotate(45 440 120)" fill="#B8A88A" opacity="0.2" />
                <rect x="56"  y="556" width="6" height="6" transform="rotate(45 60 560)"  fill="#B8A88A" opacity="0.2" />
                <rect x="436" y="556" width="6" height="6" transform="rotate(45 440 560)" fill="#B8A88A" opacity="0.2" />

                {/* Central support pillar */}
                <line x1="250" y1="210" x2="250" y2="520" stroke="#B8A88A" strokeWidth="0.8" opacity="0.45" />
                {/* Pillar top finial */}
                <circle cx="250" cy="210" r="7"   stroke="#B8A88A" strokeWidth="0.9" opacity="0.6" />
                <circle cx="250" cy="210" r="2.5" fill="#B8A88A" opacity="0.6" />
                {/* Pillar base steps */}
                <line x1="220" y1="520" x2="280" y2="520" stroke="#B8A88A" strokeWidth="1"   opacity="0.6" />
                <line x1="212" y1="528" x2="288" y2="528" stroke="#B8A88A" strokeWidth="1"   opacity="0.6" />
                <line x1="204" y1="536" x2="296" y2="536" stroke="#B8A88A" strokeWidth="0.5" opacity="0.3" />

                {/* ── ANIMATED SCALES GROUP ── */}
                <g className="scales-tilt">
                  {/* Beam */}
                  <line x1="95" y1="240" x2="405" y2="240" stroke="#B8A88A" strokeWidth="1.5" opacity="0.8" />
                  {/* Center pivot ornament */}
                  <circle cx="250" cy="240" r="5.5" stroke="#B8A88A" strokeWidth="1"   opacity="0.8" />
                  <circle cx="250" cy="240" r="2"   fill="#B8A88A" opacity="0.8" />
                  {/* Beam tip ornaments */}
                  <circle cx="95"  cy="240" r="3.5" stroke="#B8A88A" strokeWidth="0.8" opacity="0.6" />
                  <circle cx="405" cy="240" r="3.5" stroke="#B8A88A" strokeWidth="0.8" opacity="0.6" />

                  {/* Left chain (dashed = vintage engraving) */}
                  <line x1="95" y1="244" x2="95" y2="355" stroke="#B8A88A" strokeWidth="0.9" strokeDasharray="4 3" opacity="0.5" />
                  {/* Left pan */}
                  <path d="M57 358 Q95 378 133 358" stroke="#B8A88A" strokeWidth="1.5" opacity="0.8" />
                  <line x1="57" y1="358" x2="133" y2="358" stroke="#B8A88A" strokeWidth="0.7" opacity="0.4" />
                  {/* Pan dots (weight indicators) */}
                  <circle cx="83"  cy="365" r="1.2" fill="#B8A88A" opacity="0.3" />
                  <circle cx="95"  cy="370" r="1.2" fill="#B8A88A" opacity="0.3" />
                  <circle cx="107" cy="365" r="1.2" fill="#B8A88A" opacity="0.3" />

                  {/* Right chain */}
                  <line x1="405" y1="244" x2="405" y2="355" stroke="#B8A88A" strokeWidth="0.9" strokeDasharray="4 3" opacity="0.5" />
                  {/* Right pan */}
                  <path d="M367 358 Q405 378 443 358" stroke="#B8A88A" strokeWidth="1.5" opacity="0.8" />
                  <line x1="367" y1="358" x2="443" y2="358" stroke="#B8A88A" strokeWidth="0.7" opacity="0.4" />
                  <circle cx="393" cy="365" r="1.2" fill="#B8A88A" opacity="0.3" />
                  <circle cx="405" cy="370" r="1.2" fill="#B8A88A" opacity="0.3" />
                  <circle cx="417" cy="365" r="1.2" fill="#B8A88A" opacity="0.3" />
                </g>

                {/* Monogram flanked by short rules */}
                <line x1="80"  y1="455" x2="190" y2="455" stroke="#B8A88A" strokeWidth="0.5" opacity="0.2" />
                <line x1="310" y1="455" x2="420" y2="455" stroke="#B8A88A" strokeWidth="0.5" opacity="0.2" />
                <text x="250" y="472" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fill="#B8A88A" opacity="0.45" letterSpacing="10">ΔΚ</text>

                {/* Tagline */}
                <text x="250" y="503" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7.5" fill="#B8A88A" opacity="0.28" letterSpacing="5">ΔΙΚΗΓΟΡΟΣ · ΑΘΗΝΑ</text>

                {/* Flank accent dots */}
                <circle cx="250" cy="158" r="2.5" fill="#B8A88A" opacity="0.22" />
                <circle cx="250" cy="602" r="2.5" fill="#B8A88A" opacity="0.22" />
                <circle cx="60"  cy="330" r="1.5" fill="#B8A88A" opacity="0.18" />
                <circle cx="440" cy="330" r="1.5" fill="#B8A88A" opacity="0.18" />
                <circle cx="60"  cy="308" r="1"   fill="#B8A88A" opacity="0.12" />
                <circle cx="440" cy="308" r="1"   fill="#B8A88A" opacity="0.12" />
                <circle cx="60"  cy="352" r="1"   fill="#B8A88A" opacity="0.12" />
                <circle cx="440" cy="352" r="1"   fill="#B8A88A" opacity="0.12" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-ash border-b border-ash">
        {stats.map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className={`stat-${i + 1} px-7 md:px-14 py-8 md:py-12 ${
              i < 3 ? "border-r border-ash" : ""
            }`}
          >
            <div
              className="font-serif font-light text-warm-white leading-none mb-2"
              style={{ fontSize: "2.8rem" }}
            >
              {num}
              <span className="text-gold" style={{ fontSize: "1.6rem" }}>
                {suffix}
              </span>
            </div>
            <div className="text-[0.68rem] tracking-[0.2em] uppercase text-muted font-normal">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ─── ABOUT & PRACTICE ─── */}
      <section className="grid md:grid-cols-2 min-h-[80vh]" id="about">
        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-ash">
          <p className="text-[0.68rem] font-medium tracking-[0.3em] uppercase text-gold mb-10">
            About
          </p>
          <h2
            className="font-serif font-light text-warm-white leading-[1.15] mb-8"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
          >
            A deliberate approach
            <br />
            to complex matters.
          </h2>
          <p className="text-[0.92rem] text-silver leading-[1.9] max-w-[480px]">
            With over two decades of practice across Greek and European
            jurisdictions, Dimitris Konstantinou brings a measured and resolute
            approach to every case. His philosophy is simple — listen precisely,
            prepare thoroughly, and execute with clarity.
          </p>
        </div>

        <div
          className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32"
          id="practice"
        >
          {practiceAreas.map((name, i) => (
            <div
              key={name}
              className={`group flex justify-between items-center py-8 border-b border-ash cursor-default transition-all duration-300 hover:pl-4 ${
                i === 0 ? "border-t border-ash" : ""
              }`}
            >
              <span className="font-serif text-[1.45rem] font-normal text-off-white transition-colors duration-300 group-hover:text-gold">
                {name}
              </span>
              <span className="text-muted text-[1.2rem] transition-all duration-300 group-hover:translate-x-[6px] group-hover:text-gold inline-block">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section
        className="reveal philosophy-section text-center px-7 md:px-14 py-24 md:py-40 border-t border-ash"
        id="philosophy"
      >
        <p
          className="font-serif font-light italic text-dim-white leading-[1.4] max-w-[800px] mx-auto mb-10"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
        >
          The strength of a case lies not in volume, but in the weight of its
          reasoning.
        </p>
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-muted">
          — Dimitris Konstantinou
        </p>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        className="grid md:grid-cols-2 border-t border-ash min-h-[60vh]"
        id="contact"
      >
        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-ash">
          <p className="text-[0.68rem] font-medium tracking-[0.3em] uppercase text-gold mb-6">
            Contact
          </p>
          <h2
            className="font-serif font-light text-warm-white leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
          >
            Begin the
            <br />
            conversation.
          </h2>
          <p className="text-[0.92rem] text-silver leading-[1.9] max-w-[420px]">
            Every matter deserves careful consideration. Reach out to discuss
            how we can address your legal needs with the attention they require.
          </p>
        </div>

        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 gap-12">
          <div>
            <h4 className="text-[0.68rem] font-medium tracking-[0.25em] uppercase text-muted mb-3">
              Email
            </h4>
            <a
              href="mailto:dk@konstantinou-law.gr"
              className="font-serif text-[1.3rem] font-normal text-off-white no-underline hover:text-gold transition-colors duration-300"
            >
              dk@konstantinou-law.gr
            </a>
          </div>
          <div>
            <h4 className="text-[0.68rem] font-medium tracking-[0.25em] uppercase text-muted mb-3">
              Telephone
            </h4>
            <a
              href="tel:+302101234567"
              className="font-serif text-[1.3rem] font-normal text-off-white no-underline hover:text-gold transition-colors duration-300"
            >
              +30 210 123 4567
            </a>
          </div>
          <div>
            <h4 className="text-[0.68rem] font-medium tracking-[0.25em] uppercase text-muted mb-3">
              Office
            </h4>
            <p className="font-serif text-[1.3rem] font-normal text-off-white leading-[1.6]">
              Vasilissis Sofias 42
              <br />
              Athens 106 74, Greece
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-ash px-7 md:px-14 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <span className="text-[0.7rem] text-muted tracking-[0.05em]">
          © 2026 Konstantinou Law. All rights reserved.
        </span>
        <div className="flex gap-8">
          {["Privacy", "Terms", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.7rem] text-muted tracking-[0.05em] no-underline hover:text-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
