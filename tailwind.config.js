/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.jsx", "./src/layout/**/*.jsx", "./src/views/**/*.jsx", "./src/styles/*.css"],
  theme: {
    screens: {
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "90em",
    },
  },
};
