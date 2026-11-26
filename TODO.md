# TODO: things only Sneha can fill in

All edits happen in `src/data/content.js` unless noted. A value of `null` hides that link or detail, so the live site never shows a broken link or a "TODO". Search the file for `TODO` to find each spot.

## Before you deploy

- [ ] **Resume privacy.** `public/resume.pdf` is your current CV, which includes your phone number. Anyone can download it from the live site. Replace it with a version without the phone number, or accept that it's public.
- [ ] **Read My Story** (`story.paragraphs`) and change any line that doesn't sound like you.

## Links

- [x] Handwritten Math OCR: GitHub URL → `projects[2].links.github`
- [x] FinMate AI (Finance Assistant): GitHub URL → `projects[3].links.github`
- [ ] Mausam: your role in the team and how far you got in SIH → `projects[1].whatIDid`
- [x] Mausam: GitHub URL → `projects[1].links.github`
- [ ] FinMate AI demo: ai-personal-finance-assitant.vercel.app loads, but its dashboard says "Could not load finance dashboard" (backend not deployed). Add it to `projects[3].links.demo` once it works
- [x] Certificate "View" links → `certificates[].url` (added; the DSA Boot Camp one is linked from its Journey entry)

## Metrics

- [ ] TruthLens final numbers, e.g. "Recall@10 of X%, macro-F1 of Y" → `projects[0].results`
- [ ] Math OCR symbol accuracy, e.g. "X% on the test set" → `projects[1].results`

## Dates

- [ ] Code Storm 36-hour hackathon → `journey[1].when` (e.g. `'Mar 2025'`)
- [ ] Code-A-Hunt 2.0 → `journey[2].when`

## Images

- [x] Profile photo: save as `public/profile.jpg` (square, at least 560×560), then set `hero.photo = '/profile.jpg'`. Until then the "SM" initials show.
- [ ] Project screenshots, 1600×1000 `.webp`, in `public/projects/`. Then set each project's `image`; the screenshot replaces the drawn illustration.
  - [x] `truthlens.webp` (added from the project report)
  - [x] `math-ocr.webp` (taken from the live demo)
  - [x] `finance-assistant.webp` (FinMate AI dashboard, taken from the running app)
  - [x] `mausam.webp` (three screens from the web build)

## Deploy (when ready)

1. Push this folder to a new GitHub repo, e.g. `Sneha-1505/portfolio`.
2. On vercel.com, sign in with GitHub → Add New → Project → import the repo. Keep the Vite defaults; `npm run build` already prerenders the page.
3. Optional: add a custom domain in Vercel → Project → Settings → Domains.
