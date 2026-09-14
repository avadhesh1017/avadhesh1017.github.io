"use client";

import { useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SvgIcon from "@/components/common/SvgIcon";
import { OFFER_INFO } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function OfferSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLang();

  const handleUpdate = useCallback((self: ScrollTrigger) => {
    const next = Math.min(
      OFFER_INFO.length - 1,
      Math.floor(self.progress * OFFER_INFO.length)
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: handleUpdate,
      });
    },
    { scope: sectionRef, dependencies: [handleUpdate] }
  );

  return (
    <section ref={sectionRef} className="relative section-container">
      {/* Sticky title stack */}
      <div className="z-10 pointer-events-none sticky flex justify-center items-center -top-10 h-screen">
        <div className="z-20 h-fit grid gap-10 pointer-events-auto">
          <div className="section-label-wrapper justify-center">
            <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#3DDC84" />
            <p className="section-label-text">{t("offer.label", lang)}</p>
          </div>

          <div className="grid gap-4 text-center">
            {OFFER_INFO.map((offer, index) => (
              <h3
                key={offer.title}
                className={`text-4xl sm:text-5xl md:text-7xl font-semibold transition-all duration-500 ${
                  activeIndex === index ? "text-android-green" : "text-muted-text"
                }`}
              >
                {offer.title}
              </h3>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mb-20" style={{ height: `${OFFER_INFO.length * 100}vh` }}>
        {/* Panels with gradient backgrounds */}
        {OFFER_INFO.map((offer, index) => (
          <div key={offer.title} className="h-screen overflow-hidden">
            <div className="z-0 grid grid-cols-1 md:grid-cols-3">
              <div
                className={`w-full h-[300px] rounded-2xl mx-4 ${
                  index === 1 ? "md:col-start-3" : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0 ? "#3DDC84" : index === 1 ? "#FF9800" : "#2196F3"
                  }15, transparent)`,
                }}
              >
                <div className="flex items-center justify-center h-full">
                  {index === 0 ? (
                    <svg viewBox="0 0 24 24" className="w-24 h-24 opacity-20" fill="none">
                      <polyline points="16 18 22 12 16 6" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="8 6 2 12 8 18" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="14" y1="4" x2="10" y2="20" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <SvgIcon
                      type={index === 1 ? "globe" : "github"}
                      className="w-24 h-24 opacity-20"
                      normalColor={index === 1 ? "#FF9800" : "#2196F3"}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Sticky description */}
        <div className="flex justify-center sticky bottom-20 z-20 pointer-events-none px-6 text-center">
          <p className="text-base md:text-lg text-white/80 max-w-[417px] transition-all duration-500 pointer-events-auto">
            {OFFER_INFO[activeIndex].description[lang]}
          </p>
        </div>
      </div>
    </section>
  );
}
