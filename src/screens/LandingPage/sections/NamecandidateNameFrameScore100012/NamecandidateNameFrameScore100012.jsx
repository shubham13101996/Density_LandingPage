import React from "react";
import styled from "styled-components";
import { DerivatesMade } from "./sections/DerivatesMade";
import { NamecandidateNameFrameScore10003 } from "./sections/NamecandidateNameFrameScore10003";

const StyledNamecandidateNameFrameScore100012 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 120px;
  justify-content: center;
  padding: 120px 0px;
  position: relative;
  width: 100%;
`;

export const NamecandidateNameFrameScore100012 = () => {
  return (
    <StyledNamecandidateNameFrameScore100012>
      <DerivatesMade />
      <NamecandidateNameFrameScore10003 />
    </StyledNamecandidateNameFrameScore100012>
  );
};