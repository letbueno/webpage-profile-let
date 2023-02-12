import { ChakraProvider } from "@chakra-ui/react";

import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GlobalStyle from "./globalStyle";
import Profile from "./pages/Profile";
config.autoAddCss = false;

function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <Profile />
      </ChakraProvider>
    </>
  );
}

export default App;
