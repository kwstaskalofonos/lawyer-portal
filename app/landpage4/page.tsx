"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LAWYERS = [
  {
    name: "Ελένη Αναστασίου",
    nameEn: "Eleni Anastassiou",
    role: "Συνέταιρος · Εταιρικό & Εμπορικό Δίκαιο",
    bio: "Δεκαπέντε χρόνια εμπειρίας στη συμβουλευτική πολυεθνικών εταιριών σε M&A, αναδιάρθρωση και διασυνοριακές συναλλαγές. Η αναλυτική ακρίβεια και η σταθερή γνωμοδότηση της Ελένης την έχουν καταστήσει αναντικατάστατη σύμβουλο σε ελληνικές και ευρωπαϊκές επιχειρήσεις.",
    imageUrl: "https://picsum.photos/seed/eleni-anastassiou/700/900",
    monogram: "Ε.Α.",
    tag: "Εταιρικό Δίκαιο",
  },
  {
    name: "Νίκος Δημητρίου",
    nameEn: "Nikos Dimitriou",
    role: "Συνέταιρος · Αστικό & Δικαστηριακό Δίκαιο",
    bio: "Πρώην δικαστικός γραμματέας του Αρείου Πάγου με είκοσι χρόνια σε αστικές διαφορές. Ο Νίκος είναι γνωστός για την αποφασιστικότητα στο δικαστήριο, τη στρατηγική προετοιμασία και τη διαρκή επιδίωξη της καλύτερης έκβασης για κάθε εντολέα.",
    imageUrl: "https://picsum.photos/seed/nikos-dimitriou-law/700/900",
    monogram: "Ν.Δ.",
    tag: "Αστικές Διαφορές",
  },
];

const PRACTICE_AREAS = [
  { num: "01", name: "Corporate Law", desc: "M&A, governance, restructuring" },
  { num: "02", name: "Civil Litigation", desc: "Complex disputes & appellate work" },
  { num: "03", name: "Real Estate", desc: "Acquisition, leasing & development" },
  { num: "04", name: "Commercial Law", desc: "Contracts, trade, negotiations" },
  { num: "05", name: "Regulatory Affairs", desc: "EU & national compliance" },
];

const STATS = [
  { num: "35", suffix: "+", label: "Years Combined" },
  { num: "800", suffix: "+", label: "Cases Resolved" },
  { num: "97", suffix: "%", label: "Client Retention" },
  { num: "5", suffix: "", label: "Jurisdictions" },
];

export default function LandPage4() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      { threshold: 0.12 }
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
            ? "px-7 md:px-14 py-5 bg-[rgba(13,27,42,0.97)] backdrop-blur-md border-b border-[#1E3048]"
            : "px-7 md:px-14 py-7 bg-gradient-to-b from-[#0D1B2A] from-60% to-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/landpage4" className="flex items-baseline gap-3 no-underline">
          <span className="font-serif text-[1.3rem] tracking-[0.06em] text-[#F0EFE9]">
            Α<span className="text-[#D4A843]">&</span>Δ
          </span>
          <span className="hidden md:inline text-[0.65rem] tracking-[0.18em] uppercase text-[#4A5E72] font-normal">
            Δικηγορική Εταιρεία
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {["Team", "Practice", "Philosophy", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#8A9BB0] hover:text-[#F0EFE9] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="border-l border-[#1E3048] pl-10 flex gap-8">
            <a href="/" className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4A5E72] hover:text-[#8A9BB0] transition-colors duration-300">
              LP1
            </a>
            <a href="/landpage2" className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4A5E72] hover:text-[#8A9BB0] transition-colors duration-300">
              LP2
            </a>
            <a href="/landpage3" className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4A5E72] hover:text-[#8A9BB0] transition-colors duration-300">
              LP3
            </a>
            <a href="/landpage5" className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4A5E72] hover:text-[#8A9BB0] transition-colors duration-300">
              LP5
            </a>
            <a href="/landpage6" className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4A5E72] hover:text-[#8A9BB0] transition-colors duration-300">
              LP6
            </a>
            <a href="/landpage7" className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4A5E72] hover:text-[#8A9BB0] transition-colors duration-300">
              LP7
            </a>
            <a href="/landpage8" className="lp4-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4A5E72] hover:text-[#8A9BB0] transition-colors duration-300">
              LP8
            </a>
          </li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1B2A]">
        {/* Radial gold glow */}
        <div className="lp4-hero-glow absolute inset-0 pointer-events-none" />

        {/* Subtle architectural grid */}
        <div className="lp4-grid absolute inset-0 pointer-events-none" />

        {/* Grain texture */}
        <div className="lp2-grain absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-7 max-w-[900px] mx-auto">

          {/* Decorative gold emblem */}
          <div className="lp4-fade-1 flex justify-center mb-10">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="lp4-emblem-spin">
              <circle cx="36" cy="36" r="34" stroke="#D4A843" strokeWidth="0.7" opacity="0.35" />
              <circle cx="36" cy="36" r="24" stroke="#D4A843" strokeWidth="0.5" opacity="0.2" />
              {/* Cross lines */}
              <line x1="36" y1="2" x2="36" y2="16" stroke="#D4A843" strokeWidth="0.9" opacity="0.7" />
              <line x1="36" y1="56" x2="36" y2="70" stroke="#D4A843" strokeWidth="0.9" opacity="0.7" />
              <line x1="2" y1="36" x2="16" y2="36" stroke="#D4A843" strokeWidth="0.9" opacity="0.7" />
              <line x1="56" y1="36" x2="70" y2="36" stroke="#D4A843" strokeWidth="0.9" opacity="0.7" />
              {/* Diagonal ticks */}
              <line x1="8"  y1="8"  x2="16" y2="16" stroke="#D4A843" strokeWidth="0.6" opacity="0.4" />
              <line x1="64" y1="8"  x2="56" y2="16" stroke="#D4A843" strokeWidth="0.6" opacity="0.4" />
              <line x1="8"  y1="64" x2="16" y2="56" stroke="#D4A843" strokeWidth="0.6" opacity="0.4" />
              <line x1="64" y1="64" x2="56" y2="56" stroke="#D4A843" strokeWidth="0.6" opacity="0.4" />
              {/* Center diamond */}
              <rect x="32" y="32" width="8" height="8" transform="rotate(45 36 36)" stroke="#D4A843" strokeWidth="1" opacity="0.9" />
              <circle cx="36" cy="36" r="2" fill="#D4A843" opacity="1" />
            </svg>
          </div>

          <p className="lp4-fade-1 text-[0.62rem] tracking-[0.42em] uppercase text-[#4A5E72] mb-10">
            Αθήνα · Ελλάδα · Ιδρ. 1995
          </p>

          <h1
            className="lp4-fade-2 font-serif font-light text-[#F0EFE9] leading-[1.08] mb-8"
            style={{ fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)" }}
          >
            Excellence in law.
            <br />
            <em className="italic text-[#D4A843]">Built on trust.</em>
          </h1>

          {/* Gold animated divider */}
          <div className="flex justify-center mb-9">
            <div className="lp4-divider h-px bg-[#D4A843]" />
          </div>

          <p className="lp4-fade-3 text-[0.88rem] text-[#8A9BB0] max-w-[520px] mx-auto leading-[1.95] mb-14">
            Η εταιρεία Αναστασίου &amp; Δημητρίου συνδυάζει εταιρική ακρίβεια με
            δικαστηριακή αποφασιστικότητα — δύο διαφορετικοί κλάδοι,
            μία κοινή δέσμευση για το αποτέλεσμα.
          </p>

          <div className="lp4-fade-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#team"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.24em] uppercase text-[#0D1B2A] bg-[#D4A843] px-9 py-[1.1rem] hover:bg-[#F5C842] transition-all duration-300"
            >
              Meet the Partners
              <svg
                width="12"
                height="12"
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
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-[0.68rem] tracking-[0.24em] uppercase text-[#D4A843] px-9 py-[1.1rem] border border-[#D4A843]/30 hover:border-[#D4A843] hover:bg-[#D4A843]/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="lp4-fade-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
          <div className="lp4-scroll-line w-px bg-gradient-to-b from-[#D4A843]/60 to-transparent" />
          <span className="text-[0.58rem] tracking-[0.35em] uppercase text-[#4A5E72]">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="border-t border-[#1E3048] bg-[#0D1B2A]">
        <div className="px-7 md:px-14 py-16 md:py-20 border-b border-[#1E3048]">
          <p className="reveal text-[0.62rem] tracking-[0.35em] uppercase text-[#D4A843] mb-3">
            Our Partners
          </p>
          <h2
            className="reveal font-serif font-light text-[#F0EFE9] leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
          >
            Distinguished expertise,
            <br />
            <em className="italic text-[#8A9BB0]">built over decades.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`group relative overflow-hidden ${
                i === 0 ? "md:border-r border-[#1E3048]" : ""
              }`}
            >
              {/* Portrait */}
              <div className="relative h-[58vh] md:h-[65vh] overflow-hidden">
                <Image
                  src={lawyer.imageUrl}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top grayscale brightness-[0.45] transition-all duration-700 group-hover:brightness-[0.35] group-hover:scale-[1.04]"
                />
                {/* Navy fade to bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/20 to-transparent" />
                {/* Subtle navy tint */}
                <div className="absolute inset-0 bg-[#0D1B2A]/25 mix-blend-multiply" />

                {/* Gold top shimmer line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/60 to-transparent" />

                {/* Monogram */}
                <span className="absolute top-8 left-8 font-serif text-[1.8rem] font-light text-[#D4A843]/30 group-hover:text-[#D4A843]/70 transition-colors duration-500 select-none">
                  {lawyer.monogram}
                </span>

                {/* Tag badge */}
                <span className="absolute top-8 right-8 text-[0.58rem] tracking-[0.25em] uppercase text-[#D4A843]/60 border border-[#D4A843]/20 px-3 py-1 group-hover:border-[#D4A843]/60 group-hover:text-[#D4A843] transition-all duration-500">
                  {lawyer.tag}
                </span>

                {/* Name at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                  <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[#8A9BB0] mb-2">
                    {lawyer.role}
                  </p>
                  <h3 className="font-serif text-[2rem] font-light text-[#F0EFE9] leading-[1.1]">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Bio block */}
              <div className="reveal px-8 md:px-12 py-10 border-t border-[#1E3048] bg-[#0D1B2A]">
                <p className="text-[0.86rem] text-[#4A5E72] leading-[1.9] group-hover:text-[#8A9BB0] transition-colors duration-500">
                  {lawyer.bio}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-6 bg-[#D4A843]/25 group-hover:w-10 group-hover:bg-[#D4A843] transition-all duration-500" />
                  <span className="text-[0.62rem] tracking-[0.25em] uppercase text-[#D4A843]/40 group-hover:text-[#D4A843] transition-colors duration-500">
                    Request Consultation
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1E3048] border-b border-[#1E3048] bg-[#122236]">
        {STATS.map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className={`lp4-stat-${i + 1} px-7 md:px-12 py-10 md:py-14 ${
              i < 3 ? "border-r border-[#1E3048]" : ""
            }`}
          >
            <div
              className="font-serif font-light text-[#D4A843] leading-none mb-2"
              style={{ fontSize: "2.8rem" }}
            >
              {num}
              <span className="text-[#D4A843]/40" style={{ fontSize: "1.4rem" }}>
                {suffix}
              </span>
            </div>
            <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#4A5E72]">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ─── PRACTICE AREAS ─── */}
      <section id="practice" className="grid md:grid-cols-2 border-t border-[#1E3048] bg-[#0D1B2A]">
        {/* Left: heading */}
        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#1E3048]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#D4A843] mb-8">
            Practice Areas
          </p>
          <h2
            className="font-serif font-light text-[#F0EFE9] leading-[1.15] mb-8"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
          >
            Comprehensive counsel,
            <br />
            <em className="italic text-[#8A9BB0]">precisely delivered.</em>
          </h2>
          <p className="text-[0.86rem] text-[#4A5E72] leading-[1.95] max-w-[400px]">
            Every matter — from a single contract to a multi-year
            litigation — receives the same depth of analysis and
            dedication to outcome.
          </p>
        </div>

        {/* Right: numbered list */}
        <div className="flex flex-col justify-center px-7 md:px-14 py-20 md:py-32">
          {PRACTICE_AREAS.map(({ num, name, desc }) => (
            <div
              key={name}
              className="group flex items-center gap-6 py-6 border-b border-[#1E3048] hover:pl-2 transition-all duration-300 cursor-default"
            >
              <span className="text-[0.6rem] font-mono tracking-[0.08em] text-[#D4A843]/30 group-hover:text-[#D4A843] transition-colors duration-300 min-w-[22px]">
                {num}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-serif text-[1.3rem] font-normal text-[#8A9BB0] group-hover:text-[#F0EFE9] transition-colors duration-300">
                  {name}
                </span>
                <span className="hidden md:inline text-[0.76rem] text-[#4A5E72] group-hover:text-[#8A9BB0] transition-colors duration-300">
                  {desc}
                </span>
              </div>
              <span className="text-[#1E3048] group-hover:text-[#D4A843] group-hover:translate-x-1 transition-all duration-300 inline-block">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHY / QUOTE ─── */}
      <section
        id="philosophy"
        className="relative overflow-hidden py-36 md:py-56 border-t border-[#1E3048] bg-[#122236]"
      >
        {/* Decorative gold border lines */}
        <div className="lp4-philosophy-lines absolute inset-0 pointer-events-none" />

        {/* Corner ornaments */}
        <div className="absolute top-10 left-10 w-12 h-12 border-t border-l border-[#D4A843]/20 pointer-events-none" />
        <div className="absolute top-10 right-10 w-12 h-12 border-t border-r border-[#D4A843]/20 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-12 h-12 border-b border-l border-[#D4A843]/20 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-[#D4A843]/20 pointer-events-none" />

        {/* Quote content */}
        <div className="relative z-10 text-center max-w-[780px] mx-auto px-7 reveal">
          <div
            className="font-serif text-[#D4A843] leading-none select-none pointer-events-none opacity-25"
            style={{ fontSize: "7rem", lineHeight: 1, marginBottom: "-2.5rem" }}
          >
            &#8220;
          </div>

          <p
            className="font-serif font-light italic text-[#F0EFE9] leading-[1.48]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)" }}
          >
            The law is not a weapon to be wielded,
            <br />
            but a shield forged with knowledge.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-10 bg-[#D4A843]/40" />
            <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#D4A843]/70">
              Αναστασίου &amp; Δημητρίου
            </p>
            <div className="h-px w-10 bg-[#D4A843]/40" />
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="grid md:grid-cols-2 border-t border-[#1E3048] min-h-[60vh] bg-[#0D1B2A]"
      >
        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#1E3048]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#D4A843] mb-6">
            Contact
          </p>
          <h2
            className="font-serif font-light text-[#F0EFE9] leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
          >
            Begin the
            <br />
            conversation.
          </h2>
          <p className="text-[0.86rem] text-[#4A5E72] leading-[1.95] max-w-[400px]">
            Every matter deserves careful attention. Reach out to
            schedule a confidential consultation with one of our partners.
          </p>
        </div>

        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 gap-12">
          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#4A5E72] mb-3">
              Email
            </h4>
            <a
              href="mailto:info@anastasiou-dimitriou.gr"
              className="font-serif text-[1.25rem] font-normal text-[#8A9BB0] no-underline hover:text-[#D4A843] transition-colors duration-300"
            >
              info@anastasiou-dimitriou.gr
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#4A5E72] mb-3">
              Telephone
            </h4>
            <a
              href="tel:+302103620000"
              className="font-serif text-[1.25rem] font-normal text-[#8A9BB0] no-underline hover:text-[#D4A843] transition-colors duration-300"
            >
              +30 210 362 0000
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#4A5E72] mb-3">
              Office
            </h4>
            <p className="font-serif text-[1.25rem] font-normal text-[#8A9BB0] leading-[1.6]">
              Πανεπιστημίου 30
              <br />
              Αθήνα 106 79, Ελλάδα
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#1E3048] px-7 md:px-14 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left bg-[#0D1B2A]">
        <span className="text-[0.68rem] text-[#4A5E72] tracking-[0.06em]">
          © 2026 Αναστασίου &amp; Δημητρίου Δικηγορική Εταιρεία. Με επιφύλαξη παντός δικαιώματος.
        </span>
        <div className="flex gap-8">
          {["Privacy", "Terms", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.68rem] text-[#4A5E72] tracking-[0.06em] no-underline hover:text-[#D4A843] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
