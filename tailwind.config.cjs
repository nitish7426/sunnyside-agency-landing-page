/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        f: ["Fraunces", "serif"],
      },
      colors: {
        primary1: "hsl(7, 99%, 70%)",
        primary2: "hsl(51, 100%, 49%)",
        primary3: "hsl(167, 40%, 24%)",
        primary4: "hsl(198, 62%, 26%)",
        primary5: "hsl(168, 34%, 41%)",
        neutral1: "hsl(212, 27%, 19%)",
        neutral2: "hsl(213, 9%, 39%)",
        neutral3: "hsl(232, 10%, 55%)",
        neutral4: "hsl(210, 4%, 67%)",
      },
    },
  },
  plugins: [],
};
