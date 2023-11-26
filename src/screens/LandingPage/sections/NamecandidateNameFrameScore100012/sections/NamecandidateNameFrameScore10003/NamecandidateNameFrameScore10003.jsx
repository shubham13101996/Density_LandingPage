import React from "react";
import styled from "styled-components";
import { NamecandidateNameFrameScore10001 } from "./sections/NamecandidateNameFrameScore10001";
import { NamecandidateNameFrameScore10002 } from "./sections/NamecandidateNameFrameScore10002";
import { SectionComponentNode } from "./sections/SectionComponentNode";

const StyledNamecandidateNameFrameScore10003 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  position: relative;

  .vector-17 {
    height: 1px;
    object-fit: cover;
    position: relative;
    width: 1134px;
  }
`;

export const NamecandidateNameFrameScore10003 = () => {
  return (
    <StyledNamecandidateNameFrameScore10003>
      <SectionComponentNode />
      <img className="vector-17" alt="Vector" src="/img/vector-5-1.png" />
      <NamecandidateNameFrameScore10001 />
      <img className="vector-17" alt="Vector" src="/img/vector-6-1.png" />
      <NamecandidateNameFrameScore10002 />
    </StyledNamecandidateNameFrameScore10003>
  );
};