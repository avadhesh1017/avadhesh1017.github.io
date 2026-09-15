"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "@/lib/i18n";
import SvgIcon from "./SvgIcon";

gsap.registerPlugin(ScrollTrigger);

const TABS = (lang: "en" | "de") => [
  { name: t("nav.home", lang), href: "/" },
  { name: t("nav.about", lang), href: "/about" },
  { name: t("nav.projects", lang), href: "/projects" },
  { name: t("nav.contact", lang), href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, setLang } = useLang();

  const [isVisible, setIsVisible] = useState(!isHome);
  const [headerUnlocked, setHeaderUnlocked] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  /* ── Hero scroll trigger (home only) ── */
  useEffect(() => {
    if (!isHome) {
      setIsVisible(true);
      setHeaderUnlocked(true);
      return;
    }

    const hero = document.getElementById("home-hero");
    if (!hero) return;

    lastScrollY.current = window.scrollY;

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom bottom",
      onUpdate(self) {
        if (self.progress >= 0.9 && !headerUnlocked) {
          setHeaderUnlocked(true);
          setIsVisible(true);
        }
        if (!headerUnlocked && self.progress < 0.5) {
          setIsVisible(false);
        }
      },
      onLeaveBack() {
        setHeaderUnlocked(false);
        setIsVisible(false);
      },
    });

    return () => { trigger.kill(); };
  }, [isHome, headerUnlocked]);

  /* ── Scroll hide/show (after unlocked) ── */
  useEffect(() => {
    if (!isHome || !headerUnlocked) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastScrollY.current;
        if (Math.abs(diff) < 5) { ticking = false; return; }
        setIsVisible(diff < 0);
        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, [isHome, headerUnlocked]);

  const tabs = TABS(lang);

  return (
    <>
      <header
        className={`${
          isHome ? "fixed" : "relative"
        } left-0 top-0 z-[999] w-full bg-dark-bg/90 backdrop-blur-md transition-all duration-500 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto sm:px-8 ex-sm:px-6 px-4 flex w-full items-center justify-between py-5">
          {/* Logo — "A." */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-2xl text-white tracking-tight">A<span className="text-white/40">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-8 md:flex">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`transition-colors ${
                    pathname === tab.href
                      ? "rounded-full bg-white px-4 py-2.5 font-medium text-black"
                      : "text-white hover:text-white/60"
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>

            {/* Lang Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/60 hover:text-white"
            >
              <SvgIcon type="globe" className="w-4 h-4" normalColor="currentColor" />
              {lang === "en" ? "DE" : "EN"}
            </button>

            {/* CTA */}
            <Link href="/contact" className="btn-primary hidden sm:block text-sm py-3 px-6">
              {t("nav.letsTalk", lang)}
            </Link>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[998] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium text-white hover:text-white/60 transition-colors"
            >
              {tab.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-green text-sm py-3 px-8 mt-4"
          >
            {t("nav.letsTalk", lang)}
          </Link>
        </div>
      )}
    </>
  );
}
