# Slowhand

A tribute site to Eric Clapton, dedicated to **Keith "Woody" Woodeshick** — guitar-playing friend of Jason Chletsos for nearly thirty years.

## What's in it

- **Bands** — every group Clapton played in, in order. Yardbirds through solo. Members, years, signature gear, iconic songs.
- **Discography** — every album linked to Spotify. Sorted by decade with era-specific intros.
- **Collaborators** — the people who shaped his records and the ones whose records he shaped. ~30 entries.
- **Sheet Music** — iconic Clapton songs with Songsterr and Ultimate Guitar links. Difficulty rated honestly.
- **For Woody** — dedication page with three photos.

## Stack

Next.js 14, App Router, Tailwind v3, static export, GitHub Pages. Same shape as `BobMarley-ODI-Demo/iyaaman-app/`.

## Develop

```sh
cd slowhand-app
npm install
npm run dev
```

## Build

```sh
cd slowhand-app
npm run build
```

Static export lands in `slowhand-app/out/`.

## Deploy

GitHub Actions builds and publishes to Pages on push to `main`. URL: `https://fivetran-jasonchletsos.github.io/Clapton-ODI-Demo/`.
