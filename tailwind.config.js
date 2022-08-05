module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    padding: {
      '18rem': '18rem',
      '36rem': '36rem',
      '50rem': '50rem',
    }
  } },
  plugins: [require('@tailwindcss/typography'),],
};
