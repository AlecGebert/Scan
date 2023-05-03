import React from "react";
import styled from "styled-components";
import pic from "../assets/pic.jpg";

const BannerImgContainer = styled.div`
  width: 91%;
  height: 57.6rem;
  margin: 0 auto;
  margin-top: 7rem;
  background: no-repeat url(${pic});
  background-size: contain;
  @media (max-width: 1024px) {
    height: 44rem;
  }

  @media (max-width: 768px) {
    height: 44rem;
    background-size: cover;
  }
`;

function BannerTwo() {
  return <BannerImgContainer></BannerImgContainer>;
}

export default BannerTwo;
