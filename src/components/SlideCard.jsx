import React from "react";
import styled from "styled-components";

const SlideStyle = styled.div`
  min-width: 93%;
  min-height: 22.5rem;
  background: #ffffff;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 2.2rem;
  margin: 1.5rem;

  @media (max-width: 1024px) {
    max-width: 93%;
    min-width: 93%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    min-width: 95%;
  }

  @media (max-width: 425px) {
    max-width: 92%;
    min-width: 92%;
  }

  @media (max-width: 375px) {
    max-width: 92%;
    min-width: 92%;
  }
`;

const SlideSubscribe = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #000000;
  margin-top: 1.2rem;

  @media (max-width: 1100px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1090px) {
    font-size: 1.4rem;
  }

  @media (max-width: 920px) {
    font-size: 1.2rem;
  }

  @media (max-width: 790px) {
    font-weight: 500;
    font-size: 2.2rem;
  }

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 1.8rem;
  }
`;
const ImgWrapper = styled.div`
  width: 6.5rem;
  height: 6.5rem;
`;

const ImgStyle = {
  width: "100%",
  height: "100%",
};

function SlideCard(props) {
  return (
    <SlideStyle>
      <ImgWrapper>
        <img style={ImgStyle} src={props.src} alt="" />
      </ImgWrapper>
      <SlideSubscribe>{props.subscribe}</SlideSubscribe>
    </SlideStyle>
  );
}

export default SlideCard;
