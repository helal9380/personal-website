/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        darkMode: "class",
        "-1": "-1",
      },
      colors: {
        primary: "gray",
        dark: "black",
        secondary: "#13C296",
        "blue-dark": "rgb(27 68 200)",
        "bg-gray-1": "#F9FAFB",
      },
    },
  },
  plugins: [],
};
