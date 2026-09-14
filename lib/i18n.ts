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
  "hero.role": { en: "Software Engineer", de: "Softwareentwickler" },
  "hero.location": { en: "Germany", de: "Deutschland" },
  "hero.cta": { en: "Let's Talk", de: "Kontakt aufnehmen" },

  // Info section
  "info.heading": {
    en: "I Don't Just Write Code",
    de: "Ich schreibe nicht einfach nur Code",
  },
  "info.headingSub": {
    en: " I Engineer Solutions That Scale.",
    de: " Ich entwickle Lösungen, die skalieren.",
  },
  "info.description": {
    en: "From mobile apps to sensor-driven systems — I build reliable software with clean architecture, strong fundamentals, and a focus on real-world impact.",
    de: "Von mobilen Apps bis zu sensorgesteuerten Systemen — ich entwickle zuverlässige Software mit sauberer Architektur, starken Grundlagen und Fokus auf reale Wirkung.",
  },
  "info.engage": { en: "Engage", de: "Einbinden" },
  "info.engageDesc": {
    en: "Build lasting connections through genuine collaboration and clear communication.",
    de: "Dauerhafte Verbindungen durch echte Zusammenarbeit und klare Kommunikation aufbauen.",
  },
  "info.innovate": { en: "Innovate", de: "Innovieren" },
  "info.innovateDesc": {
    en: "Embrace modern engineering patterns and foster creativity in every step of the journey.",
    de: "Moderne Engineering-Muster annehmen und Kreativität in jedem Schritt fördern.",
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
    en: "A curated showcase of projects — from mobile apps to OCR systems — built with clean architecture and attention to detail.",
    de: "Eine kuratierte Auswahl von Projekten — von mobilen Apps bis OCR-Systemen — gebaut mit sauberer Architektur und Liebe zum Detail.",
  },
  "portfolio.browseAll": { en: "Browse all", de: "Alle ansehen" },

  // Offer section
  "offer.label": { en: "What I Do", de: "Was ich mache" },

  // About
  "about.label": { en: "Intro", de: "Vorstellung" },
  "about.heading": { en: "About Me", de: "Über mich" },
  "about.bio": {
    en: " is a software engineer based in Germany with hands-on experience in mobile development, sensor-based systems, and clean software architecture.",
    de: " ist ein Softwareentwickler mit Sitz in Deutschland mit praktischer Erfahrung in Mobile-Entwicklung, sensorbasierten Systemen und sauberer Softwarearchitektur.",
  },
  "about.locationText": {
    en: "Originally from Surat, Gujarat, Avadhesh is pursuing a Master's in Autonomous Driving — working with radar, sensor fusion, and real-time systems — while continuing to build production-quality software across domains.",
    de: "Ursprünglich aus Surat, Gujarat, verfolgt Avadhesh einen Master in Autonomous Driving — mit Radar, Sensorfusion und Echtzeitsystemen — und entwickelt gleichzeitig produktionsreife Software über verschiedene Bereiche hinweg.",
  },
  "about.experience": { en: "Experience", de: "Erfahrung" },
  "about.expSub": { en: "Software & Application Engineering", de: "Software- & Anwendungsentwicklung" },
  "about.yearsExp": { en: "Years of Experience", de: "Jahre Erfahrung" },
  "about.appsBuilt": { en: "Projects Built", de: "Projekte entwickelt" },
  "about.techStack": { en: "Technologies", de: "Technologien" },

  // Skills
  "skills.label": { en: "Skills", de: "Fähigkeiten" },
  "skills.heading": { en: "Technical Expertise", de: "Technisches Fachwissen" },
  "skills.headingSub": {
    en: " spanning mobile, backend, and embedded systems engineering.",
    de: " über Mobile-, Backend- und Embedded-Systems-Engineering.",
  },

  // Services
  "services.label": { en: "Services", de: "Leistungen" },
  "services.heading": {
    en: "High quality modular services",
    de: "Hochwertige modulare Dienstleistungen",
  },
  "services.headingSub": {
    en: " tailored to your software product needs and business goals.",
    de: " zugeschnitten auf Ihre Softwareprodukt-Bedürfnisse und Geschäftsziele.",
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
    en: "Have a project in mind? Let's build it together.",
    de: "Haben Sie ein Projekt im Sinn? Lassen Sie es uns gemeinsam umsetzen.",
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
    en: "Every project I've built — from mobile apps to OCR translation tools.",
    de: "Jedes Projekt, das ich gebaut habe — von mobilen Apps bis zu OCR-Übersetzungstools.",
  },
} as const;

export type TKey = keyof typeof dict;

export function t(key: TKey, lang: Lang): string {
  return dict[key]?.[lang] ?? key;
}
