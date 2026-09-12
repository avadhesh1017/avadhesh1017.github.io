"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import SvgIcon from "@/components/common/SvgIcon";
import { PROJECTS } from "@/lib/constants";
import { useLang } from "@/lib/i18n";

export default function ProjectDetailClient() {
  const params = useParams();
  const { lang } = useLang();
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center grid gap-4">
          <h1 className="text-4xl font-bold text-white">404</h1>
          <p className="text-white/50">{lang === "en" ? "Project not found" : "Projekt nicht gefunden"}</p>
          <Link href="/projects" className="btn-green inline-block text-sm py-3 px-6">
            {lang === "en" ? "Back to Projects" : "Zurück zu Projekten"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="section-container pt-10">
        <div className="grid gap-4">
          <Link href="/projects" className="flex items-center gap-2 text-white/50 hover:text-android-green transition-colors text-sm w-fit">
            <SvgIcon type="rightArrow" className="w-3 h-3 rotate-180" normalColor="currentColor" />
            {lang === "en" ? "Back to Projects" : "Zurück zu Projekten"}
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-android-green font-medium text-sm mb-2">{project.category[lang]} • {project.time}</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">{project.title}</h1>
              <p className="text-white/50 text-lg mt-3 max-w-[600px]">{project.subtitle[lang]}</p>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost shrink-0 text-sm py-3 px-5"
              >
                <SvgIcon type="github" className="w-4 h-4" normalColor="white" />
                <span>GitHub</span>
                <SvgIcon type="rightArrow" className="w-3.5 h-3.5" normalColor="white" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Hero image placeholder */}
      <section className="section-container pt-6">
        <div
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl flex items-center justify-center border border-white/5"
          style={{ background: `linear-gradient(135deg, ${project.accentColor}10, transparent)` }}
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl font-bold"
              style={{ background: `${project.accentColor}20`, color: project.accentColor }}
            >
              {project.title[0]}
            </div>
            <p className="text-white/30 text-sm">{project.title}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {lang === "en" ? "Overview" : "Überblick"}
              </h2>
              <p className="text-white/60 leading-relaxed">{project.description[lang]}</p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {lang === "en" ? "Key Features" : "Hauptfunktionen"}
              </h2>
              <ul className="grid gap-3">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0 p-1 rounded-full bg-android-green/15">
                      <SvgIcon type="tickMark" normalColor="#3DDC84" className="w-2.5 h-2" />
                    </div>
                    <span className="text-white/70">{feature[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="grid gap-6 h-fit">
            {/* Tech stack */}
            <div className="p-6 bg-card-bg rounded-2xl border border-white/5">
              <h3 className="text-sm text-white/50 font-medium mb-4 uppercase tracking-wider">
                {lang === "en" ? "Tech Stack" : "Technologien"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/70 hover:border-android-green/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="p-6 bg-card-bg rounded-2xl border border-white/5">
              <h3 className="text-sm text-white/50 font-medium mb-4 uppercase tracking-wider">Links</h3>
              <div className="grid gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-android-green transition-colors"
                  >
                    <SvgIcon type="github" className="w-5 h-5" normalColor="currentColor" />
                    <span className="text-sm">Source Code</span>
                    <SvgIcon type="rightArrow" className="w-3 h-3 ml-auto" normalColor="currentColor" />
                  </a>
                )}
              </div>
            </div>

            {/* Accent color */}
            <div className="p-6 bg-card-bg rounded-2xl border border-white/5">
              <h3 className="text-sm text-white/50 font-medium mb-4 uppercase tracking-wider">
                {lang === "en" ? "Accent Color" : "Akzentfarbe"}
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl" style={{ background: project.accentColor }} />
                <span className="text-white/70 font-mono text-sm">{project.accentColor}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
