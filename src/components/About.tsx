"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-44 lg:py-56 px-6 md:px-16 lg:px-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 xl:gap-36 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden relative group max-w-md mx-auto lg:max-w-none">
              <Image
                src="/projects/anna-photo.jpg"
                alt="Anna Dygulska"
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 400px, 500px"
                priority
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-700" />
              <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isInView ? { width: 60, height: 60 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 right-0 border-t-2 border-r-2 border-accent"
              />
              <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isInView ? { width: 60, height: 60 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 left-0 border-b-2 border-l-2 border-accent"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-5 -right-3 lg:-right-6 bg-accent text-[#0C0A08] px-5 py-3 md:px-6 md:py-4"
            >
              <div className="text-xl md:text-2xl font-serif font-bold">PG</div>
              <div className="text-[9px] md:text-[10px] tracking-wider uppercase mt-0.5">
                {"Politechnika"}<br/>{"Gda\u0144ska"}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-accent text-xs tracking-[0.4em] uppercase font-light font-display">
                O mnie
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-14 leading-[1.05]">
              Architektura<br />
              <span className="text-gradient">{"z pasj\u0105"}</span>
            </h2>

            <div className="space-y-6 text-muted font-light leading-loose text-base md:text-[17px]">
              <p>
                {"Jestem osob\u0105 zaanga\u017Cowan\u0105, sumienn\u0105 i odpowiedzialn\u0105, kt\u00F3ra z\u00A0du\u017C\u0105 uwag\u0105 podchodzi do detali projektowych. Konsekwencji, systematyczno\u015Bci i dobrej organizacji czasu nauczy\u0142am si\u0119 ju\u017C w\u00A0dzieci\u0144stwie, trenuj\u0105c jazd\u0119 konn\u0105."}
              </p>
              <p>
                {"Od liceum pracowa\u0142am jako instruktorka, prowadz\u0105c zaj\u0119cia sportowe dla dzieci i doros\u0142ych. To do\u015Bwiadczenie nauczy\u0142o mnie pracy z\u00A0lud\u017Ami, uwa\u017Cnego s\u0142uchania ich potrzeb oraz szukania rozwi\u0105za\u0144, kt\u00F3re realnie poprawiaj\u0105 komfort ich codzienno\u015Bci."}
              </p>
              <p className="text-foreground/80">
                {"Dzi\u015B chcia\u0142abym w podobny spos\u00F3b wp\u0142ywa\u0107 na \u017Cycie innych \u2014\u00A0odpowiadaj\u0105c na ich potrzeby poprzez architektur\u0119."}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 pt-8 md:pt-10 border-t border-border/50">
              {[
                { number: "5+", label: "Projekt\u00F3w" },
                { number: "V", label: "Semestr studi\u00F3w" },
                { number: "3", label: "Lata do\u015Bwiadczenia" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div className="font-display text-2xl md:text-3xl lg:text-4xl text-accent font-medium">
                    {stat.number}
                  </div>
                  <div className="text-muted text-[11px] md:text-sm mt-1.5 md:mt-2 tracking-wider font-display">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
