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
  "hero.location": { en: "Kronach, Germany", de: "Kronach, Deutschland" },
  "hero.cta": { en: "Let's Talk", de: "Kontakt aufnehmen" },
  "hero.description": {
    en: "Master's student in Autonomous Driving in Germany with professional experience in Android development and project experience in Java, Kotlin, Python, C++, C#/.NET, databases, and autonomous systems.",
    de: "Masterstudent im Bereich Autonomous Driving in Deutschland mit Berufserfahrung in der Android-Entwicklung und Projekterfahrung in Java, Kotlin, Python, C++, C#/.NET, Datenbanken und autonomen Systemen.",
  },
  "hero.availability": {
    en: "Currently seeking Werkstudent, internship, and junior software-development opportunities in Germany.",
    de: "Aktuell auf der Suche nach Werkstudent-, Praktikums- und Junior-Softwareentwicklungsstellen in Deutschland.",
  },
  "hero.downloadCV": { en: "Download CV", de: "Lebenslauf herunterladen" },
  "hero.viewProjects": { en: "GitHub / View Projects", de: "GitHub / Projekte ansehen" },

  // Info section
  "info.heading": {
    en: "I Build Software Across Domains",
    de: "Ich entwickle Software über verschiedene Bereiche",
  },
  "info.headingSub": {
    en: " — from mobile apps to autonomous systems.",
    de: " — von mobilen Apps bis zu autonomen Systemen.",
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
    en: "I am a Junior Software Engineer and Master's student in Autonomous Driving at Hochschule Hof. My professional background is in Android development, where I worked with Java, Android Studio, XML, databases, and object-oriented programming. In addition, I have academic and personal project experience with Kotlin, Python, C++, C#/.NET, SQL, and autonomous systems. I am interested in software development, mobile applications, backend-connected systems, and technologies related to autonomous driving.",
    de: "Ich bin Junior-Softwareentwickler und Masterstudent im Bereich Autonomous Driving an der Hochschule Hof. Mein beruflicher Hintergrund liegt in der Android-Entwicklung, wo ich mit Java, Android Studio, XML, Datenbanken und objektorientierter Programmierung gearbeitet habe. Darüber hinaus habe ich akademische und persönliche Projekterfahrung mit Kotlin, Python, C++, C#/.NET, SQL und autonomen Systemen. Ich interessiere mich für Softwareentwicklung, mobile Anwendungen, Backend-verbundene Systeme und Technologien im Bereich des autonomen Fahrens.",
  },
  "about.locationText": {
    en: "Originally from Surat, Gujarat — now based in Kronach, Germany, pursuing a Master's in Autonomous Driving at Hochschule Hof.",
    de: "Ursprünglich aus Surat, Gujarat — jetzt in Kronach, Deutschland, Masterstudium Autonomous Driving an der Hochschule Hof.",
  },
  "about.experience": { en: "Experience", de: "Erfahrung" },
  "about.expSub": { en: "Software & Application Engineering", de: "Software- & Anwendungsentwicklung" },
  "about.yearsExp": { en: "Years of Experience", de: "Jahre Erfahrung" },
  "about.appsBuilt": { en: "Projects Built", de: "Projekte entwickelt" },
  "about.techStack": { en: "Technologies", de: "Technologien" },

  // Skills
  "skills.label": { en: "Skills", de: "Fähigkeiten" },
  "skills.heading": { en: "Technical Skills", de: "Technische Fähigkeiten" },
  "skills.headingSub": {
    en: " spanning mobile, backend, and embedded systems engineering.",
    de: " über Mobile-, Backend- und Embedded-Systems-Engineering.",
  },

  // Services → Projects section
  "services.label": { en: "Projects", de: "Projekte" },
  "services.heading": {
    en: "Project Highlights",
    de: "Projekt-Highlights",
  },
  "services.headingSub": {
    en: " — applications built with clean architecture and real-world constraints.",
    de: " — Anwendungen mit sauberer Architektur und praxisnahen Anforderungen.",
  },
  "services.getInTouch": { en: "View project", de: "Projekt ansehen" },
  "services.startingPrice": { en: "starting price", de: "Startpreis" },

  // FAQ
  "faq.label": { en: "FAQ", de: "FAQ" },
  "faq.heading": {
    en: "Frequently Asked Questions",
    de: "Häufig gestellte Fragen",
  },

  // Contact
  "contact.label": { en: "Contact", de: "Kontakt" },
  "contact.heading": { en: "Get in Touch", de: "Kontakt aufnehmen" },
  "contact.headingSub": {
    en: "I'm open to opportunities, collaborations, and conversations.",
    de: "Ich bin offen für Stellenangebote, Zusammenarbeit und Gespräche.",
  },
  "contact.name": { en: "Your Name", de: "Ihr Name" },
  "contact.email": { en: "Your Email", de: "Ihre E-Mail" },
  "contact.message": { en: "Your Message", de: "Ihre Nachricht" },
  "contact.send": { en: "Send Message", de: "Nachricht senden" },
  "contact.sending": { en: "Sending...", de: "Wird gesendet..." },
  "contact.availabilityBadge": {
    en: "Open to Werkstudent, internship & junior roles in Germany",
    de: "Offen für Werkstudent-, Praktikums- & Junior-Stellen in Deutschland",
  },

  // Footer
  "footer.ready": { en: "Interested in working with a", de: "Interesse an einem" },
  "footer.professional": { en: "motivated developer?", de: "motivierten Entwickler?" },
  "footer.getInTouch": { en: "Get in touch", de: "Kontakt aufnehmen" },
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
