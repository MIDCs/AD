"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

export default function Showcase3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="relative py-32 md:py-44 lg:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-light">Interaktywna wizualizacja</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6">
            Eksploruj w <span className="text-gradient">3D</span>
          </h2>
          <p className="text-muted mt-8 max-w-2xl mx-auto font-light text-base md:text-lg leading-loose">
            Obracaj, przybliżaj i eksploruj model architektoniczny.
            Kliknij i przeciągnij, aby zmienić perspektywę.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* 3D Viewer */}
          <div className="aspect-[16/9] w-full border border-border bg-[#080808] relative overflow-hidden">
            <ModelViewer enableZoom={true} autoRotate={true} />

            <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs text-muted tracking-widest uppercase">Live 3D</span>
            </div>

            <div className="absolute bottom-5 right-5 z-10 hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted/50 text-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span>Kliknij &amp; przeciągnij</span>
              </div>
              <div className="flex items-center gap-2 text-muted/50 text-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>Scroll = zoom</span>
              </div>
            </div>
          </div>

          {/* Info cards below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
            {[
              {
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                title: "Koncepcja",
                desc: "Model przedstawia autorską koncepcję budynku wielofunkcyjnego",
              },
              {
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                title: "Materiały",
                desc: "Beton architektoniczny, szkło strukturalne, mosiądz",
              },
              {
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                title: "Lokalizacja",
                desc: "Projekt stworzony z myślą o kontekście miejskim",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="border border-border p-7 md:p-8 hover:border-accent/50 transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 text-accent mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-muted text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
