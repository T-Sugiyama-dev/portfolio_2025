/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { CAREER_LIST } from "../../../../constants/career-description";

const Career: FC = memo(() => {
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
            css={wrapper}
          >
            <div css={content}>
              <p css={term}>{item.term}</p>
              <h4 css={role}>{item.role}</h4>
              <p css={company}>{item.company}</p>
              <p css={desc}>{item.desc}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
});

export default Career;

const wrapper = css`
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  margin: 100px 0px;
  width: 80%;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const content = css`
  padding: 15px;
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
