/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F0E0C',
        paper: '#F1F0EB',
        moss: '#2C4136',
      },
      fontFamily: {
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', '"Times New Roman"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
