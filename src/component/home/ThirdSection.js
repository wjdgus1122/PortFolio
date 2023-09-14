import styled from "styled-components";
import { mainStyle } from "./../../style/Globalstyle";
import { useEffect } from "react";
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import pubimg from "./../../img/publishing/seoul.png";
import reactimg from "./../../img/react/Movie.png";
import toyimg from "./../../img/toy/Login.png";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;
const TitleWrap = styled.div`
  display: flex;
  padding: 0 50px;
  &.titlewrap {
    justify-content: end;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
    padding: 0 20px;
    position: relative;
  }
  @media screen and (max-width: 400px) {
    align-items: center;
  }
`;
const TdNumber = styled.div`
  font-size: 200px;
  font-weight: 900;
  color: white;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  @media screen and (max-width: 500px) {
    font-size: 100px;
  }

  @media screen and (max-width: 400px) {
    font-size: 50px;
  }
`;
const TdTextWrap = styled.div`
  margin-left: 65px;
  padding-top: 214px;
  position: relative;
  z-index: 99;
  &.sctextwrap {
    margin-left: 0;
    margin-right: 65px;
    padding-top: 152px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 20px;
    padding-top: 65px;
    &.sctextwrap {
      margin-left: 0;
      margin-right: 30px;
      padding-top: 65px;
    }
  }

  @media screen and (max-width: 400px) {
    padding-top: 0;
    &.sctextwrap {
      padding-top: 0;
    }
  }
`;
const TdTitle = styled.div`
  font-size: 60px;
  font-weight: 900;
  color: white;
  &.sctitle {
    text-align: end;
  }
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;
const TdText = styled.div`
  font-size: 45px;
  font-weight: 900;
  margin-left: 100px;
  color: white;
  &.sctext {
    margin-left: 0;
    margin-right: 100px;
    text-align: end;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const MoTdText = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    font-size: 22px;
    font-weight: 900;
    color: white;
    position: absolute;
    left: 20px;
    bottom: 0;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
const TdTsTextWrap = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotateZ(-22deg);
  &.tdtstextwrap {
    justify-content: flex-end;
    transform: translateY(-50%) rotateZ(22deg);
  }
`;
const TdTsText1 = styled.div`
  display: flex;
  padding: 3rem 0;
  font-size: 110px;
  font-weight: 900;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: ${(props) => props.color};
  @media screen and (max-width: 500px) {
    font-size: 60px;
  }
`;
const TdConWrap = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  right: 50px;
  z-index: 99;
  &.scconwrap {
    left: 50px;
    right: auto;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    display: block;
    top: 36%;
    right: auto;
    padding: 0 20px;
    &.scconwrap {
      left: auto;
    }
  }
`;
const TdBtn = styled.div`
  width: 240px;
  height: 65px;
  border: 1px solid white;
  border-radius: 15px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 350px;
  margin-right: 130px;
  background-color: ${(props) => props.color};
  transition: 0.5s;
  &.scbtn {
    margin-right: 0;
    margin-left: 130px;
  }
  &:hover {
    background-color: white;
    color: ${mainStyle.mainColor};
    font-weight: 900;
  }
  @media screen and (max-width: 500px) {
    width: 150px;
    height: 40px;
    font-size: 20px;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translateX(-50%);
    svg {
      display: none;
    }
    &.scbtn {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;
const TdCon = styled.div`
  width: 815px;
  height: 530px;
  border: 1px solid white;
  border-radius: 30px;
  background-color: ${(props) => props.color};
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 260px;
    border-radius: 15px;
  }
`;
const TdTopCircle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid white;
  @media screen and (max-width: 500px) {
    height: 30px;
  }
`;
const TopCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 25px;
  @media screen and (max-width: 500px) {
    width: 15px;
    height: 15px;
    margin-right: 12px;
  }
`;
const TdConImgWrap = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 230px;
  }
`;
const TdConImg = styled.img`
  width: 770px;
  height: 400px;
  border-radius: 25px;
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 190px;
    border-radius: 10px;
  }
`;

export const ThirdSection = ({ concolor }) => {
  AOS.init();
  return (
    <>
      <Section>
        <TitleWrap
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <TdNumber color={concolor}>01</TdNumber>
          <TdTextWrap>
            <TdTitle>Publishing</TdTitle>
            <TdText>Html 과 Css만을 이용하여 만든 프로젝트</TdText>
          </TdTextWrap>
          <MoTdText>Html 과 Css만을 이용하여 만든 프로젝트</MoTdText>
        </TitleWrap>
        <TdConWrap
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Link to={"/publishing"}>
            <TdBtn color={concolor}>
              View <FontAwesomeIcon icon={faArrowRightLong} />{" "}
            </TdBtn>
          </Link>
          <TdCon color={concolor}>
            <TdTopCircle>
              <TopCircle
                style={{ backgroundColor: `${mainStyle.bagieColor}` }}
              />
              <TopCircle
                style={{ backgroundColor: `${mainStyle.blueColor}` }}
              />
              <TopCircle style={{ backgroundColor: `white` }} />
            </TdTopCircle>
            <TdConImgWrap>
              <TdConImg src={pubimg} />
            </TdConImgWrap>
          </TdCon>
        </TdConWrap>
      </Section>
      <Section className="second">
        <TitleWrap
          className="titlewrap"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <TdTextWrap className="sctextwrap">
            <TdTitle className="sctitle">React</TdTitle>
            <TdText className="sctext">
              React를 이용하여 HTML/Css Javascript를 <br /> 이용하여 만든
              프로젝트
            </TdText>
          </TdTextWrap>
          <TdNumber color={concolor}>02</TdNumber>
          <MoTdText className="scmotext">
            React를 이용하여 HTML/Css Javascript를 이용하여 만든 프로젝트
          </MoTdText>
        </TitleWrap>
        <TdConWrap
          className="scconwrap"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <TdCon color={concolor}>
            <TdTopCircle>
              <TopCircle
                style={{ backgroundColor: `${mainStyle.bagieColor}` }}
              />
              <TopCircle
                style={{ backgroundColor: `${mainStyle.navyColor}` }}
              />
              <TopCircle style={{ backgroundColor: `white` }} />
            </TdTopCircle>
            <TdConImgWrap>
              <TdConImg src={reactimg} />
            </TdConImgWrap>
          </TdCon>
          <Link to={"/react"}>
            <TdBtn color={concolor} className="scbtn">
              <FontAwesomeIcon icon={faArrowLeftLong} /> View
            </TdBtn>
          </Link>
        </TdConWrap>
      </Section>
      <Section>
        <TitleWrap
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <TdNumber color={concolor}>03</TdNumber>
          <TdTextWrap>
            <TdTitle>Toy Project</TdTitle>
            <TdText>
              React 및 여러가지 언어를 사용하여 만든 간단한 프로젝트
            </TdText>
          </TdTextWrap>
          <MoTdText>
            React 및 여러가지 언어를 사용하여 만든 간단한 프로젝트
          </MoTdText>
        </TitleWrap>
        <TdConWrap
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Link to={"/toy"}>
            <TdBtn color={concolor}>
              View <FontAwesomeIcon icon={faArrowRightLong} />{" "}
            </TdBtn>
          </Link>
          <TdCon color={concolor}>
            <TdTopCircle>
              <TopCircle
                style={{ backgroundColor: `${mainStyle.navyColor}` }}
              />
              <TopCircle
                style={{ backgroundColor: `${mainStyle.blueColor}` }}
              />
              <TopCircle style={{ backgroundColor: `white` }} />
            </TdTopCircle>
            <TdConImgWrap>
              <TdConImg src={toyimg} />
            </TdConImgWrap>
          </TdCon>
        </TdConWrap>
      </Section>
    </>
  );
};
