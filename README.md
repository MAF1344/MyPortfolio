# Portfolio Website

Portfolio pribadi — Next.js (App Router) + Tailwind CSS v4, gaya visual glassmorphism.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur (Fase 1)

- `src/app/layout.tsx` — root layout, font (Space Grotesk, Inter, JetBrains Mono), background blob gradient
- `src/app/globals.css` — design tokens (warna, glass utility classes, animasi blob)
- `src/app/page.tsx` — merakit halaman utama dari section-section
- `src/components/Navbar.tsx` — navbar pill mengambang, glass
- `src/components/Hero.tsx` — profil singkat (nama + deskripsi)
- `src/components/ProjectsList.tsx` — daftar judul project (homepage saja, klik → detail di Fase 2)
- `src/components/MiniProjectsGrid.tsx` — grid card kotak mini-project (klik → interaktif di Fase 3)
- `src/components/Footer.tsx` — placeholder contact
- `src/lib/data.ts` — data dummy project & mini-project

## Roadmap

- Fase 2: halaman detail project (Problem → Screenshot) dengan dynamic routing
- Fase 3: mini-project interaktif (calculator, tic-tac-toe, dst.)
- Fase 4: contact section, polish animasi, cek responsive
- Fase 5: deploy ke Vercel
