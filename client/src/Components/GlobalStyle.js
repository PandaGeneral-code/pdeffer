import { createGlobalStyle, css } from "styled-components";
import normalize from "styled-normalize";

const style = css`
  ${normalize};
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    min-height: 100%;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${style};
`;

export default GlobalStyle;
