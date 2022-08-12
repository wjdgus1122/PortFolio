import { mainStyle } from "./style/Globalstyle";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { useEffect } from "react";

const SlideWrap = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

const Title = styled.div`
  font-weight: 900;
  color: ${mainStyle.boldColor};
  padding-top: 65px;
  display: flex;
  flex-direction: column;
`;
const Team = styled.div`
  font-size: 25px;
`;
const TitleText = styled.div`
  font-size: 70px;
  padding-top: 5px;
`;
const Img = styled.img`
  width: 1160px;
  height: 680px;
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
const SText = styled.a`
  color: ${mainStyle.fontColor};
`;

export const Slide = ({ con }) => {
  useEffect(() => {
    const swipersection = () => {
      AOS.init();
    };
    swipersection();
  }, []);
  return (
    <>
      <Swiper
        modules={[Mousewheel, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{ clickable: true }}
      >
        {con.map((con) => (
          <SwiperSlide>
            <SlideWrap>
              <Title data-aos="fade-up">
                <Team>{con.project}</Team>
                <TitleText>{con.title}</TitleText>
              </Title>
              <Img src={con.img} data-aos="fade-left" />
              <TextWrap>
                <PjText data-aos="fade-right" data-aos-delay="200">
                  <STitle>프로젝트 기간</STitle>
                  <SText>{con.date}</SText>
                </PjText>
                <PjText data-aos="fade-right" data-aos-delay="250">
                  <STitle>사용프로그램</STitle>
                  <SText>{con.program}</SText>
                </PjText>
                <PjText data-aos="fade-right" data-aos-delay="300">
                  <STitle>사용언어</STitle>
                  <SText>{con.languages}</SText>
                </PjText>
                {con.post && (
                  <PjText data-aos="fade-right" data-aos-delay="350">
                    <STitle>배포주소</STitle>
                    <SText target="_blank" href={`${con.post}`}>
                      {con.post}
                    </SText>
                  </PjText>
                )}
                {con.git && (
                  <PjText data-aos="fade-right" data-aos-delay="400">
                    <STitle>Git주소</STitle>
                    <SText target="_blank" href={`${con.git}`}>
                      {con.git}
                    </SText>
                  </PjText>
                )}
              </TextWrap>
            </SlideWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
