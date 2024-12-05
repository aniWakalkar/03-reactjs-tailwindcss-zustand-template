// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // screens: {sm: "300px", md: "1477px",lg: "1920px",}
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... } (Mobile devices)
      md: "768px", // => @media (min-width: 768px) { ... } (Tablets)
      lg: "1024px", // => @media (min-width: 1024px) { ... } (Laptops and small desktops)
      xl: "1280px", // => @media (min-width: 1280px) { ... } (Desktops)
      "2xl": "1536px", // => @media (min-width: 1536px) { ... } (Large desktops / Ultra-wide screens)
    },
  },
  plugins: [],
});
