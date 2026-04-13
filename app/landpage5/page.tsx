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

export default function LandPage5() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll<Element>(".lp5-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lp5-visible");
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
            ? "px-7 md:px-14 py-5 bg-[rgba(10,31,47,0.97)] backdrop-blur-md border-b border-[#142D3E]"
            : "px-7 md:px-14 py-7 bg-gradient-to-b from-[#0A1F2F] from-60% to-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/landpage5" className="flex items-baseline gap-3 no-underline">
          <span className="font-serif text-[1.3rem] tracking-[0.06em] text-[#F4F2ED]">
            Α<span className="text-[#1DB89A]">&</span>Δ
          </span>
          <span className="hidden md:inline text-[0.65rem] tracking-[0.18em] uppercase text-[#2E4E60] font-normal">
            Δικηγορική Εταιρεία
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {["Team", "Practice", "Philosophy", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="lp5-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#7A9BAD] hover:text-[#F4F2ED] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="border-l border-[#142D3E] pl-10 flex gap-8">
            {[
              { label: "LP1", href: "/" },
              { label: "LP2", href: "/landpage2" },
              { label: "LP3", href: "/landpage3" },
              { label: "LP4", href: "/landpage4" },
              { label: "LP6", href: "/landpage6" },
              { label: "LP7", href: "/landpage7" },
              { label: "LP8", href: "/landpage8" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="lp5-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#2E4E60] hover:text-[#7A9BAD] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1F2F]">
        {/* Teal radial glow — dual layered */}
        <div className="lp5-hero-glow-primary absolute inset-0 pointer-events-none" />
        <div className="lp5-hero-glow-secondary absolute inset-0 pointer-events-none" />

        {/* Animated concentric arcs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 900 900"
            className="absolute w-[140vw] max-w-[1100px] lp5-arcs opacity-40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="450" cy="450" r="380" stroke="#1DB89A" strokeWidth="0.5" opacity="0.18" />
            <circle cx="450" cy="450" r="310" stroke="#1DB89A" strokeWidth="0.5" opacity="0.14" />
            <circle cx="450" cy="450" r="240" stroke="#1DB89A" strokeWidth="0.4" opacity="0.10" />
            <circle cx="450" cy="450" r="168" stroke="#1DB89A" strokeWidth="0.4" opacity="0.08" />
            {/* Axis lines */}
            <line x1="450" y1="70"  x2="450" y2="830" stroke="#1DB89A" strokeWidth="0.3" opacity="0.08" />
            <line x1="70"  y1="450" x2="830" y2="450" stroke="#1DB89A" strokeWidth="0.3" opacity="0.08" />
            <line x1="156" y1="156" x2="744" y2="744" stroke="#1DB89A" strokeWidth="0.3" opacity="0.05" />
            <line x1="744" y1="156" x2="156" y2="744" stroke="#1DB89A" strokeWidth="0.3" opacity="0.05" />
          </svg>
        </div>

        {/* Grain */}
        <div className="lp2-grain absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-7 max-w-[880px] mx-auto">

          {/* Teal animated mark */}
          <div className="lp5-fade-1 flex justify-center mb-10">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer ring */}
              <circle cx="26" cy="26" r="24" stroke="#1DB89A" strokeWidth="0.8" opacity="0.5" />
              {/* Inner ring */}
              <circle cx="26" cy="26" r="14" stroke="#5ECFB7" strokeWidth="0.6" opacity="0.35" />
              {/* Tick marks at cardinal points */}
              <line x1="26" y1="2"  x2="26" y2="10" stroke="#1DB89A" strokeWidth="1.2" opacity="0.8" strokeLinecap="round" />
              <line x1="26" y1="42" x2="26" y2="50" stroke="#1DB89A" strokeWidth="1.2" opacity="0.8" strokeLinecap="round" />
              <line x1="2"  y1="26" x2="10" y2="26" stroke="#1DB89A" strokeWidth="1.2" opacity="0.8" strokeLinecap="round" />
              <line x1="42" y1="26" x2="50" y2="26" stroke="#1DB89A" strokeWidth="1.2" opacity="0.8" strokeLinecap="round" />
              {/* Center dot */}
              <circle cx="26" cy="26" r="3" fill="#1DB89A" opacity="1" />
              <circle cx="26" cy="26" r="6" stroke="#1DB89A" strokeWidth="0.6" opacity="0.5" />
            </svg>
          </div>

          <p className="lp5-fade-1 text-[0.62rem] tracking-[0.42em] uppercase text-[#2E4E60] mb-10">
            Αθήνα · Ελλάδα · Ιδρ. 1995
          </p>

          <h1
            className="lp5-fade-2 font-serif font-light text-[#F4F2ED] leading-[1.08] mb-8"
            style={{ fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)" }}
          >
            Precision of thought.
            <br />
            <em className="italic text-[#1DB89A]">Clarity of counsel.</em>
          </h1>

          {/* Teal animated divider */}
          <div className="flex justify-center mb-9">
            <div className="lp5-divider h-px bg-[#1DB89A]" />
          </div>

          <p className="lp5-fade-3 text-[0.88rem] text-[#7A9BAD] max-w-[520px] mx-auto leading-[1.95] mb-14">
            Η εταιρεία Αναστασίου &amp; Δημητρίου συνδυάζει εταιρική ακρίβεια με
            δικαστηριακή αποφασιστικότητα — δύο διαφορετικοί κλάδοι,
            μία κοινή δέσμευση για το αποτέλεσμα.
          </p>

          <div className="lp5-fade-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#team"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.24em] uppercase text-[#0A1F2F] bg-[#1DB89A] px-9 py-[1.1rem] hover:bg-[#5ECFB7] transition-all duration-300"
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
              className="inline-flex items-center justify-center text-[0.68rem] tracking-[0.24em] uppercase text-[#1DB89A] px-9 py-[1.1rem] border border-[#1DB89A]/30 hover:border-[#1DB89A] hover:bg-[#1DB89A]/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="lp5-fade-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
          <div className="lp5-scroll-line w-px bg-gradient-to-b from-[#1DB89A]/70 to-transparent" />
          <span className="text-[0.58rem] tracking-[0.35em] uppercase text-[#2E4E60]">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="border-t border-[#142D3E] bg-[#0A1F2F]">
        <div className="px-7 md:px-14 py-16 md:py-20 border-b border-[#142D3E]">
          <p className="lp5-reveal text-[0.62rem] tracking-[0.35em] uppercase text-[#1DB89A] mb-3">
            Our Partners
          </p>
          <h2
            className="lp5-reveal font-serif font-light text-[#F4F2ED] leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
          >
            Distinguished expertise,
            <br />
            <em className="italic text-[#7A9BAD]">built over decades.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`group relative overflow-hidden ${
                i === 0 ? "md:border-r border-[#142D3E]" : ""
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
                {/* Teal-tinted fade to bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F2F] via-[#0A1F2F]/15 to-transparent" />
                {/* Subtle teal color wash */}
                <div className="absolute inset-0 bg-[#0A3040]/20 mix-blend-multiply" />

                {/* Teal shimmer on top edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1DB89A]/50 to-transparent" />

                {/* Monogram */}
                <span className="absolute top-8 left-8 font-serif text-[1.8rem] font-light text-[#1DB89A]/25 group-hover:text-[#1DB89A]/65 transition-colors duration-500 select-none">
                  {lawyer.monogram}
                </span>

                {/* Tag badge */}
                <span className="absolute top-8 right-8 text-[0.58rem] tracking-[0.25em] uppercase text-[#1DB89A]/60 border border-[#1DB89A]/20 px-3 py-1 group-hover:border-[#1DB89A]/60 group-hover:text-[#5ECFB7] transition-all duration-500">
                  {lawyer.tag}
                </span>

                {/* Name at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                  <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[#7A9BAD] mb-2">
                    {lawyer.role}
                  </p>
                  <h3 className="font-serif text-[2rem] font-light text-[#F4F2ED] leading-[1.1]">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Bio block */}
              <div className="lp5-reveal px-8 md:px-12 py-10 border-t border-[#142D3E] bg-[#0A1F2F]">
                <p className="text-[0.86rem] text-[#2E4E60] leading-[1.9] group-hover:text-[#7A9BAD] transition-colors duration-500">
                  {lawyer.bio}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-6 bg-[#1DB89A]/25 group-hover:w-10 group-hover:bg-[#1DB89A] transition-all duration-500" />
                  <span className="text-[0.62rem] tracking-[0.25em] uppercase text-[#1DB89A]/40 group-hover:text-[#1DB89A] transition-colors duration-500">
                    Request Consultation
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#142D3E] border-b border-[#142D3E] bg-[#0C2638]">
        {STATS.map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className={`lp5-stat-${i + 1} px-7 md:px-12 py-10 md:py-14 ${
              i < 3 ? "border-r border-[#142D3E]" : ""
            }`}
          >
            <div
              className="font-serif font-light text-[#1DB89A] leading-none mb-2"
              style={{ fontSize: "2.8rem" }}
            >
              {num}
              <span className="text-[#1DB89A]/40" style={{ fontSize: "1.4rem" }}>
                {suffix}
              </span>
            </div>
            <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#2E4E60]">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ─── PRACTICE AREAS ─── */}
      <section id="practice" className="grid md:grid-cols-2 border-t border-[#142D3E] bg-[#0A1F2F]">
        {/* Left: heading */}
        <div className="lp5-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#142D3E]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#1DB89A] mb-8">
            Practice Areas
          </p>
          <h2
            className="font-serif font-light text-[#F4F2ED] leading-[1.15] mb-8"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
          >
            Comprehensive counsel,
            <br />
            <em className="italic text-[#7A9BAD]">precisely delivered.</em>
          </h2>
          <p className="text-[0.86rem] text-[#2E4E60] leading-[1.95] max-w-[400px]">
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
              className="group flex items-center gap-6 py-6 border-b border-[#142D3E] hover:pl-2 transition-all duration-300 cursor-default"
            >
              <span className="text-[0.6rem] font-mono tracking-[0.08em] text-[#1DB89A]/30 group-hover:text-[#1DB89A] transition-colors duration-300 min-w-[22px]">
                {num}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-serif text-[1.3rem] font-normal text-[#7A9BAD] group-hover:text-[#F4F2ED] transition-colors duration-300">
                  {name}
                </span>
                <span className="hidden md:inline text-[0.76rem] text-[#2E4E60] group-hover:text-[#7A9BAD] transition-colors duration-300">
                  {desc}
                </span>
              </div>
              <span className="text-[#142D3E] group-hover:text-[#1DB89A] group-hover:translate-x-1 transition-all duration-300 inline-block">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHY / QUOTE ─── */}
      <section
        id="philosophy"
        className="relative overflow-hidden py-36 md:py-56 border-t border-[#142D3E] bg-[#0C2638]"
      >
        {/* Large decorative wave SVG background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1200 500"
            className="absolute w-full lp5-wave-bg"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 250 Q300 100 600 250 Q900 400 1200 250"
              stroke="#1DB89A"
              strokeWidth="0.6"
              opacity="0.12"
            />
            <path
              d="M0 250 Q300 150 600 250 Q900 350 1200 250"
              stroke="#1DB89A"
              strokeWidth="0.4"
              opacity="0.08"
            />
            <path
              d="M0 250 Q300 200 600 250 Q900 300 1200 250"
              stroke="#5ECFB7"
              strokeWidth="0.3"
              opacity="0.06"
            />
          </svg>
        </div>

        {/* Teal border lines top/bottom */}
        <div className="lp5-philosophy-lines absolute inset-0 pointer-events-none" />

        <div className="relative z-10 text-center max-w-[780px] mx-auto px-7 lp5-reveal">
          <div
            className="font-serif text-[#1DB89A] leading-none select-none pointer-events-none opacity-20"
            style={{ fontSize: "7rem", lineHeight: 1, marginBottom: "-2.5rem" }}
          >
            &#8220;
          </div>

          <p
            className="font-serif font-light italic text-[#F4F2ED] leading-[1.48]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)" }}
          >
            The law is not a weapon to be wielded,
            <br />
            but a shield forged with knowledge.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-10 bg-[#1DB89A]/40" />
            <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#1DB89A]/70">
              Αναστασίου &amp; Δημητρίου
            </p>
            <div className="h-px w-10 bg-[#1DB89A]/40" />
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="grid md:grid-cols-2 border-t border-[#142D3E] min-h-[60vh] bg-[#0A1F2F]"
      >
        <div className="lp5-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#142D3E]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#1DB89A] mb-6">
            Contact
          </p>
          <h2
            className="font-serif font-light text-[#F4F2ED] leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
          >
            Begin the
            <br />
            conversation.
          </h2>
          <p className="text-[0.86rem] text-[#2E4E60] leading-[1.95] max-w-[400px]">
            Every matter deserves careful attention. Reach out to
            schedule a confidential consultation with one of our partners.
          </p>
        </div>

        <div className="lp5-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 gap-12">
          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#2E4E60] mb-3">
              Email
            </h4>
            <a
              href="mailto:info@anastasiou-dimitriou.gr"
              className="font-serif text-[1.25rem] font-normal text-[#7A9BAD] no-underline hover:text-[#1DB89A] transition-colors duration-300"
            >
              info@anastasiou-dimitriou.gr
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#2E4E60] mb-3">
              Telephone
            </h4>
            <a
              href="tel:+302103620000"
              className="font-serif text-[1.25rem] font-normal text-[#7A9BAD] no-underline hover:text-[#1DB89A] transition-colors duration-300"
            >
              +30 210 362 0000
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#2E4E60] mb-3">
              Office
            </h4>
            <p className="font-serif text-[1.25rem] font-normal text-[#7A9BAD] leading-[1.6]">
              Πανεπιστημίου 30
              <br />
              Αθήνα 106 79, Ελλάδα
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#142D3E] px-7 md:px-14 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left bg-[#0A1F2F]">
        <span className="text-[0.68rem] text-[#2E4E60] tracking-[0.06em]">
          © 2026 Αναστασίου &amp; Δημητρίου Δικηγορική Εταιρεία. Με επιφύλαξη παντός δικαιώματος.
        </span>
        <div className="flex gap-8">
          {["Privacy", "Terms", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.68rem] text-[#2E4E60] tracking-[0.06em] no-underline hover:text-[#1DB89A] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
