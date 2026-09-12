"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "@/lib/i18n";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const curveWrapRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useGSAP(
    () => {
      if (!sectionRef.current || !heroRef.current || !curveWrapRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          heroRef.current,
          { scale: 1, borderRadius: 0 },
          {
            scale: 0.62,
            borderRadius: 36,
            transformOrigin: "center center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          heroRef.current,
          { scale: 1, borderRadius: 0 },
          {
            scale: 0.85,
            borderRadius: 20,
            transformOrigin: "center center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      gsap.fromTo(
        curveWrapRef.current,
        { height: 100 },
        {
          height: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom bottom",
            end: "bottom center",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section id="home-hero" ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Animated background strips */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-android-green/20 to-transparent" />
          <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-android-green/10 to-transparent" />
          <div className="absolute top-0 left-[85%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        <div ref={heroRef} className="will-change-transform">
          <div className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-[#0a1a0a] to-black">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(61,220,132,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(61,220,132,0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 mx-auto flex h-screen flex-col justify-between px-6 container">
              {/* Top — Android icon */}
              <div className="flex w-full items-center justify-center gap-2 pt-8">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                  <path
                    d="M18 8H6V16C6 16.53 6.21 17.04 6.59 17.41C6.96 17.79 7.47 18 8 18H16C16.53 18 17.04 17.79 17.41 17.41C17.79 17.04 18 16.53 18 16V8Z"
                    stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <path d="M15 3L17 6H7L9 3" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="5.5" r="0.5" fill="#3DDC84" />
                  <circle cx="14" cy="5.5" r="0.5" fill="#3DDC84" />
                  <path d="M5 10V14M19 10V14M9 18V21M15 18V21" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Center — Big name */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-center font-bold text-white text-5xl mg-sm:text-6xl sm:text-8xl md:text-[140px] lg:text-[200px] leading-none tracking-tight">
                  AVADHESH
                </h1>
                <p className="text-android-green font-medium text-lg sm:text-xl md:text-2xl tracking-widest uppercase">
                  {t("hero.role", lang)}
                </p>
              </div>

              {/* Bottom — CTA + info */}
              <div className="flex flex-col items-center md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-0 pb-6">
                <Link href="/contact" className="btn-green w-full md:w-auto text-center">
                  {t("hero.cta", lang)}
                </Link>

                <address className="not-italic font-medium text-white text-center md:text-left">
                  <p className="text-white/60">avdheshghevariya01@gmail.com</p>
                  <p>{t("hero.location", lang)}</p>
                </address>

                <div className="flex items-center rounded-[4px] bg-white/[0.06] p-3 backdrop-blur-[3px] border border-white/10">
                  <ul className="grid gap-1.5 px-3 text-sm">
                    <li className="text-android-green font-medium">Android Development</li>
                    <li className="text-white/40">Firebase & Cloud</li>
                    <li className="text-white/40">Material Design</li>
                    <li className="text-white/40">MVVM Architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div
        ref={curveWrapRef}
        className="absolute bottom-0 left-0 right-0 z-20 w-full overflow-hidden pointer-events-none"
        style={{ height: 100 }}
      >
        <div className="absolute top-0 h-[750%] left-[-25%] w-[150%] bg-black will-change-transform rounded-t-[50%]" />
      </div>
    </section>
  );
}
