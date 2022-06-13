/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Inter"],
      body: ["Poppins"],
    },
    extend: {
      colors: {
        primary: {
          50: "#F3EAFF",
          100: "#E6D8F8",
          200: "#D3AAF3",
          300: "#B590EB",
          400: "#8B46E4",
          500: "#8134E4",
          600: "#7823E4",
          700: "#6E11E4",
          800: "#6400E4",
          900: "#4B00AC",
        },
        secondary: {
          50: "#DDF4EC",
          100: "#D0F3E7",
          200: "#C2F2E2",
          300: "#B5F2DD",
          400: "#A7F1D8",
          500: "#9AF0D2",
          600: "#8CEFCD",
          700: "#7FEFC8",
          800: "#71EEC3",
          900: "#64EDBE",
        },
        background: "#f8fafc",
      },
      animations: {
        dropdown: "dropdown 3s ease-in-out infinite",
      },
      keyframes: {
        dropdown: {
          "0%": {
            display: "none",
            transform: "scaleY(0)",
            opacity: "0",
          },
          "100%": {
            display: "block",
            transform: "scaleY(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  // add daisyUI plugin
  plugins: [],
};
