"use client";

import { useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SvgIcon from "@/components/common/SvgIcon";
import { OFFER_INFO } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const OFFER_IMAGES = [
  "/img/offer-software.png",
  "/img/offer-systems.png",
  "/img/offer-mobile.png",
];

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
            <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#ffffff" />
            <p className="section-label-text">{t("offer.label", lang)}</p>
          </div>

          <div className="grid gap-4 text-center">
            {OFFER_INFO.map((offer, index) => (
              <h3
                key={offer.title}
                className={`text-4xl sm:text-5xl md:text-7xl font-semibold transition-all duration-500 ${
                  activeIndex === index ? "text-white" : "text-muted-text"
                }`}
              >
                {offer.title}
              </h3>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mb-20" style={{ height: `${OFFER_INFO.length * 100}vh` }}>
        {/* Panels with premium images */}
        {OFFER_INFO.map((offer, index) => (
          <div key={offer.title} className="h-screen overflow-hidden">
            <div className="z-0 grid grid-cols-1 md:grid-cols-3">
              <div
                className={`w-full h-[300px] rounded-2xl mx-4 overflow-hidden relative ${
                  index === 1 ? "md:col-start-3" : ""
                }`}
              >
                <Image
                  src={OFFER_IMAGES[index]}
                  alt={offer.title}
                  fill
                  unoptimized
                  className="object-cover opacity-30 hover:opacity-50 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/80" />
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
