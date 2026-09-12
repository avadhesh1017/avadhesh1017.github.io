"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SvgIcon from "@/components/common/SvgIcon";
import { FAQ_DATA } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FaqItem({ item, lang }: { item: (typeof FAQ_DATA)[number]; lang: "en" | "de" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left group"
      >
        <h4 className="font-medium text-lg sm:text-xl text-white group-hover:text-android-green transition-colors pr-4">
          {item.question[lang]}
        </h4>
        <div className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <SvgIcon type="chevronDown" className="w-5 h-5" normalColor="#8B8B8B" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-white/60 leading-relaxed text-sm sm:text-base">
          {item.answer[lang]}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".faq-header-item", {
        scrollTrigger: { trigger: ".faq-header-wrapper", start: "top 85%", toggleActions: "play none none reverse" },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
      });

      gsap.from(".faq-list-item", {
        scrollTrigger: { trigger: ".faq-list-wrapper", start: "top 85%", toggleActions: "play none none reverse" },
        y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="section-container" ref={sectionRef}>
      <div className="grid gap-10 faq-header-wrapper">
        <div className="section-label-wrapper faq-header-item">
          <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#F5F5F5" />
          <p className="section-label-text">{t("faq.label", lang)}</p>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[56px] text-light-heading max-w-[700px] faq-header-item leading-tight">
          {t("faq.heading", lang)}
        </h2>
      </div>

      <div className="mt-10 max-w-[800px] faq-list-wrapper">
        {FAQ_DATA.map((item) => (
          <div key={item.id} className="faq-list-item">
            <FaqItem item={item} lang={lang} />
          </div>
        ))}
      </div>
    </section>
  );
}
