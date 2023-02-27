import React from "react";
import { NavLink } from "react-router-dom";
import logoMobile from "../assets/logo-mobile.png";
import closeBtn from "../assets/close-button.svg";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #029491;
`;

const SidebarContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarImageWrapper = styled.div`
  width: 11.1rem;
  height: 11.1rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  width: 2.5rem;
  height: 2.5rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const LinksMobile = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 3.6rem;
  > a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6em;
    line-height: 1.9em;
    letter-spacing: 0.01em;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    margin-top: 2.6rem;
  }
`;

const ButtonsMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  margin-top: 7.5rem;
`;

const MobileLoginBtn = styled.button`
  border: none;
  background: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.4;
  cursor: pointer;
`;

const MobileSigninBtn = styled.button`
  width: 29.5rem;
  height: 5.2rem;
  left: 4rem;
  top: 36rem;
  background: #7ce3e1;
  border-radius: 0.5rem;
  border: none;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.01em;
  color: #000000;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 2rem;
`;

const links = [
  { name: "Главная", path: "/" },
  { name: "Тарифы", path: "/fee" },
  { name: "FAQ", path: "/faq" },
];

function SideBar(props) {
  return (
    <SidebarWrapper>
      <SidebarContent>
        <SidebarHeader>
          <SidebarImageWrapper>
            <img src={logoMobile} alt="logo" />
          </SidebarImageWrapper>
          <CloseButton onClick={() => props.closeMenu()}>
            <img src={closeBtn} alt="" />
          </CloseButton>
        </SidebarHeader>
        <LinksMobile>
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => props.closeMenu()}
            >
              <li>{link.name}</li>
            </NavLink>
          ))}
        </LinksMobile>
        <ButtonsMobile>
          <MobileLoginBtn disabled>Зарегистрироваться</MobileLoginBtn>
          <MobileSigninBtn onClick={() => props.toggleOpenLogIn()}>
            Войти
          </MobileSigninBtn>
        </ButtonsMobile>
      </SidebarContent>
    </SidebarWrapper>
  );
}

export default SideBar;
