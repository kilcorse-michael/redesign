/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //prevent "stuck hover" state on mobile
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      dropShadow: {
        glow: ["0 0px 20px #ff0178", "0 0px 65px rgba(255, 255,255, 0.2)"],
      },
    },

    plugins: [],
  },
};
