/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from "@emotion/react";
import Main from "../../features/top/Main";
import Chat from "../../features/top/Chat";
import Transition from "../../ui/transition/Transition";
import Footer from "../../ui/footer/Footer";

const Top: FC = () => {
  return (
    <div css={container}>
      <Transition className="transition_top" text="Just a second..." />
      <Main />
      <Chat />
      <Footer className="absolute" />
    </div>
  );
};

export default Top;

const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #94e900;
`;
