import React from "react";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 28px;
  position: relative;

  .unlock-new-frontiers {
    color: transparent;
    font-family: "Neurial Grotesk-Bold", Helvetica;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -2.1px;
    line-height: 76.9px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 846px;

    .span {
      color: #ebff25;
    }

    .text-wrapper-6 {
      color: #d4f938;
    }

    .text-wrapper-7 {
      color: #ffffff;
    }
  }

  .p {
    color: var(--matrix-colours-neutrals-grey-4);
    font-family: "Neurial Grotesk-Regular", Helvetica;
    font-size: 22.4px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32.8px;
    position: relative;
    text-align: center;
    width: 659.09px;
  }
`;

export const DivWrapper = () => {
  return (
    <StyledDivWrapper>
      <p className="unlock-new-frontiers">
        <span className="span">Unlock</span>
        <span className="text-wrapper-6">&nbsp;</span>
        <span className="text-wrapper-7">New Frontiers.</span>
      </p>
      <p className="p">Are you a stock trader looking for new opportunities to make money? We got you covered!</p>
    </StyledDivWrapper>
  );
};