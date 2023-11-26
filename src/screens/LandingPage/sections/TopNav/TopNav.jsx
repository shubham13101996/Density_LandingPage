import React from "react";
import styled from "styled-components";

const StyledTopNav = styled.div`
  -webkit-backdrop-filter: blur(40px) brightness(100%);
  align-items: center;
  align-self: stretch;
  backdrop-filter: blur(40px) brightness(100%);
  background-color: #2a5d3233;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: transparent;
  border-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255) 49.07%,
      rgba(255, 255, 255, 0) 100%
    )
    1;
  display: flex;
  flex: 0 0 auto;
  gap: 387px;
  justify-content: center;
  padding: 24px 216px;
  position: relative;
  width: 100%;

  .frame-22 {
    height: 24px;
    position: relative;
    width: 99.95px;
  }

  .frame-23 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 56px;
    justify-content: flex-end;
    position: relative;
  }

  .navbar {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 34px;
    position: relative;
  }

  .text-wrapper-20 {
    color: #fbfbfb;
    font-family: "Neurial Grotesk-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  .frame-24 {
    -webkit-backdrop-filter: blur(10px) brightness(100%);
    align-items: center;
    backdrop-filter: blur(10px) brightness(100%);
    background: linear-gradient(180deg, rgb(212, 249, 56) 29.17%, rgb(50, 216, 117) 100%);
    border-radius: 8px;
    box-shadow: 0px 0px 16px #a8ef9ccc;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    height: 48px;
    justify-content: center;
    padding: 16px 32px;
    position: relative;
  }

  .trade-now-4 {
    color: #000000;
    font-family: "Neurial Grotesk-Bold", Helvetica;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: -1px;
    margin-top: -2px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const TopNav = () => {
  return (
    <StyledTopNav>
      <img className="frame-22" alt="Frame" src="/img/frame.png" />
      <div className="frame-23">
        <div className="navbar">
          <div className="text-wrapper-20">Career</div>
          <div className="text-wrapper-20">Blogs</div>
          <div className="text-wrapper-20">Leaderboard</div>
          <div className="text-wrapper-20">Fees</div>
        </div>
        <div className="frame-24">
          <div className="trade-now-4">TRADE NOW</div>
        </div>
      </div>
    </StyledTopNav>
  );
};