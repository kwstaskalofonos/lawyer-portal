"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Data ── */
const SERVICES = [
  {
    title: "Corporate Law",
    sub: "Business & Commercial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    sub: "Property Transactions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Family Law",
    sub: "Divorce & Custody",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Litigation",
    sub: "Court Representation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const WHY = [
  {
    title: "Precision",
    desc: "Meticulous and detail-oriented in every case we take.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Confidentiality",
    desc: "Your privacy is our priority — always.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: "Results",
    desc: "Proven success across every practice area.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote: "Excellent service and outstanding results. They handled my case with professionalism and kept me informed at every step.",
    author: "J.M.",
    role: "Business Client",
  },
  {
    quote: "Professional, trustworthy, and highly recommend. Made the entire legal process straightforward and stress-free.",
    author: "E.W.",
    role: "Real Estate Client",
  },
];

const OTHER_PAGES = [
  { label: "LP1", href: "/" },
  { label: "LP2", href: "/landpage2" },
  { label: "LP4", href: "/landpage4" },
  { label: "T2", href: "/template2" },
];

/* ══════════════════════════════════════════════ */
export default function Template1() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#F7F7F7] text-[#1A1A1A] min-h-screen">

      {/* ─── HEADER ─── */}
      <header
        className={`sticky top-0 z-50 bg-[#F7F7F7] transition-shadow duration-300 border-b border-[#E0E0E0] ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5 py-5 flex justify-between items-center">
          {/* Logo */}
          <a href="/template1" className="font-serif text-[1.2rem] font-light tracking-tight text-[#1A1A1A] no-underline">
            Μπακόπουλος<span className="text-[#5C6F7C]">.</span>
          </a>

          {/* Main nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="t1-nav-link text-[0.8rem] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200 no-underline font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[0.78rem] font-medium bg-[#5C6F7C] text-white px-5 py-2.5 rounded-md hover:bg-[#4a5d6a] transition-colors duration-200 no-underline"
            >
              Book a Consultation
            </a>
          </nav>

          {/* Template switcher */}
          <div className="hidden lg:flex items-center gap-4 border-l border-[#E0E0E0] pl-5 ml-2">
            {OTHER_PAGES.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.62rem] font-medium tracking-wide uppercase text-[#C0C0C0] hover:text-[#6B6B6B] transition-colors duration-200 no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section id="home" className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
        {/* Background image */}
        <Image
          src="/logo1.jpg"
          alt="Courthouse columns"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay — slightly lighter than template2 to let the warm stone tones show */}
        <div className="absolute inset-0 bg-[#1A1A1A]/55" />

        {/* Content */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-5 py-24 w-full">
          <div className="max-w-[560px] t1-fade-1">
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-[#E0E0E0]/75 font-medium mb-5">
              Experienced · Dedicated · Here for you
            </p>
            <h1
              className="font-serif font-light text-white leading-[1.1] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              Modern Legal Solutions.
              <br />
              Personal Approach.
            </h1>
            <p className="text-[0.92rem] text-[#E0E0E0]/70 leading-[1.85] max-w-[400px] mb-8">
              Experienced, dedicated, and here for you. Our team of attorneys
              provides comprehensive legal services tailored to your specific needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#5C6F7C] text-white text-[0.78rem] font-medium px-6 py-3 rounded-md hover:bg-[#4a5d6a] transition-colors duration-200 no-underline"
            >
              Book a Consultation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* container wraps remaining sections */}
      <div className="max-w-[1100px] mx-auto px-5">

        {/* ─── ABOUT / TRUSTED ADVOCATES ─── */}
        <section id="about" className="grid md:grid-cols-2 items-center gap-10 py-20 border-t border-[#E0E0E0]">
          {/* Left: photo */}
          <Reveal>
            <div className="relative h-[300px] md:h-[380px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="https://picsum.photos/seed/lawyers-sitting-meeting/900/700"
                alt="Lawyers in meeting"
                fill
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          {/* Right: text */}
          <Reveal delay={120}>
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-[#5C6F7C] font-medium mb-3">
              Trusted Advocates
            </p>
            <h2
              className="font-serif font-light text-[#1A1A1A] leading-[1.2] mb-4"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              Committed to Your Success.
            </h2>
            <p className="text-[0.9rem] text-[#6B6B6B] leading-[1.85] mb-7">
              We provide personalized legal services with unwavering commitment
              to your rights and goals, with a focus on your individual needs.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Client-first approach",
                "Transparent communication",
                "Strategic solutions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#5C6F7C]/15 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5C6F7C" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-[0.88rem] text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ─── OUR SERVICES ─── */}
        <section id="services" className="py-20 border-t border-[#E0E0E0]">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-[#5C6F7C] font-medium mb-2">
              What We Do
            </p>
            <h2
              className="font-serif font-light text-[#1A1A1A] mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Our Services
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ title, sub, icon }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="group bg-white border border-[#E0E0E0] rounded-xl p-6 text-center hover:border-[#5C6F7C]/50 hover:shadow-md transition-all duration-300 cursor-default h-full">
                  <div className="w-12 h-12 rounded-full bg-[#F7F7F7] flex items-center justify-center mx-auto mb-4 text-[#5C6F7C] group-hover:bg-[#5C6F7C]/10 transition-colors duration-300">
                    {icon}
                  </div>
                  <h3 className="font-serif text-[1rem] font-normal text-[#1A1A1A] mb-1 group-hover:text-[#5C6F7C] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-[0.75rem] text-[#6B6B6B]">{sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section className="py-20 border-t border-[#E0E0E0]">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-[#5C6F7C] font-medium mb-2">
              Our Commitment
            </p>
            <h2
              className="font-serif font-light text-[#1A1A1A] mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Why Choose Us
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY.map(({ title, desc, icon }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="bg-[#EFEFEF] rounded-xl p-8 text-center flex flex-col items-center gap-4 hover:bg-white hover:shadow-sm border border-transparent hover:border-[#E0E0E0] transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E0E0E0] flex items-center justify-center text-[#5C6F7C] shadow-sm">
                    {icon}
                  </div>
                  <h3 className="font-serif text-[1.1rem] font-normal text-[#1A1A1A]">{title}</h3>
                  <p className="text-[0.83rem] text-[#6B6B6B] leading-[1.8]">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── CLIENT TESTIMONIALS ─── */}
        <section className="py-20 border-t border-[#E0E0E0]">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-[#5C6F7C] font-medium mb-2">
              What Clients Say
            </p>
            <h2
              className="font-serif font-light text-[#1A1A1A] mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Client Testimonials
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIALS.map(({ quote, author, role }, i) => (
              <Reveal key={author} delay={i * 100}>
                <div className="bg-white border border-[#E0E0E0] rounded-xl p-7 flex flex-col gap-5 h-full">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#5C6F7C" stroke="#5C6F7C" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[0.9rem] text-[#6B6B6B] leading-[1.8] italic flex-1">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E0E0E0]">
                    <div className="w-9 h-9 rounded-full bg-[#5C6F7C]/15 flex items-center justify-center text-[#5C6F7C] text-[0.78rem] font-semibold">
                      {author[0]}
                    </div>
                    <div>
                      <p className="text-[0.82rem] font-medium text-[#1A1A1A]">{author}</p>
                      <p className="text-[0.72rem] text-[#6B6B6B]">{role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="py-20 border-t border-[#E0E0E0]">
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-[#5C6F7C] font-medium mb-2">
              Reach Out
            </p>
            <h2
              className="font-serif font-light text-[#1A1A1A] mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Contact Us
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <Reveal>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Name"
                  className="w-full border border-[#E0E0E0] bg-white rounded-md px-4 py-3 text-[0.88rem] text-[#1A1A1A] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#5C6F7C]/30 focus:border-[#5C6F7C] transition-all duration-200"
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email"
                  className="w-full border border-[#E0E0E0] bg-white rounded-md px-4 py-3 text-[0.88rem] text-[#1A1A1A] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#5C6F7C]/30 focus:border-[#5C6F7C] transition-all duration-200"
                />
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Message"
                  className="w-full border border-[#E0E0E0] bg-white rounded-md px-4 py-3 text-[0.88rem] text-[#1A1A1A] placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#5C6F7C]/30 focus:border-[#5C6F7C] transition-all duration-200 resize-none"
                />
                <button
                  type="submit"
                  className="self-start inline-flex items-center gap-2 bg-[#5C6F7C] text-white text-[0.78rem] font-medium px-7 py-3 rounded-md hover:bg-[#4a5d6a] transition-colors duration-200"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </Reveal>

            {/* Details */}
            <Reveal delay={120}>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[#6B6B6B] font-medium mb-1">Phone</p>
                  <a href="tel:+302101234567" className="text-[0.95rem] text-[#1A1A1A] no-underline hover:text-[#5C6F7C] transition-colors duration-200">
                    +30 210 123 4567
                  </a>
                </div>
                <div>
                  <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[#6B6B6B] font-medium mb-1">Email</p>
                  <a href="mailto:info@lawoffice.gr" className="text-[0.95rem] text-[#1A1A1A] no-underline hover:text-[#5C6F7C] transition-colors duration-200">
                    info@lawoffice.gr
                  </a>
                </div>
                <div>
                  <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[#6B6B6B] font-medium mb-1">Address</p>
                  <p className="text-[0.95rem] text-[#1A1A1A] leading-[1.6]">
                    Vasilissis Sofias 42, Suite 205
                    <br />
                    Athens 106 74, Greece
                  </p>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-[#E0E0E0] h-[180px] mt-2">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=23.73,37.97,23.75,37.99&layer=mapnik"
                    className="w-full h-full border-0"
                    title="Office location"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>{/* /container */}

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#E0E0E0] bg-white mt-4">
        <div className="max-w-[1100px] mx-auto px-5 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[0.75rem] text-[#6B6B6B]">
            © 2026 Μπακόπουλος Law. All rights reserved.
          </span>
          <nav className="flex gap-6">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[0.75rem] text-[#6B6B6B] no-underline hover:text-[#5C6F7C] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>

    </div>
  );
}
