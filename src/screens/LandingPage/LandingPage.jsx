import React from "react";
import styled from "styled-components";
import { Footer } from "./sections/Footer";
import { GroupWrapper } from "./sections/GroupWrapper";
import { Hero } from "./sections/Hero";
import { NamecandidateNameFrameScore100010 } from "./sections/NamecandidateNameFrameScore100010";
import { NamecandidateNameFrameScore100011 } from "./sections/NamecandidateNameFrameScore100011";
import { NamecandidateNameFrameScore100012 } from "./sections/NamecandidateNameFrameScore100012";
import { NamecandidateNameFrameScore100013 } from "./sections/NamecandidateNameFrameScore100013";
import { NamecandidateNameFrameScore100014 } from "./sections/NamecandidateNameFrameScore100014";
import { NamecandidateNameFrameScore100015 } from "./sections/NamecandidateNameFrameScore100015";
import { NamecandidateNameFrameScore100016 } from "./sections/NamecandidateNameFrameScore100016";
import { NamecandidateNameFrameScore100017 } from "./sections/NamecandidateNameFrameScore100017";
import { NamecandidateNameFrameScore10006 } from "./sections/NamecandidateNameFrameScore10006";
import { NamecandidateNameFrameScore10007 } from "./sections/NamecandidateNameFrameScore10007";
import { NamecandidateNameFrameScore10008 } from "./sections/NamecandidateNameFrameScore10008";
import { NamecandidateNameFrameScore10009 } from "./sections/NamecandidateNameFrameScore10009";
import { TopNav } from "./sections/TopNav";

const StyledLandingPage = styled.div`
  align-items: flex-start;
  background: radial-gradient(50% 50% at 50% 50%, rgb(87.82, 242.25, 137.93) 0%, rgb(0, 0, 0) 100%);
  background-color: rgba(255, 255, 255, 1);
  display: inline-flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`;

export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <TopNav />
      <Hero />
      <NamecandidateNameFrameScore10006 />
      <NamecandidateNameFrameScore10007 />
      <NamecandidateNameFrameScore10008 />
      <NamecandidateNameFrameScore10009 />
      <NamecandidateNameFrameScore100010 />
      <NamecandidateNameFrameScore100011 />
      <NamecandidateNameFrameScore100012 />
      <NamecandidateNameFrameScore100013 />
      <NamecandidateNameFrameScore100014 />
      <NamecandidateNameFrameScore100015 />
      <NamecandidateNameFrameScore100016 />
      <NamecandidateNameFrameScore100017 />
      <GroupWrapper />
      <Footer />
    </StyledLandingPage>
  );
};