"use client";

import Link from "next/link";
import SvgIcon from "./SvgIcon";
import { useLang, t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();

  const menu = [
    { name: t("nav.home", lang), link: "/" },
    { name: t("nav.projects", lang), link: "/projects" },
    { name: t("nav.about", lang), link: "/about" },
    { name: t("nav.contact", lang), link: "/contact" },
  ];

  const legal = [
    { name: t("footer.privacy", lang), link: "/" },
    { name: t("footer.terms", lang), link: "/" },
    { name: t("footer.imprint", lang), link: "/" },
  ];

  return (
    <footer className="bg-[linear-gradient(180deg,_#000000_100%,_rgba(5,5,5,0)_0%)]">
      <div className="section-container grid gap-5">
        {/* Big name */}
        <h2 className="font-sans text-[10vw] sm:text-[11vw] lg:text-[13vw] 2xl:text-[200px] leading-none whitespace-nowrap bg-[linear-gradient(0deg,_#000000_15%,_rgba(255,255,255,0.25)_100%)] bg-clip-text text-transparent font-bold text-center">
          AVADHESH
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-10 lg:gap-6">
          <div className="grid gap-6 h-fit">
            <h3 className="text-2xl sm:text-[32px] text-white leading-[120%]">
              {t("footer.ready", lang)} <br />
              <span className="text-white/50">{t("footer.professional", lang)}</span>
            </h3>
            <Link href="/contact" className="btn-ghost w-fit">
              {t("services.getInTouch", lang)}
              <SvgIcon type="rightArrow" className="w-4 h-4" normalColor="white" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-6 w-full">
            <div className="grid gap-4">
              <h4 className="font-medium text-white/50">{t("footer.menu", lang)}</h4>
              <div className="grid gap-2">
                {menu.map((item, i) => (
                  <Link key={i} href={item.link} className="font-medium text-white hover:text-android-green transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid gap-4 h-fit">
              <h4 className="font-medium text-white/50">{t("footer.legal", lang)}</h4>
              <div className="grid gap-2">
                {legal.map((item, i) => (
                  <Link key={i} href={item.link} className="font-medium text-white hover:text-android-green transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-3 h-fit">
              <a
                href="https://github.com/avadhesh1017"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-light"
              >
                <SvgIcon type="github" className="w-4 h-4" normalColor="#FFFFFF" />
              </a>
              <a
                href="mailto:avdheshghevariya01@gmail.com"
                className="social-icon-light"
              >
                <SvgIcon type="email" className="w-4 h-4" normalColor="#FFFFFF" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 mt-6 text-center text-sm text-white/30">
          © {new Date().getFullYear()} Avadhesh Ghevariya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
