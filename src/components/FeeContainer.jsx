import React from "react";
import styled from "styled-components";
import check from "../assets/check.jpg";
import arow from "../assets/arow.svg";
import lamp from "../assets/lamp.svg";
import nout from "../assets/nout.svg";

const Container = styled.div`
  width: 91%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 7rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeeCardContainer = styled.div`
  width: 32%;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;
const FeeCardLow = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 1rem 1rem;
`;

const NewPrice = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 3.6rem;
  color: #000000;
`;
const OldPrice = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #000000;
  text-decoration: line-through;
  opacity: 0.5;
  margin-left: 1.9rem;
`;

const Prices = styled.div`
  margin-top: 0.5rem;
`;
const SubSub = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000000;
  margin-top: 5.9rem;
`;

const Describer = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: #000000;
  margin-top: 1rem;
  > img {
    margin-right: 0.8rem;
  }
`;

const ImgContainer = styled.div`
  width: 9.2rem;
  height: 8.3rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

function FeeContainer() {
  const cards = [
    {
      id: 1,
      src: lamp,
      title: "Beginner",
      subtitle: "Для небольшого исследования",
      price: "799 ₽",
      oldPrice: "1 200 ₽",
      proMonth: "или 150 ₽/мес. при рассрочке на 24 мес.",
      btnText: "Перейти в личный кабинет",
      btnStyle: {
        maxWidth: "33.5rem",
        height: "5.9rem",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "2.2rem",
        lineHeight: "2.7rem",
        color: "#000000",
        background: "#D2D2D2",
        border: "none",
        borderRadius: "0.5rem",
        marginTop: "7rem",
        cursor: "pointer",
      },
      top: {
        width: "100%",
        background: "#FFB64F",
        display: "flex",
        justifyContent: "space-between",
        padding: "3rem",
        borderRadius: "1rem 1rem 0rem 0rem",
      },
      titleStyle: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "3rem",
        lineHeight: "3.6rem",
        color: "#000000",
      },
      subStyle: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.6rem",
        lineHeight: "2.2rem",
        color: "#000000",
        marginTop: "1rem",
      },
      current: {
        width: "13.4rem",
        height: "2.4rem",
        background: "#3BA5E0",
        borderRadius: "1rem",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "1.4rem",
        lineHeight: "1.7rem",
        color: "#FFFFFF",
        textAlign: "center",
        padding: "0.3rem 0 0 0",
        marginLeft: "45%",
      },
      describe: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.6rem",
        lineHeight: "2.2rem",
        color: "#000000",
        marginTop: "1rem",
      },
    },
    {
      id: 2,
      src: arow,
      title: "Pro",
      subtitle: "Для HR и фрилансеров",
      price: "1 299 ₽",
      oldPrice: "2 600 ₽",
      proMonth: "или 279 ₽/мес. при рассрочке на 24 мес.",
      btnText: "Подробнее",
      btnStyle: {
        maxWidth: "33.5rem",
        height: "5.9rem",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "2.2rem",
        lineHeight: "2.7rem",
        color: "#FFFFFF",
        background: "#5970FF",
        border: "none",
        borderRadius: "0.5rem",
        marginTop: "7rem",
        cursor: "pointer",
      },
      top: {
        width: "100%",
        background: "#7CE3E1",
        display: "flex",
        justifyContent: "space-between",
        padding: "3rem",
        borderRadius: "1rem 1rem 0rem 0rem",
      },
      titleStyle: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "3rem",
        lineHeight: "3.6rem",
        color: "#000000",
      },
      subStyle: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.6rem",
        lineHeight: "2.2rem",
        color: "#000000",
        marginTop: "1rem",
      },
      current: {
        width: "13.4rem",
        height: "2.4rem",
        background: "#3BA5E0",
        borderRadius: "1rem",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "1.4rem",
        lineHeight: "1.7rem",
        color: "#FFFFFF",
        textAlign: "center",
        padding: "0.3rem 0 0 0",
        marginLeft: "45%",
        visibility: "hidden",
      },
      describe: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.6rem",
        lineHeight: "2.2rem",
        color: "#000000",
        marginTop: "1rem",
      },
    },
    {
      id: 3,
      src: nout,
      title: "Business",
      subtitle: "Для корпоративных клиентов",
      price: "2 379 ₽",
      oldPrice: "3 700 ₽",
      proMonth: "или 279 ₽/мес. при рассрочке на 24 мес.",
      btnText: "Подробнее",
      btnStyle: {
        maxWidth: "33.5rem",
        height: "5.9rem",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "2.2rem",
        lineHeight: "2.7rem",
        color: "#FFFFFF",
        background: "#5970FF",
        border: "none",
        borderRadius: "0.5rem",
        marginTop: "7rem",
        cursor: "pointer",
      },
      top: {
        width: "100%",
        background: "#000000",
        display: "flex",
        justifyContent: "space-between",
        padding: "3rem",
        borderRadius: "1rem 1rem 0rem 0rem",
      },
      titleStyle: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "3rem",
        lineHeight: "3.6rem",
        color: "#FFFFFF",
      },
      subStyle: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.6rem",
        lineHeight: "2.2rem",
        color: "#FFFFFF",
        marginTop: "1rem",
      },
      current: {
        width: "13.4rem",
        height: "2.4rem",
        background: "#3BA5E0",
        borderRadius: "1rem",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "1.4rem",
        lineHeight: "1.7rem",
        color: "#FFFFFF",
        textAlign: "center",
        padding: "0.3rem 0 0 0",
        marginLeft: "45%",
        visibility: "hidden",
      },
      describe: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.6rem",
        lineHeight: "2.2rem",
        color: "#000000",
        marginTop: "1rem",
        visibility: "hidden",
      },
    },
  ];
  // End of data ........................................//

  const feeCards = cards.map((card, index) => (
    <FeeCardContainer key={index}>
      <div style={card.top}>
        <div>
          <h3 style={card.titleStyle}>{card.title}</h3>
          <p style={card.subStyle}>{card.subtitle}</p>
        </div>
        <ImgContainer>
          <img src={card.src} alt="" />
        </ImgContainer>
      </div>
      <FeeCardLow>
        <div style={card.current}>Текущий тариф</div>
        <Prices>
          <NewPrice>{card.price}</NewPrice>
          <OldPrice>{card.oldPrice}</OldPrice>
        </Prices>
        <p style={card.describe}>{card.proMonth}</p>
        <div>
          <SubSub>В тариф входит:</SubSub>
          <ul>
            <Describer>
              <img src={check} alt="" />
              Безлимитная история запросов
            </Describer>
            <Describer>
              <img src={check} alt="" />
              Безопасная сделка
            </Describer>
            <Describer>
              <img src={check} alt="" />
              Поддержка 24/7
            </Describer>
          </ul>
        </div>

        <button style={card.btnStyle}>{card.btnText}</button>
      </FeeCardLow>
    </FeeCardContainer>
  ));
  return <Container>{feeCards}</Container>;
}

export default FeeContainer;
