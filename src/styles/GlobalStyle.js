import { createGlobalStyle } from 'styled-components';

const size = {
  mobile: '768px',
  tablet: '1024px',
};

export const GlobalStyle = createGlobalStyle`
  /* Reset Style */
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-size: 20px;
    background-color: #000;
    color: #fff;
    overflow-x: hidden;
  }

  ul, ol { list-style: none; }
  a { color: inherit; text-decoration: none; }
  
  .blind {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  /* fonts */
  @font-face {
    font-family: 'neodgm';
    src: url('/fonts/neodgm.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* Common Style */
  html {
    scrollbar-gutter: stable;
  }

  [class$="inner"] {
    max-width: 1600px;
    margin: auto;
    background: rgba(255, 255, 255, 0.3);
    /* backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); */

    /* 태블릿 */
    @media (max-width: ${size.tablet}) {
      width: 94%;
    }

    /* 모바일 */
    @media (max-width: ${size.mobile}) {
      width: 100%;
      padding: 0 20px; 
    }
  }

  #main .main-inner {
    background-color: transparent;
  }
`;