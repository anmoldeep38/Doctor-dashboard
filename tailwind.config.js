module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red: { 200: "#efaaaa", A700: "#e30000" },
        cyan: {
          100: "#aaefeb",
          "100_01": "#abefeb",
          "100_04": "#bbf4f7",
          "100_02": "#bbf7f0",
          "100_03": "#c8f3eb",
        },
        black: { 900: "#000000", "900_00": "#00000000" },
        blue_gray: {
          50: "#f1f1f1",
          100: "#cccccc",
          800: "#2c3a58",
          900: "#1b2c4f",
          "900_01": "#1c2a4e",
          "100_01": "#d9d9d9",
          "800_01": "#2c3a57",
        },
        gray: {
          100: "#f5f5f5",
          300: "#dbdbdb",
          700: "#686868",
          900: "#111729",
          "900_01": "#151c39",
        },
        white: { A700: "#ffffff", A700_33: "#ffffff33" },
        green: { 50: "#e4f4e5", 100: "#caf7bb" },
        blue: {
          100: "#c1e1f4",
          400: "#409bee",
          "100_01": "#bdd7f0",
          "100_02": "#bdd8f0",
          "400_7f": "#409bee7f",
        },
        lime: { 100: "#e7f7ba" },
        purple: { 100: "#e8bbf7" },
        deep_orange: { 50: "#f4e4e4" },
        colors: "#2c3a58ff",
      },
      fontFamily: { manrope: "Manrope", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#000000,#00000000)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
