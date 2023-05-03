import React from "react";

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
  width: "13.7rem",
  height: "15.8rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  jusifyContent: "space-between",
};

const spanStyle = {
  fontWeight: "400",
  fontSize: "1.8rem",
  lineHeight: "2.2rem",
  letterSpacing: "0.02em",
  color: "#000000",
};
function ResultCard() {
  const resultsDiv = results.map((item, index) => (
    <div style={resultContainer} key={index}>
      <span style={spanStyle}>{item.period}</span>
      <span style={spanStyle}>{item.all}</span>
      <span style={spanStyle}>{item.risks}</span>
    </div>
  ));
  return <>{resultsDiv}</>;
}

export default ResultCard;
