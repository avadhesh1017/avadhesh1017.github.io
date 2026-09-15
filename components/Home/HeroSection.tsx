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
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Ambient glow that shows when hero scales down */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-[80px]" style={{ animation: "pulse 4s ease-in-out infinite alternate" }} />
        </div>

        <div ref={heroRef} className="will-change-transform">
          <div className="relative h-screen overflow-hidden bg-black">
            <Image
              src="/img/hero-bg.png"
              alt=""
              fill
              priority
              unoptimized
              className="hero-bg-img object-cover object-center opacity-50"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

            <div className="relative z-10 mx-auto flex h-screen flex-col justify-between px-6 container">
              <div className="flex w-full items-center justify-center gap-2 pt-8">
                <span className="font-bold text-2xl text-white/80 tracking-tight">A<span className="text-white/30">.</span></span>
              </div>

              <div className="flex flex-col items-center gap-4">
                <h1 className="hero-name text-center font-bold text-white text-5xl mg-sm:text-6xl sm:text-8xl md:text-[140px] lg:text-[200px] leading-none tracking-tight drop-shadow-[0_0_80px_rgba(255,255,255,0.08)]">
                  AVADHESH
                </h1>
                <p className="hero-role text-white/70 font-medium text-lg sm:text-xl md:text-2xl tracking-widest uppercase">
                  {t("hero.role", lang)}
                </p>
              </div>

              <div className="flex flex-col items-center md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-0 pb-6">
                <Link href="/contact" className="hero-bottom-item btn-green w-full md:w-auto text-center">
                  {t("hero.cta", lang)}
                </Link>

                <address className="hero-bottom-item not-italic font-medium text-white text-center md:text-left">
                  <p className="text-white/40">avdheshghevariya01@gmail.com</p>
                  <p>{t("hero.location", lang)}</p>
                </address>

                <div className="hero-bottom-item flex items-center rounded-lg bg-white/[0.06] p-3 backdrop-blur-md border border-white/10">
                  <ul className="grid gap-1.5 px-3 text-sm">
                    <li className="text-white font-medium">Software Engineering</li>
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
