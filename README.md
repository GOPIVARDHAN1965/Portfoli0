---

````markdown
# 📌 Vite React GitHub Pages — Deployment Notes

**Goal:** Deploy my Vite + React portfolio to GitHub Pages at `/Portfoli0`.

---

## ✅ Full Steps to Make It Work

Below is the complete log of all the fixes and settings I used to make my site build, deploy, and load correctly on GitHub Pages.

---

## 1️⃣ Vite `base` config

In `vite.config.ts` set the `base` to match the repo name:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfoli0/',
  plugins: [react()],
});
````

This tells Vite that the site is hosted under `/Portfoli0/` on GitHub Pages.

---

## 2️⃣ React Router `basename`

Since GitHub Pages hosts the site in a subfolder (`/Portfoli0/`), React Router must know the base path.

In `App.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter basename="/Portfoli0">
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

This ensures all your routes map correctly when deployed.

---

## 3️⃣ Fix import/export mismatches

If a file exports a named export like:

```ts
export const Toaster = () => { ... }
```

Then **always** import it with curly braces:

```ts
import { Toaster } from "@/components/ui/toaster";
```

Using `import Toaster from` only works if you `export default Toaster`.

---

## 4️⃣ Add deploy scripts to `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Install `gh-pages` if you haven’t yet:

```bash
npm install --save-dev gh-pages
```

---

## 5️⃣ Build & deploy

Always build and deploy like this:

```bash
npm run build
npm run deploy
```

This builds to the `dist` folder and pushes it to the `gh-pages` branch.

---

## 6️⃣ GitHub Pages settings

In your GitHub repo:

* Go to **Settings → Pages**
* Set the source branch to `gh-pages`
* Set the folder to `/ (root)`

---

## 7️⃣ Local dev routing

When developing locally, always use relative routing with `Link` or `NavLink`:

```tsx
<Link to="/">Home</Link>
```

Absolute `<a href="/">` can break when using `base`.

---

## 8️⃣ Test the production build locally

To make sure the built files are correct before deploying, run:

```bash
npm run build
npx serve dist
```

Then open `http://localhost:<port>/Portfoli0/` and check everything works.

---

## 9️⃣ Ignore Browserslist warning

If you see:

```
Browserslist: browsers data (caniuse-lite) is X months old.
```

You can fix it (optional) with:

```bash
npx update-browserslist-db@latest
```

---

## ✅ Final result

When everything above is set up correctly, your site will be live at:

```
https://<username>.github.io/Portfoli0/
```

---

## ✅ Common problems + fixes

| Problem             | How to fix                                         |
| ------------------- | -------------------------------------------------- |
| 404 errors          | Make sure `base` and `basename` are set properly   |
| Builds fail         | Fix all import/export mismatches                   |
| Browserlist warning | Update it with `npx update-browserslist-db@latest` |

---

## 🎉 Done!

Now my portfolio works perfectly on GitHub Pages with Vite + React + React Router.

```

---
