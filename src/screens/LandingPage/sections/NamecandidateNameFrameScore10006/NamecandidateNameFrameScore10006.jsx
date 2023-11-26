import React from "react";
import styled from "styled-components";

const NamecandidateNameFrameScore10006Wrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 0px 216px;
  position: relative;
  width: 100%;
`;

const Frame26 = styled.div`
  -webkit-backdrop-filter: blur(52.5px) brightness(100%);
  align-items: center;
  align-self: stretch;
  backdrop-filter: blur(52.5px) brightness(100%);
  background-color: #0000000d;
  border: 1.5px solid;
  border-color: transparent;
  border-image: linear-gradient(to bottom, rgba(50, 216, 117, 0.96), rgb(226, 255, 111)) 1;
  box-shadow: 0px 0px 10px #ebff2533;
  display: flex;
  height: 171px;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Frame27 = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  justify-content: center;
  position: relative;
`;

const TextWrapper22 = styled.div`
  color: var(--matrix-colours-electric-green-primary);
  font-family: "Neurial Grotesk-Bold", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const TextWrapper23 = styled.div`
  color: #a9a9a9;
  font-family: "Neurial Grotesk-Medium", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 26px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Vector26 = styled.img`
  height: 171px;
  margin-left: -0.75px;
  position: relative;
  width: 1.5px;
`;

const Frame28 = styled(Frame27)`
  margin-left: -0.75px;
`;

const TextWrapper24 = styled(TextWrapper22)`
  color: #ebff25;
`;

export const NamecandidateNameFrameScore10006 = () => {
  return (
    <NamecandidateNameFrameScore10006Wrapper>
      <Frame26>
        <Frame27>
          <TextWrapper22>00%</TextWrapper22>
          <TextWrapper23>Conversion Fee</TextWrapper23>
        </Frame27>
        <Vector26 alt="Vector" src="/img/vector-3-3.png" />
        <Frame28>
          <TextWrapper24>500 Mn+</TextWrapper24>
          <TextWrapper23>Lifetime Volume Traded</TextWrapper23>
        </Frame28>
        <Vector26 alt="Vector" src="/img/vector-2-3.png" />
        <Frame28>
          <TextWrapper24>250+</TextWrapper24>
          <TextWrapper23>Total Tradable Pairs</TextWrapper23>
        </Frame28>
        <Vector26 alt="Vector" src="/img/vector-3-3.png" />
        <Frame28>
          <TextWrapper22>15,000+</TextWrapper22>
          <TextWrapper23>Traders</TextWrapper23>
        </Frame28>
      </Frame26>
    </NamecandidateNameFrameScore10006Wrapper>
  );
};