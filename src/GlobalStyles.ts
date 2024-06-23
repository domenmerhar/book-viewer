import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: "Lato", sans-serif;

    }

    :root {
        --black: #000000;
        --white: #FFFFFF;

        --blue-0: #E7F5FF;
        --blue-3: #74C0FC;
        --blue-5: #339AF0;
        --blue-8: #1971C2;

        --gray-0: #FAF8FA;
        --gray-1: #F5F1F5;
        --gray-2: #EEE9EF;
        --gray-3: #DEE2E6;
        --gray-5: #B7ADBD;

        --yellow-4: #FFD43B;
        --red: #FF0000;
    }    

    body {
        background: linear-gradient(55deg, var(--blue-0), var(--blue-3));
    }
`;

export default GlobalStyles;
