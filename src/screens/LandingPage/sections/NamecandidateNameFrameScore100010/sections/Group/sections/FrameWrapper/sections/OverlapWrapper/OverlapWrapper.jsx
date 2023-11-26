import React from "react";
import styled from "styled-components";

const OverlapWrapperStyled = styled.div`
  height: 420px;
  overflow: hidden;
  position: relative;
  width: 400px;
`;

const Overlap2 = styled.div`
  height: 319px;
  left: -287px;
  position: relative;
  top: 64px;
  width: 687px;
`;

const Group3 = styled.div`
  height: 311px;
  left: 0;
  position: absolute;
  top: 0;
  width: 687px;
`;

const Overlap3 = styled.div`
  height: 311px;
  left: 287px;
  position: absolute;
  top: 0;
  width: 400px;
`;

const Img = styled.img`
  height: 306px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 376px;
`;

const Frame = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 6px;
  position: absolute;
`;

const Group4 = styled.div`
  height: 18px;
  position: relative;
  width: 18px;
`;

const OverlapGroup3 = styled.div`
  border-radius: 10px;
  height: 20px;
  left: -1px;
  position: relative;
  top: -1px;
  width: 20px;
`;

const Ellipse = styled.div`
  border-radius: 3px;
  height: 6px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 6px;
`;

const Ellipse5 = styled(Ellipse)`
  background-color: #57f289;
`;

const Ellipse6 = styled(Ellipse)`
  background: radial-gradient(50% 50% at 50% 50%, rgba(226, 255, 111, 0.4) 0%, rgba(226, 255, 111, 0) 100%);
  border: 1px solid;
  border-color: #57f289;
  border-radius: 10px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
`;

const Ellipse7 = styled(Ellipse)`
  background-color: #ff6554;
`;

const Ellipse8 = styled(Ellipse)`
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 101, 84, 0.4) 0%, rgba(255, 101, 84, 0) 100%);
  border: 1px solid;
  border-color: #ff6554;
  border-radius: 10px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
`;

const TextWrapper = styled.div`
  color: ${props => props.color};
  font-family: "Neurial Grotesk-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
`;

const Nifty = styled.div`
  color: #ffffff;
  font-family: "Neurial Grotesk-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 589px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 290px;
`;

export const OverlapWrapper = () => {
  return (
    <OverlapWrapperStyled>
      <Overlap2>
        <Group3>
          <Overlap3>
            <Img alt="Vector" src="/img/vector-1177.png" />
            <Frame style={{ left: '351px', top: '65px' }}>
              <Group4>
                <OverlapGroup3>
                  <Ellipse5 />
                  <Ellipse6 />
                </OverlapGroup3>
              </Group4>
              <TextWrapper color="#57f289">Buy</TextWrapper>
            </Frame>
            <Frame style={{ left: '267px', top: '0' }}>
              <Group4>
                <OverlapGroup3>
                  <Ellipse7 />
                  <Ellipse8 />
                </OverlapGroup3>
              </Group4>
              <TextWrapper color="#ff6554">Sell</TextWrapper>
            </Frame>
            <Frame style={{ left: '54px', top: '291px' }}>
              <Group4>
                <OverlapGroup3>
                  <Ellipse5 />
                  <Ellipse6 />
                </OverlapGroup3>
              </Group4>
              <TextWrapper color="#57f289">Buy</TextWrapper>
            </Frame>
          </Overlap3>
          <Frame style={{ left: '110px', top: '104px' }}>
            <Group4>
              <OverlapGroup3>
                <Ellipse7 />
                <Ellipse8 />
              </OverlapGroup3>
            </Group4>
            <TextWrapper color="#ff6554">Sell</TextWrapper>
          </Frame>
          <Frame style={{ left: '17px', top: '282px' }}>
            <Group4>
              <OverlapGroup3>
                <Ellipse5 />
                <Ellipse6 />
              </OverlapGroup3>
            </Group4>
            <TextWrapper color="#57f289">Buy</TextWrapper>
          </Frame>
        </Group3>
        <Nifty>NIFTY</Nifty>
      </Overlap2>
    </OverlapWrapperStyled>
  );
};