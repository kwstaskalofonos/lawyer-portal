"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ── Data ── */
const SERVICES = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Corporate Law",
    sub: "Business & Commercial",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Real Estate",
    sub: "Property Transactions",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Family Law",
    sub: "Divorce & Custody",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Litigation",
    sub: "Court Representation",
  },
];

const TESTIMONIALS = [
  {
    quote: "Excellent service and outstanding results. They handled everything with professionalism.",
    author: "J.M.",
    stars: 5,
  },
  {
    quote: "Professional, trustworthy, and highly recommend. Made the process stress-free.",
    author: "E.W.",
    stars: 5,
  },
  {
    quote: "They made the legal process easy and stress-free. Will definitely use again.",
    author: "A.K.",
    stars: 4,
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const OTHER_PAGES = [
  { label: "LP1", href: "/" },
  { label: "LP2", href: "/landpage2" },
  { label: "LP4", href: "/landpage4" },
  { label: "T1", href: "/template1" },
];

/* ── Star rating ── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "#5C6F7C" : "none"}
          stroke="#5C6F7C"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ── Scroll-reveal hook ── */
function useReveal(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ── Reveal wrapper ── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useReveal(ref);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════ */
export default function Template2() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#F7F7F7] text-[#1A1A1A] min-h-screen">

      {/* ─── STICKY HEADER ─── */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        } border-b border-[#E0E0E0]`}
      >
        <div className="max-w-[1100px] mx-auto px-5 py-4 flex justify-between items-center">
          <a href="/template2" className="font-serif text-[1.2rem] tracking-tight text-[#1A1A1A] no-underline font-light">
            Μπακόπουλος<span className="text-[#5C6F7C]">.</span>
          </a>

          {/* Main nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.8rem] font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200 no-underline"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[0.78rem] font-medium bg-[#5C6F7C] text-white px-4 py-2 rounded-md hover:bg-[#4a5d6a] transition-colors duration-200 no-underline"
            >
              Book a Consultation
            </a>
          </nav>

          {/* Template switcher */}
          <div className="hidden lg:flex items-center gap-4 border-l border-[#E0E0E0] pl-6 ml-2">
            {OTHER_PAGES.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[0.65rem] font-medium tracking-wide uppercase text-[#C0C0C0] hover:text-[#6B6B6B] transition-colors duration-200 no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
        {/* Background image */}
        <Image
          src="/logo2.jpg"
          alt="Legal gavel"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />

        {/* Content */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-5 py-24 w-full">
          <div className="max-w-[560px] t2-fade-1">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-[#E0E0E0]/80 font-medium mb-5">
              Experienced · Dedicated · Here for you
            </p>
            <h1
              className="font-serif font-light text-white leading-[1.1] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
            >
              Modern Legal Solutions.
              <br />
              Personal Approach.
            </h1>
            <p className="text-[0.92rem] text-[#E0E0E0]/75 leading-[1.85] mb-9">
              Experienced, dedicated, and here for you. Our team of skilled
              attorneys provides comprehensive legal services tailored to your
              specific needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#5C6F7C] text-white text-[0.78rem] font-medium px-7 py-3.5 rounded-md hover:bg-[#4a5d6a] transition-colors duration-200 no-underline"
            >
              Book a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED ADVOCATES ─── */}
      <section id="about" className="bg-white border-t border-b border-[#E0E0E0]">
        <div className="max-w-[1100px] mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#5C6F7C] font-medium mb-3">
              Trusted Advocates
            </p>
            <h2
              className="font-serif font-light text-[#1A1A1A] leading-[1.2] mb-4"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Trusted Advocates Committed
              <br />
              to Your Success.
            </h2>
            <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.85]">
              We provide personalized legal services with unwavering commitment
              to your rights and goals. Our attorneys bring decades of combined
              experience across multiple practice areas.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="flex flex-col gap-4">
              {[
                "Client-First Approach",
                "Transparent Communication",
                "Strategic Solutions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5C6F7C]/12 flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5C6F7C" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-[0.92rem] text-[#1A1A1A] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ─── */}
      <section id="services" className="max-w-[1100px] mx-auto px-5 py-20">
        <Reveal className="text-center mb-10">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#5C6F7C] font-medium mb-2">
            What We Do
          </p>
          <h2
            className="font-serif font-light text-[#1A1A1A]"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Practice Areas
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon, title, sub }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group bg-white border border-[#E0E0E0] rounded-xl p-6 text-center hover:border-[#5C6F7C]/40 hover:shadow-md transition-all duration-300 cursor-default">
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

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="bg-[#EFEFEF] border-t border-b border-[#E0E0E0]">
        <div className="max-w-[1100px] mx-auto px-5 py-20">
          <Reveal className="text-center mb-10">
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#5C6F7C] font-medium mb-2">
              What Clients Say
            </p>
            <h2
              className="font-serif font-light text-[#1A1A1A]"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Client Testimonials
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ quote, author, stars }, i) => (
              <Reveal key={author} delay={i * 100}>
                <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 flex flex-col gap-4 h-full">
                  <Stars count={stars} />
                  <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.8] flex-1 italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-[#E0E0E0]">
                    <div className="w-8 h-8 rounded-full bg-[#5C6F7C]/15 flex items-center justify-center text-[#5C6F7C] text-[0.72rem] font-semibold">
                      {author[0]}
                    </div>
                    <span className="text-[0.78rem] font-medium text-[#1A1A1A]">— {author}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="max-w-[1100px] mx-auto px-5 py-20">
        <Reveal className="text-center mb-10">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#5C6F7C] font-medium mb-2">
            Reach Out
          </p>
          <h2
            className="font-serif font-light text-[#1A1A1A]"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Get In Touch
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <Reveal>
            <form onSubmit={(e) => e.preventDefault()} className="bg-white border border-[#E0E0E0] rounded-xl p-8 flex flex-col gap-4">
              <div>
                <label className="block text-[0.72rem] tracking-wide uppercase text-[#6B6B6B] font-medium mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full border border-[#E0E0E0] bg-[#F7F7F7] rounded-md px-4 py-3 text-[0.88rem] text-[#1A1A1A] placeholder-[#C0C0C0] focus:outline-none focus:ring-1 focus:ring-[#5C6F7C] focus:border-[#5C6F7C] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[0.72rem] tracking-wide uppercase text-[#6B6B6B] font-medium mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-[#E0E0E0] bg-[#F7F7F7] rounded-md px-4 py-3 text-[0.88rem] text-[#1A1A1A] placeholder-[#C0C0C0] focus:outline-none focus:ring-1 focus:ring-[#5C6F7C] focus:border-[#5C6F7C] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[0.72rem] tracking-wide uppercase text-[#6B6B6B] font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Briefly describe your legal matter..."
                  className="w-full border border-[#E0E0E0] bg-[#F7F7F7] rounded-md px-4 py-3 text-[0.88rem] text-[#1A1A1A] placeholder-[#C0C0C0] focus:outline-none focus:ring-1 focus:ring-[#5C6F7C] focus:border-[#5C6F7C] transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-1 w-full flex items-center justify-center gap-2 bg-[#5C6F7C] text-white text-[0.78rem] font-medium py-3 rounded-md hover:bg-[#4a5d6a] transition-colors duration-200"
              >
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </Reveal>

          {/* Contact info + map */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              {/* Details card */}
              <div className="bg-white border border-[#E0E0E0] rounded-xl p-8 flex flex-col gap-5">
                <h3 className="font-serif text-[1.1rem] font-light text-[#1A1A1A] mb-1">
                  Contact Details
                </h3>
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5C6F7C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.79 19.79 0 01.4 .82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L4.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "+30 210 123 4567",
                    href: "tel:+302101234567",
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5C6F7C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@lawoffice.gr",
                    href: "mailto:info@lawoffice.gr",
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5C6F7C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: "Office",
                    value: "Vasilissis Sofias 42, Suite 205\nAthens 106 74, Greece",
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C6F7C]/10 flex items-center justify-center mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#6B6B6B] font-medium mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-[0.88rem] text-[#1A1A1A] no-underline hover:text-[#5C6F7C] transition-colors duration-200 whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[0.88rem] text-[#1A1A1A] whitespace-pre-line leading-[1.5]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="relative rounded-xl overflow-hidden border border-[#E0E0E0] h-[180px] bg-[#EFEFEF]">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=23.73,37.97,23.75,37.99&layer=mapnik"
                  className="w-full h-full border-0"
                  title="Office location"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2">
                  <a
                    href="https://www.openstreetmap.org/?mlat=37.98&mlon=23.74#map=16/37.98/23.74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.62rem] bg-white/90 border border-[#E0E0E0] text-[#5C6F7C] px-2 py-1 rounded no-underline hover:bg-white transition-colors duration-200"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#E0E0E0] bg-white">
        <div className="max-w-[1100px] mx-auto px-5 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[0.75rem] text-[#6B6B6B]">
            © 2026 Μπακόπουλος Law. All rights reserved.
          </span>
          <nav className="flex gap-6">
            {["Home", "About", "Services", "Testimonials", "Contact"].map((link) => (
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
