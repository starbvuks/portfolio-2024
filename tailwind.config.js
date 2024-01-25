/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        Faction: ["var(--faction)", "sans-serif"],
      },
      backgroundImage: {
        "grainy-bg": "url('/assets/grainybg.jpeg')",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInPushUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(1000%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s",
        fadeInPushUp: "fadeInPushUp 1s",
        marquee: "marquee 23s linear infinite",
        marquee2: "marquee2 23s linear infinite",
      },
    },
  },
  plugins: [],
};
