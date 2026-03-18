"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Konsultacja",
    description: "Poznajemy Twoje potrzeby, wizję i budżet. Analizujemy działkę, kontekst i możliwości.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    number: "02",
    title: "Koncepcja",
    description: "Tworzę wstępne szkice i wizualizacje 3D. Szukamy najlepszego rozwiązania przestrzennego.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    number: "03",
    title: "Projekt",
    description: "Opracowuję pełną dokumentację projektową — od architektonicznej po wykonawczą.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    number: "04",
    title: "Realizacja",
    description: "Nadzoruję budowę, dbam o każdy detal i wierność wizji projektowej.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 md:py-44 lg:py-56 px-8 md:px-16 lg:px-24 bg-[#080808]" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-light">Jak pracuję</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6">
            Proces <span className="text-gradient">twórczy</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className={`lg:flex items-center gap-16 lg:gap-20 lg:mb-28 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:pl-16"}`}>
                  <div className={`flex items-center gap-5 mb-5 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                    <span className="font-serif text-5xl text-accent/30">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4">{step.title}</h3>
                  <p className="text-muted font-light leading-loose text-base md:text-lg">{step.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center relative z-10">
                  <div className="w-5 h-5 bg-accent rounded-full" />
                  <div className="absolute w-10 h-10 border border-accent/30 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                </div>

                {/* Spacer for other side */}
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
