import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      main: "#C84031",
    },
    secondary: {
      main: "#0044ff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
