/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "4/5": "80%", // Добавляем класс max-h-4/5
      },
    },
  },
  plugins: [],
};
