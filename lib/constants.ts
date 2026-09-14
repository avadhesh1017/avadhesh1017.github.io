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
      en: "Embrace modern engineering patterns and foster creativity in every step of the journey.",
      de: "Moderne Engineering-Muster annehmen und Kreativität in jedem Schritt fördern.",
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
    title: "SOFTWARE",
    description: {
      en: "Building production-quality applications with Java, Python, and modern frameworks — engineered for performance, scalability, and maintainability.",
      de: "Entwicklung produktionsreifer Anwendungen mit Java, Python und modernen Frameworks — entwickelt für Performance, Skalierbarkeit und Wartbarkeit.",
    },
  },
  {
    title: "SYSTEMS",
    description: {
      en: "Working with sensor data, radar processing, and real-time architectures — from autonomous driving pipelines to cloud-connected backends.",
      de: "Arbeit mit Sensordaten, Radarverarbeitung und Echtzeitarchitekturen — von autonomen Fahrpipelines bis zu cloud-verbundenen Backends.",
    },
  },
  {
    title: "MOBILE",
    description: {
      en: "Designing and building native Android apps with clean architecture, offline-first databases, and intuitive Material Design interfaces.",
      de: "Entwurf und Entwicklung nativer Android-Apps mit sauberer Architektur, Offline-First-Datenbanken und intuitiven Material Design Oberflächen.",
    },
  },
] as const;

/* ────────────────────────────────────────────
   Skills
   ──────────────────────────────────────────── */
export const SKILL_CATEGORIES = [
  {
    category: { en: "Languages & Frameworks", de: "Sprachen & Frameworks" },
    skills: [
      "Java",
      "Python",
      "Kotlin",
      "C/C++",
      ".NET",
      "SQL",
    ],
  },
  {
    category: { en: "Mobile & Backend", de: "Mobile & Backend" },
    skills: [
      "Android Studio & SDK",
      "Firebase (Auth, Firestore, FCM)",
      "Room Database (SQLite)",
      "MVVM Architecture",
      "Material Design 3",
      "REST APIs",
    ],
  },
  {
    category: { en: "Tools & Systems", de: "Tools & Systeme" },
    skills: [
      "Git & GitHub",
      "Linux / CLI",
      "MATLAB / Simulink",
      "Sensor Fusion & Radar",
      "Docker",
      "Figma",
    ],
  },
] as const;

/* ────────────────────────────────────────────
   Career Timeline
   ──────────────────────────────────────────── */
export const CAREER_TIMELINE = [
  {
    period: "2025 – Present",
    role: { en: "M.Sc. Autonomous Driving", de: "M.Sc. Autonomous Driving" },
    company: { en: "University in Germany", de: "Universität in Deutschland" },
    description: {
      en: "Studying radar signal processing, sensor fusion, real-time systems, and vehicle perception — bridging software engineering with automotive intelligence.",
      de: "Studium von Radarsignalverarbeitung, Sensorfusion, Echtzeitsystemen und Fahrzeugwahrnehmung — Verbindung von Softwareentwicklung mit automobiler Intelligenz.",
    },
  },
  {
    period: "2024 – 2025",
    role: { en: "Software Developer", de: "Softwareentwickler" },
    company: { en: "Professional Projects", de: "Berufliche Projekte" },
    description: {
      en: "Built and shipped multiple production applications — mobile apps with Firebase backends, offline-first databases, and real-time sync. Hands-on experience across the full development lifecycle.",
      de: "Entwicklung und Veröffentlichung mehrerer Produktionsanwendungen — mobile Apps mit Firebase-Backends, Offline-First-Datenbanken und Echtzeit-Synchronisation. Praxiserfahrung über den gesamten Entwicklungszyklus.",
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
    projectType: { en: "Application Development", de: "Anwendungsentwicklung" },
    features: {
      en: [
        "Native Android with Java, Kotlin & Material Design",
        "Backend integration with Firebase, REST APIs & databases",
        "Clean architecture (MVVM) with offline-first design",
        "End-to-end delivery from concept to deployment",
      ],
      de: [
        "Natives Android mit Java, Kotlin & Material Design",
        "Backend-Integration mit Firebase, REST APIs & Datenbanken",
        "Saubere Architektur (MVVM) mit Offline-First Design",
        "End-to-End-Lieferung vom Konzept bis zum Deployment",
      ],
    },
    img: "/img/taskflow-screenshot.jpg",
  },
  {
    projectType: { en: "Software Engineering & Systems", de: "Software Engineering & Systeme" },
    features: {
      en: [
        "Data processing pipelines in Python & C++",
        "Sensor data analysis & real-time signal processing",
        "Version control, CI/CD, and documentation",
        "UI/UX prototyping with Figma",
      ],
      de: [
        "Datenverarbeitungs-Pipelines in Python & C++",
        "Sensordatenanalyse & Echtzeit-Signalverarbeitung",
        "Versionskontrolle, CI/CD und Dokumentation",
        "UI/UX-Prototyping mit Figma",
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
      en: "What technologies do you work with?",
      de: "Mit welchen Technologien arbeiten Sie?",
    },
    answer: {
      en: "I work with Java, Python, Kotlin, and C/C++ across different domains. On the mobile side: Android Studio, Firebase, Room/SQLite, and Material Design. On the systems side: MATLAB, sensor processing, and data pipelines. I pick the right tool for the problem.",
      de: "Ich arbeite mit Java, Python, Kotlin und C/C++ in verschiedenen Bereichen. Im Mobilbereich: Android Studio, Firebase, Room/SQLite und Material Design. Im Systembereich: MATLAB, Sensorverarbeitung und Datenpipelines. Ich wähle das richtige Werkzeug für das Problem.",
    },
  },
  {
    id: 2,
    question: {
      en: "What's your background in autonomous driving?",
      de: "Was ist Ihr Hintergrund im Bereich Autonomous Driving?",
    },
    answer: {
      en: "I'm pursuing a Master's in Autonomous Driving in Germany, working with radar signal processing, sensor fusion, and real-time perception systems. It's a mix of signal processing, software engineering, and applied math.",
      de: "Ich absolviere einen Master in Autonomous Driving in Deutschland und arbeite mit Radarsignalverarbeitung, Sensorfusion und Echtzeit-Wahrnehmungssystemen. Es ist eine Mischung aus Signalverarbeitung, Softwareentwicklung und angewandter Mathematik.",
    },
  },
  {
    id: 3,
    question: {
      en: "Can you work on backend or data-heavy projects?",
      de: "Können Sie an Backend- oder datenintensiven Projekten arbeiten?",
    },
    answer: {
      en: "Yes. I have hands-on experience with Firebase backends, SQLite databases, REST APIs, and data processing in Python. I'm comfortable working across the stack — not just the UI layer.",
      de: "Ja. Ich habe praktische Erfahrung mit Firebase-Backends, SQLite-Datenbanken, REST APIs und Datenverarbeitung in Python. Ich arbeite gerne über den gesamten Stack — nicht nur die UI-Ebene.",
    },
  },
  {
    id: 4,
    question: {
      en: "Do you only build mobile apps?",
      de: "Bauen Sie nur mobile Apps?",
    },
    answer: {
      en: "No. Mobile is one of my strengths, but I'm equally interested in systems programming, data pipelines, and engineering tools. I'm looking for roles where I can write meaningful code — the platform matters less than the problem.",
      de: "Nein. Mobile ist eine meiner Stärken, aber ich interessiere mich ebenso für Systemprogrammierung, Datenpipelines und Engineering-Tools. Ich suche Rollen, in denen ich bedeutungsvollen Code schreiben kann — die Plattform ist weniger wichtig als das Problem.",
    },
  },
  {
    id: 5,
    question: {
      en: "What kind of roles are you looking for?",
      de: "Nach welcher Art von Stelle suchen Sie?",
    },
    answer: {
      en: "Software engineering roles where I can build, ship, and improve real products — whether that's mobile apps, embedded systems, tooling, or backend services. I value clean code, good architecture, and teams that care about quality.",
      de: "Software-Engineering-Rollen, in denen ich echte Produkte bauen, veröffentlichen und verbessern kann — ob mobile Apps, Embedded-Systeme, Tooling oder Backend-Services. Ich schätze sauberen Code, gute Architektur und Teams, die Wert auf Qualität legen.",
    },
  },
  {
    id: 6,
    question: {
      en: "Do you speak German?",
      de: "Sprechen Sie Deutsch?",
    },
    answer: {
      en: "Yes — B1 level and actively improving. I can communicate in a German-speaking workplace and handle everyday conversations. My working language is English (C1).",
      de: "Ja — B1-Niveau und ich verbessere mich aktiv. Ich kann in einem deutschsprachigen Arbeitsumfeld kommunizieren und Alltagsgespräche führen. Meine Arbeitssprache ist Englisch (C1).",
    },
  },
];

/* ────────────────────────────────────────────
   Languages (spoken)
   ──────────────────────────────────────────── */
export const SPOKEN_LANGUAGES = [
  { name: { en: "Hindi", de: "Hindi" }, level: { en: "Native", de: "Muttersprache" } },
  { name: { en: "Gujarati", de: "Gujarati" }, level: { en: "Native", de: "Muttersprache" } },
  { name: { en: "English", de: "Englisch" }, level: { en: "C1", de: "C1" } },
  { name: { en: "German", de: "Deutsch" }, level: { en: "B1", de: "B1" } },
] as const;
