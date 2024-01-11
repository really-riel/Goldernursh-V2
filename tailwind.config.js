/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nursh_green: "#084104",
        nursh_cream: "#f9fbe1",
        nursh_light_gold: "#edda8b",
        nursh_dark_gold: "#c4a838",
        nursh_dark_olive: "#6a5c05",
      },
      fontSize: {
        clamp_1: "clamp(1.5rem, 0.5rem + 1vw, 2.5rem)",
        clamp_2: "clamp(1.5rem, 0.5rem + 1vw, 3rem)",
        clamp_3: "font-size: clamp(1rem, 1rem + 1vw, 2rem)",
        admin_font_size: "clamp(0.6rem, 0.6rem + 1vw, 1rem)",
      },
      gap: {
        clamp_1: "clamp(0.5rem, 0.3rem + 1vw, 1rem)",
        clamp_2: "clamp(0.5rem, 1rem + 1vw, 1.2rem)",
      },
      borderRadius: {
        card_border_radius: "1rem",
      },
      boxShadow: {
        card_shadow: "0.1rem 0.2rem 0.6rem rgba(0, 0, 0, 0.363)",
        card_shadow2: "0 0.2rem 0.3rem $nursh_light_gold",
      },
    },
  },
  plugins: [],
};
