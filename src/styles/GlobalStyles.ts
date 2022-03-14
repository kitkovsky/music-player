import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  *::-webkit-scrollbar {
    scrollbar-width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    scrollbar-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Lato", sans-serif;
  }

  h1,
  h2,
  h3 {
    color: rgb(54, 54, 54);
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  h3, h4 {
    font-weight: 400;
    color: rgb(100, 100, 100);
  }

  p {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
