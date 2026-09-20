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
      en: "A full-featured task management app built with MVVM architecture and a Repository pattern. Users authenticate via email/password or Google Sign-In through Firebase Auth, and all tasks sync in real time across devices using Cloud Firestore. Tasks can be organized by color-coded categories with three priority levels (High, Medium, Low), and the calendar view shows dot indicators on days with pending tasks. An analytics dashboard displays completion rates, category distribution via pie charts, and weekly progress in bar graphs — powered by MPAndroidChart. Firebase Cloud Messaging delivers push notifications for due-date reminders. The app supports bilingual EN/DE and is built with Java 17 and Material Design 3.",
      de: "Eine voll ausgestattete Aufgabenverwaltungs-App mit MVVM-Architektur und Repository-Pattern. Benutzer authentifizieren sich per E-Mail/Passwort oder Google Sign-In über Firebase Auth, und alle Aufgaben synchronisieren sich in Echtzeit über Cloud Firestore auf allen Geräten. Aufgaben können nach farbcodierten Kategorien mit drei Prioritätsstufen (Hoch, Mittel, Niedrig) organisiert werden, und die Kalenderansicht zeigt Punktindikatoren an Tagen mit offenen Aufgaben. Ein Analytics-Dashboard zeigt Abschlussraten, Kategorieverteilung als Kreisdiagramme und wöchentlichen Fortschritt als Balkendiagramme — mit MPAndroidChart. Firebase Cloud Messaging liefert Push-Benachrichtigungen für Fälligkeitserinnerungen. Die App unterstützt zweisprachig EN/DE und ist mit Java 17 und Material Design 3 erstellt.",
    },
    technologies: ["Java 17", "Firebase Auth", "Cloud Firestore", "FCM", "Material Design 3", "MPAndroidChart", "MVVM"],
    featured: true,
    accentColor: "#4CAF50",
    keyFeatures: [
      {
        en: "Email/password & Google Sign-In with real-time Firestore sync across devices",
        de: "E-Mail/Passwort & Google Sign-In mit Echtzeit-Firestore-Synchronisation über Geräte",
      },
      {
        en: "Color-coded categories with three priority levels and due-date reminders via FCM",
        de: "Farbcodierte Kategorien mit drei Prioritätsstufen und Fälligkeitserinnerungen via FCM",
      },
      {
        en: "Calendar month view with dot indicators on days that have pending tasks",
        de: "Kalender-Monatsansicht mit Punktindikatoren an Tagen mit offenen Aufgaben",
      },
      {
        en: "Analytics dashboard: completion rates, category pie charts, weekly bar graphs",
        de: "Analytics-Dashboard: Abschlussraten, Kategorie-Kreisdiagramme, Wochen-Balkendiagramme",
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
      en: "An offline-first personal finance app that stores all data locally in Room (SQLite) so it works without internet — Firebase Auth is used only for identity, not data storage. Features a custom numeric keypad for quick expense entry by category, monthly budgets with per-category progress bars, and a borrow/debt tracker that groups transactions by person with net-balance calculations. Recurring transactions are automated through WorkManager. Analytics offer 7-day, 6-week, and 6-month comparisons with exportable CSV and PDF reports. The bottom navigation uses a custom 6-tab layout (Material Design caps at 5). Bilingual EN/DE throughout, built with MVVM and LiveData.",
      de: "Eine Offline-First-Finanz-App, die alle Daten lokal in Room (SQLite) speichert und ohne Internet funktioniert — Firebase Auth wird nur für die Identität verwendet, nicht für Datenspeicherung. Mit benutzerdefiniertem Nummernpad für schnelle Kategorieausgaben, monatlichen Budgets mit Fortschrittsbalken pro Kategorie und einem Schulden-Tracker, der Transaktionen pro Person mit Nettosaldo-Berechnungen gruppiert. Wiederkehrende Transaktionen werden über WorkManager automatisiert. Analysen bieten 7-Tage-, 6-Wochen- und 6-Monats-Vergleiche mit exportierbaren CSV- und PDF-Berichten. Die Bottom-Navigation nutzt ein eigenes 6-Tab-Layout (Material Design begrenzt auf 5). Zweisprachig EN/DE, erstellt mit MVVM und LiveData.",
    },
    technologies: ["Java", "Room DB", "Firebase Auth", "WorkManager", "MPAndroidChart", "MVVM", "LiveData"],
    featured: true,
    accentColor: "#5980A6",
    keyFeatures: [
      {
        en: "Offline-first: all data in Room DB — Firebase Auth only for identity, not storage",
        de: "Offline-First: alle Daten in Room DB — Firebase Auth nur für Identität, nicht Speicherung",
      },
      {
        en: "Custom numeric keypad and monthly budgets with per-category progress bars",
        de: "Benutzerdefiniertes Nummernpad und Monatsbudgets mit Fortschrittsbalken pro Kategorie",
      },
      {
        en: "Borrow/debt tracker grouped by person with net-balance calculations",
        de: "Schulden-Tracker gruppiert nach Person mit Nettosaldo-Berechnungen",
      },
      {
        en: "CSV & PDF export with 7-day, 6-week, 6-month chart comparisons",
        de: "CSV & PDF-Export mit 7-Tage, 6-Wochen, 6-Monats Diagrammvergleichen",
      },
    ],
    github: "https://github.com/avadhesh1017/NotYourMoney",
  },
  {
    id: "quick-care",
    title: "Quick Care",
    subtitle: {
      en: "Medical Appointment Booking App for Patients & Doctors",
      de: "Medizinische Terminbuchungs-App für Patienten & Ärzte",
    },
    category: { en: "Android App", de: "Android-App" },
    time: "2024",
    img: "/img/quickcare/quickcare-p53-5.jpg",
    screenshots: [
      "/img/quickcare/quickcare-p53-5.jpg",
      "/img/quickcare/quickcare-p52-3.jpg",
      "/img/quickcare/quickcare-p60-14.jpg",
      "/img/quickcare/quickcare-p56-9.jpg",
      "/img/quickcare/quickcare-p66-20.jpg",
      "/img/quickcare/quickcare-p62-16.jpg",
    ],
    description: {
      en: "A dual-role medical appointment booking system with separate interfaces for patients and doctors. Patients can register, browse available doctors, book appointment slots, view their appointment turn in real time, access best medical references and labs, and read doctor announcements. Doctors can manage their appointment slots (open/close booking windows), accept or reject appointment requests, view their daily schedule, and post announcements for patients. The backend is built with PHP and MySQL, providing a REST API that the Android client communicates with for authentication, scheduling, and data management.",
      de: "Ein duales medizinisches Terminbuchungssystem mit separaten Oberflächen für Patienten und Ärzte. Patienten können sich registrieren, verfügbare Ärzte durchsuchen, Terminslots buchen, ihre Terminnummer in Echtzeit sehen, beste medizinische Referenzen und Labore einsehen und Arzt-Ankündigungen lesen. Ärzte können ihre Terminslots verwalten (Buchungsfenster öffnen/schließen), Terminanfragen annehmen oder ablehnen, ihren Tagesplan einsehen und Ankündigungen für Patienten veröffentlichen. Das Backend ist mit PHP und MySQL gebaut und stellt eine REST-API bereit, über die der Android-Client für Authentifizierung, Terminplanung und Datenverwaltung kommuniziert.",
    },
    technologies: ["Java", "Android Studio", "XML", "PHP", "MySQL", "REST API", "Firebase"],
    featured: true,
    accentColor: "#E53935",
    keyFeatures: [
      {
        en: "Dual-role system: separate patient and doctor interfaces with role-based access",
        de: "Dual-Rollen-System: separate Patienten- und Arzt-Oberflächen mit rollenbasiertem Zugriff",
      },
      {
        en: "Real-time appointment queue — patients can see their current turn number",
        de: "Echtzeit-Warteschlange — Patienten können ihre aktuelle Nummer sehen",
      },
      {
        en: "Doctors manage booking slots, accept/reject requests, and post announcements",
        de: "Ärzte verwalten Buchungsslots, nehmen Anfragen an/lehnen ab und veröffentlichen Ankündigungen",
      },
      {
        en: "PHP + MySQL backend with REST API for authentication and scheduling",
        de: "PHP + MySQL-Backend mit REST-API für Authentifizierung und Terminplanung",
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
      en: "A native Android trading journal designed for Samsung tablets with S Pen. It replaces the manual screenshot → gallery → notepad workflow with a single-tap capture tool. The app registers as an S Pen Air Command shortcut — when triggered, a floating capture button appears over any app. Tapping it captures the screen via MediaProjection API, then opens a full-screen annotation overlay where users can draw and write with pressure-sensitive S Pen input on a custom Canvas-based View. Annotated trades are saved into organized journals with Profit/Loss/Break-Even tags, dates, and notes. The entire flow feels like a system tool rather than an app — the annotation overlay floats on top of everything, similar to Samsung's own Screen Write. Uses Room database for local storage and iText 7 for PDF export with auto-numbered pages.",
      de: "Ein natives Android-Handelsjournal für Samsung-Tablets mit S Pen. Es ersetzt den manuellen Screenshot → Galerie → Notizblock-Workflow durch ein Ein-Tipp-Aufnahmetool. Die App registriert sich als S Pen Air Command Shortcut — beim Auslösen erscheint ein schwebendes Aufnahme-Button über jeder App. Ein Tippen erfasst den Bildschirm via MediaProjection API und öffnet ein Vollbild-Annotations-Overlay, in dem Benutzer mit druckempfindlichem S Pen auf einer benutzerdefinierten Canvas-View zeichnen und schreiben können. Annotierte Trades werden in organisierte Journale mit Gewinn/Verlust/Break-Even-Tags, Daten und Notizen gespeichert. Der gesamte Ablauf fühlt sich wie ein Systemtool an — das Annotations-Overlay schwebt über allem, ähnlich wie Samsungs eigene Screen Write Funktion. Nutzt Room-Datenbank für lokale Speicherung und iText 7 für PDF-Export mit automatisch nummerierten Seiten.",
    },
    technologies: ["Kotlin", "Room DB", "MediaProjection", "Material Design 3", "Coroutines", "Custom Canvas", "iText PDF"],
    featured: true,
    accentColor: "#FFB300",
    keyFeatures: [
      {
        en: "S Pen Air Command shortcut — floating capture button over any app, no switching needed",
        de: "S Pen Air Command Shortcut — schwebendes Aufnahme-Button über jeder App, kein Wechsel nötig",
      },
      {
        en: "Pressure-sensitive annotation overlay using a custom Canvas-based View with S Pen support",
        de: "Druckempfindliches Annotations-Overlay mit benutzerdefinierter Canvas-View und S Pen Unterstützung",
      },
      {
        en: "Organized journals with Profit/Loss/Break-Even tags, thumbnails, and dates",
        de: "Organisierte Journale mit Gewinn/Verlust/Break-Even-Tags, Vorschaubildern und Daten",
      },
      {
        en: "PDF export via iText 7 with auto-numbered trade pages per journal",
        de: "PDF-Export via iText 7 mit automatisch nummerierten Handelsseiten pro Journal",
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
      en: "A real-time screen translation overlay for reading manga in any language. A floating trigger bubble sits over any app — tap it to capture the screen via MediaProjection, then choose between tap-to-translate mode (tap individual words or speech bubbles) or full-page mode (translates all detected text at once). Text is extracted on-device using Google ML Kit OCR with no internet needed for detection, then sent to the DeepL API for translation into the user's language. A translation cache stores previous results to save API calls and deliver instant results on repeated pages. Includes text-to-speech playback, supports 13+ source languages, and integrates with Samsung Edge Panel for quick access. Built with Kotlin, Coroutines, and Material Design 3.",
      de: "Ein Echtzeit-Bildschirm-Übersetzungs-Overlay zum Lesen von Manga in jeder Sprache. Eine schwebende Trigger-Blase sitzt über jeder App — antippen, um den Bildschirm via MediaProjection zu erfassen, dann zwischen Tipp-zum-Übersetzen-Modus (einzelne Wörter oder Sprechblasen antippen) oder Ganzseitenmodus (übersetzt allen erkannten Text auf einmal) wählen. Text wird on-device mit Google ML Kit OCR extrahiert, ohne Internet für die Erkennung, und dann an die DeepL API zur Übersetzung gesendet. Ein Übersetzungs-Cache speichert vorherige Ergebnisse, um API-Aufrufe zu sparen und sofortige Ergebnisse bei wiederholten Seiten zu liefern. Enthält Text-to-Speech-Wiedergabe, unterstützt 13+ Quellsprachen und integriert sich mit Samsung Edge Panel für schnellen Zugriff. Erstellt mit Kotlin, Coroutines und Material Design 3.",
    },
    technologies: ["Kotlin", "ML Kit OCR", "DeepL API", "MediaProjection", "Material Design 3", "Coroutines", "TTS"],
    featured: true,
    accentColor: "#7C4DFF",
    keyFeatures: [
      {
        en: "Floating trigger bubble — translate any app without switching, with Samsung Edge Panel support",
        de: "Schwebende Trigger-Blase — jede App übersetzen ohne Wechsel, mit Samsung Edge Panel Unterstützung",
      },
      {
        en: "On-device OCR via Google ML Kit — no internet needed for text detection",
        de: "On-Device OCR via Google ML Kit — kein Internet für Texterkennung nötig",
      },
      {
        en: "Two modes: tap-to-translate individual words or full-page overlay translation",
        de: "Zwei Modi: Tipp-zum-Übersetzen einzelner Wörter oder Ganzseitenüberlagerung",
      },
      {
        en: "Translation cache for instant results + text-to-speech playback in 13+ languages",
        de: "Übersetzungs-Cache für sofortige Ergebnisse + Text-to-Speech-Wiedergabe in 13+ Sprachen",
      },
    ],
    github: "https://github.com/avadhesh1017/MangaLens",
  },
  {
    id: "aegis-kalman-filter",
    title: "AEGIS Kalman Filter",
    subtitle: {
      en: "Multi-Sensor Fusion for Autonomous Robot Localization",
      de: "Multi-Sensor-Fusion für autonome Roboterlokalisierung",
    },
    category: { en: "Autonomous Systems", de: "Autonome Systeme" },
    time: "2025",
    img: "/img/aegis-kf-sensors.png",
    screenshots: [
      "/img/aegis-kf-sensors.png",
      "/img/aegis-kf-kalman.png",
      "/img/aegis-kf-frames.png",
      "/img/aegis-kf-trajectory.png",
    ],
    description: {
      en: "A Kalman Filter design for ego-localization of the AEGIS autonomous cleaning robot. Fuses data from three heterogeneous sensors — Wheel Encoders (50 Hz), Optitrack motion capture (120 Hz), and YDLIDAR G4 laser scanner (9 Hz) — to estimate a 5-state vector: position (x, y), heading (θ), linear velocity (v), and angular velocity (ω). Includes full mathematical formulation with a 5×5 state transition matrix using constant-velocity kinematics, three sensor-specific measurement matrices, process and measurement noise covariance tuning, and coordinate frame transformations between Map, Robot, and Lidar frames. Part of M.Sc. Autonomous Driving coursework at Hochschule Hof.",
      de: "Ein Kalman-Filter-Entwurf zur Ego-Lokalisierung des autonomen Reinigungsroboters AEGIS. Fusioniert Daten von drei heterogenen Sensoren — Radencoder (50 Hz), Optitrack Motion Capture (120 Hz) und YDLIDAR G4 Laserscanner (9 Hz) — zur Schätzung eines 5-Zustands-Vektors: Position (x, y), Orientierung (θ), Lineargeschwindigkeit (v) und Winkelgeschwindigkeit (ω). Enthält vollständige mathematische Formulierung mit 5×5-Zustandsübergangsmatrix, drei sensorspezifischen Messmatrizen, Prozess- und Messrausch-Kovarianz-Abstimmung und Koordinatenrahmen-Transformationen. Teil des M.Sc. Autonomous Driving Studiums an der Hochschule Hof.",
    },
    technologies: ["Kalman Filter", "Sensor Fusion", "Python", "NumPy", "ROS2", "Optitrack", "YDLIDAR G4"],
    featured: false,
    accentColor: "#2196F3",
    keyFeatures: [
      {
        en: "5-state Kalman Filter fusing Wheel Encoders, Optitrack, and YDLIDAR G4",
        de: "5-Zustands-Kalman-Filter mit Fusion von Radencodern, Optitrack und YDLIDAR G4",
      },
      {
        en: "Full 5×5 state transition matrix with nonlinear heading kinematics",
        de: "Vollständige 5×5-Zustandsübergangsmatrix mit nichtlinearer Kurskinematik",
      },
      {
        en: "Three coordinate frames (Map, Robot, Lidar) with rigid-body transforms",
        de: "Drei Koordinatenrahmen (Karte, Roboter, Lidar) mit Starrkörper-Transformationen",
      },
      {
        en: "Noise-filtered trajectory estimation with RMSE validation plan",
        de: "Rauschgefilterte Trajektorienschätzung mit RMSE-Validierungsplan",
      },
    ],
    github: "https://github.com/avadhesh1017/AEGIS-Kalman-Filter-Sensor-Fusion",
  },
  {
    id: "aegis-hmi-design",
    title: "AEGIS HMI Design",
    subtitle: {
      en: "Human-Centered Interface Design for an Autonomous Robot",
      de: "Menschzentriertes Schnittstellendesign für einen autonomen Roboter",
    },
    category: { en: "UX / Systems Design", de: "UX / Systemdesign" },
    time: "2025",
    img: "/img/aegis-hmi-prototype.jpg",
    description: {
      en: "A complete Human-Centered Design (HCD) process for the operator interface of AEGIS, an autonomous biohazard cleaning robot for high-containment laboratories. Covers four stages: user research with interviews of lab scientists, persona development and customer journey mapping, fishbowl ideation generating 10 solutions traced to 6 functions, and a low-fidelity prototype of 5 screens designed in Figma (System Status, Request Cleaning, Navigation, Cleaning + Validation, Post-Cleaning). Includes a full ROS2 interface specification with typed topics for robot state, pose, battery, detections, operator commands, and emergency stop. Part of M.Sc. Autonomous Driving coursework at Hochschule Hof.",
      de: "Ein vollständiger Human-Centered-Design-Prozess (HCD) für die Bedieneroberfläche von AEGIS, einem autonomen Biohazard-Reinigungsroboter für Hochsicherheitslabore. Umfasst vier Phasen: Nutzerforschung mit Interviews von Laborwissenschaftlern, Persona-Entwicklung und Customer Journey Mapping, Fishbowl-Ideation mit 10 Lösungen zurückgeführt auf 6 Funktionen, und einen Low-Fidelity-Prototyp mit 5 in Figma entworfenen Bildschirmen. Enthält eine vollständige ROS2-Schnittstellenspezifikation. Teil des M.Sc. Autonomous Driving Studiums an der Hochschule Hof.",
    },
    technologies: ["Figma", "Human-Centered Design", "ROS2", "Customer Journey Mapping", "UX Research"],
    featured: false,
    accentColor: "#00897B",
    keyFeatures: [
      {
        en: "4-stage HCD process: user research, ideation, task flow, prototype",
        de: "4-stufiger HCD-Prozess: Nutzerforschung, Ideation, Task-Flow, Prototyp",
      },
      {
        en: "5-screen low-fidelity prototype covering the full robot mission lifecycle",
        de: "5-Bildschirm Low-Fidelity-Prototyp über den gesamten Roboter-Missionslebenszyklus",
      },
      {
        en: "Full traceability: findings → problems → solutions → functions → screens",
        de: "Vollständige Rückverfolgbarkeit: Erkenntnisse → Probleme → Lösungen → Funktionen → Bildschirme",
      },
      {
        en: "ROS2 interface spec with typed topics for robot-operator communication",
        de: "ROS2-Schnittstellenspezifikation mit typisierten Topics für Roboter-Bediener-Kommunikation",
      },
    ],
    github: "https://github.com/avadhesh1017/AEGIS-HMI-Design",
  },
];

/* ────────────────────────────────────────────
   Offer / Scroll Section
   ──────────────────────────────────────────── */
export const OFFER_INFO = [
  {
    title: "SOFTWARE",
    description: {
      en: "Building applications with Java, Python, and modern frameworks — focused on clean code, performance, and maintainability.",
      de: "Entwicklung von Anwendungen mit Java, Python und modernen Frameworks — mit Fokus auf sauberen Code, Performance und Wartbarkeit.",
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
    company: { en: "Hochschule Hof, Germany", de: "Hochschule Hof, Deutschland" },
    description: {
      en: "Studying radar signal processing, sensor fusion, real-time systems, and vehicle perception — bridging software engineering with automotive intelligence.",
      de: "Studium von Radarsignalverarbeitung, Sensorfusion, Echtzeitsystemen und Fahrzeugwahrnehmung — Verbindung von Softwareentwicklung mit automobiler Intelligenz.",
    },
  },
  {
    period: "2024 – 2025",
    role: { en: "Android Developer", de: "Android-Entwickler" },
    company: { en: "S2soft Infotech LLP", de: "S2soft Infotech LLP" },
    description: {
      en: "Developed Android applications using Java, Android Studio, XML, and Firebase. Worked on clinic companion apps, task management tools, and expense tracking systems.",
      de: "Entwicklung von Android-Anwendungen mit Java, Android Studio, XML und Firebase. Arbeit an Praxis-Begleit-Apps, Aufgabenmanagement-Tools und Ausgabenverfolgungs-Systemen.",
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
    projectType: { en: "Mobile Applications", de: "Mobile Anwendungen" },
    features: {
      en: [
        "Native Android with Java, Kotlin & Material Design 3",
        "Backend integration with Firebase, REST APIs & databases",
        "Clean architecture (MVVM) with offline-first design",
        "Real-time sync, push notifications & analytics dashboards",
      ],
      de: [
        "Natives Android mit Java, Kotlin & Material Design 3",
        "Backend-Integration mit Firebase, REST APIs & Datenbanken",
        "Saubere Architektur (MVVM) mit Offline-First Design",
        "Echtzeit-Synchronisation, Push-Benachrichtigungen & Analytics-Dashboards",
      ],
    },
    img: "/img/taskflow-screenshot.jpg",
    github: "https://github.com/avadhesh1017/TaskFlow",
  },
  {
    projectType: { en: "Software & Systems Engineering", de: "Software- & Systemtechnik" },
    features: {
      en: [
        "Data processing pipelines in Python & C++",
        "Sensor data analysis & real-time signal processing",
        "OCR-based translation with ML Kit & DeepL",
        "Version control, documentation & testing",
      ],
      de: [
        "Datenverarbeitungs-Pipelines in Python & C++",
        "Sensordatenanalyse & Echtzeit-Signalverarbeitung",
        "OCR-basierte Übersetzung mit ML Kit & DeepL",
        "Versionskontrolle, Dokumentation & Testing",
      ],
    },
    img: "/img/notyourmoney-screenshot.jpg",
    github: "https://github.com/avadhesh1017/NotYourMoney",
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
