/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // make sure tailwind scans all your files
  theme: {
    extend: {
      fontFamily: {
        "pt-serif": ['"PT Serif"', "serif"], // this is good for PT Serif
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite", // your custom shimmer animation
      },
    },
  },
  plugins: [], // removed tailwindcss-animate since it's not needed here
};
