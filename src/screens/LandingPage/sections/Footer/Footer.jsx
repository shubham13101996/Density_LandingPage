import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  align-items: center;
  align-self: stretch;
  background-color: #229751;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 63px 245px;
  position: relative;
  width: 100%;
`;

const Group54 = styled.img`
  height: 29.26px;
  position: relative;
  width: 127.31px;
`;

const Frame66 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 28px;
  position: relative;
`;

const Group55 = styled.div`
  height: 17px;
  position: relative;
  width: 640.17px;
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "Neurial Grotesk-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;

  &:nth-child(1) {
    left: 83px;
  }

  &:nth-child(2) {
    left: 0;
  }

  &:nth-child(3) {
    left: 168px;
  }

  &:nth-child(4) {
    left: 413px;
  }

  &:nth-child(5) {
    left: 307px;
  }

  &:nth-child(6) {
    left: 539px;
  }
`;

const TextWrapper63 = styled.p`
  color: #dddddd;
  font-family: "Neurial Grotesk-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
  width: 786.88px;
`;

const Group56 = styled.div`
  height: 32.03px;
  position: relative;
  width: 189.51px;
`;

const GroupIcon = styled.img`
  height: 32px;
  position: absolute;
  top: 0;
  width: 32px;

  &:nth-child(1) {
    left: 0;
  }

  &:nth-child(2) {
    left: 52px;
  }

  &:nth-child(3) {
    left: 105px;
  }

  &:nth-child(4) {
    left: 157px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Group54 alt="Group" src="/img/group-626657.png" />
      <Frame66>
        <Group55>
          <TextWrapper>Fees</TextWrapper>
          <TextWrapper>Blog</TextWrapper>
          <TextWrapper>Leaderboard</TextWrapper>
          <TextWrapper>Contact Us</TextWrapper>
          <TextWrapper>Careers</TextWrapper>
          <TextWrapper>Privacy Policy</TextWrapper>
        </Group55>
        <TextWrapper63>
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i
          belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
        </TextWrapper63>
      </Frame66>
      <Group56>
        <GroupIcon alt="Group" src="/img/group-88.svg" />
        <GroupIcon alt="Group" src="/img/group-87.svg" />
        <GroupIcon alt="Group" src="/img/group-86.svg" />
        <GroupIcon alt="Group" src="/img/group-85.svg" />
      </Group56>
    </StyledFooter>
  );
};