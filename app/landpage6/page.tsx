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

export default function LandPage6() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll<Element>(".lp6-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lp6-visible");
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
            ? "px-7 md:px-14 py-5 bg-[rgba(20,20,20,0.98)] backdrop-blur-md border-b border-[#2A2A2A]"
            : "px-7 md:px-14 py-7 bg-gradient-to-b from-[#141414] from-60% to-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/landpage6" className="flex items-baseline gap-3 no-underline">
          <span className="font-serif text-[1.3rem] tracking-[0.06em] text-[#EDEDEA]">
            Α<span className="text-[#C0392B]">&</span>Δ
          </span>
          <span className="hidden md:inline text-[0.65rem] tracking-[0.18em] uppercase text-[#3A3A3A] font-normal">
            Δικηγορική Εταιρεία
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {["Team", "Practice", "Philosophy", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="lp6-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#777770] hover:text-[#EDEDEA] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="border-l border-[#2A2A2A] pl-10 flex gap-8">
            {[
              { label: "LP1", href: "/" },
              { label: "LP2", href: "/landpage2" },
              { label: "LP3", href: "/landpage3" },
              { label: "LP4", href: "/landpage4" },
              { label: "LP5", href: "/landpage5" },
              { label: "LP7", href: "/landpage7" },
              { label: "LP8", href: "/landpage8" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="lp6-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#3A3A3A] hover:text-[#777770] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#141414]">
        {/* Crimson radial glow */}
        <div className="lp6-hero-glow absolute inset-0 pointer-events-none" />

        {/* Diagonal rule lines — angular, architectural */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1000 1000"
            className="absolute w-[160vw] max-w-[1400px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Diagonal stripes — far apart, barely visible */}
            <line x1="0"    y1="300"  x2="1000" y2="1300" stroke="#C0392B" strokeWidth="0.4" opacity="0.07" />
            <line x1="0"    y1="100"  x2="1000" y2="1100" stroke="#C0392B" strokeWidth="0.4" opacity="0.05" />
            <line x1="0"    y1="-100" x2="1000" y2="900"  stroke="#C0392B" strokeWidth="0.4" opacity="0.04" />
            <line x1="-200" y1="0"    x2="800"  y2="1000" stroke="#C0392B" strokeWidth="0.4" opacity="0.04" />
            {/* Counter-diagonals */}
            <line x1="1000" y1="300"  x2="0"    y2="1300" stroke="#C0392B" strokeWidth="0.4" opacity="0.05" />
            <line x1="1000" y1="100"  x2="0"    y2="1100" stroke="#C0392B" strokeWidth="0.4" opacity="0.04" />
            {/* Horizontal hairline */}
            <line x1="0" y1="500" x2="1000" y2="500" stroke="#C0392B" strokeWidth="0.3" opacity="0.05" />
            {/* Vertical hairline */}
            <line x1="500" y1="0" x2="500" y2="1000" stroke="#C0392B" strokeWidth="0.3" opacity="0.05" />
          </svg>
        </div>

        {/* Grain */}
        <div className="lp2-grain absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-7 max-w-[880px] mx-auto">

          {/* Shield / crest emblem */}
          <div className="lp6-fade-1 flex justify-center mb-10">
            <svg width="54" height="62" viewBox="0 0 54 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="lp6-shield-pulse">
              {/* Outer shield path */}
              <path
                d="M27 2 L52 12 L52 34 Q52 52 27 60 Q2 52 2 34 L2 12 Z"
                stroke="#C0392B"
                strokeWidth="1"
                opacity="0.6"
                fill="none"
              />
              {/* Inner shield path */}
              <path
                d="M27 10 L44 18 L44 34 Q44 47 27 54 Q10 47 10 34 L10 18 Z"
                stroke="#C0392B"
                strokeWidth="0.6"
                opacity="0.3"
                fill="none"
              />
              {/* Horizontal rule across middle */}
              <line x1="10" y1="34" x2="44" y2="34" stroke="#C0392B" strokeWidth="0.6" opacity="0.4" />
              {/* Vertical rule */}
              <line x1="27" y1="10" x2="27" y2="54" stroke="#C0392B" strokeWidth="0.6" opacity="0.4" />
              {/* Center diamond */}
              <rect x="23.5" y="30.5" width="7" height="7" transform="rotate(45 27 34)" stroke="#C0392B" strokeWidth="0.8" opacity="0.9" />
              <circle cx="27" cy="34" r="1.8" fill="#C0392B" opacity="1" />
            </svg>
          </div>

          <p className="lp6-fade-1 text-[0.62rem] tracking-[0.42em] uppercase text-[#3A3A3A] mb-10">
            Αθήνα · Ελλάδα · Ιδρ. 1995
          </p>

          <h1
            className="lp6-fade-2 font-serif font-light text-[#EDEDEA] leading-[1.08] mb-8"
            style={{ fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)" }}
          >
            The weight of law.
            <br />
            <em className="italic text-[#C0392B]">The force of resolve.</em>
          </h1>

          {/* Crimson animated divider */}
          <div className="flex justify-center mb-9">
            <div className="lp6-divider h-px bg-[#C0392B]" />
          </div>

          <p className="lp6-fade-3 text-[0.88rem] text-[#777770] max-w-[520px] mx-auto leading-[1.95] mb-14">
            Η εταιρεία Αναστασίου &amp; Δημητρίου συνδυάζει εταιρική ακρίβεια με
            δικαστηριακή αποφασιστικότητα — δύο διαφορετικοί κλάδοι,
            μία κοινή δέσμευση για το αποτέλεσμα.
          </p>

          <div className="lp6-fade-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#team"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.24em] uppercase text-[#EDEDEA] bg-[#C0392B] px-9 py-[1.1rem] hover:bg-[#E8584A] transition-all duration-300"
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
              className="inline-flex items-center justify-center text-[0.68rem] tracking-[0.24em] uppercase text-[#C0392B] px-9 py-[1.1rem] border border-[#C0392B]/35 hover:border-[#C0392B] hover:bg-[#C0392B]/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="lp6-fade-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
          <div className="lp6-scroll-line w-px bg-gradient-to-b from-[#C0392B]/70 to-transparent" />
          <span className="text-[0.58rem] tracking-[0.35em] uppercase text-[#3A3A3A]">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="border-t border-[#2A2A2A] bg-[#141414]">
        <div className="px-7 md:px-14 py-16 md:py-20 border-b border-[#2A2A2A]">
          <p className="lp6-reveal text-[0.62rem] tracking-[0.35em] uppercase text-[#C0392B] mb-3">
            Our Partners
          </p>
          <h2
            className="lp6-reveal font-serif font-light text-[#EDEDEA] leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
          >
            Distinguished expertise,
            <br />
            <em className="italic text-[#777770]">built over decades.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`group relative overflow-hidden ${
                i === 0 ? "md:border-r border-[#2A2A2A]" : ""
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
                {/* Charcoal fade to bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/15 to-transparent" />
                {/* Subtle crimson colour cast on hover via overlay */}
                <div className="absolute inset-0 bg-[#C0392B]/0 group-hover:bg-[#C0392B]/05 transition-colors duration-700" />

                {/* Crimson shimmer on top edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0392B]/55 to-transparent" />

                {/* Monogram */}
                <span className="absolute top-8 left-8 font-serif text-[1.8rem] font-light text-[#C0392B]/25 group-hover:text-[#C0392B]/65 transition-colors duration-500 select-none">
                  {lawyer.monogram}
                </span>

                {/* Tag badge */}
                <span className="absolute top-8 right-8 text-[0.58rem] tracking-[0.25em] uppercase text-[#C0392B]/55 border border-[#C0392B]/20 px-3 py-1 group-hover:border-[#C0392B]/60 group-hover:text-[#E8584A] transition-all duration-500">
                  {lawyer.tag}
                </span>

                {/* Name at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                  <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[#777770] mb-2">
                    {lawyer.role}
                  </p>
                  <h3 className="font-serif text-[2rem] font-light text-[#EDEDEA] leading-[1.1]">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Bio block */}
              <div className="lp6-reveal px-8 md:px-12 py-10 border-t border-[#2A2A2A] bg-[#141414]">
                <p className="text-[0.86rem] text-[#484848] leading-[1.9] group-hover:text-[#777770] transition-colors duration-500">
                  {lawyer.bio}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-6 bg-[#C0392B]/25 group-hover:w-10 group-hover:bg-[#C0392B] transition-all duration-500" />
                  <span className="text-[0.62rem] tracking-[0.25em] uppercase text-[#C0392B]/40 group-hover:text-[#C0392B] transition-colors duration-500">
                    Request Consultation
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#2A2A2A] border-b border-[#2A2A2A] bg-[#1A1A1A]">
        {STATS.map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className={`lp6-stat-${i + 1} px-7 md:px-12 py-10 md:py-14 ${
              i < 3 ? "border-r border-[#2A2A2A]" : ""
            }`}
          >
            <div
              className="font-serif font-light text-[#C0392B] leading-none mb-2"
              style={{ fontSize: "2.8rem" }}
            >
              {num}
              <span className="text-[#C0392B]/40" style={{ fontSize: "1.4rem" }}>
                {suffix}
              </span>
            </div>
            <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#3A3A3A]">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ─── PRACTICE AREAS ─── */}
      <section id="practice" className="grid md:grid-cols-2 border-t border-[#2A2A2A] bg-[#141414]">
        {/* Left: heading */}
        <div className="lp6-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#2A2A2A]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#C0392B] mb-8">
            Practice Areas
          </p>
          <h2
            className="font-serif font-light text-[#EDEDEA] leading-[1.15] mb-8"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
          >
            Comprehensive counsel,
            <br />
            <em className="italic text-[#777770]">precisely delivered.</em>
          </h2>
          <p className="text-[0.86rem] text-[#484848] leading-[1.95] max-w-[400px]">
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
              className="group flex items-center gap-6 py-6 border-b border-[#2A2A2A] hover:pl-2 transition-all duration-300 cursor-default"
            >
              <span className="text-[0.6rem] font-mono tracking-[0.08em] text-[#C0392B]/30 group-hover:text-[#C0392B] transition-colors duration-300 min-w-[22px]">
                {num}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-serif text-[1.3rem] font-normal text-[#777770] group-hover:text-[#EDEDEA] transition-colors duration-300">
                  {name}
                </span>
                <span className="hidden md:inline text-[0.76rem] text-[#3A3A3A] group-hover:text-[#777770] transition-colors duration-300">
                  {desc}
                </span>
              </div>
              <span className="text-[#2A2A2A] group-hover:text-[#C0392B] group-hover:translate-x-1 transition-all duration-300 inline-block">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHY / QUOTE ─── */}
      <section
        id="philosophy"
        className="relative overflow-hidden py-36 md:py-56 border-t border-[#2A2A2A] bg-[#1A1A1A]"
      >
        {/* Diagonal hatch pattern background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="lp6-hatch" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#C0392B" strokeWidth="0.4" opacity="0.07" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lp6-hatch)" />
          </svg>
        </div>

        {/* Crimson border lines top/bottom */}
        <div className="lp6-philosophy-lines absolute inset-0 pointer-events-none" />

        <div className="relative z-10 text-center max-w-[780px] mx-auto px-7 lp6-reveal">
          <div
            className="font-serif text-[#C0392B] leading-none select-none pointer-events-none opacity-20"
            style={{ fontSize: "7rem", lineHeight: 1, marginBottom: "-2.5rem" }}
          >
            &#8220;
          </div>

          <p
            className="font-serif font-light italic text-[#EDEDEA] leading-[1.48]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)" }}
          >
            The law is not a weapon to be wielded,
            <br />
            but a shield forged with knowledge.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-10 bg-[#C0392B]/40" />
            <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#C0392B]/70">
              Αναστασίου &amp; Δημητρίου
            </p>
            <div className="h-px w-10 bg-[#C0392B]/40" />
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="grid md:grid-cols-2 border-t border-[#2A2A2A] min-h-[60vh] bg-[#141414]"
      >
        <div className="lp6-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#2A2A2A]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#C0392B] mb-6">
            Contact
          </p>
          <h2
            className="font-serif font-light text-[#EDEDEA] leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
          >
            Begin the
            <br />
            conversation.
          </h2>
          <p className="text-[0.86rem] text-[#484848] leading-[1.95] max-w-[400px]">
            Every matter deserves careful attention. Reach out to
            schedule a confidential consultation with one of our partners.
          </p>
        </div>

        <div className="lp6-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 gap-12">
          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#3A3A3A] mb-3">
              Email
            </h4>
            <a
              href="mailto:info@anastasiou-dimitriou.gr"
              className="font-serif text-[1.25rem] font-normal text-[#777770] no-underline hover:text-[#C0392B] transition-colors duration-300"
            >
              info@anastasiou-dimitriou.gr
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#3A3A3A] mb-3">
              Telephone
            </h4>
            <a
              href="tel:+302103620000"
              className="font-serif text-[1.25rem] font-normal text-[#777770] no-underline hover:text-[#C0392B] transition-colors duration-300"
            >
              +30 210 362 0000
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#3A3A3A] mb-3">
              Office
            </h4>
            <p className="font-serif text-[1.25rem] font-normal text-[#777770] leading-[1.6]">
              Πανεπιστημίου 30
              <br />
              Αθήνα 106 79, Ελλάδα
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#2A2A2A] px-7 md:px-14 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left bg-[#141414]">
        <span className="text-[0.68rem] text-[#3A3A3A] tracking-[0.06em]">
          © 2026 Αναστασίου &amp; Δημητρίου Δικηγορική Εταιρεία. Με επιφύλαξη παντός δικαιώματος.
        </span>
        <div className="flex gap-8">
          {["Privacy", "Terms", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.68rem] text-[#3A3A3A] tracking-[0.06em] no-underline hover:text-[#C0392B] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
