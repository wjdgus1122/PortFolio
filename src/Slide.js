import { mainStyle } from "./style/Globalstyle";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlideWrap = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

const Title = styled.div`
  width: 350px;
  font-weight: 900;
  color: ${mainStyle.boldColor};
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Team = styled.div`
  font-size: 25px;
`;
const TitleText = styled.div`
  font-size: 70px;
  padding-top: 5px;
`;
const Img = styled.div`
  width: 1160px;
  height: 730px;
  border: 1px solid black;
  position: absolute;
  top: 0;
  right: 0;
`;
const TextWrap = styled.div``;
const PjText = styled.div`
  font-size: 25px;
  margin-top: 50px;
`;
const STitle = styled.div`
  color: ${mainStyle.boldColor};
  margin-bottom: 5px;
`;
const SText = styled.div`
  color: ${mainStyle.fontColor};
`;
export const Slide = ({ con }) => {
  return (
    <>
      <Swiper>
        {con.map((con) => (
          <SwiperSlide>
            <SlideWrap>
              <Title>
                <Team>{con.project}</Team>
                <TitleText>{con.title}</TitleText>
              </Title>
              <Img />
              <TextWrap>
                <PjText>
                  <STitle>프로젝트 기간</STitle>
                  <SText>{con.date}</SText>
                </PjText>
                <PjText>
                  <STitle>사용프로그램</STitle>
                  <SText>{con.program}</SText>
                </PjText>
                <PjText>
                  <STitle>사용언어</STitle>
                  <SText>{con.languages}</SText>
                </PjText>
                <PjText>
                  <STitle>Git주소</STitle>
                  <SText>{con.post}</SText>
                </PjText>
              </TextWrap>
            </SlideWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
