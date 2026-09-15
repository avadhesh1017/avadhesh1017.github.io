"use client";

import SvgIcon from "../common/SvgIcon";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SERVICES } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".service-header-item", {
        scrollTrigger: { trigger: ".service-header-wrapper", start: "top 85%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
      });

      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      cards.forEach((card, i) => {
        const details = card.querySelector(".service-details");

        gsap.set(card, { opacity: 1 });
        if (details) gsap.set(details, { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
        });

        tl.from(card, { y: 60, opacity: 0, duration: 0.6, ease: "power3.out" }, 0);
        if (details) {
          tl.from(details, { x: i % 2 === 0 ? 40 : -40, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.2);
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="section-container" ref={sectionRef}>
      <div className="grid gap-10 service-header-wrapper">
        <div className="section-label-wrapper service-header-item">
          <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#ffffff" />
          <p className="section-label-text">{t("services.label", lang)}</p>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[64px] text-light-heading max-w-[855px] service-header-item leading-tight">
          {t("services.heading", lang)}
          <span className="text-light-heading/50">
            {t("services.headingSub", lang)}
          </span>
        </h2>
      </div>

      <div className="grid gap-8 pt-8">
        {SERVICES.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row gap-6 lg:gap-0 service-card bg-card-bg border border-white/5 rounded-3xl overflow-hidden shadow-card hover:border-white/20 transition-all ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* App screenshot with tech background */}
            <div className="w-full lg:min-w-[51%] relative min-h-[300px] lg:min-h-[440px] bg-gradient-to-br from-[#111] to-black flex items-center justify-center overflow-hidden">
              <Image
                src="/img/tech-accent.png"
                alt=""
                fill
                unoptimized
                className="object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
              <div className="relative z-10 w-[180px] sm:w-[200px] lg:w-[220px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <Image
                  src={item.img}
                  width={220}
                  height={470}
                  alt={item.projectType[lang]}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between w-full service-details gap-6">
              <div className="grid gap-4 h-fit">
                <h4 className="text-white font-semibold text-2xl sm:text-3xl">
                  {item.projectType[lang]}
                </h4>
                <ul className="grid gap-3 h-fit">
                  {item.features[lang].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 shrink-0 p-1 rounded-full bg-white/10">
                        <SvgIcon type="tickMark" normalColor="#ffffff" className="w-2.5 h-2" />
                      </div>
                      <span className="text-soft-text text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-white/10">
                <Link href="/contact" className="btn-ghost hover:scale-105 transition-all text-xs sm:text-sm py-3 px-5">
                  <span>{t("services.getInTouch", lang)}</span>
                  <SvgIcon type="rightArrow" className="w-3.5 h-3.5" normalColor="white" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
