import React from "react";
import banner from "../assets/banner.jpg";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 91%;
  display: flex;
  margin: 0 auto;
  margin-top: 6.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    margin-top: 4rem;
  }

  @media (max-width: 375px) {
    margin-top: 3rem;
  }
`;

const Title = styled.h1`
  font-family: "Russo One";
  font-style: normal;
  font-weight: 900;
  font-size: 6.5rem;
  line-height: 7.2rem;
  color: #000000;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 5.5rem;
    line-height: 7.2rem;
  }

  @media (max-width: 425px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;

const Subtitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000000;
  margin-top: 2rem;

  @media (max-width: 425px) {
    font-weight: 500;
  }
`;

const LeftDiv = styled.div`
  width: 55%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightDiv = styled.div`
  max-width: 62.9rem;
  max-height: 59.3rem;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    margin-top: 7rem;
  }
`;
const DisabledButton = styled.button`
  width: 33.5rem;
  height: 5.9rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #ffffff;
  background: #5970ff;
  border: none;
  border-radius: 0.5rem;
  margin-top: 7rem;
  cursor: pointer;
  opacity: 0.2;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
const SearchBtn = styled.button`
  width: 33.5rem;
  height: 5.9rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #ffffff;
  background: #5970ff;
  border: none;
  border-radius: 0.5rem;
  margin-top: 7rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

function Banner(props) {
  return (
    <BannerContainer>
      <LeftDiv>
        <Title>
          сервис по поиску публикаций <br /> о компании <br /> по его ИНН
        </Title>
        <Subtitle>
          Комплексный анализ публикаций, получение данных <br /> в формате PDF
          на электронную почту.
        </Subtitle>
        {props.auth ? (
          <DisabledButton disabled>Запросить данные</DisabledButton>
        ) : (
          <SearchBtn
            text="Запросить данные"
            onClick={() => props.toggleSearch()}
          >
            Запросить данные
          </SearchBtn>
        )}
      </LeftDiv>
      <RightDiv>
        <img src={banner} alt="banner" />
      </RightDiv>
    </BannerContainer>
  );
}

export default Banner;
