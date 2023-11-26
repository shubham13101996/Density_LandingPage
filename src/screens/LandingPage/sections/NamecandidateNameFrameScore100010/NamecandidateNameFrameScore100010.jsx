import React from "react";
import styled from "styled-components";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Group } from "./sections/Group";

const StyledNamecandidateNameFrameScore100010 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 64px;
  padding: 150px 0px;
  position: relative;
  width: 100%;
`;

export const NamecandidateNameFrameScore100010 = () => {
  return (
    <StyledNamecandidateNameFrameScore100010>
      <DivWrapper />
      <Div />
      <Group />
    </StyledNamecandidateNameFrameScore100010>
  );
};