"use client";

import Image from "next/image";
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

      /* Parallax drift on the hero background image */
      gsap.to(".hero-bg-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      /* Fade-in the name + badge on load */
      gsap.from(".hero-name", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(".hero-role", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
      gsap.from(".hero-bottom-item", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.9,
      });
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
          <div className="relative h-screen overflow-hidden bg-black">
            {/* AI-generated hero background */}
            <Image
              src="/img/hero-bg.png"
              alt=""
              fill
              priority
              unoptimized
              className="hero-bg-img object-cover object-center opacity-60"
              sizes="100vw"
            />

            {/* Gradient overlays for depth and text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

            {/* Subtle animated scanlines */}
            <div
              className="absolute inset-0 opacity-[0.015] pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(61,220,132,0.15) 2px, rgba(61,220,132,0.15) 4px)`,
              }}
            />

            <div className="relative z-10 mx-auto flex h-screen flex-col justify-between px-6 container">
              {/* Top — Code icon with glow */}
              <div className="flex w-full items-center justify-center gap-2 pt-8">
                <div className="relative">
                  <div className="absolute inset-0 blur-xl bg-android-green/20 rounded-full scale-150" />
                  <svg viewBox="0 0 24 24" className="relative w-8 h-8" fill="none">
                    <polyline points="16 18 22 12 16 6" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="8 6 2 12 8 18" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="14" y1="4" x2="10" y2="20" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Center — Big name with glow effect */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="hero-name text-center font-bold text-white text-5xl mg-sm:text-6xl sm:text-8xl md:text-[140px] lg:text-[200px] leading-none tracking-tight drop-shadow-[0_0_80px_rgba(61,220,132,0.15)]">
                  AVADHESH
                </h1>
                <p className="hero-role text-android-green font-medium text-lg sm:text-xl md:text-2xl tracking-widest uppercase">
                  {t("hero.role", lang)}
                </p>
              </div>

              {/* Bottom — CTA + info */}
              <div className="flex flex-col items-center md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-0 pb-6">
                <Link href="/contact" className="hero-bottom-item btn-green w-full md:w-auto text-center">
                  {t("hero.cta", lang)}
                </Link>

                <address className="hero-bottom-item not-italic font-medium text-white text-center md:text-left">
                  <p className="text-white/60">avdheshghevariya01@gmail.com</p>
                  <p>{t("hero.location", lang)}</p>
                </address>

                <div className="hero-bottom-item flex items-center rounded-lg bg-white/[0.06] p-3 backdrop-blur-md border border-white/10 shadow-lg shadow-android-green/5">
                  <ul className="grid gap-1.5 px-3 text-sm">
                    <li className="text-android-green font-medium">Software Engineering</li>
                    <li className="text-white/40">Mobile & Systems</li>
                    <li className="text-white/40">Autonomous Driving</li>
                    <li className="text-white/40">Clean Architecture</li>
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
