import React from "react";
import styled from "styled-components";
import { Frame } from "./sections/Frame";
import { OverlapWrapper } from "./sections/OverlapWrapper";

const StyledFrameWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  left: 54px;
  position: absolute;
  top: 34px;
  width: 966px;
`;

const VectorImage = styled.img`
  align-self: stretch;
  position: relative;
  width: 1px;
`;

export const FrameWrapper = () => {
  return (
    <StyledFrameWrapper>
      <Frame />
      <VectorImage className="vector-2" alt="Vector" src="/img/vector-1178.png" />
      <OverlapWrapper />
    </StyledFrameWrapper>
  );
};