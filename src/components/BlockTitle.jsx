import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h2`
  width: 91%;
  margin: 0 auto;
  margin-top: 10.9rem;
  font-family: "Russo One";
  text-transform: uppercase;
  font-style: normal;
  font-weight: 900;
  font-size: 4.5rem;
  line-height: 5.4rem;
  color: #000000;

  @media (max-width: 425px) {
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 4.5rem;
    margin-top: 7rem;
  }
`;

function BlockTitle(props) {
  return <TitleStyle>{props.title}</TitleStyle>;
}

export default BlockTitle;
