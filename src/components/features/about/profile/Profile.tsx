/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { handleElHover, handleElLeave } from "../../cursor/Cursor";
import { css, keyframes } from "@emotion/react";

const Profile: FC = memo(() => {
  return (
    <div css={wrapperStyles}>
      <div>
        <h1
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          css={titleStyles}
        >
          Takumasa Sugiyama
        </h1>

        <p
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          css={tagStyles}
        >
          #Software engineer #Designer #Photographer #Videographer
        </p>

        <div css={scrollWrapperStyles}>
          <p
            onMouseEnter={handleElHover}
            onMouseLeave={handleElLeave}
            css={scrollTextStyles}
          >
            Scroll
          </p>
          <span css={scrollIndicatorStyles}></span>
        </div>

        <div>
          <div
            onMouseEnter={handleElHover}
            onMouseLeave={handleElLeave}
            css={circle1Styles}
          ></div>
          <div
            onMouseEnter={handleElHover}
            onMouseLeave={handleElLeave}
            css={circle2Styles}
          ></div>
        </div>
      </div>
    </div>
  );
});

export default Profile;

const scrollDown = keyframes`
  0% { background-position: 0 100%; }
  50% { background-position: 0 0; }
  100% { background-position: 0 -100%; }
`;

const floatX1 = keyframes`
  0% { margin-left: 80vw; }
  100% { margin-left: 0px; }
`;

const floatY1 = keyframes`
  0% { margin-top: 0px; }
  100% { margin-top: 70vh; }
`;

const floatX2 = keyframes`
  0% { margin-right: 80vw; }
  100% { margin-right: 0px; }
`;

const floatY2 = keyframes`
  0% { margin-bottom: 0px; }
  100% { margin-bottom: 70vh; }
`;

const wrapperStyles = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const titleStyles = css`
  color: #FFFFFF;
  position: relative;
  z-index: 2;
  
  font-size: 50px;
  margin: 5px;
  @media (max-width: 500px) {
    font-size: 30px;
  }

  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const tagStyles = css`
  color: #FFFFFF;
  position: relative;
  z-index: 2;
  
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 14px;
  }

  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
`;

const scrollWrapperStyles = css`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  z-index: 2;
`;

const scrollTextStyles = css`
  color: #FFFFFF;
  margin-top: 20px;
`;

const scrollIndicatorStyles = css`
  margin: 1px auto;
  display: block;
  width: 3px;
  border-radius: 5px;
  height: 50px;
  background-image: linear-gradient(-180deg,
    transparent,
    rgb(255, 255, 255) 50%,
    transparent 50%,
    transparent);
  background-repeat: no-repeat;
  background-size: 100% 200%;
  animation: ${scrollDown} 2s cubic-bezier(0.22, 1, 0.36, 1) 0.7s infinite backwards;
`;

const baseCircleStyles = css`
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  opacity: 0.8;
  transition: 0.5s ease-in-out;
  &:hover {
    border-radius: 20px;
    scale: 0.7;
  }
`;

const circle1Styles = css`
  ${baseCircleStyles}
  background: #13e5fcce;
  left: 20px;
  top: 0;
  width: 1300px;
  height: 1300px;
  animation: ${floatX1} 20s ease-in-out infinite alternate,
            ${floatY1} 34s ease-in-out infinite alternate;

  @media (max-width: 500px) {
    width: 500px;
    height: 500px;
  }
`;

const circle2Styles = css`
  ${baseCircleStyles}
  background: #fc13aace;
  right: 20px;
  bottom: 0;
  width: 900px;
  height: 900px;
  animation: ${floatX2} 20s ease-in-out infinite alternate,
            ${floatY2} 34s ease-in-out infinite alternate;

  @media (max-width: 500px) {
    width: 350px;
    height: 350px;
  }
`;