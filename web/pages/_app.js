import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@components/navbar/Navbar";

import "@styles/globals.css";

import theme from "@styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <div className="h-auto">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
