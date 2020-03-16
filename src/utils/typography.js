import Typography from 'typography';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Poppins","sans-serif"],
  bodyFontFamily: ["Poppins","sans-serif"],
})

typography.injectStyles();

export default typography
