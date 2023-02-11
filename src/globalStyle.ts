import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    :focus {
      outline: none;
    }
  }
  html,
  body,
  #root {
    min-height: ${window.innerHeight}px;
    background: linear-gradient(180deg, #9795EF 0%, #9795EF 0.01%, rgba(232, 153, 220, 0.67) 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }



`;
export default GlobalStyle;
