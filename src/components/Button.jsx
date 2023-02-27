import React from "react";
import styled from "styled-components";

const SearchBtn = styled.button`
  width: 33.5rem;
  height: 5.9rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #ffffff;
  background: #5970ff;
  border: none;
  border-radius: 0.5rem;
  margin-top: 7rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

function Button(props) {
  return <SearchBtn>{props.text}</SearchBtn>;
}

export default Button;
