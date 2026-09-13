import type { Lang } from "./i18n";

/* ────────────────────────────────────────────
   Info Cards
   ──────────────────────────────────────────── */
export const INFO = [
  {
    title: { en: "Engage", de: "Einbinden" },
    description: {
      en: "Build lasting connections through genuine collaboration and clear communication.",
      de: "Dauerhafte Verbindungen durch echte Zusammenarbeit und klare Kommunikation aufbauen.",
    },
  },
  {
    title: { en: "Innovate", de: "Innovieren" },
    description: {
      en: "Embrace modern Android patterns and foster creativity in every step of the journey.",
      de: "Moderne Android-Muster annehmen und Kreativität in jedem Schritt fördern.",
    },
  },
  {
    title: { en: "Evolve", de: "Weiterentwickeln" },
    description: {
      en: "Track performance, gather feedback, and refine continuously for lasting success.",
      de: "Leistung verfolgen, Feedback sammeln und kontinuierlich für nachhaltigen Erfolg verfeinern.",
    },
  },
] as const;

/* ────────────────────────────────────────────
   Projects
   ──────────────────────────────────────────── */
export interface Project {
  id: string;
  title: string;
  subtitle: { en: string; de: string };
  category: { en: string; de: string };
  time: string;
  img: string;
  screenshots?: string[];
  description: { en: string; de: string };
  technologies: string[];
  featured: boolean;
  accentColor: string;
  keyFeatures: { en: string; de: string }[];
  github?: string;
  playStore?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    subtitle: {
      en: "Android Task Manager with Firebase & Material Design 3",
      de: "Android Task-Manager mit Firebase & Material Design 3",
    },
    category: { en: "Android App", de: "Android-App" },
    time: "2025",
    img: "/img/taskflow-screenshot.jpg",
    screenshots: [
      "/img/taskflow-screenshot.jpg",
      "/img/taskflow-calendar.jpg",
      "/img/taskflow-category.jpg",
      "/img/taskflow-status.jpg",
    ],
    description: {
      en: "A full-featured task management app with Firebase Auth, Firestore real-time sync, calendar integration, analytics dashboard, and push notifications — built with MVVM architecture.",
      de: "Eine voll ausgestattete Task-Management-App mit Firebase Auth, Firestore Echtzeit-Synchronisation, Kalenderintegration, Analytics-Dashboard und Push-Benachrichtigungen — erstellt mit MVVM-Architektur.",
    },
    technologies: ["Java", "Firebase Auth", "Cloud Firestore", "FCM", "Material Design 3", "MPAndroidChart", "MVVM"],
    featured: true,
    accentColor: "#4CAF50",
    keyFeatures: [
      {
        en: "Email/password & Google Sign-In authentication",
        de: "E-Mail/Passwort & Google Sign-In Authentifizierung",
      },
      {
        en: "Color-coded categories with priority levels",
        de: "Farbcodierte Kategorien mit Prioritätsstufen",
      },
      {
        en: "Calendar month view with task day indicators",
        de: "Kalender-Monatsansicht mit Aufgaben-Tagesindikatoren",
      },
      {
        en: "Analytics: completion rates, category pie charts, weekly bar graphs",
        de: "Analysen: Abschlussraten, Kategorie-Kreisdiagramme, Wochen-Balkendiagramme",
      },
    ],
    github: "https://github.com/avadhesh1017/TaskFlow",
  },
  {
    id: "notyourmoney",
    title: "NotYourMoney",
    subtitle: {
      en: "Offline-First Expense Tracker with Room DB & Charts",
      de: "Offline-First Ausgaben-Tracker mit Room DB & Diagrammen",
    },
    category: { en: "Android App", de: "Android-App" },
    time: "2025",
    img: "/img/notyourmoney-screenshot.jpg",
    screenshots: [
      "/img/notyourmoney-screenshot.jpg",
      "/img/notyourmoney-1.jpg",
      "/img/notyourmoney-2.jpg",
      "/img/notyourmoney-3.jpg",
      "/img/notyourmoney-4.jpg",
      "/img/notyourmoney-5.jpg",
      "/img/notyourmoney-6.jpg",
      "/img/notyourmoney-7.jpg",
      "/img/notyourmoney-8.jpg",
    ],
    description: {
      en: "An offline-first expense tracking app with Room database, budget management, borrow/debt tracking, recurring transactions via WorkManager, and rich analytics with CSV/PDF export — bilingual EN/DE.",
      de: "Eine Offline-First Ausgaben-Tracking-App mit Room-Datenbank, Budgetverwaltung, Schulden-Tracking, wiederkehrende Transaktionen via WorkManager und umfangreiche Analysen mit CSV/PDF-Export — zweisprachig EN/DE.",
    },
    technologies: ["Java", "Room DB", "Firebase Auth", "WorkManager", "MPAndroidChart", "MVVM", "LiveData"],
    featured: true,
    accentColor: "#5980A6",
    keyFeatures: [
      {
        en: "Custom numeric keypad with category-based expense entry",
        de: "Benutzerdefiniertes Nummernpad mit kategoriebasierter Ausgabeneingabe",
      },
      {
        en: "Monthly budgets with visual progress indicators per category",
        de: "Monatliche Budgets mit visuellen Fortschrittsanzeigen pro Kategorie",
      },
      {
        en: "Borrow/debt tracker with net balance calculations per person",
        de: "Schulden-Tracker mit Nettosaldo-Berechnungen pro Person",
      },
      {
        en: "CSV & PDF export with 7-day, 6-week, 6-month chart comparisons",
        de: "CSV & PDF-Export mit 7-Tage, 6-Wochen, 6-Monats Diagrammvergleichen",
      },
    ],
    github: "https://github.com/avadhesh1017/NotYourMoney",
  },
  {
    id: "praxis-app",
    title: "Praxis App",
    subtitle: {
      en: "Local Clinic Companion — Appointments & Announcements",
      de: "Lokale Praxis-App — Termine & Ankündigungen",
    },
    category: { en: "Android App", de: "Android-App" },
    time: "2024",
    img: "/img/praxisapp.svg",
    description: {
      en: "A compact clinic companion app for local practices — appointment slot booking, holiday/closure announcements, emergency call quick-dial, and doctor profile information.",
      de: "Eine kompakte Praxis-Begleit-App für lokale Praxen — Termin-Slot-Buchung, Feiertags-/Schließungsankündigungen, Notfall-Schnellwahl und Arzt-Profilinformationen.",
    },
    technologies: ["Java", "Android Studio", "XML", "SQLite", "Firebase"],
    featured: true,
    accentColor: "#E53935",
    keyFeatures: [
      {
        en: "Appointment slot booking with time-slot selection",
        de: "Terminbuchung mit Zeitslot-Auswahl",
      },
      {
        en: "Push notifications for practice announcements & closures",
        de: "Push-Benachrichtigungen für Praxis-Ankündigungen & Schließungen",
      },
      {
        en: "One-tap emergency call with doctor contact info",
        de: "Ein-Tipp-Notfallanruf mit Arzt-Kontaktinformationen",
      },
      {
        en: "Doctor profile with basic practice information",
        de: "Arztprofil mit grundlegenden Praxisinformationen",
      },
    ],
  },
  {
    id: "tradejournal",
    title: "TradeJournal",
    subtitle: {
      en: "S Pen Screen Capture & Annotation Trading Journal",
      de: "S Pen Bildschirmaufnahme & Annotations-Handelsjournal",
    },
    category: { en: "Android App", de: "Android-App" },
    time: "2025",
    img: "/img/tradejournal-placeholder.svg",
    description: {
      en: "A native Android trading journal that replaces manual screenshot workflows — one-tap S Pen screen capture with pressure-sensitive annotation overlay, organized journal management with P/L tagging, and PDF export.",
      de: "Ein natives Android-Handelsjournal, das manuelle Screenshot-Workflows ersetzt — Ein-Tipp S Pen Bildschirmaufnahme mit druckempfindlichem Annotations-Overlay, organisierte Journalverwaltung mit G/V-Tagging und PDF-Export.",
    },
    technologies: ["Kotlin", "Room DB", "MediaProjection", "Material Design 3", "Coroutines", "Custom Canvas", "iText PDF"],
    featured: true,
    accentColor: "#FFB300",
    keyFeatures: [
      {
        en: "S Pen Air Command integration for one-tap capture",
        de: "S Pen Air Command Integration für Ein-Tipp-Aufnahme",
      },
      {
        en: "Floating overlay with pressure-sensitive drawing",
        de: "Schwebendes Overlay mit druckempfindlichem Zeichnen",
      },
      {
        en: "Organized journals with Profit/Loss/Break-Even tagging",
        de: "Organisierte Journale mit Gewinn/Verlust/Break-Even-Tagging",
      },
      {
        en: "PDF export with auto-numbered trade pages",
        de: "PDF-Export mit automatisch nummerierten Handelsseiten",
      },
    ],
    github: "https://github.com/avadhesh1017/TradeJournal",
  },
  {
    id: "mangalens",
    title: "MangaLens",
    subtitle: {
      en: "Real-Time Screen Translation Overlay for Manga",
      de: "Echtzeit-Bildschirm-Übersetzungs-Overlay für Manga",
    },
    category: { en: "Android App", de: "Android-App" },
    time: "2025",
    img: "/img/mangalens-screenshot-2.jpg",
    screenshots: [
      "/img/mangalens-screenshot-1.jpg",
      "/img/mangalens-screenshot-2.jpg",
    ],
    description: {
      en: "A real-time screen translation overlay — captures manga pages, runs on-device OCR with ML Kit, and overlays DeepL-powered translations directly onto speech bubbles. Supports tap-to-translate and full-page modes with 13+ source languages.",
      de: "Ein Echtzeit-Bildschirm-Übersetzungs-Overlay — erfasst Manga-Seiten, führt On-Device-OCR mit ML Kit durch und blendet DeepL-gestützte Übersetzungen direkt auf Sprechblasen ein. Unterstützt Tipp-zum-Übersetzen und Ganzseitenmodus mit 13+ Quellsprachen.",
    },
    technologies: ["Kotlin", "ML Kit OCR", "DeepL API", "MediaProjection", "Material Design 3", "Coroutines", "TTS"],
    featured: true,
    accentColor: "#7C4DFF",
    keyFeatures: [
      {
        en: "Floating trigger bubble — translate any app without switching",
        de: "Schwebende Trigger-Blase — jede App übersetzen ohne Wechsel",
      },
      {
        en: "On-device OCR with Google ML Kit (no internet needed for detection)",
        de: "On-Device OCR mit Google ML Kit (kein Internet für Erkennung nötig)",
      },
      {
        en: "Tap-to-translate words or full-page overlay translation",
        de: "Tipp-zum-Übersetzen von Wörtern oder Ganzseitenüberlagerung",
      },
      {
        en: "Translation cache to save API calls and show instant results",
        de: "Übersetzungs-Cache zum Sparen von API-Aufrufen und sofortige Ergebnisse",
      },
    ],
    github: "https://github.com/avadhesh1017/MangaLens",
  },
];

/* ────────────────────────────────────────────
   Offer / Scroll Section
   ──────────────────────────────────────────── */
export const OFFER_INFO = [
  {
    title: "ANDROID",
    description: {
      en: "Building native Android applications with Java, Firebase, and Material Design — engineered for performance and offline reliability.",
      de: "Entwicklung nativer Android-Anwendungen mit Java, Firebase und Material Design — entwickelt für Performance und Offline-Zuverlässigkeit.",
    },
  },
  {
    title: "FIREBASE",
    description: {
      en: "Integrating authentication, real-time databases, cloud messaging, and analytics for seamless cloud-connected mobile experiences.",
      de: "Integration von Authentifizierung, Echtzeit-Datenbanken, Cloud Messaging und Analytics für nahtlose, cloud-verbundene mobile Erlebnisse.",
    },
  },
  {
    title: "UI/UX",
    description: {
      en: "Designing intuitive, accessible interfaces with Material Design 3 principles — clean layouts, thoughtful motion, and user-first thinking.",
      de: "Gestaltung intuitiver, barrierefreier Oberflächen nach Material Design 3 Prinzipien — klare Layouts, durchdachte Animationen und nutzerzentriertes Denken.",
    },
  },
] as const;

/* ────────────────────────────────────────────
   Skills
   ──────────────────────────────────────────── */
export const SKILL_CATEGORIES = [
  {
    category: { en: "Android & Mobile", de: "Android & Mobil" },
    skills: [
      "Android Studio",
      "Java",
      "Kotlin",
      "XML Layouts",
      "Material Design 3",
      "MVVM Architecture",
    ],
  },
  {
    category: { en: "Backend & Data", de: "Backend & Daten" },
    skills: [
      "Firebase Auth & Firestore",
      "Room Database (SQLite)",
      "FCM Push Notifications",
      "WorkManager",
      "LiveData & ViewModel",
      "Kotlin Coroutines & Flow",
    ],
  },
  {
    category: { en: "Tools & Deployment", de: "Tools & Deployment" },
    skills: [
      "Git & GitHub",
      "Gradle Build System",
      "Android SDK",
      "MPAndroidChart",
      ".NET",
      "UI/UX Design (Figma)",
    ],
  },
] as const;

/* ────────────────────────────────────────────
   Career Timeline
   ──────────────────────────────────────────── */
export const CAREER_TIMELINE = [
  {
    period: "2025 – Present",
    role: { en: "Master's — Autonomous Driving", de: "Master — Autonomous Driving" },
    company: { en: "University in Germany", de: "Universität in Deutschland" },
    description: {
      en: "Pursuing Master's degree in Autonomous Driving, combining software engineering with cutting-edge automotive technology research.",
      de: "Masterstudium in Autonomous Driving, Kombination von Softwareentwicklung mit modernster Automobiltechnologie-Forschung.",
    },
  },
  {
    period: "2024 – 2025",
    role: { en: "Application Developer", de: "Anwendungsentwickler" },
    company: { en: "Professional Projects", de: "Berufliche Projekte" },
    description: {
      en: "Development and maintenance of Android applications with Android Studio and Java. Practical experience in application development, databases, and software engineering.",
      de: "Entwicklung und Wartung von Android-Anwendungen mit Android Studio und Java. Praktische Erfahrung in Anwendungsentwicklung, Datenbanken und Softwareentwicklung.",
    },
  },
  {
    period: "2021 – 2024",
    role: { en: "BCA, Computer Science", de: "BCA, Informatik" },
    company: { en: "Veer Narmad South Gujarat University, Surat", de: "Veer Narmad South Gujarat Universität, Surat" },
    description: {
      en: "Bachelor's degree in Computer Applications with coursework in data structures, algorithms, database management, and full-stack development. Grade: 7.94 CGPA.",
      de: "Bachelor in Computeranwendungen mit Studieninhalten in Datenstrukturen, Algorithmen, Datenbankverwaltung und Full-Stack-Entwicklung. Note: 7,94 CGPA.",
    },
  },
] as const;

/* ────────────────────────────────────────────
   Services
   ──────────────────────────────────────────── */
export const SERVICES = [
  {
    projectType: { en: "Android App Development", de: "Android-App-Entwicklung" },
    features: {
      en: [
        "Native Android with Java & Material Design 3",
        "Firebase Auth, Firestore & Cloud Messaging",
        "MVVM Architecture with Room / SQLite",
        "Play Store-ready APK & deployment",
      ],
      de: [
        "Natives Android mit Java & Material Design 3",
        "Firebase Auth, Firestore & Cloud Messaging",
        "MVVM-Architektur mit Room / SQLite",
        "Play Store-fertige APK & Deployment",
      ],
    },
    img: "/img/taskflow-screenshot.jpg",
  },
  {
    projectType: { en: "UI/UX Design & Prototyping", de: "UI/UX Design & Prototyping" },
    features: {
      en: [
        "Figma high-fidelity screen design",
        "Material Design component systems",
        "Interactive prototyping & user flows",
        "Responsive multi-device layouts",
      ],
      de: [
        "Figma High-Fidelity Screendesign",
        "Material Design Komponentensysteme",
        "Interaktives Prototyping & User Flows",
        "Responsive Multi-Device Layouts",
      ],
    },
    img: "/img/notyourmoney-screenshot.jpg",
  },
] as const;

/* ────────────────────────────────────────────
   FAQ
   ──────────────────────────────────────────── */
export interface FaqItem {
  id: number;
  question: { en: string; de: string };
  answer: { en: string; de: string };
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: {
      en: "What technologies do you specialize in?",
      de: "Auf welche Technologien sind Sie spezialisiert?",
    },
    answer: {
      en: "I specialize in native Android development with Java, Android Studio, Firebase (Auth, Firestore, FCM), Room Database, Material Design 3, MVVM architecture, and WorkManager for background tasks.",
      de: "Ich bin spezialisiert auf native Android-Entwicklung mit Java, Android Studio, Firebase (Auth, Firestore, FCM), Room-Datenbank, Material Design 3, MVVM-Architektur und WorkManager für Hintergrundaufgaben.",
    },
  },
  {
    id: 2,
    question: {
      en: "Do you build apps that work offline?",
      de: "Entwickeln Sie Apps, die offline funktionieren?",
    },
    answer: {
      en: "Yes! I follow an offline-first approach using Room Database for local storage with LiveData for reactive UI updates. Firebase Firestore provides cloud sync when connectivity is available.",
      de: "Ja! Ich verfolge einen Offline-First-Ansatz mit Room-Datenbank für lokale Speicherung und LiveData für reaktive UI-Updates. Firebase Firestore bietet Cloud-Synchronisation, wenn eine Verbindung verfügbar ist.",
    },
  },
  {
    id: 3,
    question: {
      en: "What is your typical project delivery timeline?",
      de: "Wie sieht Ihr typischer Projekt-Zeitrahmen aus?",
    },
    answer: {
      en: "Small utility apps take 2–3 weeks, feature-rich apps with Firebase integration take 4–6 weeks, and complex multi-module applications take 6–10 weeks with regular demo milestones.",
      de: "Kleine Utility-Apps dauern 2–3 Wochen, funktionsreiche Apps mit Firebase-Integration 4–6 Wochen und komplexe Multi-Modul-Anwendungen 6–10 Wochen mit regelmäßigen Demo-Meilensteinen.",
    },
  },
  {
    id: 4,
    question: {
      en: "Can you publish apps to the Google Play Store?",
      de: "Können Sie Apps im Google Play Store veröffentlichen?",
    },
    answer: {
      en: "Yes. I handle the full lifecycle from development through Play Store listing — including APK signing, store listing optimization, screenshots, and release management.",
      de: "Ja. Ich übernehme den gesamten Lebenszyklus von der Entwicklung bis zur Play Store-Listung — einschließlich APK-Signierung, Store-Listing-Optimierung, Screenshots und Release-Management.",
    },
  },
  {
    id: 5,
    question: {
      en: "Do you offer UI/UX design alongside development?",
      de: "Bieten Sie UI/UX-Design neben der Entwicklung an?",
    },
    answer: {
      en: "Yes. I provide end-to-end design and engineering — from Figma prototypes and Material Design component systems to full native Android implementation with polished interactions.",
      de: "Ja. Ich biete End-to-End Design und Entwicklung — von Figma-Prototypen und Material Design Komponentensystemen bis zur vollständigen nativen Android-Implementierung mit ausgefeilten Interaktionen.",
    },
  },
  {
    id: 6,
    question: {
      en: "What languages do you support in your apps?",
      de: "Welche Sprachen unterstützen Sie in Ihren Apps?",
    },
    answer: {
      en: "I build multi-language apps using Android's built-in localization system (strings.xml). My apps currently support English and German, and adding more languages is straightforward.",
      de: "Ich entwickle mehrsprachige Apps mit Androids eingebautem Lokalisierungssystem (strings.xml). Meine Apps unterstützen derzeit Englisch und Deutsch, und weitere Sprachen hinzuzufügen ist unkompliziert.",
    },
  },
];

/* ────────────────────────────────────────────
   Languages (spoken)
   ──────────────────────────────────────────── */
export const SPOKEN_LANGUAGES = [
  { name: { en: "Hindi", de: "Hindi" }, level: { en: "Native", de: "Muttersprache" } },
  { name: { en: "Gujarati", de: "Gujarati" }, level: { en: "Native", de: "Muttersprache" } },
  { name: { en: "English", de: "Englisch" }, level: { en: "Fluent", de: "Fließend" } },
  { name: { en: "German", de: "Deutsch" }, level: { en: "Intermediate", de: "Mittelstufe" } },
] as const;
