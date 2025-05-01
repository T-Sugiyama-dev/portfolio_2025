/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css, keyframes } from "@emotion/react";
import { handleElHover, handleElLeave } from "../../cursor/Cursor";
import { useInView } from "react-intersection-observer";
import { SKILL_LIST } from "../../../../constants/skill-list";

const Skill: FC = memo(() => {
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  return (
    <div css={container}>
      <h2 css={category}>Skill</h2>
      <div css={skillContainer} ref={ref}>
        {SKILL_LIST.map((item, index) => (
          <div key={index} css={skillWrapper}>
            <div css={skillTitle}>
              <p onMouseEnter={handleElHover} onMouseLeave={handleElLeave}>
                {item.name}
              </p>
            </div>

            <div css={skillDetailContainer}>
              <div css={skillDetailWrapper}>
                <div css={skillDetail}>
                  <div css={getSkillPercent(item.percent, inView)} />
                </div>
              </div>

              <p css={percent}>
                <span css={coloredPercent}>{item.percent}</span>%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skill;

const container = css`
  width: 70%;
  margin: 30vh auto;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const category = css`
  color: #FFFFFF;
  position: relative;
  z-index: 2;
  font-size: 40px;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;


const progressMotion = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const skillContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

const skillWrapper = css`
  display: flex;
  justify-content: space-between;
  margin: 10px 15px;
  width: 370px;
`;

const skillTitle = css`
  color: #FFFFFF;
  width: 130px;
  p {
    color: #FFFFFF;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
  @media (max-width: 500px) {
    width: 70px;
  }
`;

const skillDetailContainer = css`
  display: flex;
  p {
    color: #FFFFFF;
    margin: 0px;
    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
`;

const skillDetailWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const skillDetail = css`
  height: 13px;
  width: 230px;
  background-color: aliceblue;
  border-radius: 15px;
  display: flex;
  margin-right: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  @media (max-width: 500px) {
    height: 12px;
    width: 170px;
  }
`;

const getSkillPercent = (percent: number, inView: boolean) => css`
  position: absolute;
  background-color: rgb(188 146 255);
  width: ${percent}%;
  height: 100%;
  opacity: 1;
  transform: translateX(-100%);
  animation: ${inView ? css`${progressMotion} 3s ease-in-out forwards` : 'none'};
`;

const percent = css`
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
`;

const coloredPercent = css`
  color: rgb(188 146 255);
`;