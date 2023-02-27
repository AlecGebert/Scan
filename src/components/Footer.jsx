import React from "react";
import styled from "styled-components";
import footerLogo from "../assets/footer-logo.svg";

const FooterWrapper = styled.footer`
  width: 100%;
  background: #029491;
  margin-top: 11.8rem;

  @media (max-width: 768px) {
    margin-top: 7rem;
  }
`;
const FooterContent = styled.div`
  width: 91%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 14.1rem;
  height: 14.1rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;
const Adress = styled.address`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #ffffff;
  margin-top: 2.1rem;
  text-align: right;
  margin-bottom: 2.5rem;
`;
function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <ImageWrapper>
          <img src={footerLogo} alt="logo" />
        </ImageWrapper>

        <div>
          <Adress>
            г. Москва, Цветной б-р, 40 <br />
            +7 495 771 21 11 <br />
            info@skan.ru
          </Adress>
          <Adress>&#169; Oleg 2023</Adress>
        </div>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
