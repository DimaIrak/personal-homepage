import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", system-ui;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
`;