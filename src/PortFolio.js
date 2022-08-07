import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: #eddfb3;
`;
const Section1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 99;
`;
const Title = styled.div`
  font-size: 100px;
  font-weight: 900;
  color: #87805e;
  margin-bottom: 50px;
`;
const Subtitle = styled.div`
  font-size: 70px;
  font-weight: 500;
  color: #87805e;
`;
const SectionWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;
const Section = styled.div`
  width: 200%;
  height: 100vh;
`;
const Section2 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PFTitle = styled.div`
  font-size: 100px;
  font-weight: 900;
  color: #b09b71;
  position: absolute;
  top: 20px;
  left: 50px;
`;
const PFImg = styled.div`
  width: 70%;
  height: 50%;
  border: 1px solid white;
`;
const TextWrap = styled.div``;

export const PortFolio = () => {
  return (
    <>
      <Wrap />
      <Section1>
        <Title>JeongHyeon</Title>
        <Subtitle>PortFolio</Subtitle>
      </Section1>
      <SectionWrap>
        <Section>
          <Section2>
            <PFTitle>Movie App</PFTitle>
            <PFImg />
            <TextWrap></TextWrap>
          </Section2>
          <Section2>
            <PFTitle>Seoul Plant</PFTitle>
            <PFImg />
            <TextWrap></TextWrap>
          </Section2>
        </Section>
      </SectionWrap>
    </>
  );
};
