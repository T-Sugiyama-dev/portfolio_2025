/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css, keyframes } from "@emotion/react";
import spaceImg from "../../../images/contact/space.png";
import rocketImg from "../../../images/contact/rocket.png";
import sunImg from "../../../images/contact/sun.png";

const RocketImage: FC = memo(() => {
  return (
    <div css={imgWrapper}>
      <img src={rocketImg} alt="rocket img" css={rocketStyle} />
      <img src={sunImg} alt="sun img" css={sunStyle} />
      <img src={spaceImg} alt="space img" css={spaceStyle} />
    </div>
  );
});

export default RocketImage;

const imgWrapper = css`
  width: 300px;
  margin: 15px;
  position: relative;
`;

const spaceStyle = css`
  width: 100%;
  height: auto;
`;

const spaceAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  65% {
    transform: translate(-70px, -80px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const sunAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  30% {
    transform: translate(-40px, 55px);
  }
  55% {
    transform: translate(130px, 75px);
  }
  80% {
    transform: translate(-80px, 55px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const rocketStyle = css`
  position: absolute;
  z-index: 2;
  width: 40%;
  right: 5%;
  bottom: 0%;
  animation: ${spaceAnimation} 5s ease-in-out infinite;
`;

const sunStyle = css`
  width: 100px;
  z-index: 1;
  position: absolute;
  top: 5%;
  left: 5%;
  animation: ${sunAnimation} 5s ease-in-out infinite;
`;
