/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Bluesy palette for a Clapton tribute — denim, whiskey, deep ink.
        paper:    "#f7f1e3",   // cream paper base (warm, slightly aged)
        paper_2:  "#ede4cc",   // card surface
        paper_3:  "#c8b994",   // border / warm sand
        ink:      "#0e1830",   // primary ink — deep indigo-black
        ink_2:    "#1a2546",   // secondary ink
        slate:    "#404a66",   // body text muted
        denim:    "#1f3a8a",   // deep blues blue
        denim_2:  "#3b5bb8",   // mid blue
        whiskey:  "#b07a2c",   // warm gold (whiskey on a Marshall stack)
        whiskey_2:"#d8a043",   // bright gold
        wine:     "#7a1f2b",   // deep red — Cherry Sunburst Les Paul
        ash:      "#6b7280",   // tertiary
        // Tricolor convenience names — denim, whiskey, wine
        accent_1: "#1f3a8a",
        accent_2: "#b07a2c",
        accent_3: "#7a1f2b",
      },
      fontFamily: {
        serif:   ["'Fraunces', 'Hoefler Text', Georgia, serif"],
        display: ["'Anton', 'Bebas Neue', 'Oswald', sans-serif"],
        sans:    ["'Fraunces', 'Hoefler Text', Georgia, serif"],
        mono:    ["'DM Mono', 'IBM Plex Mono', ui-monospace, monospace"],
      },
      letterSpacing: {
        widest: "0.32em",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
