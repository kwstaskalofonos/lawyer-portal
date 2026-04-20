"use client";

import { useEffect, useState } from "react";
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

export default function LandPage2() {
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
            ? "px-7 md:px-14 py-5 bg-[rgba(11,11,11,0.96)] backdrop-blur-md"
            : "px-7 md:px-14 py-7 bg-gradient-to-b from-[#0b0b0b] from-60% to-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="/landpage2"
          className="flex items-baseline gap-3 no-underline"
        >
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
            <a href="/landpage4" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              LP4
            </a>
            <a href="/template1" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              T1
            </a>
            <a href="/template2" className="nav-link text-[0.7rem] tracking-[0.18em] uppercase text-[#4a4a4a] hover:text-[#707070] transition-colors duration-300">
              T2
            </a>
          </li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://loremflickr.com/1920/1080/athens,neoclassical,greek?lock=12"
            alt=""
            fill
            className="object-cover grayscale"
            priority
            quality={80}
          />
        </div>

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-[#0b0b0b]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/70 via-transparent to-[#0b0b0b]/70" />

        {/* Animated shimmer sweep */}
        <div className="lp2-hero-shimmer absolute inset-0 pointer-events-none" />

        {/* Grain texture */}
        <div className="lp2-grain absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-7 max-w-[860px] mx-auto">
          <p className="lp2-fade-1 text-[0.62rem] tracking-[0.42em] uppercase text-[#4a4a4a] mb-10">
            Αθήνα · Ελλάδα · Ιδρ. 1995
          </p>

          <h1
            className="lp2-fade-2 font-serif font-light text-[#e2e2e2] leading-[1.08] mb-8"
            style={{ fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)" }}
          >
            Two minds.
            <br />
            <em className="italic text-[#a8a8a8]">One purpose.</em>
          </h1>

          {/* Animated divider */}
          <div className="flex justify-center mb-9">
            <div className="lp2-divider h-px bg-[#3a3a3a]" />
          </div>

          <p className="lp2-fade-3 text-[0.88rem] text-[#6a6a6a] max-w-[500px] mx-auto leading-[1.95] mb-14">
            Η εταιρεία Αναστασίου &amp; Δημητρίου συνδυάζει εταιρική ακρίβεια με
            δικαστηριακή αποφασιστικότητα — δύο διαφορετικοί κλάδοι,
            μία κοινή δέσμευση για το αποτέλεσμα.
          </p>

          <div className="lp2-fade-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#team"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.24em] uppercase text-[#d8d8d8] px-9 py-[1.1rem] border border-[#2e2e2e] hover:border-[#707070] hover:bg-white/[0.04] transition-all duration-300"
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
              className="inline-flex items-center justify-center text-[0.68rem] tracking-[0.24em] uppercase text-[#4a4a4a] px-9 py-[1.1rem] hover:text-[#707070] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="lp2-fade-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
          <div className="lp2-scroll-line w-px bg-gradient-to-b from-transparent to-[#3a3a3a]" />
          <span className="text-[0.58rem] tracking-[0.35em] uppercase text-[#3a3a3a]">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="border-t border-[#1a1a1a]">
        <div className="px-7 md:px-14 py-16 md:py-20 border-b border-[#1a1a1a]">
          <p className="reveal text-[0.62rem] tracking-[0.35em] uppercase text-[#4a4a4a] mb-3">
            Our Partners
          </p>
          <h2
            className="reveal font-serif font-light text-[#d8d8d8] leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
          >
            Distinguished expertise,
            <br />
            <em className="italic text-[#8c8c8c]">built over decades.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          {LAWYERS.map((lawyer, i) => (
            <div
              key={lawyer.name}
              className={`lp2-lawyer-card group relative overflow-hidden ${
                i === 0 ? "md:border-r border-[#1a1a1a]" : ""
              }`}
            >
              {/* Portrait image */}
              <div className="relative h-[58vh] md:h-[65vh] overflow-hidden">
                <Image
                  src={lawyer.imageUrl}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top grayscale brightness-[0.55] transition-all duration-700 group-hover:brightness-[0.45] group-hover:scale-[1.04]"
                />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/20 to-transparent" />

                {/* Monogram top-left */}
                <span className="absolute top-8 left-8 font-serif text-[1.8rem] font-light text-[#2e2e2e] group-hover:text-[#4a4a4a] transition-colors duration-500 select-none">
                  {lawyer.monogram}
                </span>

                {/* Tag badge top-right */}
                <span className="absolute top-8 right-8 text-[0.58rem] tracking-[0.25em] uppercase text-[#4a4a4a] border border-[#232323] px-3 py-1 group-hover:border-[#3a3a3a] group-hover:text-[#707070] transition-all duration-500">
                  {lawyer.tag}
                </span>

                {/* Name overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
                  <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[#4a4a4a] mb-2">
                    {lawyer.role}
                  </p>
                  <h3 className="font-serif text-[2rem] font-light text-[#d8d8d8] leading-[1.1]">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Bio block */}
              <div className="reveal px-8 md:px-12 py-10 border-t border-[#1a1a1a] bg-[#0b0b0b]">
                <p className="text-[0.86rem] text-[#5a5a5a] leading-[1.9] group-hover:text-[#707070] transition-colors duration-500">
                  {lawyer.bio}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-6 bg-[#2e2e2e] group-hover:w-10 group-hover:bg-[#4a4a4a] transition-all duration-500" />
                  <span className="text-[0.62rem] tracking-[0.25em] uppercase text-[#3a3a3a] group-hover:text-[#5a5a5a] transition-colors duration-500">
                    Request Consultation
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1a1a1a] border-b border-[#1a1a1a] bg-[#080808]">
        {STATS.map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className={`lp2-stat-${i + 1} px-7 md:px-12 py-10 md:py-14 ${
              i < 3 ? "border-r border-[#1a1a1a]" : ""
            }`}
          >
            <div
              className="font-serif font-light text-[#b8b8b8] leading-none mb-2"
              style={{ fontSize: "2.8rem" }}
            >
              {num}
              <span className="text-[#4a4a4a]" style={{ fontSize: "1.4rem" }}>
                {suffix}
              </span>
            </div>
            <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#3a3a3a]">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ─── PRACTICE AREAS ─── */}
      <section
        id="practice"
        className="grid md:grid-cols-2 border-t border-[#1a1a1a]"
      >
        {/* Left: heading */}
        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#1a1a1a]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#4a4a4a] mb-8">
            Practice Areas
          </p>
          <h2
            className="font-serif font-light text-[#d8d8d8] leading-[1.15] mb-8"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
          >
            Comprehensive counsel,
            <br />
            <em className="italic text-[#8c8c8c]">precisely delivered.</em>
          </h2>
          <p className="text-[0.86rem] text-[#5a5a5a] leading-[1.95] max-w-[400px]">
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
              className="group flex items-center gap-6 py-6 border-b border-[#1a1a1a] hover:pl-2 transition-all duration-300 cursor-default"
            >
              <span className="text-[0.6rem] font-mono tracking-[0.08em] text-[#2e2e2e] group-hover:text-[#5a5a5a] transition-colors duration-300 min-w-[22px]">
                {num}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-serif text-[1.3rem] font-normal text-[#b0b0b0] group-hover:text-[#d8d8d8] transition-colors duration-300">
                  {name}
                </span>
                <span className="hidden md:inline text-[0.76rem] text-[#3a3a3a] group-hover:text-[#5a5a5a] transition-colors duration-300">
                  {desc}
                </span>
              </div>
              <span className="text-[#242424] group-hover:text-[#5a5a5a] group-hover:translate-x-1 transition-all duration-300 inline-block">
                →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHILOSOPHY / QUOTE with blurred BG image ─── */}
      <section
        id="philosophy"
        className="relative overflow-hidden py-36 md:py-56 border-t border-[#1a1a1a]"
      >
        {/* Background image — blurred, very dark */}
        <div className="absolute inset-0 scale-110 pointer-events-none">
          <Image
            src="https://loremflickr.com/1920/900/propylaea,panepistimiou,athens?lock=5"
            alt=""
            fill
            className="object-cover lp2-quote-img"
          />
        </div>

        {/* Top / bottom gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-transparent to-[#0b0b0b]" />

        {/* Grain */}
        <div className="lp2-grain absolute inset-0 pointer-events-none" />

        {/* Quote content */}
        <div className="relative z-10 text-center max-w-[780px] mx-auto px-7 reveal">
          {/* Decorative open-quote glyph */}
          <div
            className="font-serif text-[#222] leading-none mb-0 select-none pointer-events-none"
            style={{ fontSize: "7rem", lineHeight: 1, marginBottom: "-2.5rem" }}
          >
            &#8220;
          </div>

          <p
            className="font-serif font-light italic text-[#b0b0b0] leading-[1.48]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)" }}
          >
            The law is not a weapon to be wielded,
            <br />
            but a shield forged with knowledge.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-10 bg-[#2e2e2e]" />
            <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#4a4a4a]">
              Αναστασίου &amp; Δημητρίου
            </p>
            <div className="h-px w-10 bg-[#2e2e2e]" />
          </div>
        </div>
      </section>

      {/* ─── FEATURE IMAGE BAND ─── */}
      <section className="relative overflow-hidden h-[60vh] md:h-[70vh] border-t border-[#1a1a1a]">
        {/* Background */}
        <Image
          src="https://loremflickr.com/1920/800/panepistimiou,athens,university,neoclassical?lock=9"
          alt=""
          fill
          className="object-cover lp2-feature-img"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/80 via-transparent to-transparent" />

        {/* Shimmer */}
        <div className="lp2-hero-shimmer absolute inset-0 pointer-events-none" />

        {/* Text content anchored left */}
        <div className="relative z-10 h-full flex flex-col justify-center px-7 md:px-14 max-w-2xl reveal">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#4a4a4a] mb-6">
            Τα Γραφεία μας
          </p>
          <h2
            className="font-serif font-light text-[#d8d8d8] leading-[1.12] mb-6"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            Ένας χώρος χτισμένος
            <br />
            <em className="italic text-[#8c8c8c]">για σοβαρή εργασία.</em>
          </h2>
          <p className="text-[0.86rem] text-[#5a5a5a] leading-[1.9] max-w-[380px]">
            Στεγαζόμαστε στην οδό Πανεπιστημίου, δίπλα στα Προπύλαια,
            σε ένα διακριτικό και επαγγελματικό περιβάλλον που αντικατοπτρίζει
            τις αξίες της εταιρείας μας.
          </p>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="grid md:grid-cols-2 border-t border-[#1a1a1a] min-h-[60vh]"
      >
        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 md:border-r border-[#1a1a1a]">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-[#4a4a4a] mb-6">
            Contact
          </p>
          <h2
            className="font-serif font-light text-[#d8d8d8] leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
          >
            Begin the
            <br />
            conversation.
          </h2>
          <p className="text-[0.86rem] text-[#5a5a5a] leading-[1.95] max-w-[400px]">
            Every matter deserves careful attention. Reach out to
            schedule a confidential consultation with one of our partners.
          </p>
        </div>

        <div className="reveal flex flex-col justify-center px-7 md:px-14 py-20 md:py-32 gap-12">
          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#3a3a3a] mb-3">
              Email
            </h4>
            <a
              href="mailto:office@ps-law.gr"
              className="font-serif text-[1.25rem] font-normal text-[#b0b0b0] no-underline hover:text-[#d8d8d8] transition-colors duration-300"
            >
              info@anastasiou-dimitriou.gr
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#3a3a3a] mb-3">
              Telephone
            </h4>
            <a
              href="tel:+302103620000"
              className="font-serif text-[1.25rem] font-normal text-[#b0b0b0] no-underline hover:text-[#d8d8d8] transition-colors duration-300"
            >
              +30 210 362 0000
            </a>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.28em] uppercase text-[#3a3a3a] mb-3">
              Office
            </h4>
            <p className="font-serif text-[1.25rem] font-normal text-[#b0b0b0] leading-[1.6]">
              Πανεπιστημίου 30
              <br />
              Αθήνα 106 79, Ελλάδα
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#1a1a1a] px-7 md:px-14 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <span className="text-[0.68rem] text-[#2e2e2e] tracking-[0.06em]">
          © 2026 Αναστασίου &amp; Δημητρίου Δικηγορική Εταιρεία. Με επιφύλαξη παντός δικαιώματος.
        </span>
        <div className="flex gap-8">
          {["Privacy", "Terms", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.68rem] text-[#2e2e2e] tracking-[0.06em] no-underline hover:text-[#6a6a6a] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
