/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css, keyframes } from "@emotion/react";

const Main: FC = () => {
  return (
    <div css={container}>

      <div css={topContainer}>
        <div css={topWrapper}>

          <div css={titleContainer}>
            <h1 css={title}>
              i am.
            </h1>
          </div>

          <div css={roleContainer}>
            <div>
              <p css={text}>Software Engineer</p>
              <p css={text}>Designer</p>
              <p css={text}>Photographer</p>
              <p css={text}>Videographer</p>
              <br />
              <p css={text}>Interested? <br />Hit 'Explore' to see my profile.</p>
            </div>
          </div>

        </div>
      </div>

      <div css={buttonContainer}>
        <div css={bubbleContainer}>
          <div css={bubble}>
            <div css={bubbleWrapper}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

const container = css`
  width: 100vw;
  height: 100vh;
`;

const topContainer = css`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 50vh;
`;

const topWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const titleContainer = css`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 70%;
`;

const title = css`
  line-height: 85%;
  font-size: 22vw;
  margin: 0;
  color: #000000;
`;

const buttonContainer = css`
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100vw;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const bubbleContainer = css`
  width: 95%;
  height: 90%;
  background-color: #ffff27;
  overflow: hidden;
  border-radius: 15px;
`;

const transform_a = keyframes`
  0%, 100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
`;

const transform_b = keyframes`
  0% {
    border-radius: 42% 58% 60% 40% / 32% 54% 46% 68%
  }
  20% {
    border-radius: 59% 41% 36% 64% / 32% 64% 36% 68%
  }
  40% {
    border-radius: 48% 52% 52% 48% / 54% 53% 47% 46%
  }
  60% {
    border-radius: 42% 58% 51% 49% / 63% 64% 36% 37%
  }
  80% {
    border-radius: 32% 68% 33% 67% / 63% 35% 65% 37%
  }
  100% {
    border-radius: 34% 66% 52% 48% / 34% 53% 47% 66%
  }
`;

const float_bubble = keyframes`
  from {
    transform: rotate(-1turn) translateY(-50px);
  }
  to {
    transform: none;
  }
`;

const shade = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const bubble = css`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 35%;
    left: 35%;
    transform: translate(-50%, -50%);
    display: block;
    width: 35vw;
    height: 35vw;
    min-height: 200px;
    min-width: 200px;
    background: linear-gradient(270deg,
      #f4fd77,
      #50e466,
      #cf91ff,
      #8ec5fc,
      #4facfe,
      #00f2fe,
      #83eae5,
      #ff9dbc);
    background-size: 1600% 1600%;
    box-shadow: inset 0px -20px 100px 0px rgba(255, 255, 255, 0.48);
    animation: ${transform_a} 20s linear infinite alternate,
              ${float_bubble} 40s linear infinite alternate,
              ${shade} 60s linear infinite alternate;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 25vw;
    height: 20vw;
    min-height: 200px;
    min-width: 200px;
    background: linear-gradient(270deg,
      #24ebf5,
      #72b2f1,
      #38f9d7,
      #4facfe,
      #97fdf8,
      #3cee77,
      #bf86f4,
      #ff8284);
    background-size: 1600% 1600%;
    box-shadow: inset 0px -20px 100px 0px rgba(255, 255, 255, 0.48);
    animation: ${transform_b} 20s linear infinite alternate-reverse,
              ${float_bubble} 40s linear infinite alternate-reverse,
              ${shade} 60s linear infinite alternate-reverse;
  }
`;

const bubbleWrapper = css`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
`;

const roleContainer = css`
  position: absolute;
  bottom: 10%;
  right: 12%;
`;

const text = css`
  color: #000000;
  font-size: 20px;
  margin: 7px;

  @media (max-width: 500px) {
    font-size: 17px;
    margin: 6px;
  }
`;