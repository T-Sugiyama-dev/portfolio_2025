/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css, keyframes } from "@emotion/react";
import github from "../../../images/contact/github.png";
import linkedin from "../../../images/contact/linkedin.png";
import RocketImage from "./Rocket";

const LeadSocialMedia: FC = memo(() => {
  return (
    <div css={container}>
      <div css={wrapper}>
        <h2 css={title}>Follow me</h2>

        <div css={logoWrapper}>
          <a
            href="https://www.linkedin.com/in/takumasa-sugiyama-9420aa238"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div css={logoContainer}>
              <img src={linkedin} alt="linkedin" />
            </div>
          </a>

          <a
            href="https://github.com/T-Sugiyama-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div css={logoContainer}>
              <img src={github} alt="github" />
            </div>
          </a>
        </div>

        <RocketImage />
      </div>
    </div>
  );
});

export default LeadSocialMedia;

const blink = keyframes`
  20%, 24%, 55% {
    color: #111;
    text-shadow: none;
  }

  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
`;

const container = css`
  width: 100vw;
  height: 100vh;
  background-color: #2d253d;
  display: flex;
  justify-content: center;
  align-items: center;
`
const wrapper = css`
  text-align: center;
`;

const title = css`
  font-size: 35px;
  text-shadow: 0 0 5px #ffa807, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #f9f0a6;
  text-align: center;
  animation: ${blink} 5s infinite;
`;

const logoWrapper = css`
  display: flex;
  justify-content: center;
  margin: 70px 0px;
`;

const logoContainer = css`
  height: 100px;
  margin: 0px 25px;
  
  img {
    height: 100%;
  }

  @media (max-width: 500px) {
    height: 60px;
    margin: 0px 15px;
  }
`;