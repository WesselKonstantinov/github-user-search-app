/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "hsl(212 100% 50%)",
      "searching-blue": "hsl(217 20% 51%)",
      "san-marino": "hsl(217 35% 45%)",
      "anchors-aweigh": "hsl(217 21% 21%)",
      "ghost-white": "hsl(227 100% 98%)",
      white: "hsl(0 0% 100%)",
      "hei-se-black": "hsl(220 40% 13%)",
      infinity: "hsl(220 18% 16%)",
      "fainting-light": "hsl(222 41% 20%)",
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
    },
    fontSize: {
      "3xs": "0.6875rem",
      "2xs": "0.8125rem",
      xs: "0.875rem",
      sm: "0.9375rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.375rem",
      "2xl": "1.625rem",
    },
    extend: {},
  },
  plugins: [],
};
