"use client";

import { useEffect, useState } from "react";

const practiceAreas = [
  "Civil Litigation",
  "Corporate Law",
  "Real Estate",
  "Commercial Disputes",
  "Regulatory Compliance",
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
          Konstantinou<span className="text-gold">.</span>
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
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-7 md:px-14 pt-40 md:pt-32 pb-16 relative z-[2]">
          <p className="animate-fade-up-1 text-[0.68rem] font-medium tracking-[0.3em] uppercase text-gold mb-8">
            Attorney at Law · Athens, Greece
          </p>
          <h1
            className="animate-fade-up-2 font-serif font-light text-warm-white leading-[1.08] mb-8"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
          >
            Counsel
            <br />
            built on
            <br />
            <em className="italic text-gold">conviction.</em>
          </h1>
          <div className="animate-expand-divider h-px bg-gold mb-8" />
          <p className="animate-fade-up-3 text-[0.95rem] text-silver max-w-[420px] leading-[1.85] mb-12">
            Providing strategic legal counsel in civil, commercial, and
            corporate matters with unwavering precision and discretion.
          </p>
          <a
            href="#contact"
            className="animate-fade-up-4 group inline-flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.22em] uppercase text-off-white px-[2.4rem] py-[1.1rem] border border-ash hover:border-gold hover:text-gold hover:[background:rgba(184,168,138,0.15)] transition-all duration-300 w-fit"
          >
            Schedule a Consultation
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
          <div className="hero-image-inner" />
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
