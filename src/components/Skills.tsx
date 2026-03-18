"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Projektowanie",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    skills: [
      { name: "AutoCAD", level: 90 },
      { name: "ArchiCAD", level: 85 },
      { name: "Revit (BIM)", level: 75 },
    ],
  },
  {
    title: "Wizualizacja 3D",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    skills: [
      { name: "SketchUp", level: 85 },
      { name: "Lumion", level: 80 },
      { name: "Twinmotion", level: 75 },
    ],
  },
  {
    title: "Grafika",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "Adobe Photoshop", level: 80 },
      { name: "Adobe Illustrator", level: 70 },
      { name: "Adobe InDesign", level: 75 },
    ],
  },
  {
    title: "Kompetencje",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: "Praca zespołowa", level: 95 },
      { name: "Urbanistyka", level: 80 },
      { name: "Projektowanie wnętrz", level: 75 },
    ],
  },
];

const toolLogos = [
  "AutoCAD", "ArchiCAD", "Revit", "SketchUp", "Lumion",
  "Photoshop", "Illustrator", "InDesign", "Twinmotion",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-32 md:py-44 lg:py-56 px-8 md:px-16 lg:px-24 bg-[#0A0908]"
      ref={ref}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle, #F2EDE8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-light font-display">
              Umiejętności
            </span>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl">
            Narzędzia <span className="text-gradient">&amp; kompetencje</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * catIdx }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-border/50 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors duration-500">
                  {category.icon}
                </div>
                <h3 className="font-serif text-xl md:text-2xl">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/80 text-sm font-light">{skill.name}</span>
                      <span className="text-muted text-xs font-display">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-border/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + catIdx * 0.15 + skillIdx * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #C75D3A, #8A9B78)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 md:mt-32 border-t border-b border-border/20 py-8 overflow-hidden"
        >
          <div className="animate-marquee flex items-center whitespace-nowrap" style={{ width: "max-content" }}>
            {[...toolLogos, ...toolLogos, ...toolLogos].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="text-muted/20 text-lg md:text-xl font-display tracking-wider uppercase mx-6 md:mx-8"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
