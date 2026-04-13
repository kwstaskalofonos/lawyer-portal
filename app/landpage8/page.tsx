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

export default function LandPage8() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll<Element>(".lp8-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lp8-visible");
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
            ? "px-7 md:px-14 py-5 bg-[rgba(12,12,12,0.98)] backdrop-blur-md border-b border-[#1F1F1F]"
            : "px-7 md:px-14 py-7 bg-gradient-to-b from-[#0C0C0C] from-60% to-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/landpage8" className="flex items-baseline gap-3 no-underline">
          <span className="font-serif text-[1.3rem] tracking-[0.06em] text-[#E6E6E4]">
            Α<span className="text-[#7CAE7A]">&</span>Δ
          </span>
          <span className="hidden md:inline text-[0.65rem] tracking-[0.18em] uppercase text-[#2E2E2C] font-normal">
            Δικηγορική Εταιρεία
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {["Team", "Practice", "Philosophy", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="lp8-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#5A5A58] hover:text-[#E6E6E4] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="border-l border-[#1F1F1F] pl-10 flex gap-8">
            {[
              { label: "LP1", href: "/" },
              { label: "LP2", href: "/landpage2" },
              { label: "LP3", href: "/landpage3" },
              { label: "LP4", href: "/landpage4" },
              { label: "LP5", href: "/landpage5" },
              { label: "LP6", href: "/landpage6" },
              { label: "LP7", href: "/landpage7" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="lp8-nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#2E2E2C] hover:text-[#5A5A58] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0C0C]">
        {/* Sage radial glow — softer, wider */}
        <div className="lp8-hero-glow absolute inset-0 pointer-events-none" />

        {/* Botanical branch illustration — left & right flanks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1200 900"
            className="absolute inset-0 w-full h-full lp8-branch-sway"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* ── LEFT BRANCH ── */}
            {/* Main stem */}
            <path d="M -40 900 Q 80 700 120 500 Q 160 300 100 80" stroke="#7CAE7A" strokeWidth="0.8" opacity="0.12" />
            {/* Sub-branches left */}
            <path d="M 90 620 Q 30 560 -20 520"  stroke="#7CAE7A" strokeWidth="0.6" opacity="0.10" />
            <path d="M 110 500 Q 60 460 20 420"   stroke="#7CAE7A" strokeWidth="0.5" opacity="0.09" />
            <path d="M 105 380 Q 160 340 200 300" stroke="#7CAE7A" strokeWidth="0.5" opacity="0.08" />
            <path d="M 100 260 Q 50 230 10 200"   stroke="#7CAE7A" strokeWidth="0.5" opacity="0.07" />
            <path d="M 102 180 Q 150 160 190 130" stroke="#7CAE7A" strokeWidth="0.4" opacity="0.07" />
            {/* Leaf hints left */}
            <ellipse cx="-15" cy="515" rx="14" ry="7" transform="rotate(-30 -15 515)" stroke="#A8CAAB" strokeWidth="0.5" opacity="0.09" />
            <ellipse cx="210" cy="295" rx="12" ry="6" transform="rotate(20 210 295)"  stroke="#A8CAAB" strokeWidth="0.5" opacity="0.08" />
            <ellipse cx="195" cy="125" rx="11" ry="5" transform="rotate(-15 195 125)" stroke="#A8CAAB" strokeWidth="0.4" opacity="0.07" />

            {/* ── RIGHT BRANCH ── */}
            <path d="M 1240 900 Q 1120 700 1080 500 Q 1040 300 1100 80" stroke="#7CAE7A" strokeWidth="0.8" opacity="0.12" />
            <path d="M 1110 620 Q 1170 560 1220 520" stroke="#7CAE7A" strokeWidth="0.6" opacity="0.10" />
            <path d="M 1090 500 Q 1140 460 1180 420" stroke="#7CAE7A" strokeWidth="0.5" opacity="0.09" />
            <path d="M 1095 380 Q 1040 340 1000 300" stroke="#7CAE7A" strokeWidth="0.5" opacity="0.08" />
            <path d="M 1100 260 Q 1150 230 1190 200" stroke="#7CAE7A" strokeWidth="0.5" opacity="0.07" />
            <path d="M 1098 180 Q 1050 160 1010 130" stroke="#7CAE7A" strokeWidth="0.4" opacity="0.07" />
            <ellipse cx="1225" cy="515" rx="14" ry="7" transform="rotate(30 1225 515)"  stroke="#A8CAAB" strokeWidth="0.5" opacity="0.09" />
            <ellipse cx="990"  cy="295" rx="12" ry="6" transform="rotate(-20 990 295)"  stroke="#A8CAAB" strokeWidth="0.5" opacity="0.08" />
            <ellipse cx="1005" cy="125" rx="11" ry="5" transform="rotate(15 1005 125)"  stroke="#A8CAAB" strokeWidth="0.4" opacity="0.07" />
          </svg>
        </div>

        {/* Grain */}
        <div className="lp2-grain absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-7 max-w-[880px] mx-auto">

          {/* Botanical leaf emblem */}
          <div className="lp8-fade-1 flex justify-center mb-10">
            <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="lp8-leaf-breathe">
              {/* Outer leaf form */}
              <path
                d="M26 4 C 48 10, 52 36, 26 56 C 0 36, 4 10, 26 4 Z"
                stroke="#7CAE7A"
                strokeWidth="0.9"
                opacity="0.6"
                fill="none"
              />
              {/* Inner leaf form */}
              <path
                d="M26 12 C 40 17, 42 36, 26 48 C 10 36, 12 17, 26 12 Z"
                stroke="#A8CAAB"
                strokeWidth="0.6"
                opacity="0.3"
                fill="none"
              />
              {/* Central vein */}
              <line x1="26" y1="4" x2="26" y2="56" stroke="#7CAE7A" strokeWidth="0.7" opacity="0.5" />
              {/* Side veins */}
              <path d="M26 20 Q 36 22 40 26" stroke="#7CAE7A" strokeWidth="0.5" opacity="0.35" />
              <path d="M26 20 Q 16 22 12 26" stroke="#7CAE7A" strokeWidth="0.5" opacity="0.35" />
              <path d="M26 32 Q 37 34 40 38" stroke="#7CAE7A" strokeWidth="0.4" opacity="0.28" />
              <path d="M26 32 Q 15 34 12 38" stroke="#7CAE7A" strokeWidth="0.4" opacity="0.28" />
              {/* Centre dot */}
              <circle cx="26" cy="30" r="2.5" fill="#7CAE7A" opacity="0.9" />
            </svg>
          </div>

          <p className="lp8-fade-1 text-[0.62rem] tracking-[0.42em] uppercase text-[#2E2E2C] mb-10">
            Αθήνα · Ελλάδα · Ιδρ. 1995
          </p>

          <h1
            className="lp8-fade-2 font-serif font-light text-[#E6E6E4] leading-[1.08] mb-8"
            style={{ fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)" }}
          >
            Rooted in principle.
            <br />
            <em className="italic text-[#7CAE7A]">Grown through trust.</em>
          </h1>

          {/* Sage animated divider */}
          <div className="flex justify-center mb-9">
            <div className="lp8-divider h-px bg-[#7CAE7A]" />
          </div>

          <p className="lp8-fade-3 text-[0.88rem] text-[#5A5A58] max-w-[520px] mx-auto leading-[1.95] mb-14">
            Η εταιρεία Αναστασίου &amp; Δημητρίου συνδυάζει εταιρική ακρίβεια με
            δικαστηριακή αποφασιστικότητα — δύο διαφορετικοί κλάδοι,
            μία κοινή δέσμευση για το αποτέλεσμα.
          </p>

          <div className="lp8-fade-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#team"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.24em] uppercase text-[#0C0C0C] bg-[#7CAE7A] px-9 py-[1.1rem] hover:bg-[#A8CAAB] transition-all duration-300"
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
              className="inline-flex items-center justify-center text-[0.68rem] tracking-[0.24em] uppercase text-[#7CAE7A] px-9 py-[1.1rem] border border-[#7CAE7A]/30 hover:border-[#7CAE7A] hover:bg-[#7CAE7A]/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="lp8-fade-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
          <div className="lp8-scroll-line w-px bg-gradient-to-b from-[#7CAE7A]/70 to-transparent" />
          <span className="text-[0.58rem] tracking-[0.35em] uppercase text-[#2E2E2C]">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="border-t border-[#1F1F1F] bg-[#0C0C0C]">
        <div className="px-7 md:px-14 py-16 md:py-20 border-b border-[#1F1F1F]">
          <p className="lp8-reveal text-[0.62rem] tracking-[0.35em] uppercase text-[#7CAE7A] mb-3">
            Our Partners
          </p>
          <h2
            className="lp8-reveal font-serif font-light text-[#E6E6E4] leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
          >
            Distinguished expertise,
            <br />
            <em className="italic text-[#5A5A58]">built over decades.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`group relative overflow-hidden ${
                i === 0 ? "md:border-r border-[#1F1F1F]" : ""
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
                {/* Black fade to bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/15 to-transparent" />
                {/* Sage tint wash on hover */}
                <div className="absolute inset-0 bg-[#7CAE7A]/0 group-hover:bg-[#7CAE7A]/05 transition-colors duration-700" />

                {/* Sage shimmer on top edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7CAE7A]/50 to-transparent" />

                {/* Monogram */}
                <span className="absolute top-8 left-8 font-serif text-[1.8rem] font-light text-[#7CAE7A]/25 group-hover:text-[#7CAE7A]/65 transition-colors duration-500 select-none">
                  {lawyer.monogram}
                </span>

                {/* Tag badge */}
                <span className="absolute top-8 right-8 text-[0.58rem] tracking-[0.25em] uppercase text-[#7CAE7A]/55 border border-[#7CAE7A]/20 px-3 py-1 group-hover:border-[#7CAE7A]/60 group-hover:text-[#A8CAAB] transition-all duration-500">
                  {lawyer.tag}
                </span>

                {/* Name at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                  <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[#5A5A58] mb-2">
                    {lawyer.role}
                  </p>
                  <h3 className="font-serif text-[2rem] font-light text-[#E6E6E4] leading-[1.1]">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Bio block */}
              <div className="lp8-reveal px-8 md:px-12 py-10 border-t border-[#1F1F1F] bg-[#0C0C0C]">
                <p className="text-[0.86rem] text-[#383836] leading-[1.9] group-hover:text-[#5A5A58] transition-colors duration-500">
                  {lawyer.bio}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-6 bg-[#7CAE7A]/25 group-hover:w-10 group-hover:bg-[#7CAE7A] transition-all duration-500" />
                  <span className="text-[0.62rem] tracking-[0.25em] uppercase text-[#7CAE7A]/40 group-hover:text-[#7CAE7A] transition-colors duration-500">
                    Request Consultation
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1F1F1F] border-b border-[#1F1F1F] bg-[#121212]">
        {STATS.map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className={`lp8-stat-${i + 1} px-7 md:px-12 py-10 md:py-14 ${
              i < 3 ? "border-r border-[#1F1F1F]" : ""
            }`}
          >
            <div
              className="font-serif font-light text-[#7CAE7A] leading-none mb-2"
              style={{ fontSize: "2.8rem" }}
            >
              {num}
              <span className="text-[#7CAE7A]/40" style={{ fontSize: "1.4rem" }}>
                {suffix}
              </span>
            </div>
            <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#2E2E2C]">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ─── PRACTICE AREAS ─── */}
      <section id="practice" className="grid md:grid-cols-2 border-t border-[#1F1F1F] bg-[#0C0C0C]">
        {/* Left: heading */}
        <div className="lp8-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#1F1F1F]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#7CAE7A] mb-8">
            Practice Areas
          </p>
          <h2
            className="font-serif font-light text-[#E6E6E4] leading-[1.15] mb-8"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
          >
            Comprehensive counsel,
            <br />
            <em className="italic text-[#5A5A58]">precisely delivered.</em>
          </h2>
          <p className="text-[0.86rem] text-[#383836] leading-[1.95] max-w-[400px]">
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
              className="group flex items-center gap-6 py-6 border-b border-[#1F1F1F] hover:pl-2 transition-all duration-300 cursor-default"
            >
              <span className="text-[0.6rem] font-mono tracking-[0.08em] text-[#7CAE7A]/30 group-hover:text-[#7CAE7A] transition-colors duration-300 min-w-[22px]">
                {num}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-serif text-[1.3rem] font-normal text-[#5A5A58] group-hover:text-[#E6E6E4] transition-colors duration-300">
                  {name}
                </span>
                <span className="hidden md:inline text-[0.76rem] text-[#2E2E2C] group-hover:text-[#5A5A58] transition-colors duration-300">
                  {desc}
                </span>
              </div>
              <span className="text-[#1F1F1F] group-hover:text-[#7CAE7A] group-hover:translate-x-1 transition-all duration-300 inline-block">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHY / QUOTE ─── */}
      <section
        id="philosophy"
        className="relative overflow-hidden py-36 md:py-56 border-t border-[#1F1F1F] bg-[#121212]"
      >
        {/* Organic ring pattern background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 800 600"
            className="absolute w-[120%] max-w-[1000px] lp8-rings-breathe"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Concentric organic ovals — slightly irregular */}
            <ellipse cx="400" cy="300" rx="370" ry="260" stroke="#7CAE7A" strokeWidth="0.5" opacity="0.08" />
            <ellipse cx="400" cy="300" rx="290" ry="200" stroke="#7CAE7A" strokeWidth="0.4" opacity="0.07" />
            <ellipse cx="400" cy="300" rx="210" ry="145" stroke="#A8CAAB" strokeWidth="0.4" opacity="0.06" />
            <ellipse cx="400" cy="300" rx="130" ry="90"  stroke="#7CAE7A" strokeWidth="0.3" opacity="0.06" />
            {/* Small botanical accent marks */}
            <circle cx="400" cy="40"  r="3" fill="#7CAE7A" opacity="0.12" />
            <circle cx="400" cy="560" r="3" fill="#7CAE7A" opacity="0.12" />
            <circle cx="30"  cy="300" r="3" fill="#7CAE7A" opacity="0.12" />
            <circle cx="770" cy="300" r="3" fill="#7CAE7A" opacity="0.12" />
          </svg>
        </div>

        {/* Sage border lines top/bottom */}
        <div className="lp8-philosophy-lines absolute inset-0 pointer-events-none" />

        <div className="relative z-10 text-center max-w-[780px] mx-auto px-7 lp8-reveal">
          <div
            className="font-serif text-[#7CAE7A] leading-none select-none pointer-events-none opacity-20"
            style={{ fontSize: "7rem", lineHeight: 1, marginBottom: "-2.5rem" }}
          >
            &#8220;
          </div>

          <p
            className="font-serif font-light italic text-[#E6E6E4] leading-[1.48]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)" }}
          >
            The law is not a weapon to be wielded,
            <br />
            but a shield forged with knowledge.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-10 bg-[#7CAE7A]/40" />
            <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#7CAE7A]/70">
              Αναστασίου &amp; Δημητρίου
            </p>
            <div className="h-px w-10 bg-[#7CAE7A]/40" />
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="grid md:grid-cols-2 border-t border-[#1F1F1F] min-h-[60vh] bg-[#0C0C0C]"
      >
        <div className="lp8-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#1F1F1F]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#7CAE7A] mb-6">
            Contact
          </p>
          <h2
            className="font-serif font-light text-[#E6E6E4] leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
          >
            Begin the
            <br />
            conversation.
          </h2>
          <p className="text-[0.86rem] text-[#383836] leading-[1.95] max-w-[400px]">
            Every matter deserves careful attention. Reach out to
            schedule a confidential consultation with one of our partners.
          </p>
        </div>

        <div className="lp8-reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 gap-12">
          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#2E2E2C] mb-3">
              Email
            </h4>
            <a
              href="mailto:info@anastasiou-dimitriou.gr"
              className="font-serif text-[1.25rem] font-normal text-[#5A5A58] no-underline hover:text-[#7CAE7A] transition-colors duration-300"
            >
              info@anastasiou-dimitriou.gr
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#2E2E2C] mb-3">
              Telephone
            </h4>
            <a
              href="tel:+302103620000"
              className="font-serif text-[1.25rem] font-normal text-[#5A5A58] no-underline hover:text-[#7CAE7A] transition-colors duration-300"
            >
              +30 210 362 0000
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#2E2E2C] mb-3">
              Office
            </h4>
            <p className="font-serif text-[1.25rem] font-normal text-[#5A5A58] leading-[1.6]">
              Πανεπιστημίου 30
              <br />
              Αθήνα 106 79, Ελλάδα
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#1F1F1F] px-7 md:px-14 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left bg-[#0C0C0C]">
        <span className="text-[0.68rem] text-[#2E2E2C] tracking-[0.06em]">
          © 2026 Αναστασίου &amp; Δημητρίου Δικηγορική Εταιρεία. Με επιφύλαξη παντός δικαιώματος.
        </span>
        <div className="flex gap-8">
          {["Privacy", "Terms", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.68rem] text-[#2E2E2C] tracking-[0.06em] no-underline hover:text-[#7CAE7A] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
