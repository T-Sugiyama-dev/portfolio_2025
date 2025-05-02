/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from "@emotion/react";
import Transition from "../../ui/transition/Transition";
import Footer from "../../ui/footer/Footer";
import Works from "../../features/work/Works";

const Work: FC = () => {
  return (
    <div css={container}>
      <Transition className="transition_work" text="What I've done" />
      <Works />
      <Footer className="absolute" />
    </div>
  );
};

export default Work;

const container = css`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #c2b7ff;
`;
