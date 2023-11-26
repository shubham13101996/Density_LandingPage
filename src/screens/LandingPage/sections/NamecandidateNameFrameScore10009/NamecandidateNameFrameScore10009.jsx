import React from "react";
import styled from "styled-components";

const StyledNamecandidateNameFrameScore10009 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 64px;
  padding: 140px 0px;
  position: relative;
  width: 100%;

  .frame-39 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }

  .explore-the-markets {
    color: transparent;
    font-family: "Neurial Grotesk-Bold", Helvetica;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -2.1px;
    line-height: 76.9px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: fit-content;
  }

  .text-wrapper-32 {
    color: #ffffff;
  }

  .text-wrapper-33 {
    color: #ebff25;
  }

  .text-wrapper-34 {
    color: var(--matrix-colours-neutrals-grey-4);
    font-family: "Neurial Grotesk-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32.8px;
    position: relative;
    text-align: center;
    width: 659.09px;
  }

  .group-40 {
    height: 671.3px;
    position: relative;
    width: 1134.91px;
  }

  .explore-markets-wrapper {
    -webkit-backdrop-filter: blur(10px) brightness(100%);
    align-items: center;
    backdrop-filter: blur(10px) brightness(100%);
    background: linear-gradient(180deg, rgb(212, 249, 56) 29.17%, rgb(50, 216, 117) 100%);
    border-radius: 8px;
    box-shadow: 0px 0px 16px #a8ef9ccc;
    display: inline-flex;
    gap: 10px;
    height: 48px;
    justify-content: center;
    padding: 24px 48px;
    position: relative;
  }

  .explore-markets {
    color: #000000;
    font-family: "Neurial Grotesk-Bold", Helvetica;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: -10.5px;
    margin-top: -11.5px;
    position: relative;
    width: fit-content;
  }
`;

export const NamecandidateNameFrameScore10009 = () => {
  return (
    <StyledNamecandidateNameFrameScore10009>
      <div className="frame-39">
        <p className="explore-the-markets">
          <span className="text-wrapper-32">
            Explore the Markets
            <br />
          </span>
          <span className="text-wrapper-32">like it is your </span>
          <span className="text-wrapper-33">Playground.</span>
        </p>
        <p className="text-wrapper-34">Search for your favorite coins and stay ahead of the market</p>
      </div>
      <img className="group-40" alt="Group" src="/img/group-1000003815.png" />
      <div className="explore-markets-wrapper">
        <div className="explore-markets">EXPLORE MARKETS</div>
      </div>
    </StyledNamecandidateNameFrameScore10009>
  );
};