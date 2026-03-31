# beautyportal.ink

Nezavisni beauty portal — Next.js 15, TypeScript, Tailwind CSS v4, MDX blog.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000)

---

## Pisanje novih članaka

Svaki članak je MDX fajl u `/content/[kategorija]/[slug].mdx`

### Kategorije
- `epilacija/` — vodici, savjeti, how-to
- `iskustva/` — recenzije, iskustva žena
- `financije/` — troškovi, kalkulacije

### Frontmatter (obavezan za svaki članak)

```yaml
---
title: "Naslov članka"
metaTitle: "SEO naslov (do 60 znakova)"
description: "Kratki opis koji se prikazuje na kartici"
metaDescription: "SEO opis (do 160 znakova)"
author: "Ime Autorice"
publishedAt: "2025-04-01"
updatedAt: "2025-04-15"      # opcionalno
readTime: "7 minuta čitanja"
featured: true                # opcionalno — prikazuje na naslovnici kao featured
keywords: ["keyword1", "keyword2", "keyword3"]
---
```

### Primjer novog članka

1. Kreiraj fajl: `content/epilacija/novi-clanak.mdx`
2. Dodaj frontmatter (vidi gornji primjer)
3. Piši u Markdownu
4. `git add . && git commit -m "novi članak: naziv" && git push`
5. Vercel automatski builda i deploya

---

## Linkovi prema aurorashop.ba

Svaki članak treba imati 1–2 prirodna linka prema Aurora Shopu:

```markdown
Jedini zvanični prodavač u BiH je [Aurora Shop](https://aurorashop.ba).
```

**Ne koristiti:** banner reklame, pop-up pozive, više od 2 linka po članku.

---

## Deploy na Vercel

1. Pushaj projekt na GitHub
2. Vercel → New Project → Import GitHub repo
3. Framework: Next.js (auto-detektuje)
4. Environment variables: nema potrebe za dodatnima
5. Domena: dodaj `beautyportal.ink` u Vercel → Settings → Domains

Svaki `git push` na `main` → automatski build i deploy.

---

## Struktura projekta

```
beautyportal/
├── content/               ← MDX članci (ovdje pišeš)
│   ├── epilacija/
│   ├── iskustva/
│   └── financije/
├── src/
│   ├── app/               ← Next.js App Router stranice
│   ├── components/        ← Header, Footer, ArticleCard
│   └── lib/posts.ts       ← Blog engine (čita MDX fajlove)
├── public/                ← Slike (optimizovane)
└── vercel.json
```
