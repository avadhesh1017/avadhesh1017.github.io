"use client";

import Image from "next/image";
import SvgIcon from "@/components/common/SvgIcon";
import { CAREER_TIMELINE, SKILL_CATEGORIES, SPOKEN_LANGUAGES } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <main className="bg-black">
      {/* Hero banner */}
      <section className="section-container pt-10">
        <div className="grid gap-6">
          <div className="section-label-wrapper">
            <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#ffffff" />
            <p className="section-label-text">{t("about.label", lang)}</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-white">
            {t("about.heading", lang)}
          </h1>
        </div>
      </section>

      {/* Profile card */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div className="grid gap-8">
            <h2 className="font-medium text-white text-xl sm:text-2xl md:text-3xl">
              Avadhesh Ghevariya
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-[600px]">
              {t("about.bio", lang)}
            </p>
            <p className="text-white/60 max-w-[600px] leading-relaxed">
              {t("about.locationText", lang)}
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/avadhesh-ghevariya-a9b108371" target="_blank" rel="noopener noreferrer" className="social-icon-light">
                <SvgIcon type="linkedin" className="w-5 h-5" normalColor="#FFFFFF" />
              </a>
              <a href="https://github.com/avadhesh1017" target="_blank" rel="noopener noreferrer" className="social-icon-light">
                <SvgIcon type="github" className="w-5 h-5" normalColor="#FFFFFF" />
              </a>
              <a href="mailto:avdheshghevariya01@gmail.com" className="social-icon-light">
                <SvgIcon type="email" className="w-5 h-5" normalColor="#FFFFFF" />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="w-full lg:w-[320px] shrink-0">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
              <Image
                src="/img/profile.jpg"
                width={320}
                height={400}
                alt="Avadhesh Ghevariya"
                className="w-full h-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-container border-t border-white/5">
        <div className="grid gap-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
            {t("aboutPage.timeline", lang)}
          </h2>
          <div className="grid gap-6">
            {CAREER_TIMELINE.map((item, index) => (
              <div
                key={index}
                className="grid gap-2 pl-6 border-l-2 border-white/20 hover:border-white transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h3 className="font-medium text-xl text-white">{item.role[lang]}</h3>
                  <span className="text-sm text-white/70 font-medium">{item.period}</span>
                </div>
                <p className="text-white/50 text-sm font-medium">{item.company[lang]}</p>
                <p className="text-white/40 text-sm leading-relaxed">{item.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section-container border-t border-white/5">
        <div className="grid gap-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
            {t("aboutPage.skills", lang)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, index) => (
              <div key={index} className="p-6 bg-card-bg rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <h3 className="font-semibold text-white mb-4">{cat.category[lang]}</h3>
                <ul className="grid gap-2.5">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section-container border-t border-white/5">
        <div className="grid gap-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
            {t("aboutPage.languages", lang)}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SPOKEN_LANGUAGES.map((language, i) => (
              <div key={i} className="p-4 bg-card-bg rounded-xl border border-white/5 text-center hover:border-white/20 transition-all">
                <p className="text-white font-medium">{language.name[lang]}</p>
                <p className="text-white/40 text-sm mt-1">{language.level[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
