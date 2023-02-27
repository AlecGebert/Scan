import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import useWindowSize from "./UseWinSize";
import styled from "styled-components";
import userImage from "../assets/user-image.svg";

const HeaderWrapper = styled.header`
  width: 100%;
  background: #ffffff;
`;
const HeaderContent = styled.div`
  width: 91%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 12.5rem;
  height: 9rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const LinksDiv = styled.ul`
  width: 18%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #000000;
    margin-right: 4.9rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const HamburgerMenu = styled.div`
  width: 3rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Line = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #029491;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogInBtn = styled.button`
  padding: 0.5rem 2.6rem;
  border: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #000000;
  opacity: 0.4;
  background: #ffffff;
  border-right: 0.1rem solid #029491;
  cursor: pointer;
`;
const SignInBtn = styled.button`
  padding: 0.4rem 1.2rem;
  width: 6.5rem;
  height: 2.6rem;
  border: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #000000;
  background: #7ce3e1;
  border-radius: 0.5rem;
  margin-left: 2rem;
  box-shadow: none;
  cursor: pointer;
`;

const UserContainer = styled.div`
  max-width: 15rem;
  display: flex;
  flex-direction: space-around;
  align-items: center;
`;
const UserNameContainer = styled.div``;

const UserName = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 0.02em;
  color: #000000;
  opacity: 0.7;
`;

const LogOutBtn = styled.button`
  border: none;
  background: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: 0.02em;
  color: #000000;
  opacity: 0.4;
  cursor: pointer;
`;

const UserImageContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin-left: 0.5rem;
`;

const ForImage = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
};

function Header(props) {
  const size = useWindowSize();

  return (
    <HeaderWrapper>
      <HeaderContent>
        <ImageWrapper>
          <img src={logo} alt="logo" />
        </ImageWrapper>
        <LinksDiv>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/fee">Тариф</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </LinksDiv>
        {size.width <= 768 && (
          <HamburgerMenu onClick={() => props.toggleMenu()}>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </HamburgerMenu>
        )}
        {size.width > 768 && (
          <>
            {props.auth ? (
              <ButtonBlock>
                <LogInBtn disabled>Зарегистрироваться</LogInBtn>
                <SignInBtn onClick={() => props.toggleOpenLogIn()}>
                  Войти
                </SignInBtn>
              </ButtonBlock>
            ) : (
              <UserContainer>
                <UserNameContainer>
                  <UserName>Алексей А.</UserName>
                  <LogOutBtn onClick={() => props.logOut()}>Выйти</LogOutBtn>
                </UserNameContainer>
                <UserImageContainer>
                  <img src={userImage} style={ForImage} alt="" />
                </UserImageContainer>
              </UserContainer>
            )}
          </>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
