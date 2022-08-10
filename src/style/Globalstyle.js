import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  BgColor: "#F1F6F9",
  logoColor: "#14274E",
  boldColor: "#394867",
  fontColor: "#9BA4B4",
  padding: "0 50px",
  leftpadding: "50px",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
    }
`;
