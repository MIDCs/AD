"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative border-t border-border/30" ref={ref}>
      {/* Large name display */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="overflow-hidden py-16 md:py-20 px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground/[0.03] leading-none tracking-tight select-none">
            Anna Dygulska
          </div>
        </div>
      </motion.div>

      {/* Footer content */}
      <div className="border-t border-border/20 py-10 md:py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-serif text-xl tracking-wider group">
            <span className="inline-block group-hover:rotate-[-4deg] transition-transform duration-300">A</span>
            <span className="inline-block group-hover:rotate-[4deg] transition-transform duration-300">D</span>
            <span className="text-accent inline-block group-hover:scale-150 transition-transform duration-300">.</span>
          </div>

<div className="text-muted/40 text-xs text-center md:text-right font-display tracking-wider">
            &copy; {new Date().getFullYear()} Anna Dygulska
          </div>
        </div>
      </div>
    </footer>
  );
}
