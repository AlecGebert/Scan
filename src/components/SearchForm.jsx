import React from "react";
import styled from "styled-components";
import dock from "../assets/document.svg";
import folders from "../assets/folders.svg";
import searchImg from "../assets/search-image.svg";
import FormFromSearch from "./FormFromSearch";

const SearchSectionWrapper = styled.div`
  width: 91%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 6.9rem;
`;

const SearchFormTitle = styled.h1`
  font-family: "Russo One";
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: 0.02em;
  color: #000000;

  @media (max-width: 1024px) {
    font-size: 4.5rem;
    line-height: 4rem;
    letter-spacing: 0.02em;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: 0.02em;
    margin: 0 auto;
  }
  @media (max-width: 649px) {
    font-weight: 500;
    font-size: 5rem;
    line-height: 5rem;
    letter-spacing: 0.02em;
    margin: 0 auto;
  }

  @media (max-width: 487px) {
    font-size: 4rem;
    line-height: 3.4rem;
    letter-spacing: 0.02em;
  }

  @media (max-width: 395px) {
    font-size: 3rem;
    line-height: 3.4rem;
    letter-spacing: 0.02em;
  }
`;
const SearchFormSubtitle = styled.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.02em;
  color: #000000;
  margin-top: 2.5rem;
  @media (max-width: 395px) {
    font-size: 1.8rem;
    line-height: 2rem;
    letter-spacing: 0.02em;
  }
`;
const SearchFormTitels = styled.div`
  width: 65%;
`;

const UpperDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LowDiv = styled.div`
  width: 100%;
  margin-top: 4.7rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 649px) {
    flex-direction: column;
  }
`;

const FormImageContainer = styled.div`
  width: 30%;
  @media (max-width: 649px) {
    width: 100%;
    margin-top; 2.4rem;
  }
`;
const DocContainer = styled.div`
  width: 9.1rem;
  height: 11.1rem;
  @media (max-width: 500px) {
    width: 5.8rem;
    height: 7.1rem;
  }
`;
const Folders = styled.div`
  width: 14rem;
  height: 6.8rem;
  @media (max-width: 649px) {
    display: none;
  }
`;
const ForImage = {
  width: "100%",
  height: "100%",
};

function SearchForm(props) {
  return (
    <SearchSectionWrapper>
      <UpperDiv>
        <SearchFormTitels>
          <SearchFormTitle>
            Найдите необходимые данные в пару кликов.
          </SearchFormTitle>
          <SearchFormSubtitle>
            Задайте параметры поиска.
            <br /> Чем больше заполните, тем точнее поиск
          </SearchFormSubtitle>
        </SearchFormTitels>
        <DocContainer>
          <img src={dock} style={ForImage} alt="" />
        </DocContainer>
        <Folders>
          <img src={folders} style={ForImage} alt="" />
        </Folders>
      </UpperDiv>
      <LowDiv>
        <FormFromSearch succesfull={props.succesfull} />
        <FormImageContainer>
          <img src={searchImg} style={ForImage} alt="" />
        </FormImageContainer>
      </LowDiv>
    </SearchSectionWrapper>
  );
}

export default SearchForm;
