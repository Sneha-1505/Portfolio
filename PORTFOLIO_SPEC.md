# Sneha Mangwani — Portfolio Build Spec for Claude Code

Nov 25, 2026 · @Sneha

## How to use this doc

This doc is the full brief Claude Code needs to build Sneha's portfolio: one page, a purple theme, and all content already written. The layout follows the flow of the Purplefolio reference (hero, projects, experience, skills, story, call to action), but the design and copy are original. Do not copy its images, text or code.

1. Fill every line marked **TODO** (GitHub links, final metrics, photo). Everything else is ready.
2. Export this doc as Markdown and save it as `PORTFOLIO_SPEC.md` in a new, empty folder (e.g. `sneha-portfolio`).
3. Open Claude Code in that folder and paste the master prompt from the last section.
4. Review the site at `localhost`, ask Claude Code for changes, then deploy (see Contact, footer, SEO, deployment).
5. To update content later, edit only `src/data/content.js`. No component code needs to change.

## Goal and tech stack

Build a fast, responsive, single-page portfolio that positions Sneha as a **Software Developer & AI/ML Enthusiast** for internship recruiters. A recruiter should understand who she is and open a project within 10 seconds.

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | React 18 + Vite (JavaScript) | Sneha already knows React; Vite is fast and simple |
| Styling | Tailwind CSS | Theme tokens in one config file |
| Animation | Framer Motion | Subtle fade/slide-in on scroll |
| Icons | lucide-react + simple-icons (tech logos) | Lightweight, consistent |
| Fonts | Google Fonts: Sora (headings), Inter (body), JetBrains Mono (labels) | Modern, readable |
| Hosting | Vercel (free), GitHub repo connected | Auto-deploy on every push |

Rules for Claude Code:

- All text, links and lists live in `src/data/content.js`. Components only read from it.
- No backend, no database, no contact form service. Contact uses `mailto:` and links.
- Mobile-first. Must look right at 360 px, 768 px and 1280 px widths.
- Lighthouse score of 90+ on Performance, Accessibility, Best Practices and SEO.

Folder structure:

```
sneha-portfolio/
├─ PORTFOLIO_SPEC.md
├─ index.html
├─ public/
│  ├─ favicon.svg
│  ├─ resume.pdf            (TODO: add CV)
│  ├─ og-image.png
│  └─ projects/             (screenshots, 1600x1000, .webp)
├─ src/
│  ├─ data/content.js       (ALL site content)
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Projects.jsx  ProjectCard.jsx  ProjectModal.jsx
│  │  ├─ Journey.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Story.jsx
│  │  ├─ CTA.jsx
│  │  └─ Footer.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ tailwind.config.js
└─ package.json
```

## Design system

Clean, light layout with a violet accent, lots of white space and rounded cards. A dark-mode toggle in the navbar switches to the dark tokens and remembers the choice (wrap `localStorage` in try/catch).

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `primary` | #7C3AED | #A78BFA | Buttons, links, highlights |
| `primary-hover` | #6D28D9 | #C4B5FD | Button hover |
| `primary-soft` | #EDE9FE | #2A2145 | Tags, chips, soft backgrounds |
| `bg` | #FAFAFF | #0F0D1A | Page background |
| `surface` | #FFFFFF | #1A1729 | Cards |
| `text` | #1E1B2E | #F4F2FF | Headings, body |
| `muted` | #6B6880 | #A7A3BF | Secondary text, dates |
| `border` | #E7E4F2 | #2E2A42 | Card borders, dividers |

Typography:

- Headings: Sora, 600–700. Hero name 48–64 px desktop, 36 px mobile. Section titles 32 px.
- Body: Inter, 16–18 px, line-height 1.7, max width 65 characters for paragraphs.
- Labels: JetBrains Mono, 13–14 px, used for nav links styled like paths (`./projects`, `./about`, `./contact`) and for dates.

Layout and components:

- Content max width 1120 px, centered; section padding 96 px top/bottom on desktop, 64 px on mobile.
- Cards: `rounded-2xl`, 1 px `border`, `surface` background, shadow on hover, lift by 4 px on hover.
- Buttons: primary = filled `primary`, white text, `rounded-full`; secondary = outline `primary`.
- Tech tags: small `rounded-full` chips on `primary-soft` with `primary` text.
- A soft violet radial gradient blob behind the hero (low opacity, decorative).

Motion (keep it subtle):

- Sections fade up 16 px on first scroll into view, 0.5 s, staggered children 0.08 s.
- Smooth scrolling for in-page links; navbar becomes blurred and slightly opaque after scrolling 40 px.
- Respect `prefers-reduced-motion`: turn animations off.

Accessibility: contrast AA or better, visible focus rings in `primary`, alt text on every image, semantic `section` + heading order, keyboard-usable modal (Esc closes).

## Page structure

One scrolling page with eight sections in this order. Each section has an `id` so navbar links scroll to it.

| # | Section (`id`) | Layout |
| --- | --- | --- |
| 1 | Navbar (sticky) | Left: "Sneha Mangwani" wordmark. Right: `./home` `./projects` `./about` `./contact` in mono, dark-mode toggle, "Resume" outline button. Mobile: hamburger menu that slides down. |
| 2 | Hero (`home`) | Two columns on desktop: text left, avatar right; stacked on mobile. Greeting, role headline, 2-line intro, two buttons, small row of social icons. |
| 3 | Projects (`projects`) | Section title + one-line subtitle. 3 project cards: first card full width (featured), next two side by side. Each card: screenshot, title, one-line summary, tech chips, "Case study" and "GitHub" links. "Case study" opens a modal with the full write-up. Below: "More on GitHub" link. |
| 4 | Journey (`journey`) | Replaces the reference's "Experience" block, since Sneha has no job yet. Vertical timeline of training and hackathons, newest first. Next to it, a strip of 3 certificate cards. |
| 5 | Skills (`skills`) | 4 cards in a 2x2 grid (1 column on mobile), each with a title, icon and chip list. |
| 6 | My Story (`about`) | Narrow column of 3 short paragraphs, plus an education card on the side (desktop) or below (mobile). |
| 7 | Call to action | Full-width violet gradient band: "Interested in working together?" + the same two hero buttons. |
| 8 | Footer (`contact`) | Contact links (email, LinkedIn, GitHub), nav links repeated, "Back to top", copyright line. |

## Content: hero and My Story

Use this copy exactly; Sneha may edit it later in `content.js`.

**Hero**

| Element | Copy |
| --- | --- |
| Greeting | Hi, I'm Sneha 👋 |
| Headline | Software Developer & AI/ML Enthusiast |
| Intro | B.Tech CSE student at Lovely Professional University with a minor in AI/ML. I build full-stack web apps and machine-learning systems — from a Flask finance tracker to a multilingual fact-checking pipeline for WhatsApp forwards. |
| Primary button | Get in touch → scrolls to `#contact` |
| Secondary button | Browse projects → scrolls to `#projects` |
| Socials | GitHub, LinkedIn, Email icons |
| Avatar | No photo yet: a 280 px circle with a violet gradient and the initials "SM" in Sora. Load `/public/profile.jpg` instead when that file exists. TODO: add photo later. |

**My Story** (section title "My Story")

> I started my B.Tech in Computer Science at Lovely Professional University in 2024, and C++ was where it clicked for me. Solving 100+ DSA problems and building an operating-systems simulator for page-replacement algorithms taught me to think about efficiency, not just correctness.
>
> From there I moved to the web. My Finance Assistant project was my first full-stack app: REST APIs, JWT authentication, dashboards, and a proper test suite with 87% backend coverage.
>
> My AI/ML minor pulled me toward models that work on messy, real-world input — handwritten maths, and fact-checking forwards written in Hindi, Punjabi and Romanized text. I'm now looking for internships where I can build useful software and keep growing as an engineer.

TODO for Sneha: read the story and change any line that doesn't sound like you.

**Education card** (beside the story)

| Institution | Programme | Score | Years |
| --- | --- | --- | --- |
| Lovely Professional University, Phagwara | B.Tech, Computer Science & Engineering (minor: AI/ML) | CGPA 8.23 | Aug 2024 – present |
| SF DAV Public School, Muzaffarnagar | Intermediate (Class XII) | 88.8% | 2021 – 2023 |
| ST Thomas School, Muzaffarnagar | Matriculation (Class X) | 95.6% | 2019 – 2021 |

## Content: projects

Three projects, in this order. Section title "Projects", subtitle "Things I've built across full-stack and AI/ML." Each card shows the summary and chips; the modal shows Problem, What I did, How it works, Results, Stack and links.

### 1. TruthLens (featured, full-width card)

- **Summary:** Multilingual fact-checking for WhatsApp forwards in English, Hindi and Punjabi — including Romanized text.
- **Problem:** Misinformation spreads through forwarded messages, often in Hindi or Punjabi typed in Latin script, where most fact-checking tools fail. Romanized input is the main use case, not an edge case.
- **What I did:** Team project (3 members) for CSE472. I worked on the data and evaluation side and on the ML pipeline: dataset preparation and frozen splits, per-language and per-script evaluation, and the retrieval and verdict models.
- **How it works:** a message goes through a pipeline:
  1. Detect the claim in the message (X-CLAIM).
  2. Normalize it into a clean, checkable statement.
  3. Match it against existing fact-checks (MultiClaim).
  4. Retrieve evidence with BGE-M3 embeddings, FAISS and BM25.
  5. Classify the verdict: Supported, Refuted, Conflicting, Not Enough Info or Not a Claim.
  6. Generate an explanation and check it against the evidence with NLI.
- **Results:** evaluated with Recall@1/5/10 and MRR for retrieval and macro-F1 for verdicts, reported per language and script. TODO: add final numbers (e.g. "Recall@10 of X%, macro-F1 of Y").
- **Stack chips:** Python, PyTorch, Hugging Face Transformers, Sentence-Transformers, BGE-M3, FAISS, BM25, IndicXlit, fastText, FastAPI
- **Links:** GitHub → https://github.com/SoumiryaSarangi/TruthLens
- **Image:** TODO: screenshot of the demo UI or a pipeline diagram (`/public/projects/truthlens.webp`).

### 2. Handwritten Math OCR → LaTeX

- **Summary:** Turns a photo of a handwritten maths expression into LaTeX code.
- **Problem:** Typing equations in LaTeX is slow; students and teachers write maths by hand far faster than they can typeset it.
- **What I did:** Built the full pipeline for my Machine Learning in Computer Vision course and presented it with a live demo.
- **How it works:**
  1. Preprocess the image and segment individual symbols with OpenCV.
  2. Classify each symbol with a CNN trained in PyTorch on the CROHME handwritten maths symbols dataset (Kaggle).
  3. Rebuild the expression from symbol positions and output LaTeX.
- **Results:** runs on CPU only. TODO: add symbol accuracy (e.g. "X% on the test set").
- **Stack chips:** Python, PyTorch, OpenCV, CNN, CROHME
- **Links:** TODO: GitHub URL. Optional: live demo on Hugging Face Spaces (button "Try the demo").
- **Image:** TODO: input image → LaTeX output screenshot (`/public/projects/math-ocr.webp`).

### 3. Finance Assistant — Expense Tracker & Budget Manager

- **Summary:** A full-stack web app to track spending, set monthly budgets and see trends on interactive charts.
- **Problem:** Keeping track of expenses and staying within budget is tedious without a simple, visual tool.
- **What I did:** Built the whole app, front to back (Apr – May 2026).
- **How it works:**
  1. Users sign up and log in with JWT-based authentication.
  2. They add, edit and delete income and expense transactions through REST APIs.
  3. They set category-wise monthly budgets and get an alert at 80% of a budget.
  4. Dashboards with Chart.js show trends; data exports to CSV.
- **Results:** 42 unit tests, 18 REST API endpoint tests and end-to-end user journeys, with 87% backend code coverage.
- **Stack chips:** Python, Flask, SQLAlchemy, MySQL, SQLite, JavaScript, Bootstrap, Chart.js, JWT, REST APIs
- **Links:** TODO: GitHub URL.
- **Image:** TODO: dashboard screenshot (`/public/projects/finance-assistant.webp`).

Below the cards: a "More on GitHub →" link to https://github.com/Sneha-1505 (the Page Replacement Algorithm Simulator lives there).

## Content: skills, journey, certificates

**Skills** (4 cards, 2x2 grid)

| Card | Chips |
| --- | --- |
| Languages | C++, Python, Java, C, JavaScript |
| Web & Backend | React, Node.js, Flask, HTML, CSS, Bootstrap, REST APIs, JWT, Chart.js |
| AI / ML | PyTorch, OpenCV, Hugging Face Transformers, Sentence-Transformers, FAISS, CNNs, NLP & retrieval |
| Databases & Tools | MySQL, PostgreSQL, SQLite, SQLAlchemy, Git & GitHub, VS Code |

Under the grid, one muted line: "Also: problem-solving, teamwork, project management, adaptability."

**Journey** (vertical timeline, newest first)

| When | Title | Organiser | One line |
| --- | --- | --- | --- |
| Jun – Jul 2026 | Job Ready DSA Boot Camp (C++) | Eduniketan Private Limited | Data structures, algorithms and LeetCode-based problem-solving. |
| TODO: date | Code Storm — 36-hour hackathon | Spirit Organisation × Microsoft Student Ambassadors | Built under a 36-hour deadline with a team. |
| TODO: date | Code-A-Hunt 2.0 | CodingBlocks LPU | State-level inter-university hackathon. |
| Ongoing | 100+ DSA problems solved | LeetCode and others | Steady practice in data structures and algorithms. |

**Certificates** (3 small cards with a "View" link each)

| Certificate | Issuer | Date | Link |
| --- | --- | --- | --- |
| Database Management System — Part 1 | Infosys Springboard | Jul 2026 | TODO: certificate URL |
| Generative AI | NASSCOM Skill Development Program, SFJ | Feb 2026 | TODO: certificate URL |
| Programming using C++ | Infosys Springboard | Aug 2025 | TODO: certificate URL |

## Contact, footer, SEO, deployment

**Contact links** (phone number is intentionally NOT shown on the public site)

| Channel | Value |
| --- | --- |
| Email | snehamangwani1505@gmail.com — `mailto:` link plus a "Copy email" button with a "Copied!" toast |
| LinkedIn | https://www.linkedin.com/in/sneha-mangwani/ |
| GitHub | https://github.com/Sneha-1505 |
| Resume | `/resume.pdf`, opens in a new tab (TODO: add the PDF) |

**Call-to-action band:** title "Interested in working together?", line "I'm open to internships and collaborations — let's talk.", buttons "Get in touch" and "Browse projects".

**Footer:** nav links repeated, contact icons, "Back to top ↑", and the line "© 2026 Sneha Mangwani. Built with React & Tailwind." (year generated automatically).

**SEO and sharing**

- `<title>`: Sneha Mangwani — Software Developer & AI/ML Enthusiast
- Meta description: B.Tech CSE student at LPU building full-stack web apps and AI/ML systems. Projects, skills and contact.
- Open Graph + Twitter card tags with `/og-image.png` (1200x630, name + headline on the violet gradient; Claude Code generates it).
- `favicon.svg`: "SM" initials on a violet rounded square.
- Images in `.webp`, lazy-loaded, with width/height set.

**Deployment (Vercel, free)**

1. Push the project to a new GitHub repo, e.g. `Sneha-1505/portfolio`.
2. On vercel.com, sign in with GitHub, click "Add New → Project", import the repo and keep the Vite defaults.
3. Every push to `main` redeploys. The site goes live at `<project>.vercel.app`.
4. Optional later: add a custom domain (e.g. `snehamangwani.dev`) in Vercel's project settings.

## Acceptance checklist

The site is done when every box below is true. Claude Code checks these before saying it has finished; Sneha ticks them after reviewing.

- [ ] `npm install` and `npm run dev` work with no errors or console warnings
- [ ] `npm run build` succeeds
- [ ] All 8 sections appear in order, and every navbar link scrolls to the right section
- [ ] All text comes from `src/data/content.js`
- [ ] Layout is correct at 360 px, 768 px and 1280 px; mobile menu opens and closes
- [ ] Dark-mode toggle works and is remembered after reload
- [ ] Project modals open, close with Esc and the close button, and trap keyboard focus
- [ ] All external links open in a new tab with `rel="noopener noreferrer"`
- [ ] Phone number does not appear anywhere on the site
- [ ] Avatar shows "SM" initials when `/profile.jpg` is missing
- [ ] Lighthouse 90+ in all four categories
- [ ] Every remaining TODO is listed in a `TODO.md` file so Sneha can fill them

## Master prompt for Claude Code

Paste this into Claude Code, opened in the folder that contains `PORTFOLIO_SPEC.md`.

```markdown
You are building my personal portfolio website. The complete specification is in PORTFOLIO_SPEC.md in this folder. Read the whole file before writing any code, and treat it as the source of truth.

Work in this order and tell me briefly when each step is done:

1. Scaffold a React + Vite (JavaScript) project here, and add Tailwind CSS, Framer Motion, lucide-react and simple-icons.
2. Set up the design tokens (light and dark), fonts and base styles from the "Design system" section in tailwind.config.js and index.css.
3. Create src/data/content.js containing ALL text, links and lists from the "Content" sections, copied exactly. Keep every TODO as a clearly marked placeholder.
4. Build the components in the folder structure from the spec, in page order: Navbar, Hero, Projects (cards + modal), Journey, Skills, Story (with education card), CTA, Footer.
5. Add SEO tags, favicon.svg and og-image.png as described.
6. Run npm run build, fix every error and warning, then start the dev server and give me the local URL.
7. Go through the "Acceptance checklist" and report each item as pass or fail. Fix any failures.
8. Create TODO.md listing every placeholder I still need to fill (links, metrics, photo, resume, certificate URLs).

Rules:
- Do not show my phone number anywhere.
- Do not invent facts, metrics or links. Use the placeholders from the spec.
- Keep the design original; do not copy images, text or code from any other portfolio.
- Ask me before adding any dependency not listed in the spec.
```

After the first version, useful follow-up prompts:

- "Here are my GitHub links and final metrics: … Update content.js and remove those TODOs."
- "I added profile.jpg to /public. Use it in the hero instead of the initials."
- "Initialise git, commit everything and help me push to a new GitHub repo called portfolio."
