import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "./style/Globalstyle";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9999;
  background-color: ${mainStyle.BgColor};
  padding: ${mainStyle.padding};
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
  cursor: pointer;
  color: ${(props) => props.color};
`;
const MenuWrap = styled.div`
  display: flex;
`;
const Menu = styled.div`
  font-size: 20px;
  margin-left: 30px;
  color: ${mainStyle.fontColor};
  cursor: pointer;
  &.menu1 {
    color: ${(props) => props.color1};
    &:hover {
      color: ${mainStyle.boldColor};
    }
  }
  &.menu2 {
    color: ${(props) => props.color2};
    &:hover {
      color: ${mainStyle.boldColor};
    }
  }
  &.menu3 {
    color: ${(props) => props.color3};
    &:hover {
      color: ${mainStyle.boldColor};
    }
  }
`;

export const Header = () => {
  const [logocl, setLogoCl] = useState(`${mainStyle.BgColor}`);
  const [menu_1, setMenu_1] = useState(`${mainStyle.fontColor}`);
  const [menu_2, setMenu_2] = useState(`${mainStyle.fontColor}`);
  const [menu_3, setMenu_3] = useState(`${mainStyle.fontColor}`);
  const headerhandle = () => {
    const scl = window.pageYOffset;
    if (scl < 1880 && scl > 800) {
      setLogoCl(`${mainStyle.logoColor}`);
      setMenu_1(`${mainStyle.boldColor}`);
      setMenu_2(`${mainStyle.fontColor}`);
      setMenu_3(`${mainStyle.fontColor}`);
    } else if (scl < 2785 && scl > 1881) {
      setMenu_1(`${mainStyle.fontColor}`);
      setMenu_2(`${mainStyle.boldColor}`);
      setMenu_3(`${mainStyle.fontColor}`);
    } else if (scl > 2786) {
      setMenu_1(`${mainStyle.fontColor}`);
      setMenu_2(`${mainStyle.fontColor}`);
      setMenu_3(`${mainStyle.boldColor}`);
    } else if (scl < 800) {
      setLogoCl(`${mainStyle.BgColor}`);
      setMenu_1(`${mainStyle.fontColor}`);
      setMenu_2(`${mainStyle.fontColor}`);
      setMenu_3(`${mainStyle.fontColor}`);
    }
    console.log(scl);
  };
  window.addEventListener("scroll", headerhandle);
  return (
    <Wrap>
      <Logo
        color={logocl}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        JH PORTFOLIO
      </Logo>
      <MenuWrap>
        <Menu
          color1={menu_1}
          className="menu1"
          onClick={() => {
            window.scrollTo({ top: 980, behavior: "smooth" });
          }}
        >
          Publishing
        </Menu>
        <Menu
          color2={menu_2}
          className="menu2"
          onClick={() => {
            window.scrollTo({ top: 1920, behavior: "smooth" });
          }}
        >
          React Project
        </Menu>
        <Menu
          color3={menu_3}
          className="menu3"
          onClick={() => {
            window.scrollTo({ top: 2870, behavior: "smooth" });
          }}
        >
          Toy Project
        </Menu>
      </MenuWrap>
    </Wrap>
  );
};
