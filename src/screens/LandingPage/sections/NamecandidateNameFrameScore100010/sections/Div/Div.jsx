import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  -webkit-backdrop-filter: blur(52.5px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(52.5px) brightness(100%);
  background-color: #0f0f0f66;
  border: 1px solid;
  border-color: #ffffff40;
  border-radius: 8px;
  display: flex;
  height: 171px;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 1140px;

  .same-strategies-wrapper {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 4px;
    justify-content: center;
    position: relative;
  }

  .text-wrapper-8 {
    color: #ffffff;
    font-family: "Neurial Grotesk-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.5px;
    position: relative;
    text-align: center;
    width: fit-content;
  }

  .vector-3 {
    height: 88px;
    margin-left: -0.5px;
    position: relative;
    width: 1px;
  }

  .frame-7 {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 4px;
    justify-content: center;
    margin-left: -0.5px;
    position: relative;
  }
`;

export const Div = () => {
  return (
    <StyledDiv>
      <div className="same-strategies-wrapper">
        <div className="text-wrapper-8">
          Same
          <br />
          Strategies
        </div>
      </div>
      <img className="vector-3" alt="Vector" src="/img/vector-3-1.png" />
      <div className="frame-7">
        <div className="text-wrapper-8">
          Same
          <br />
          Indicators
        </div>
      </div>
      <img className="vector-3" alt="Vector" src="/img/vector-3-1.png" />
      <div className="frame-7">
        <div className="text-wrapper-8">
          Better
          <br />
          Leverage
        </div>
      </div>
      <img className="vector-3" alt="Vector" src="/img/vector-3-1.png" />
      <div className="frame-7">
        <div className="text-wrapper-8">
          24x7
          <br />
          Trading
        </div>
      </div>
    </StyledDiv>
  );
};