import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var, textarea,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
    display: block;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    button{
        border: none;
        padding: 0;
    }
    a, :link{
        text-decoration: none;
        color: inherit;
    }
    body {
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    color: white;
    }
    :root {
      --color0: #6d7ce4;
      --color1: #e63c80;
      --color2: #e0d1ed;
      --color3: #e5cdb3;
      --color4: #ffffff;
      --color5: #8C97EA;
      --color6: #4D65A8;
    }
    #root > div{
        height: 100vh;
    }
    html {
        background: var(--color0);
    }
    h1 {
      font-size: 28px;
      font-weight: 700;
    }
    h2 {
      font-size: 26px;
      font-weight: 700;
    }
    h3 {
      font-size: 18px;
      font-weight: 300;
    }
`;
export default GlobalStyle;
