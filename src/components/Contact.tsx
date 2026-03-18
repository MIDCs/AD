"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 lg:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      {/* Background accents */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px]" />
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-accent-secondary/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 xl:gap-36">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-accent text-xs tracking-[0.4em] uppercase font-light font-display">
                Kontakt
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10 leading-[1.05]">
              Porozmawiajmy<br />
              <span className="text-gradient">o projekcie</span>
            </h2>

            <p className="text-muted font-light leading-loose mb-12 md:mb-14 text-base md:text-lg">
              Zainteresowana współpracą, praktykami lub rozmową o architekturze?
              Chętnie poznam nowe możliwości i wyzwania projektowe.
            </p>

            <div className="space-y-7">
              {[
                {
                  label: "Email",
                  value: "anna.dygulska@student.pg.edu.pl",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                },
                {
                  label: "Lokalizacja",
                  value: "Gdańsk, Polska",
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                },
                {
                  label: "Uczelnia",
                  value: "Politechnika Gdańska, Wydział Architektury",
                  icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 border border-border/50 flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors duration-500">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-muted/60 text-xs tracking-wider uppercase font-display">{item.label}</div>
                    <div className="text-foreground/90 mt-1.5 text-[15px] font-light">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3 mt-14">
              {["LinkedIn", "Behance", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="group/social relative overflow-hidden px-5 py-2.5 border border-border/50 text-xs text-muted hover:text-accent hover:border-accent/50 transition-all duration-500 tracking-wider font-display"
                >
                  <span className="relative z-10">{social}</span>
                  <div className="absolute inset-0 bg-accent/5 translate-x-[-100%] group-hover/social:translate-x-0 transition-transform duration-500" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "firstName", label: "Imię", placeholder: "Jan", type: "text" },
                  { name: "lastName", label: "Nazwisko", placeholder: "Kowalski", type: "text" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label
                      className={`text-[11px] tracking-wider uppercase block mb-2.5 transition-colors duration-300 font-display ${
                        focused === field.name ? "text-accent" : "text-muted/60"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border border-border/50 px-5 py-4 text-foreground focus:border-accent focus:outline-none transition-all duration-500 placeholder:text-muted/20 text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="relative">
                <label
                  className={`text-[11px] tracking-wider uppercase block mb-2.5 transition-colors duration-300 font-display ${
                    focused === "email" ? "text-accent" : "text-muted/60"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border border-border/50 px-5 py-4 text-foreground focus:border-accent focus:outline-none transition-all duration-500 placeholder:text-muted/20 text-sm"
                  placeholder="jan@email.com"
                />
              </div>

              <div className="relative">
                <label
                  className={`text-[11px] tracking-wider uppercase block mb-2.5 transition-colors duration-300 font-display ${
                    focused === "subject" ? "text-accent" : "text-muted/60"
                  }`}
                >
                  Temat
                </label>
                <select
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border border-border/50 px-5 py-4 text-foreground focus:border-accent focus:outline-none transition-all duration-500 appearance-none text-sm"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#0C0A08]">Wybierz temat</option>
                  <option value="collaboration" className="bg-[#0C0A08]">Współpraca</option>
                  <option value="internship" className="bg-[#0C0A08]">Praktyki / Staż</option>
                  <option value="project" className="bg-[#0C0A08]">Pytanie o projekt</option>
                  <option value="other" className="bg-[#0C0A08]">Inne</option>
                </select>
              </div>

              <div className="relative">
                <label
                  className={`text-[11px] tracking-wider uppercase block mb-2.5 transition-colors duration-300 font-display ${
                    focused === "message" ? "text-accent" : "text-muted/60"
                  }`}
                >
                  Wiadomość
                </label>
                <textarea
                  required
                  rows={5}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border border-border/50 px-5 py-4 text-foreground focus:border-accent focus:outline-none transition-all duration-500 resize-none placeholder:text-muted/20 text-sm"
                  placeholder="Napisz wiadomość..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden bg-accent text-[#0C0A08] py-5 text-xs tracking-[0.2em] uppercase font-medium mt-2 font-display"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wysłano!
                    </>
                  ) : (
                    <>
                      Wyślij wiadomość
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-accent-light translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
