"use client";

import Link from "next/link";
import SvgIcon from "@/components/common/SvgIcon";
import { PROJECTS } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";

export default function ProjectsPage() {
  const { lang } = useLang();

  return (
    <main className="bg-black">
      <section className="section-container pt-10">
        <div className="grid gap-6">
          <div className="section-label-wrapper">
            <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#ffffff" />
            <p className="section-label-text">{t("portfolio.label", lang)}</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-white">
            {t("projectsPage.heading", lang)}
          </h1>
          <p className="text-white/50 max-w-[500px]">
            {t("projectsPage.description", lang)}
          </p>
        </div>
      </section>

      <section className="section-container pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group p-5 bg-card-bg rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                <div>
                  <h2 className="font-medium text-xl sm:text-2xl text-white group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-text mt-1">{project.category[lang]} • {project.time}</p>
                </div>
                <div className="py-1.5 px-5 border border-white/10 rounded-full group-hover:border-white/30 group-hover:bg-white/10 transition-colors">
                  <SvgIcon type="rightArrow" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" normalColor="white" />
                </div>
              </div>

              {/* Placeholder visual */}
              <div
                className="w-full h-[260px] sm:h-[320px] rounded-xl flex flex-col items-center justify-center gap-3"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}12, ${project.accentColor}04)` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold"
                  style={{ background: `${project.accentColor}20`, color: project.accentColor }}
                >
                  {project.title[0]}
                </div>
                <div className="flex flex-wrap gap-2 justify-center px-6 max-w-[300px]">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-white/50 line-clamp-2">
                {project.description[lang]}
              </p>

              {/* GitHub link */}
              {project.github && (
                <div className="mt-3 flex items-center gap-2 text-xs text-white/40">
                  <SvgIcon type="github" className="w-3.5 h-3.5" normalColor="#999999" />
                  <span>View on GitHub</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
