import React from "react";
import styled from "styled-components";
import { NamecandidateNameFrameScore10004 } from "./sections/NamecandidateNameFrameScore10004";
import { NamecandidateNameFrameScore10005 } from "./sections/NamecandidateNameFrameScore10005";

const StyledNamecandidateNameFrameScore100015 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 82px;
  padding: 140px 0px;
  position: relative;
  width: 100%;

  .start-earning-now-wrapper {
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

  .start-earning-now {
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

export const NamecandidateNameFrameScore100015 = () => {
  return (
    <StyledNamecandidateNameFrameScore100015>
      <NamecandidateNameFrameScore10004 />
      <NamecandidateNameFrameScore10005 />
      <div className="start-earning-now-wrapper">
        <div className="start-earning-now">START EARNING NOW</div>
      </div>
    </StyledNamecandidateNameFrameScore100015>
  );
};