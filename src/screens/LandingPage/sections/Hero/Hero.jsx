import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 76px;
  justify-content: center;
  padding: 80px 0px 120px;
  position: relative;
  width: 100%;
`;

const Frame25 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  position: relative;
`;

const Group27 = styled.div`
  height: 202px;
  margin-right: -4px;
  position: relative;
  width: 697px;
`;

const OverlapGroup12 = styled.div`
  height: 186px;
  left: 7px;
  position: relative;
  top: 16px;
  width: 681px;
`;

const ItsTimeToTrade = styled.img`
  height: 173px;
  left: 0;
  position: absolute;
  top: 0;
  width: 681px;
`;

const TextWrapper21 = styled.div`
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgba(212, 249, 56, 0.7) 0%, rgba(213, 250, 57, 0.7) 100%);

  background-clip: text;
  color: transparent;
  filter: blur(16.76px);
  font-family: "Neurial Grotesk-Bold", Helvetica;
  font-size: 96px;
  font-weight: 700;
  height: 100px;
  left: 280px;
  letter-spacing: -4.19px;
  line-height: 100px;
  position: absolute;
  text-align: center;
  text-fill-color: transparent;
  top: 86px;
  white-space: nowrap;
`;

const TradeBTCEth = styled.p`
  color: var(--matrix-colours-neutrals-grey-4);
  font-family: "Neurial Grotesk-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: fit-content;
`;

const Group28 = styled.div`
  height: 668.7px;
  position: relative;
  width: 779.59px;
`;

const Overlap11 = styled.div`
  height: 669px;
  position: relative;
  width: 780px;
`;

const IphoneProSpace9 = styled.div`
  background-image: url(../../../../../static/img/shadow-5.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 530px;
  left: 0;
  position: absolute;
  top: 74px;
  width: 261px;
`;

const ImgWrapper = styled.div`
  background-image: url(../../../../../static/img/main-5.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 530px;
  position: relative;
`;

const IphoneProSpace10 = styled.img`
  height: 508px;
  left: 12px;
  object-fit: cover;
  position: absolute;
  top: 10px;
  width: 235px;
`;

const IphoneProSpace11 = styled.div`
  background-image: url(../../../../../static/img/shadow-4.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 528px;
  left: 519px;
  position: absolute;
  top: 75px;
  width: 260px;
`;

const Overlap12 = styled.div`
  background-image: url(../../../../../static/img/main-4.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 528px;
  position: relative;
`;

const IphoneProSpace12 = styled.img`
  height: 506px;
  left: 12px;
  object-fit: cover;
  position: absolute;
  top: 10px;
  width: 235px;
`;

const IphoneProSpace13 = styled.div`
  background-image: url(../../../../../static/img/shadow-3.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 669px;
  left: 226px;
  position: absolute;
  top: 0;
  width: 330px;
`;

const Overlap13 = styled.div`
  background-image: url(../../../../../static/img/main-3.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 669px;
  position: relative;
`;

const IphoneProSpace14 = styled.img`
  height: 641px;
  left: 16px;
  object-fit: cover;
  position: absolute;
  top: 13px;
  width: 297px;
`;

export const Hero = () => {
  return (
    <StyledHero>
      <Frame25>
        <Group27>
          <OverlapGroup12>
            <ItsTimeToTrade alt="Its time to trade" src="/img/it-s-time-to-trade-the-future.png" />
            <TextWrapper21>future.</TextWrapper21>
          </OverlapGroup12>
        </Group27>
        <TradeBTCEth>Trade Btc, Eth Futures With 125x Leverage And Earn Rewards.</TradeBTCEth>
      </Frame25>
      <Group28>
        <Overlap11>
          <IphoneProSpace9>
            <ImgWrapper>
              <IphoneProSpace10 alt="Iphone pro space" src="/img/iphone-14-pro-space-black-mockup-label-7.png" />
            </ImgWrapper>
          </IphoneProSpace9>
          <IphoneProSpace11>
            <Overlap12>
              <IphoneProSpace12 alt="Iphone pro space" src="/img/iphone-14-pro-space-black-mockup-label-6.png" />
            </Overlap12>
          </IphoneProSpace11>
          <IphoneProSpace13>
            <Overlap13>
              <IphoneProSpace14 alt="Iphone pro space" src="/img/iphone-14-pro-space-black-mockup-label-5.png" />
            </Overlap13>
          </IphoneProSpace13>
        </Overlap11>
      </Group28>
    </StyledHero>
  );
};