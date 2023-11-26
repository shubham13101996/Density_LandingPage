import React from "react";
import styled from "styled-components";

const StyledDerivatesMade = styled.p`
  color: transparent;
  font-family: "Neurial Grotesk-Bold", Helvetica;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -1.51px;
  line-height: 80px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  text-shadow: 0px 0px 4px #00000040;
  width: 936px;

  .text-wrapper-13 {
    color: #ffffff;
  }

  .text-wrapper-14 {
    color: #ebff25;
  }
`;

export const DerivatesMade = () => {
  return (
    <StyledDerivatesMade>
      <span className="text-wrapper-13">
        Derivates made simple
        <br />
        in{" "}
      </span>
      <span className="text-wrapper-14">3 Easy</span>
      <span className="text-wrapper-13"> Steps</span>
    </StyledDerivatesMade>
  );
};