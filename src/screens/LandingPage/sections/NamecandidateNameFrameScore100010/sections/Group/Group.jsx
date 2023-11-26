import React from "react";
import styled from "styled-components";
import { FrameWrapper } from "./sections/FrameWrapper";

const StyledGroup = styled.div`
  height: 510px;
  position: relative;
  width: 1130px;

  .overlap-4 {
    height: 510px;
    position: relative;
  }

  .texture {
    height: 510px;
    left: 0;
    mix-blend-mode: overlay;
    position: absolute;
    top: 0;
    width: 1130px;
  }
`;

export const Group = () => {
  return (
    <StyledGroup>
      <div className="overlap-4">
        <FrameWrapper />
        <img className="texture" alt="Texture" src="/img/texture-13.png" />
      </div>
    </StyledGroup>
  );
};