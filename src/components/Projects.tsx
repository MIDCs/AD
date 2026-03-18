"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Artificium",
    subtitle: "Budynek naukowo-rekreacyjny dla student\u00F3w",
    category: "Architektura",
    year: "2025/2026",
    semester: "V semestr",
    location: "ul. Towarowa, Gda\u0144sk Wrzeszcz",
    description:
      "Budynek us\u0142ugowy o funkcji naukowo-rekreacyjnej, przeznaczony dla student\u00F3w. Nazwa nawi\u0105zuje do \u0142aci\u0144skiego s\u0142owa oznaczaj\u0105cego \u201Esztuk\u0119 tworzenia\u201D. Program funkcjonalny opiera si\u0119 na zr\u00F3\u017Cnicowanych przestrzeniach wspieraj\u0105cych integracj\u0119, edukacj\u0119 oraz aktywno\u015B\u0107 tw\u00F3rcz\u0105. Zaprojektowano strefy rekreacyjne, sale warsztatowe, przestrze\u0144 konsumpcyjn\u0105 oraz miejsca do indywidualnej pracy i nauki. Wa\u017Cnym elementem jest sala teatralna z systemem ruchomych przes\u0142on na elewacji.",
    highlights: [
      "Czerwone lamele \u2014 wsp\u00F3\u0142czesna interpretacja gda\u0144skiej ceg\u0142y",
      "Ruchome przes\u0142ony reguluj\u0105ce \u015Bwiat\u0142o w sali teatralnej",
      "Forma nawi\u0105zuj\u0105ca do Opery Ba\u0142tyckiej",
    ],
    team: null,
    heroImage: "/projects/artificium-hero.jpg",
    galleryImages: [
      "/projects/artificium-gallery-1.jpg",
      "/projects/artificium-gallery-2.jpg",
      "/projects/artificium-gallery-3.jpg",
    ],
    accentColor: "#C75D3A",
  },
  {
    id: 2,
    number: "02",
    title: "Industria",
    subtitle: "Nowy warsztat miejskiej kreatywno\u015Bci",
    category: "Urbanistyka",
    year: "2025/2026",
    semester: "V semestr",
    location: "Dawna \u201EBlaszanka\u201D, Dolne Miasto, Gda\u0144sk",
    description:
      "Projekt urbanistyczny zagospodarowania terenu starej \u201EBlaszanki\u201D na Dolnym Mie\u015Bcie w Gda\u0144sku. Industria to miejsce otwarte na eksperyment, wymian\u0119 my\u015Bli i wsp\u00F3\u0142prac\u0119 pomi\u0119dzy r\u00F3\u017Cnymi dziedzinami sztuki i nauki. W ramach projektu planowane s\u0105 warsztatownie, przestrzenie pracy tw\u00F3rczej, ksi\u0105\u017Ckodzielnia oraz zielone strefy odpoczynku.",
    highlights: [
      "Budynki w wachlarzowej kompozycji z przesuni\u0119tymi kondygnacjami",
      "System plac\u00F3w i przestrzeni publicznych po\u0142\u0105czonych z Mot\u0142aw\u0105",
      "Materia\u0142y: corten, ceg\u0142a, beton architektoniczny, szk\u0142o",
    ],
    team: "Anna Dygulska, Ewelina Kopciuch, Oliwia Tasarz",
    heroImage: "/projects/industria-hero.jpg",
    galleryImages: [
      "/projects/industria-1.jpg",
      "/projects/industria-2.jpg",
    ],
    accentColor: "#B8860B",
  },
  {
    id: 3,
    number: "03",
    title: "Reflection of Nature",
    subtitle: "Dom w dialogu z natur\u0105",
    category: "Architektura",
    year: "2025/2026",
    semester: "V semestr",
    location: "Ka\u0142, szlak Wielkich Jezior Mazurskich",
    description:
      "Projekt konkursowy \u201EDom zgodny z natur\u0105\u201D (Targi \u015Awiat\u0142o 2026). Budynek cz\u0119\u015Bciowo wysuni\u0119ty nad tafl\u0119 jeziora wykorzystuje wod\u0119 jako naturalne zwierciad\u0142o \u2014 odbijaj\u0105c \u015Bwiat\u0142o i otaczaj\u0105c\u0105 ziele\u0144, staje si\u0119 przed\u0142u\u017Ceniem krajobrazu. Du\u017Cy ogr\u00F3d zimowy wprowadza natur\u0119 do \u015Brodka budynku.",
    highlights: [
      "Pompa obiegowa zasilana wod\u0105 jeziorn\u0105",
      "Ciep\u0142a barwa \u015Bwiat\u0142a 2700K minimalizuj\u0105ca zanieczyszczenie \u015Bwietlne",
      "Ogr\u00F3d zimowy jako przed\u0142u\u017Cenie lasu",
    ],
    team: "Marta Dybowska, Julianna Czerska, Anna Dygulska",
    heroImage: "/projects/reflection-hero.jpg",
    galleryImages: [
      "/projects/reflection-2.jpg",
      "/projects/reflection-3.jpg",
    ],
    accentColor: "#8A9B78",
  },
  {
    id: 4,
    number: "04",
    title: "Linea Libera",
    subtitle: "Zesp\u00F3\u0142 budynk\u00F3w wielorodzinnych",
    category: "Architektura / Wn\u0119trza",
    year: "2025/2026",
    semester: "IV semestr",
    location: "ul. Spacerowa, Gdynia Or\u0142owo",
    description:
      "Dwa budynki wielorodzinne o horyzontalnej kompozycji z przesuni\u0119tymi kondygnacjami, nadaj\u0105cymi bryle lekko\u015Bci i rytmu. Uk\u0142ad poziomych linii nawi\u0105zuje do modernistycznych obiekt\u00F3w charakterystycznych dla architektury Gdyni. W elewacjach zastosowano drewno \u2014 materia\u0142 nawi\u0105zuj\u0105cy do lokalnego kontekstu.",
    highlights: [
      "Kolorystyka: stonowane be\u017Ce, br\u0105zy, oliwkowa ziele\u0144",
      "Drewniane altany i ma\u0142a architektura z naturalnych materia\u0142\u00F3w",
      "Przeszklenia \u0142\u0105cz\u0105ce wn\u0119trze z otoczeniem",
    ],
    team: "Anna Dygulska, Ewelina Kopciuch",
    heroImage: "/projects/linea-hero.jpg",
    galleryImages: [
      "/projects/linea-1.jpg",
      "/projects/linea-2.jpg",
    ],
    accentColor: "#BFA88A",
  },
  {
    id: 5,
    number: "05",
    title: "Przystanek autobusowy",
    subtitle: "Obiekt ma\u0142ej architektury",
    category: "Ma\u0142a architektura",
    year: "2024",
    semester: "I semestr",
    location: "Politechnika Gda\u0144ska",
    description:
      "Projekt obiektu ma\u0142ej architektury \u2014 komfortowej i funkcjonalnej przestrzeni u\u017Cytku publicznego. Przeszklenia z precyzyjnie zaprojektowanym podzia\u0142em nie tylko do\u015Bwietlaj\u0105 wn\u0119trze, ale tworz\u0105 zmienn\u0105 kompozycj\u0119 cieni nadaj\u0105c\u0105 obiektowi dynamicznego charakteru. Inspiracj\u0105 by\u0142a tw\u00F3rczo\u015B\u0107 Rema Koolhaasa.",
    highlights: [
      "Inspiracja tw\u00F3rczo\u015Bci\u0105 Rema Koolhaasa",
      "Kompozycja cieni jako element projektowy",
      "Funkcjonalno\u015B\u0107 przestrzeni publicznej",
    ],
    team: null,
    heroImage: "/projects/busstop-hero.jpg",
    galleryImages: [
      "/projects/busstop-1.jpg",
    ],
    accentColor: "#7A8BA0",
  },
];

const categories = [
  "Wszystkie",
  "Architektura",
  "Urbanistyka",
  "Architektura / Wn\u0119trza",
  "Ma\u0142a architektura",
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filtered =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-32 md:py-44 lg:py-56 px-8 md:px-16 lg:px-24"
      ref={ref}
    >
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-light font-display">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl">
            Wybrane <span className="text-gradient">projekty</span>
          </h2>
          <p className="text-muted mt-6 max-w-2xl font-light text-base md:text-lg leading-relaxed">
            {"Projekty realizowane na studiach in\u017Cynierskich na Wydziale Architektury Politechniki Gda\u0144skiej."}
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-14 md:mb-20"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedProject(null);
              }}
              className={`px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase transition-all duration-500 border font-display ${
                activeCategory === cat
                  ? "bg-accent text-[#0C0A08] border-accent"
                  : "border-border/50 text-muted hover:border-accent/50 hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects list */}
        <div className="space-y-0">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group border-t border-border/30 last:border-b"
            >
              {/* Main row */}
              <div
                className="py-8 md:py-10 cursor-pointer flex flex-row items-center gap-4 md:gap-8"
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              >
                {/* Thumbnail */}
                <div className="w-20 h-14 md:w-28 md:h-16 relative overflow-hidden shrink-0 bg-card-bg border border-border/30">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 80px, 112px"
                  />
                </div>

                {/* Number */}
                <span className="hidden md:block font-display text-sm text-accent/40 tracking-wider w-10 shrink-0">
                  {project.number}
                </span>

                {/* Title block */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-muted/60 text-sm mt-1 font-light truncate">
                    {project.subtitle}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 md:gap-8 shrink-0">
                  <span className="text-muted/50 text-xs tracking-wider font-display hidden lg:block">
                    {project.category}
                  </span>
                  <span className="text-muted/40 text-xs tracking-wider font-display">
                    {project.year}
                  </span>

                  <motion.div
                    animate={{
                      rotate: expandedProject === project.id ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-9 h-9 border border-border/50 rounded-full flex items-center justify-center group-hover:border-accent/50 transition-colors duration-500 shrink-0"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-muted group-hover:text-accent transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
                      {/* Left: text */}
                      <div className="lg:col-span-5">
                        <span
                          className="inline-block px-3 py-1 text-[10px] tracking-[0.15em] uppercase font-display mb-4"
                          style={{
                            backgroundColor: `${project.accentColor}22`,
                            color: project.accentColor,
                            border: `1px solid ${project.accentColor}44`,
                          }}
                        >
                          {project.semester}
                        </span>

                        <div className="flex items-center gap-2 mb-4 text-muted text-sm font-light">
                          <svg className="w-3.5 h-3.5 text-accent/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </div>

                        <p className="text-muted font-light leading-relaxed text-[15px] mb-6">
                          {project.description}
                        </p>

                        <div className="space-y-2.5 mb-6">
                          {project.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-3">
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: project.accentColor }}
                              />
                              <span className="text-foreground/70 text-sm font-light">{h}</span>
                            </div>
                          ))}
                        </div>

                        {project.team && (
                          <div className="pt-4 border-t border-border/30 text-sm">
                            <span className="text-muted/60 text-xs tracking-wider uppercase font-display">
                              {"Zesp\u00F3\u0142: "}
                            </span>
                            <span className="text-muted font-light">{project.team}</span>
                          </div>
                        )}
                      </div>

                      {/* Right: gallery */}
                      <div className="lg:col-span-7">
                        <div className={`grid gap-3 ${
                          project.galleryImages.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2"
                        }`}>
                          {/* Hero always first, spanning full width */}
                          <div className="relative overflow-hidden group/img sm:col-span-2 aspect-[2/1]">
                            <Image
                              src={project.heroImage}
                              alt={`${project.title} - main`}
                              fill
                              className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, 800px"
                            />
                            <div className="absolute inset-0 bg-accent/0 group-hover/img:bg-accent/5 transition-colors duration-500" />
                          </div>
                          {project.galleryImages.map((img, idx) => (
                            <div
                              key={img}
                              className="relative overflow-hidden group/img aspect-[4/3]"
                            >
                              <Image
                                src={img}
                                alt={`${project.title} - ${idx + 1}`}
                                fill
                                className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 400px"
                              />
                              <div className="absolute inset-0 bg-accent/0 group-hover/img:bg-accent/5 transition-colors duration-500" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
