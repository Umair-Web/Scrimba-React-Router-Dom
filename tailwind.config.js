/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}", //Yahan per jo pages likah he ye wo folder he iske under hamare component hn and idher human css apply kerni he.
    "./components/**/*.{js,ts,jsx,tsx}", // Apply Tailwind CSS in components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

