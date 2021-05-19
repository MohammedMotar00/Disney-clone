import React, { useState } from "react";
import styled from "styled-components";

function Viewers() {
  const [viewers] = useState([
    { image: "/images/viewers-disney.png" },
    { image: "/images/viewers-pixar.png" },
    { image: "/images/viewers-marvel.png" },
    { image: "/images/viewers-starwars.png" },
    { image: "/images/viewers-national.png" },
  ]);

  return (
    <Container>
      {viewers.map((view, index) => (
        <Wrap>
          <img src={view.image} alt="" />
        </Wrap>
      ))}
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.98) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
