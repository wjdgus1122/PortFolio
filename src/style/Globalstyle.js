import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
    }
`;
