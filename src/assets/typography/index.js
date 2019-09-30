import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: "Hammersmith One",
      styles: ["400"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    },
    {
      name: "Roboto",
      styles: ["400"]
    }
  ],
  baseFontSize: "12px",
  baseLineHeight: 1.666
});

export default typography;
