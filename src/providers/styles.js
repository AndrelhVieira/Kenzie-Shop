import { createGlobalStyle } from "styled-components";

import background from "../images/background.jpeg";

export const GlobalStyle = createGlobalStyle`
    article {
        background-image: ${`url(${background})`};
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }
    footer {
        background-image: ${`url(${background})`};
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }
    header {
        background-image: ${`url(${background})`};
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        }
    }
`;
