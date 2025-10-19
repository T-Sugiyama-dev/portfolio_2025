/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { CAREER_LIST, CareerItem, CheckPoint, CAREER_PERIOD, TurningPoint } from "../../../../constants/career-description";

const Career: FC = memo(() => {

  // 型ガードの関数を追加
  const isCheckPoint = (item: CareerItem): item is CheckPoint => {
    return 'title' in item;
  };

  const isTurningPoint = (item: CareerItem): item is TurningPoint => {
    return 'from' in item;
  };

  const checkpointColor = (period: string) => {
    let color = "";
    switch (period) {
      case CAREER_PERIOD.UNIVERSITY_STUDENT:
        color = "#1bb84a";
        break;
      case CAREER_PERIOD.ENGINEER:
        color = "#e66e2d";
        break;
      case CAREER_PERIOD.CONSULTANT:
        color = "#3c69f0";
        break;
      default:
        color = "#3c69f0";
    }
    const style = css`
      background-color: ${color};
    `;
    return style;
  };

  return (
    <div>
      {CAREER_LIST.map((item, index) => (
        <div key={index}>
          <motion.div
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                },
              },
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          >
            {isCheckPoint(item) ?
              (
                <div css={[checkPoint, checkpointColor(item.period)]}>
                  <p css={title}>{item.title}</p>
                  <p css={summary}>{item.summary}</p>
                </div>
              ) : (
                isTurningPoint(item) ?
                  (
                    <div css={turningPoint}>
                      <div css={[turningPointWrapper, checkpointColor(item.to)]}>
                        {item.to}
                      </div>

                      <div css={[turningPointWrapper, checkpointColor(item.from)]}>
                        {item.from}
                      </div>
                    </div>
                  ) :
                  <div css={content}>
                    <p css={term}>{item.term}</p>
                    <h4 css={role}>{item.role}</h4>
                    <p css={company}>{item.company}</p>
                    <p css={desc}>{item.desc}</p>
                  </div>
              )
            }
          </motion.div>
        </div>
      ))}
    </div>
  );
});

export default Career;

const checkPoint = css`
  border-radius: 15px;
  width: 40%;
  padding: 15px;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    width: 55%;
  }
`;

const turningPoint = css`
  border-radius: 15px;
  width: 60%;
  margin: 80px;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 70%;
    margin: 60px;
  }
`;

const turningPointWrapper = css`
  color: #ffffff;
  font-size: 17px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const title = css`
  font-size: 20px;
  margin: 0px;
  color: #ffffff;
  font-weight: bold;
`;

const summary = css`
  font-size: 15px;
  margin: 0px;
  color: #ffffff;
`;

const content = css`
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  margin-bottom: 100px;
  width: 80%;
  padding: 15px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const term = css`
  font-size: 15px;
  margin: 0px;
  color: #404040;
`;

const role = css`
  font-size: 20px;
  color: #4661f9;
  margin: 2px 0px;
`;

const company = css`
  font-size: 15px;
  margin: 2px 0px;
`;

const desc = css`
  font-size: 15px;
  margin: 2px 0px;
`;
