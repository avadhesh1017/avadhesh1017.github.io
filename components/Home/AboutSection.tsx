"use client";

import SvgIcon from "@/components/common/SvgIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { useLang, t } from "@/lib/i18n";
import { CAREER_TIMELINE } from "@/lib/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TAGS = ["// Android", "// Firebase", "// Material Design"];

const STATS = [
  { title: { en: "Years of Experience", de: "Jahre Erfahrung" }, value: "2+" },
  { title: { en: "Apps Built", de: "Apps entwickelt" }, value: "5+" },
  { title: { en: "Technologies", de: "Technologien" }, value: "12+" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const curveWrapRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useGSAP(
    () => {
      if (curveWrapRef.current) {
        gsap.fromTo(
          curveWrapRef.current,
          { height: 100, top: -100 },
          {
            height: 0,
            top: 0,
            ease: "none",
            scrollTrigger: {
              trigger: curveWrapRef.current,
              start: "top bottom",
              end: "bottom center",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      gsap.from(".about-header-item", {
        scrollTrigger: { trigger: ".about-header-trigger", start: "top 85%", toggleActions: "play none none reverse" },
        y: 35, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
      });

      gsap.from(".about-card-container", {
        scrollTrigger: { trigger: ".about-card-container", start: "top 85%", toggleActions: "play none none reverse" },
        y: 45, opacity: 0, duration: 0.85, ease: "power3.out",
      });

      gsap.from(".about-bio-item", {
        scrollTrigger: { trigger: ".about-card-container", start: "top 80%", toggleActions: "play none none reverse" },
        y: 25, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power3.out",
      });

      gsap.from(".about-stat-item", {
        scrollTrigger: { trigger: ".about-stats-container", start: "top 85%", toggleActions: "play none none reverse" },
        x: 25, opacity: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
      });

      gsap.from(".about-exp-item", {
        scrollTrigger: { trigger: ".about-exp-container", start: "top 85%", toggleActions: "play none none reverse" },
        x: -25, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
      });

      gsap.from(".about-photo-wrapper", {
        scrollTrigger: { trigger: ".about-card-container", start: "top 80%", toggleActions: "play none none reverse" },
        scale: 0.94, opacity: 0, duration: 0.9, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 relative bg-white">
      {/* Morphing curve */}
      <div ref={curveWrapRef} className="absolute -top-[100px] curve-wrap" style={{ height: 100 }}>
        <div className="absolute top-0 h-[750%] left-[-25%] w-[150%] bg-white will-change-transform rounded-t-[50%]" />
      </div>

      <div className="container mx-auto grid gap-10 px-4 lg:px-0">
        {/* Header */}
        <div className="about-header-trigger grid gap-3">
          <div className="section-label-wrapper justify-center about-header-item">
            <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#8B8B8B" />
            <p className="section-label-text">{t("about.label", lang)}</p>
          </div>
          <h2 className="section-heading-dark text-center about-header-item">
            {t("about.heading", lang)}
          </h2>
        </div>

        {/* White card */}
        <div className="shadow-card bg-light-bg p-4 ex-sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-10 rounded-[4px] w-full about-card-container">
          <div className="flex flex-col w-[stretch] h-fit gap-8">
            {/* Bio + socials */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
              <h3 className="font-medium text-dim-text text-xl sm:text-2xl md:text-[28px] max-w-[482px] about-bio-item">
                <span className="text-black">Avadhesh Ghevariya</span>
                {t("about.bio", lang)}
              </h3>
              <div className="flex gap-3 h-fit about-bio-item">
                <a
                  href="https://github.com/avadhesh1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-dark"
                >
                  <SvgIcon type="github" className="w-4 h-4" normalColor="#000000" />
                </a>
                <a href="mailto:avdheshghevariya01@gmail.com" className="social-icon-dark">
                  <SvgIcon type="email" className="w-4 h-4" normalColor="#000000" />
                </a>
              </div>
            </div>

            {/* Tags + description */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14">
              <div className="grid gap-6 lg:gap-4 w-full lg:max-w-[574px] about-bio-item">
                <div className="flex gap-4 text-black font-medium text-sm">
                  {TAGS.map((tag, i) => (
                    <p key={i}>{tag}</p>
                  ))}
                </div>
                <p className="text-dim-text max-w-[305px]">
                  {t("about.locationText", lang)}
                </p>
              </div>

              {/* Stats */}
              <div className="w-full grid gap-3 justify-end h-fit about-stats-container">
                {STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between min-w-[250px] font-medium border-b border-solid border-dim-text pb-1 about-stat-item hover:border-black transition-colors"
                  >
                    <p className="text-dim-text">{item.value}</p>
                    <p className="text-black">{item.title[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience timeline */}
            <div className="grid gap-6 about-exp-container">
              <h3 className="font-medium text-black">
                {t("about.experience", lang)} <br />
                <span className="text-dim-text">{t("about.expSub", lang)}</span>
              </h3>
              <div className="grid gap-6">
                {CAREER_TIMELINE.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="grid gap-1 pl-4 border-l-2 border-solid border-android-green/50 ml-6 about-exp-item"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-xl sm:text-2xl text-black">
                        {item.role[lang]}
                      </h4>
                      <p className="text-dim-text text-sm">{item.period}</p>
                    </div>
                    <p className="text-dim-text text-sm">{item.company[lang]}</p>
                    <p className="text-dim-text">{item.description[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="w-full lg:w-[320px] shrink-0 about-photo-wrapper will-change-transform">
            <div className="w-full h-[400px] lg:h-[500px] rounded-[12px] shadow-md overflow-hidden bg-gradient-to-br from-android-green/10 to-transparent flex items-center justify-center relative">
              <Image
                src="/img/profile-placeholder.svg"
                width={320}
                height={500}
                alt="Avadhesh Ghevariya"
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
