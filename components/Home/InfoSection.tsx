"use client";

import SvgIcon from "@/components/common/SvgIcon";
import { INFO } from "@/lib/constants";
import { useLang, t } from "@/lib/i18n";

export default function InfoSection() {
  const { lang } = useLang();

  return (
    <section className="container mx-auto">
      <div className="grid gap-12 py-20 px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-[64px] text-light-heading max-w-[855px] leading-tight">
          {t("info.heading", lang)}
          <span className="text-light-heading/50">
            {t("info.headingSub", lang)}
          </span>
        </h2>

        <div className="flex justify-end">
          <p className="font-light max-w-[425px] text-white/90 text-sm sm:text-base leading-relaxed">
            {t("info.description", lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {INFO.map((info) => (
            <div
              key={info.title.en}
              className="p-6 bg-darker-bg rounded-2xl border border-white/5 shadow-card hover:border-white/20 transition-all duration-300 group"
            >
              <SvgIcon type="yellowMenu" className="w-3 h-3.5" normalColor="#ffffff" />
              <div className="mt-16 grid gap-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-light-heading group-hover:text-white transition-colors">
                  {info.title[lang]}
                </h3>
                <p className="font-extralight max-w-[425px] text-white/80 text-xs sm:text-sm leading-relaxed">
                  {info.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
