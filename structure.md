src/
├── App.js                          ← Router setup
├── index.css                       ← Design tokens, global styles
├── index.js                        ← React entry
├── context/
│   └── ThemeContext.jsx
├── components/
│   ├── Navbar.jsx                  ← Sticky nav with page links
│   ├── Footer.jsx                  ← Clean footer
│   └── Animate.jsx                 ← FadeUp/FadeIn utilities
├── sections/
│   └── home/
│       ├── Hero.jsx
│       ├── PlatformOverview.jsx
│       ├── Problem.jsx 
│       ├── AgenticCore.jsx
│       ├── Architecture.jsx
│       ├── Intelligence.jsx
│       ├── About.jsx               ← NEW: About Us on homepage
│       └── CTA.jsx
└── pages/
    ├── HomePage.jsx
    ├── FoundryPage.jsx             ← From Foundry PDF
    ├── LearningPage.jsx            ← From Learning & Impact PDF
    ├── TeamPage.jsx                ← NEW: Team + Investors
    └── ContactPage.jsx             ← NEW: Request Access form