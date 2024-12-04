/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "4/5": "80%", // Добавляем класс max-h-4/5
      },
      backgroundColor: {
        beige: "rgb(236, 217, 195)",
        dark_beige: "rgb(216, 189, 159)",
        light_green: "rgb(246, 250, 244)",
      },
      colors: {
        browny: "rgb(85, 62, 52)",
      },
    },
  },
  plugins: [],
};
