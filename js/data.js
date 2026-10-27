/* ============================================================
   Résumé content. Every skill comes from the résumé.
   Optional: add level: 1–5 to a skill to show rating bubbles.
   ============================================================ */
const RESUME = {
  name: "Nathan Asferi",
  role: "Computer Science · George Mason University",
  blurb: "I'm a CS student graduating in December 2026. I build custom tools and web apps for client businesses at Salam Consulting, and I teach kids to code with STEM exCEL.",
  facts: ["Herndon, VA", "B.S. Computer Science, Dec. 2026", "Software Engineering Intern"],
  email: "nathanasferi0@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/NateAsferi" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nathan-asferi" }
  ],
  channels: [
    { name: "Languages", icon: "code", c1: "#7ad7ff", c2: "#1a8fe0",
      summary: "What I write code in.",
      skills: [
        { name: "Java", note: "Hammond organ synthesizer, Swing GUIs" },
        { name: "Python", note: "Flood Cascade Simulation API" },
        { name: "C / C++", note: "cyEngine, ESP32 blimp control, ASCII Sprite Adventure" },
        { name: "C#" },
        { name: "SQL", note: "Database-backed client apps" },
        { name: "JavaScript / TypeScript", note: "Nutrition Tracker in React Native" },
        { name: "HTML / CSS" }
      ] },
    { name: "AI-Assisted Dev", icon: "sparkle", c1: "#c7a8ff", c2: "#7046d8",
      summary: "Building with LLMs, and checking their work.",
      skills: [
        { name: "Claude", note: "Planned and drafted parts of the Flood Cascade API" },
        { name: "LLM APIs", note: "OpenAI, Anthropic" },
        { name: "LangChain" },
        { name: "Prompt engineering" },
        { name: "Reviewing and testing AI-generated code", note: "Review, test and refine before integrating; disclose AI use" }
      ] },
    { name: "Web & APIs", icon: "server", c1: "#8be38a", c2: "#2f9d3a",
      summary: "Services and the front ends that call them.",
      skills: [
        { name: "FastAPI", note: "REST service for the flood cascade engine" },
        { name: "REST APIs" },
        { name: "Third-party API integrations", note: "Client sites at Salam Consulting" },
        { name: "Streamlit" },
        { name: "BeautifulSoup4", note: "Anime News Bot scraper" },
        { name: "Discord webhooks", note: "Real-time alerts from the Anime News Bot" },
        { name: "USDA FoodData Central API", note: "Food search and macros in the Nutrition Tracker" }
      ] },
    { name: "Machine Learning", icon: "brain", c1: "#ffd36e", c2: "#e8890c",
      summary: "Libraries for models and data.",
      skills: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "scikit-learn" }
      ] },
    { name: "Apps & GUIs", icon: "phone", c1: "#ff9ed8", c2: "#d4459a",
      summary: "Desktop and mobile interfaces.",
      skills: [
        { name: "Java Swing", note: "Custom Dial widgets and a global preset system" },
        { name: "Android SDK", note: "Mobile Application Development coursework" },
        { name: "React Native + Expo", note: "Nutrition Tracker app" },
        { name: "Reusable UI components", note: "Shared across client projects, cutting feature time by 50%" }
      ] },
    { name: "Embedded", icon: "chip", c1: "#7ff0e0", c2: "#119c8e",
      summary: "Code that moves real hardware.",
      skills: [
        { name: "ESP32", note: "Bio-inspired UAV blimp" },
        { name: "Bluetooth input", note: "Real-time PS3 controller packets" },
        { name: "Real-time control loops", note: "Flapping routine held at 50 Hz" },
        { name: "Signal processing", note: "Harmonic overtones in the organ synth" }
      ] },
    { name: "Cloud & Tools", icon: "cloud", c1: "#a9c8ff", c2: "#4a6ee0",
      summary: "The everyday kit.",
      skills: [
        { name: "AWS" },
        { name: "Linux" },
        { name: "Git / GitHub" },
        { name: "CMake", note: "cyEngine builds with FetchContent" },
        { name: "VS Code" },
        { name: "Visual Studio" }
      ] },
    { name: "CS Foundations", icon: "book", c1: "#cfd9e2", c2: "#6c8296",
      summary: "The concepts underneath the code.",
      skills: [
        { name: "Data structures & algorithms" },
        { name: "Object-oriented design", note: "Modular, composable synth engine" },
        { name: "Unit testing", note: "Tests for the core cascade logic" },
        { name: "SDLC" },
        { name: "Agile / Scrum", note: "Tickets in Linear" }
      ] },
    { name: "Teaching & Teamwork", icon: "people", c1: "#ffb38a", c2: "#e05a2a",
      summary: "Explaining things and working with people.",
      skills: [
        { name: "Teaching", note: "20–30 elementary students per session" },
        { name: "One-on-one coaching", note: "Helping students isolate logic and runtime errors" },
        { name: "Turning requests into specs", note: "Scoping ambiguous stakeholder asks into tickets" },
        { name: "Production troubleshooting", note: "Live client sites" }
      ] }
  ],
  experience: [
    { when: "Sep. 2026 – Now", title: "Software Engineering Intern", org: "Salam Consulting · Springfield, VA",
      points: ["Build custom tools and web apps for 3+ client businesses, with client- and server-side logic, database-backed dynamic collections and third-party API integrations.",
               "Designed reusable code modules and UI components used across client projects, cutting new-feature development time by 50%.",
               "Troubleshoot production issues on live client sites and turn ambiguous stakeholder requests into scoped tickets in Linear."] },
    { when: "Dec. 2023 – Now", title: "Computer Science Instructor", org: "STEM exCEL · Fairfax, VA",
      points: ["Teach loops, conditionals and event-driven design to 20–30 elementary students per session across multiple schools.",
               "Coach students one-on-one and in small groups through debugging logic and runtime errors."] }
  ],
  projects: [
    { title: "Nutrition Tracker", wide: true, url: "https://github.com/NateAsferi/Nutrition-Tracking-App",
      text: "A cross-platform React Native app for logging meals and hitting daily macro goals. It searches the USDA FoodData Central database, pulls calories, protein, carbs and fat for each food, and tracks totals against editable goals across Home, Log and Goals tabs.",
      tags: ["TypeScript", "React Native", "Expo Router", "REST API"] },
    { title: "Digital Hammond Organ", text: "An object-oriented sound synthesis engine built from oscillators, amplifiers and multipliers, with a Swing GUI of custom dials and presets for real-time sound changes.", tags: ["Java", "Java Swing"] },
    { title: "Flood Cascade Simulation API", wide: true, url: "https://github.com/NateAsferi/cascade-engine",
      text: "A Python engine that models how flood-driven failures cascade through a county infrastructure network loaded from a JSON graph, served through a FastAPI REST service and a light web front end. Unit tested and documented.",
      tags: ["Python", "FastAPI", "JSON", "Unit testing"] },
    { title: "Bio-inspired UAV Blimp", url: "https://github.com/NateAsferi/blimp",
      text: "Bluetooth control on an ESP32 that reads a PS3 controller, filters stick deadzones into precise motor output, and flaps at a steady 50 Hz.", tags: ["C++", "ESP32", "Bluetooth"] },
    { title: "cyEngine", url: "https://github.com/NateAsferi/cyEngine",
      text: "A lightweight game engine written from scratch in modern C++, with separate graphics and input managers, a callback-driven game loop and a hello-world demo.", tags: ["C++20", "GLFW", "spdlog", "CMake"] },
    { title: "ASCII Sprite Adventure", url: "https://github.com/NateAsferi/ASCII-Sprite-Adventure",
      text: "A text adventure played on ASCII room maps. A command parser turns typed verbs into moves, item pickups and inventory checks, with locked doors and keys between rooms.", tags: ["C++", "Game logic"] },
    { title: "Anime News Bot", url: "https://github.com/NateAsferi/animenewsbot",
      text: "Scrapes Anime News Network for keywords like sequel and film announcements and posts clean, linked alerts to a Discord channel through a webhook.", tags: ["Python", "BeautifulSoup", "Discord webhooks"] }
  ],
  education: { school: "George Mason University · Fairfax, VA", degree: "B.S. in Computer Science", when: "Expected Dec. 2026", note: "Coursework: Data Structures, Operating Systems, Database Concepts, Secure Programming & Systems, Mobile Application Development" }
};
