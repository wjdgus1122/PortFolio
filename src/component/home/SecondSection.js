import styled from "styled-components";
import { useState } from "react";
import { SkillDB } from "../../PortDB";
import { mainStyle } from "../../style/Globalstyle";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 50px;
  position: relative;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding: 0 20px;
    height: 60vh;
  }
`;
const SkTitleWrap = styled.div`
  width: 170px;
  height: 110px;
  overflow: hidden;
  position: relative;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    height: 50px;
    margin-top: 10px;
  }
`;
const SkTitle = styled.div`
  font-size: 80px;
  font-weight: 900;
  color: white;
  position: absolute;
  top: ${(props) => props.posi};
  left: 0;
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;
const SkillCon = styled.div`
  width: 100%;
  height: 260px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    height: 120px;
    margin-top: 30px;
  }
`;
const SkillWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: ${(props) => props.posi};
  left: 0;
  transition: 0.5s;
  & .skill:last-child {
    margin-right: 0;
  }
`;
const Skill = styled.div`
  width: 200px;
  color: white;
  margin-right: 50px;
  @media screen and (max-width: 500px) {
    width: 70px;
    margin-right: 20px;
  }
`;
const SkillImg = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (max-width: 500px) {
    height: 70px;
  }
`;
const SkillText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SkillTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const ExTextWrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    height: 200px;
    margin-top: 20px;
  }
`;
const ExText = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 900;
  color: white;
  text-align: center;
  position: absolute;
  top: ${(props) => props.posi};
  left: 50%;
  transform: translateX(-50%);
  transition: 0.5s;
  span {
    font-size: 23px;
    color: ${mainStyle.bagieColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
    span {
      font-size: 18px;
    }
  }
`;
const LibTitle = styled.div`
  font-size: 20px;
  font-weight: 100;
  color: white;
  margin-top: 50px;
  span {
    font-size: 23px;
    font-weight: 900;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-top: 20px;
    span {
      font-size: 18px;
    }
  }
`;
const PjTitleWrap = styled.div`
  width: 360px;
  height: 110px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    height: 60px;
    margin-top: 50px;
  }
`;
const PjTitle = styled.div`
  font-size: 80px;
  font-weight: 900;
  color: white;
  position: absolute;
  top: ${(props) => props.posi};
  left: 0;
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const SecondSection = () => {
  const [sktitle, setSkTitle] = useState("115px");
  const [skposi, setSkPosi] = useState("260px");
  const [extext, setExText] = useState("300px");
  const [pjtitle, setPjTitle] = useState("115px");
  const wphandle = () => {
    const scl = window.pageYOffset;
    const hgt = window.innerWidth;
    if (hgt < 500) {
      if (scl > 400) {
        setSkTitle("0");
        setSkPosi("0");
      } else {
        setSkTitle("115px");
        setSkPosi("260px");
      }
      if (scl > 500) {
        setExText("0");
      } else {
        setExText("300px");
      }
      if (scl > 800) {
        setPjTitle("0");
      } else {
        setPjTitle("115px");
      }
    } else {
      if (scl > 500) {
        setSkTitle("0");
        setSkPosi("0");
      } else {
        setSkTitle("115px");
        setSkPosi("260px");
      }
      if (scl > 600) {
        setExText("0");
      } else {
        setExText("300px");
      }
      if (scl > 1100) {
        setPjTitle("0");
      } else {
        setPjTitle("115px");
      }
    }
  };
  window.addEventListener("scroll", wphandle);

  return (
    <>
      <Section>
        <SkTitleWrap>
          <SkTitle posi={sktitle}>Skill</SkTitle>
        </SkTitleWrap>
        <SkillCon>
          <SkillWrap posi={skposi}>
            {SkillDB.map((skill) => (
              <Skill key={skill.id} className="skill">
                <SkillImg src={`${skill.img}`} />
                <SkillText>
                  <SkillTitle>{skill.name}</SkillTitle>
                </SkillText>
              </Skill>
            ))}
          </SkillWrap>
        </SkillCon>
        <ExTextWrap>
          <ExText posi={extext}>
            ?????? <span>ES6</span>????????? ????????? ???????????? ????????? ??? ??? ??????,{" "}
            <span>????????? ??????</span> ????????? ???????????????.
            <br />
            <span>React</span>??? ???????????? ?????? ??? ??? ??????, ??????
            styled-components??? ???????????? ???????????????.
            <LibTitle>
              <span>???????????? ???????????????</span> <br />
              styled-components / axios / react-router-dom / styled-reset /
              react-helmet-async / spinners-react / swiper / react-hook-form
            </LibTitle>
          </ExText>
        </ExTextWrap>
        <PjTitleWrap>
          <PjTitle posi={pjtitle}>Project</PjTitle>
        </PjTitleWrap>
      </Section>
    </>
  );
};
