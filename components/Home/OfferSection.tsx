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
    <section ref={sectionRef} className="relative">
      {/* Sticky viewport — stays on screen while scrolling through spacer */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background images that crossfade */}
        {OFFER_IMAGES.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeIndex === index ? 0.25 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
          </div>
        ))}

        {/* Centered title stack */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="grid gap-10 text-center">
            <div className="section-label-wrapper justify-center">
              <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#ffffff" />
              <p className="section-label-text">{t("offer.label", lang)}</p>
            </div>

            <div className="grid gap-4">
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

            <p className="text-base md:text-lg text-white/70 max-w-[480px] mx-auto transition-all duration-500">
              {OFFER_INFO[activeIndex].description[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll spacer — drives the scroll progress */}
      <div style={{ height: `${OFFER_INFO.length * 50}vh` }} />
    </section>
  );
}
