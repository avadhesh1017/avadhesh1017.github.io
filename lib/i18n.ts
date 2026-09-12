"use client";

import { createContext, useContext } from "react";

export type Lang = "en" | "de";

export const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

/* ────────────────────────────────────────────
   Translation dictionary
   ──────────────────────────────────────────── */

const dict = {
  // Header / Nav
  "nav.home": { en: "Home", de: "Start" },
  "nav.about": { en: "About", de: "Über mich" },
  "nav.projects": { en: "Projects", de: "Projekte" },
  "nav.contact": { en: "Contact", de: "Kontakt" },
  "nav.letsTalk": { en: "Let's Talk", de: "Kontakt" },

  // Hero
  "hero.role": { en: "Android Application Developer", de: "Android-Anwendungsentwickler" },
  "hero.location": { en: "Germany", de: "Deutschland" },
  "hero.cta": { en: "Let's Talk", de: "Kontakt aufnehmen" },

  // Info section
  "info.heading": {
    en: "I Don't Just Build Apps for Today",
    de: "Ich entwickle nicht nur Apps für heute",
  },
  "info.headingSub": {
    en: " I Engineer for Scale, Performance, and Longevity.",
    de: " Ich entwickle für Skalierbarkeit, Performance und Langlebigkeit.",
  },
  "info.description": {
    en: "Bridging the gap between intuitive mobile UX and robust backend architecture to build reliable, high-performance Android applications.",
    de: "Die Lücke zwischen intuitiver mobiler UX und robuster Backend-Architektur schließen, um zuverlässige, leistungsstarke Android-Anwendungen zu entwickeln.",
  },
  "info.engage": { en: "Engage", de: "Einbinden" },
  "info.engageDesc": {
    en: "Build lasting connections through genuine collaboration and clear communication.",
    de: "Dauerhafte Verbindungen durch echte Zusammenarbeit und klare Kommunikation aufbauen.",
  },
  "info.innovate": { en: "Innovate", de: "Innovieren" },
  "info.innovateDesc": {
    en: "Embrace modern Android patterns and foster creativity in every step of the journey.",
    de: "Moderne Android-Muster annehmen und Kreativität in jedem Schritt fördern.",
  },
  "info.evolve": { en: "Evolve", de: "Weiterentwickeln" },
  "info.evolveDesc": {
    en: "Track performance, gather feedback, and refine continuously for lasting success.",
    de: "Leistung verfolgen, Feedback sammeln und kontinuierlich für nachhaltigen Erfolg verfeinern.",
  },

  // Portfolio
  "portfolio.label": { en: "Featured Projects", de: "Ausgewählte Projekte" },
  "portfolio.heading": { en: "Portfolio", de: "Portfolio" },
  "portfolio.description": {
    en: "A curated showcase of Android applications, clean architectures, and thoughtful mobile experiences.",
    de: "Eine kuratierte Auswahl von Android-Anwendungen, sauberen Architekturen und durchdachten mobilen Erlebnissen.",
  },
  "portfolio.browseAll": { en: "Browse all", de: "Alle ansehen" },

  // Offer section
  "offer.label": { en: "What I Do", de: "Was ich mache" },

  // About
  "about.label": { en: "Intro", de: "Vorstellung" },
  "about.heading": { en: "About Me", de: "Über mich" },
  "about.bio": {
    en: " is an Android developer and application engineer based in Germany, building clean, user-focused mobile experiences.",
    de: " ist ein Android-Entwickler und Anwendungsingenieur mit Sitz in Deutschland, der saubere, benutzerfokussierte mobile Erlebnisse entwickelt.",
  },
  "about.locationText": {
    en: "Originally from Surat, Gujarat, Avadhesh is pursuing a Master's in Autonomous Driving while building Android applications with modern architectures and clean code principles.",
    de: "Ursprünglich aus Surat, Gujarat, verfolgt Avadhesh einen Master in Autonomous Driving und entwickelt dabei Android-Anwendungen mit modernen Architekturen und Clean-Code-Prinzipien.",
  },
  "about.experience": { en: "Experience", de: "Erfahrung" },
  "about.expSub": { en: "Android & Application Engineering", de: "Android- & Anwendungsentwicklung" },
  "about.yearsExp": { en: "Years of Experience", de: "Jahre Erfahrung" },
  "about.appsBuilt": { en: "Apps Built", de: "Apps entwickelt" },
  "about.techStack": { en: "Technologies", de: "Technologien" },

  // Skills
  "skills.label": { en: "Skills", de: "Fähigkeiten" },
  "skills.heading": { en: "Technical Expertise", de: "Technisches Fachwissen" },
  "skills.headingSub": {
    en: " powering robust Android applications from concept to Play Store.",
    de: " die robuste Android-Anwendungen vom Konzept bis zum Play Store antreiben.",
  },

  // Services
  "services.label": { en: "Services", de: "Leistungen" },
  "services.heading": {
    en: "High quality modular services",
    de: "Hochwertige modulare Dienstleistungen",
  },
  "services.headingSub": {
    en: " tailored to your mobile product needs and business goals.",
    de: " zugeschnitten auf Ihre mobilen Produktbedürfnisse und Geschäftsziele.",
  },
  "services.getInTouch": { en: "Get in touch", de: "Kontakt aufnehmen" },
  "services.startingPrice": { en: "starting price", de: "Startpreis" },

  // FAQ
  "faq.label": { en: "FAQ", de: "FAQ" },
  "faq.heading": {
    en: "Frequently Asked Questions",
    de: "Häufig gestellte Fragen",
  },

  // Contact
  "contact.label": { en: "Contact", de: "Kontakt" },
  "contact.heading": { en: "Let's Work Together", de: "Lassen Sie uns zusammenarbeiten" },
  "contact.headingSub": {
    en: "Have an Android app idea? Let's bring it to life.",
    de: "Haben Sie eine Android-App-Idee? Lassen Sie uns sie zum Leben erwecken.",
  },
  "contact.name": { en: "Your Name", de: "Ihr Name" },
  "contact.email": { en: "Your Email", de: "Ihre E-Mail" },
  "contact.message": { en: "Your Message", de: "Ihre Nachricht" },
  "contact.send": { en: "Send Message", de: "Nachricht senden" },
  "contact.sending": { en: "Sending...", de: "Wird gesendet..." },

  // Footer
  "footer.ready": { en: "Ready to work with a", de: "Bereit mit einem" },
  "footer.professional": { en: "professional developer?", de: "professionellen Entwickler zu arbeiten?" },
  "footer.menu": { en: "Menu", de: "Menü" },
  "footer.legal": { en: "Legal", de: "Rechtliches" },
  "footer.privacy": { en: "Privacy Policy", de: "Datenschutz" },
  "footer.terms": { en: "Terms of Service", de: "Nutzungsbedingungen" },
  "footer.imprint": { en: "Imprint", de: "Impressum" },

  // About page
  "aboutPage.education": { en: "Education", de: "Ausbildung" },
  "aboutPage.skills": { en: "Technical Skills", de: "Technische Fähigkeiten" },
  "aboutPage.languages": { en: "Languages", de: "Sprachen" },
  "aboutPage.timeline": { en: "Career Timeline", de: "Karrierezeitstrahl" },

  // Projects page
  "projectsPage.heading": { en: "All Projects", de: "Alle Projekte" },
  "projectsPage.description": {
    en: "Every project I've built — from task managers to expense trackers.",
    de: "Jedes Projekt, das ich gebaut habe — von Task-Managern bis zu Ausgaben-Trackern.",
  },
} as const;

export type TKey = keyof typeof dict;

export function t(key: TKey, lang: Lang): string {
  return dict[key]?.[lang] ?? key;
}
