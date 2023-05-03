import React from "react";
import logImg from "../assets/Characters.svg";
import styled from "styled-components";
import AuthForm from "./AuthForm";

const LogInSectionWrapper = styled.div`
  width: 91%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogInLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogInLeftTitel = styled.h1`
  font-family: "Russo One";
  font-style: normal;
  font-weight: 900;
  font-size: 5rem;
  line-height: 4.8rem;
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

  @media (max-width: 320px) {
    font-size: 3rem;
    line-height: 3.4rem;
    letter-spacing: 0.02em;
  }
`;

const LogInImageContainer = styled.div`
  max-width: 32rem;
  max-height: 34rem;
  margin-top: 1.5rem;
  margin-left: 10%;

  @media (max-width: 768px) {
    display: none;
  }
`;
const forImage = {
  width: "100%",
  height: "100%",
};

const ContainerHidden = styled.div`
  display: none;

  @media (max-width: 768px) {
    max-width: 32rem;
    max-height: 34rem;
    margin-top: 1.5rem;
    margin-left: 10%;
    display: block;
    margin: 0 auto;
    margin-top: 4.9rem;
  }

  @media (max-width: 320px) {
    display: block;
    margin: 0 auto;
    margin-top: 4.9rem;
  }
`;

function LogInSection(props) {
  return (
    <LogInSectionWrapper>
      <LogInLeft>
        <LogInLeftTitel>
          Для оформления подписки <br /> на тариф, необходимо авторизоваться.
        </LogInLeftTitel>
        <LogInImageContainer>
          <img src={logImg} style={forImage} alt="" />
        </LogInImageContainer>
      </LogInLeft>
      <AuthForm setToken={props.setToken} />
      <ContainerHidden>
        <img src={logImg} style={forImage} alt="" />
      </ContainerHidden>
    </LogInSectionWrapper>
  );
}

export default LogInSection;
