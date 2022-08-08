import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  BgColor: "#F1F6F9",
  logoColor: "#14274E",
  boldColor: "#394867",
  fontColor: "#9BA4B4",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
    }
`;
