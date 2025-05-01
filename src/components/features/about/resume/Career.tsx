/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { CAREER_LIST, CareerItem, CheckPoint } from "../../../../constants/career-description";

const Career: FC = memo(() => {

  // 型ガードの関数を追加
  const isCheckPoint = (item: CareerItem): item is CheckPoint => {
    return 'title' in item;
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
                <div css={checkPoint}>
                  <p css={title}>{item.title}</p>
                  <p css={summary}>{item.summary}</p>
                </div>
              ) : (
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
  background-color: rgb(67 75 247);
  border-radius: 15px;
  width: 40%;
  padding: 15px;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    width: 55%;
  }
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
