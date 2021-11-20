import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
    :root {
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      --color0: #6d7ce4;
      --color1: #e63c80;
      --color2: #e0d1ed;
      --color3: #e5cdb3;
      --color4: #ffffff;
      --color5: #8C97EA;
      --color6: #4D65A8;
    }
    body {
      font-family: 'Roboto', sans-serif;
      color: white;
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

export default Theme;
