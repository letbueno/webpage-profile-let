import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import GlobalStyle from "./globalStyle";
import Profile from "./pages/Profile";

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
