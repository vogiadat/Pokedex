/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC0A2D",
        dark: "#212121",
        medium: "#666666",
        light: "#E0E0E0",
        background: "#EFEFEF",
        bug: "#A7B723",
        dark: "#75574C",
        dragon: "#7037FF",
        electric: "#F9CF30",
        fairy: "#E69EAC",
        fighting: "#C12239",
        fire: "#F57D31",
        flying: "#A891EC",
        ghost: "#70559B",
        normal: "#AAA67F",
        grass: "#74CB48",
        ground: "#DEC16B",
        ice: "#9AD6DF",
        poison: "#A43E9E",
        psychic: "#FB5584",
        rock: "#B69E31",
        water: "#6493EB",
      },
    },
  },
  plugins: [],
};
