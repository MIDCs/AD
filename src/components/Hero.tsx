"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 3D Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <ModelViewer />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0C0A08]/60 via-transparent to-[#0C0A08]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0C0A08]/50 via-transparent to-transparent" />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 border-t border-l border-accent/20 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 border-b border-r border-accent/20 z-20" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 lg:pb-40 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 md:mb-8 flex items-center gap-3 md:gap-4"
        >
          <div className="w-8 md:w-12 h-[1px] bg-accent" />
          <span className="text-accent text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-light font-display">
            Studentka Architektury
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-medium leading-[0.85] tracking-tight"
          >
            Anna
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.45,
            }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-medium leading-[0.85] tracking-tight text-gradient-warm"
          >
            Dygulska
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 md:mt-12 text-muted text-sm md:text-base lg:text-lg max-w-md lg:max-w-xl font-light leading-relaxed"
        >
          Projektuję przestrzenie, w których forma prowadzi dialog
          z&nbsp;naturą, a&nbsp;architektura odpowiada na realne potrzeby ludzi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden bg-accent text-[#0C0A08] px-8 md:px-10 py-4 md:py-5 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium"
          >
            <span className="relative z-10 flex items-center gap-3">
              Zobacz projekty
              <svg
                className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-accent-light translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
          <a
            href="#contact"
            className="group text-[11px] md:text-xs tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors border border-border px-8 md:px-10 py-4 md:py-5 hover:border-accent/50 duration-500 relative overflow-hidden"
          >
            <span className="relative z-10">Kontakt</span>
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-display">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Side text - only on wide screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden 2xl:block"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-border" />
          <span className="text-muted text-[10px] tracking-[0.3em] uppercase font-display [writing-mode:vertical-lr] rotate-180">
            Portfolio 2024 &mdash; 2026
          </span>
          <div className="w-[1px] h-16 bg-border" />
        </div>
      </motion.div>
    </section>
  );
}
