# Gerald Peralta – Portfolio (React + Vite)

## Run it
```bash
npm install
npm run dev      # development server
npm run build    # production build in dist/
npm run preview  # preview the build
```

## Where to edit
- **Your content:** `src/data/content.js` (profile, skills, schools, projects, certificates)
- **Photo:** put `photo.jpg` in `public/`, then set `photo: "photo.jpg"` in `PROFILE`
- **Project screenshots:** put images in `public/`, then set each project's `img`
- **Resume:** replace `public/Gerald_Peralta_CV.pdf`
- **Styles:** `src/index.css`

## Structure (feature-based)
```
src/
  data/            content.js
  components/layout/   Header, Footer
  features/
    home/  about/  skills/  education/  experience/
    projects/  certifications/  resume/  contact/
  App.jsx  main.jsx  index.css
```
Each feature folder holds the component for one section of the page.

## Deploy to GitHub Pages
1. Create an empty repository on GitHub (for example `portfolio`).
2. Push this project to it (`git init`, `git add .`, `git commit`, `git remote add origin ...`, `git push -u origin main`).
3. Run `npm install` then `npm run deploy` (builds the site and publishes `dist/` to the `gh-pages` branch).
4. On GitHub: Settings > Pages > Source: "Deploy from a branch" > Branch: `gh-pages` / `(root)` > Save.
5. Your site: `https://<username>.github.io/<repository>/`

To update the site later, commit your changes and run `npm run deploy` again.
