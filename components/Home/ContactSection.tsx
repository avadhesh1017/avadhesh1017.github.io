"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SvgIcon from "@/components/common/SvgIcon";
import { useLang, t } from "@/lib/i18n";
import { useToast } from "@/components/common/ToastProvider";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const [sending, setSending] = useState(false);
  const toast = useToast();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".contact-header-item", {
        scrollTrigger: { trigger: ".contact-header-wrapper", start: "top 85%", toggleActions: "play none none reverse" },
        y: 35, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
      });

      gsap.from(".contact-form-wrapper", {
        scrollTrigger: { trigger: ".contact-form-wrapper", start: "top 85%", toggleActions: "play none none reverse" },
        y: 40, opacity: 0, duration: 0.85, ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success(
        lang === "en" ? "Message sent successfully!" : "Nachricht erfolgreich gesendet!"
      );
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="bg-dark-bg relative">
      {/* Top curve */}
      <div className="absolute -top-[50px] left-0 right-0 w-full overflow-hidden pointer-events-none" style={{ height: 50 }}>
        <div className="absolute bottom-0 h-[750%] left-[-25%] w-[150%] bg-dark-bg will-change-transform rounded-t-[50%]" />
      </div>

      <div className="section-container grid gap-10">
        {/* Header */}
        <div className="contact-header-wrapper grid gap-4 text-center">
          <div className="section-label-wrapper justify-center contact-header-item">
            <SvgIcon type="grayStar" className="w-[18px] h-[18px]" normalColor="#ffffff" />
            <p className="section-label-text">{t("contact.label", lang)}</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[56px] text-light-heading contact-header-item leading-tight">
            {t("contact.heading", lang)}
          </h2>
          <p className="text-white/50 text-lg contact-header-item">
            {t("contact.headingSub", lang)}
          </p>
        </div>

        {/* Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 contact-form-wrapper">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-sm text-white/60 font-medium">{t("contact.name", lang)}</label>
              <input
                type="text"
                required
                className="bg-card-bg border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none transition-colors"
                placeholder={lang === "en" ? "John Doe" : "Max Mustermann"}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-white/60 font-medium">{t("contact.email", lang)}</label>
              <input
                type="email"
                required
                className="bg-card-bg border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-white/60 font-medium">{t("contact.message", lang)}</label>
              <textarea
                required
                rows={5}
                className="bg-card-bg border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none transition-colors resize-none"
                placeholder={lang === "en" ? "Tell me about your project..." : "Erzählen Sie mir von Ihrem Projekt..."}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-green w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? t("contact.sending", lang) : t("contact.send", lang)}
            </button>
          </form>

          {/* Contact Info */}
          <div className="grid gap-8 h-fit">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/10">
                  <SvgIcon type="email" className="w-5 h-5" normalColor="#ffffff" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <a href="mailto:avdheshghevariya01@gmail.com" className="text-white font-medium hover:text-white/70 transition-colors">
                    avdheshghevariya01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/10">
                  <SvgIcon type="globe" className="w-5 h-5" normalColor="#ffffff" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">{lang === "en" ? "Location" : "Standort"}</p>
                  <p className="text-white font-medium">{t("hero.location", lang)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/10">
                  <SvgIcon type="github" className="w-5 h-5" normalColor="#ffffff" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">GitHub</p>
                  <a
                    href="https://github.com/avadhesh1017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-white/70 transition-colors"
                  >
                    github.com/avadhesh1017
                  </a>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/20 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              <p className="text-white/80 text-sm font-medium">
                {lang === "en"
                  ? "Available for on-site positions"
                  : "Verfügbar für Vor-Ort-Stellen"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
