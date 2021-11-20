import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
    :root {
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      --color-0: #6d7ce4;
      --color-1: #e63c80;
      --color-2: #e0d1ed;
      --color-3: #e5cdb3;
      --color-4: #ffffff;
      --color-5: #8C97EA;
      --color-6: #4D65A8;
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
