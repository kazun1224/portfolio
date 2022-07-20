module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {},      theme: {
        /* mantineと同じくする https://mantine.dev/theming/responsive/ */
      screens: {
        xs:"576px",
        sm:"768px",
        md:"992px",
        lg:"1200px",
        xl:"1400px",
      },
     },
    },
  plugins: [],
};
