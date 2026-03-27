"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 md:py-44 lg:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
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
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 border border-border/50 flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors duration-500">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-muted/60 text-xs tracking-wider uppercase font-display">Email</div>
                <a href="mailto:email@example.com" className="text-foreground/90 mt-1.5 text-[15px] font-light block hover:text-accent transition-colors duration-300">
                  email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 border border-border/50 flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors duration-500">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-muted/60 text-xs tracking-wider uppercase font-display">Telefon</div>
                <a href="tel:+48000000000" className="text-foreground/90 mt-1.5 text-[15px] font-light block hover:text-accent transition-colors duration-300">
                  +48 000 000 000
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
