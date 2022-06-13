import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    // heading: "Inter",
    // body: "Poppins",
  },

  colors: {
    primary: {
      50: "#F3EAFF",
      100: "#E6D8F8",
      200: "#A87AE3",
      300: "#9557E3",
      400: "#8B46E4",
      500: "#8134E4",
      600: "#7823E4",
      700: "#6E11E4",
      800: "#6400E4",
      900: "#4B00AC",
    },
    secondary: {
      50: "#DDF4EC",
      100: "#D0F3E7",
      200: "#C2F2E2",
      300: "#B5F2DD",
      400: "#A7F1D8",
      500: "#9AF0D2",
      600: "#8CEFCD",
      700: "#7FEFC8",
      800: "#71EEC3",
      900: "#64EDBE",
    },
    background: "#f8fafc",
  },
});

export default theme;
