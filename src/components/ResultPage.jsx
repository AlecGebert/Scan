import React from "react";
import styled from "styled-components";
import searchPageImg from "../assets/search-page-img.svg";
import BlockTitle from "./BlockTitle";
import Results from "./Results";
import SearchCarousel from "./SearchCarousel";

const SearchTopContainer = styled.div`
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
  font-size: 4.2rem;
  line-height: 4.8rem;
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
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #000000;
  margin-top: 2rem;

  @media (max-width: 425px) {
    font-weight: 500;
  }
`;
const BlockSubtitle = styled.p`
  width: 91%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #949494;
  margin: 0 auto;
  margin-top: 1.7rem;

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
  width: 45%;
  max-height: 36.9rem;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 7rem;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Btn = styled.button`
  width: 33.5rem;
  height: 5.9rem;
  margin-left: 36%;
  background: #5970ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-left: 26%;
  }
  @media (max-width: 425px) {
    margin-left: 0rem;
    width: 100%;
  }
`;
const BtnWrapper = styled.div`
  width: 91%;
  margin: 0 auto;
  margin-top: 3.8rem;
`;
const ResultsContainer = styled.div`
  width: 91%;
  margin: 0 auto;
  margin-top: 5.8rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function SearchPage(props) {
  return (
    <>
      <SearchTopContainer succes={props.succes}>
        <LeftDiv>
          <Title>
            Ищем. Скоро
            <br /> будут результаты
          </Title>
          <Subtitle>
            Поиск может занять некоторое время,
            <br /> просим сохранять терпение.
          </Subtitle>
        </LeftDiv>
        <RightDiv>
          <img src={searchPageImg} alt="searchPageImg" />
        </RightDiv>
      </SearchTopContainer>
      <BlockTitle title="Общая сводка" />
      <BlockSubtitle>Найдено 4 221 вариантов</BlockSubtitle>
      <SearchCarousel />
      <BlockTitle title="Список документов" />
      <ResultsContainer>
        <Results />
      </ResultsContainer>
      <BtnWrapper>
        <Btn>Показать больше</Btn>
      </BtnWrapper>
    </>
  );
}

export default SearchPage;
