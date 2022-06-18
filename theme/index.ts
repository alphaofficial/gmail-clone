import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#ab3221",
    800: "#bb3a2b",
    700: "#c84031",
    600: "#da4937",
    500: "#e85238",
    400: "#e55e51",
    300: "#dc7973",
    200: "#f9e9e7",
    100: "#fbcfd1",
    50: "#fdecee",
  },
};

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const theme = extendTheme({ colors, fonts });
export default theme;
