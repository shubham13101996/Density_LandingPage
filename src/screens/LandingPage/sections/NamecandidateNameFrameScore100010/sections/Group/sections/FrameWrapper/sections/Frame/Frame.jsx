import React from "react";
import styled from "styled-components";

const StyledFrame = styled.div`
  flex: 1;
  flex-grow: 1;
  height: 420px;
  overflow: hidden;
  position: relative;

  .overlap {
    height: 422px;
    position: relative;
    width: 684px;
  }

  .overlap-group-wrapper {
    height: 422px;
    left: 0;
    position: absolute;
    top: 0;
    width: 684px;
  }

  .overlap-group {
    height: 420px;
    position: relative;
    width: 566px;
  }

  .vector {
    height: 412px;
    left: 0;
    position: absolute;
    top: 8px;
    width: 566px;
  }

  .div-2,
  .div-3,
  .div-4,
  .div-5,
  .div-6 {
    align-items: flex-start;
    display: inline-flex;
    gap: 6px;
    position: absolute;
  }

  .div-2 {
    left: 101px;
    top: 207px;
  }

  .div-3 {
    left: 264px;
    top: 32px;
  }

  .div-4 {
    left: 506px;
    top: 0;
  }

  .div-5 {
    left: 152px;
    top: 384px;
  }

  .div-6 {
    left: 425px;
    top: 194px;
  }

  .group-2 {
    height: 18px;
    position: relative;
    width: 18px;
  }

  .overlap-group-2 {
    border-radius: 10px;
    height: 20px;
    left: -1px;
    position: relative;
    top: -1px;
    width: 20px;
  }

  .ellipse,
  .ellipse-3 {
    border-radius: 3px;
    height: 6px;
    left: 7px;
    position: absolute;
    top: 7px;
    width: 6px;
  }

  .ellipse {
    background-color: #ff6554;
  }

  .ellipse-2,
  .ellipse-4 {
    background: radial-gradient(50% 50% at 50% 50%, rgba(255, 101, 84, 0.4) 0%, rgba(255, 101, 84, 0) 100%);
    border: 1px solid;
    border-radius: 10px;
    height: 20px;
    left: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  .ellipse-2 {
    border-color: #ff6554;
  }

  .ellipse-3 {
    background-color: #57f289;
  }

  .ellipse-4 {
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 255, 111, 0.4) 0%, rgba(226, 255, 111, 0) 100%);
    border-color: #57f289;
  }

  .text-wrapper,
  .text-wrapper-2,
  .text-wrapper-3 {
    font-family: "Neurial Grotesk-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  .text-wrapper {
    color: #ff6554;
  }

  .text-wrapper-2 {
    color: #57f289;
  }

  .text-wrapper-3 {
    color: #ffffff;
    font-size: 24px;
    left: 28px;
    top: 23px;
  }
`;

export const Frame = () => {
  return (
    <StyledFrame className="frame">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="/img/vector-1176.png" />
            <div className="div-2">
              <div className="group-2">
                <div className="overlap-group-2">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                </div>
              </div>
              <div className="text-wrapper">Sell</div>
            </div>
            <div className="div-3">
              <div className="group-2">
                <div className="overlap-group-2">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                </div>
              </div>
              <div className="text-wrapper">Sell</div>
            </div>
            <div className="div-4">
              <div className="group-2">
                <div className="overlap-group-2">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                </div>
              </div>
              <div className="text-wrapper">Sell</div>
            </div>
            <div className="div-5">
              <div className="group-2">
                <div className="overlap-group-2">
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                </div>
              </div>
              <div className="text-wrapper-2">Buy</div>
            </div>
            <div className="div-6">
              <div className="group-2">
                <div className="overlap-group-2">
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                </div>
              </div>
              <div className="text-wrapper-2">Buy</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-3">BTCUSDT</div>
      </div>
    </StyledFrame>
  );
};