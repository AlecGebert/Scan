import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const results = [
  {
    period: "10.09.2021",
    all: "5",
    risks: "0",
  },
  {
    period: "13.09.2021",
    all: "2",
    risks: "0",
  },
  {
    period: "17.09.2021",
    all: "6",
    risks: "0",
  },
  {
    period: "20.09.2021",
    all: "8",
    risks: "2",
  },
  {
    period: "12.10.2021",
    all: "1",
    risks: "0",
  },
  {
    period: "15.10.2021",
    all: "10",
    risks: "2",
  },
  {
    period: "16.10.2021",
    all: "4",
    risks: "0",
  },
  {
    period: "17.10.2021",
    all: "3",
    risks: "0",
  },
];
const resultContainer = {
  width: "17rem",
  height: "13rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  jusifyContent: "space-between",
  margin: "0 auto",
  borderRight: "0.2rem solid #949494",
};

const spanStyle = {
  fontWeight: "400",
  fontSize: "1.8rem",
  lineHeight: "2.2rem",
  letterSpacing: "0.02em",
  color: "#000000",
  marginTop: "1.8rem",
};
const TitelsDiv = styled.div`
  width: 17.1rem;
  height: 16.6rem;
  padding: 1.8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusify-content: space-between;
  margin: 0 auto;
  background: #029491;
  border-radius: 1rem 0rem 0rem 1rem;
  position: absolute;
  top: 0;
  left: -0.1rem;
  z-index: 100;
`;
const spanTitleStyle = {
  fontWeight: "500",
  fontSize: "2rem",
  lineHeight: "2.4rem",
  letterSpacing: "0.02em",
  color: "#FFFFFF",
  marginTop: "1.6rem",
};

function SearchCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };
  return (
    <div
      style={{
        width: "91%",
        margin: "0 auto",
        marginTop: "7rem",
        border: "2px solid #029491",
        borderRadius: "1rem",
        position: "relative",
        padding: "1.8rem 0",
      }}
      className="carousel-wrapper"
    >
      <TitelsDiv>
        <span style={spanTitleStyle}>Период</span>
        <span style={spanTitleStyle}>Всего</span>
        <span style={spanTitleStyle}>Риски</span>
      </TitelsDiv>
      <Carousel
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        style={{ marginTop: "7rem" }}
        responsive={responsive}
      >
        {results.map((item, index) => (
          <div style={resultContainer} key={index}>
            <span style={spanStyle}>{item.period}</span>
            <span style={spanStyle}>{item.all}</span>
            <span style={spanStyle}>{item.risks}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SearchCarousel;
