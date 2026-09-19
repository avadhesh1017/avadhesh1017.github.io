"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "@/lib/i18n";
import SvgIcon from "@/components/common/SvgIcon";

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
      gsap.from(".hero-desc-item", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.8,
      });
      gsap.from(".hero-bottom-item", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 1.0,
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
              {/* Top logo */}
              <div className="flex w-full items-center justify-center gap-2 pt-8">
                <span className="font-bold text-2xl text-white/80 tracking-tight">A<span className="text-white/30">.</span></span>
              </div>

              {/* Center: name, role, description, availability, buttons */}
              <div className="flex flex-col items-center gap-5">
                <h1 className="hero-name text-center font-bold text-white text-5xl mg-sm:text-6xl sm:text-8xl md:text-[140px] lg:text-[200px] leading-none tracking-tight drop-shadow-[0_0_80px_rgba(255,255,255,0.08)]">
                  AVADHESH
                </h1>
                <p className="hero-role text-white/70 font-medium text-lg sm:text-xl md:text-2xl tracking-widest uppercase">
                  {t("hero.role", lang)}
                </p>

                <p className="hero-desc-item text-white/50 text-sm sm:text-base max-w-[600px] text-center leading-relaxed">
                  {t("hero.description", lang)}
                </p>

                <p className="hero-desc-item text-white/70 text-xs sm:text-sm font-medium tracking-wide text-center border border-white/10 rounded-full px-5 py-2 bg-white/[0.04] backdrop-blur-sm">
                  {t("hero.availability", lang)}
                </p>

                {/* CTA Buttons */}
                <div className="hero-desc-item flex flex-col sm:flex-row items-center gap-3 mt-1">
                  <a
                    href="/cv/lebenslauf.pdf"
                    download
                    className="btn-green w-full sm:w-auto text-center"
                  >
                    {t("hero.downloadCV", lang)}
                  </a>
                  <a
                    href="https://github.com/avadhesh1017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full sm:w-auto text-center text-sm py-3 px-5"
                  >
                    <SvgIcon type="github" className="w-4 h-4" normalColor="white" />
                    <span>{t("hero.viewProjects", lang)}</span>
                  </a>
                </div>
              </div>

              {/* Bottom: contact info + social links */}
              <div className="flex flex-col items-center md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-0 pb-6">
                <address className="hero-bottom-item not-italic font-medium text-white text-center md:text-left">
                  <p className="text-white/40">avdheshghevariya01@gmail.com</p>
                  <p className="text-white/40">+49 15511516067</p>
                  <p>{t("hero.location", lang)}</p>
                </address>

                <div className="hero-bottom-item flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/avadhesh-ghevariya-a9b108371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <SvgIcon type="linkedin" className="w-4 h-4" normalColor="#ffffff" />
                  </a>
                  <a
                    href="https://github.com/avadhesh1017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] transition-colors"
                    aria-label="GitHub"
                  >
                    <SvgIcon type="github" className="w-4 h-4" normalColor="#ffffff" />
                  </a>
                  <a
                    href="mailto:avdheshghevariya01@gmail.com"
                    className="p-3 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] transition-colors"
                    aria-label="Email"
                  >
                    <SvgIcon type="email" className="w-4 h-4" normalColor="#ffffff" />
                  </a>
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
