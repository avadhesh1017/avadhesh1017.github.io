"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SvgIcon from "@/components/common/SvgIcon";
import { PROJECTS } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* Project placeholder SVG cards — generated inline since we don't have real screenshots */
function ProjectPlaceholder({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4 rounded-xl"
      style={{ background: `linear-gradient(135deg, ${project.accentColor}15, ${project.accentColor}05)` }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
        style={{ background: `${project.accentColor}25`, color: project.accentColor }}
      >
        {project.title[0]}
      </div>
      <p className="text-white/50 text-sm font-medium">{project.title}</p>
      <div className="flex flex-wrap gap-2 justify-center px-6 max-w-[280px]">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/40"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll<HTMLElement>(".portfolio-card");
      if (!cards.length) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        cards.forEach((card, index) => {
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            card,
            { x: isLeft ? -60 : 60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: gridRef, dependencies: [lang] }
  );

  return (
    <section className="section-container overflow-hidden grid gap-10 sm:gap-14 lg:gap-20">
      {/* Header */}
      <div className="grid gap-6 sm:gap-8">
        <div className="section-label-wrapper">
          <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#F5F5F5" />
          <p className="section-label-text">{t("portfolio.label", lang)}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-0">
          <div className="grid gap-4 sm:gap-6">
            <h2 className="section-heading">{t("portfolio.heading", lang)}</h2>
            <p className="max-w-[440px] font-extralight text-white/90 text-sm sm:text-base leading-relaxed">
              {t("portfolio.description", lang)}
            </p>
          </div>
          <Link
            href="/projects"
            className="h-fit shadow-glow-white font-semibold py-4 px-8 rounded-btn text-black gradient-btn-white inline-block text-center hover:scale-[1.02] transition-transform duration-300 shrink-0"
          >
            {t("portfolio.browseAll", lang)}
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {PROJECTS.map((project, index) => (
          <Link
            href={`/projects/${project.id}`}
            className="portfolio-card p-4 sm:p-5 bg-card-bg grid group hover:border hover:border-android-green/40 rounded-2xl transition-all duration-300 cursor-pointer shadow-card"
            key={index}
          >
            <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
              <div className="flex gap-2 items-baseline">
                <h3 className="font-medium text-xl sm:text-2xl text-white group-hover:text-android-green transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-muted-text">• {project.time}</span>
              </div>
              <div className="py-1.5 px-4 sm:px-5 border border-white/10 rounded-full group-hover:border-android-green/40 group-hover:bg-android-green/10 transition-colors flex items-center justify-center">
                <SvgIcon
                  type="rightArrow"
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  normalColor="white"
                />
              </div>
            </div>
            <div className="relative w-full h-[280px] very-sm:h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-xl bg-black/40">
              <ProjectPlaceholder project={project} />
            </div>
            <p className="mt-3 text-sm text-white/50 line-clamp-2">
              {project.description[lang]}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
