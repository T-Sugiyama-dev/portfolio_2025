/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from "@emotion/react";
import Transition from "../../features/transition/Transition";
import Resume from "../../features/about/resume/Resume";
import Skill from "../../features/about/skill/Skill";
import Footer from "../../features/footer/Footer";
import Profile from "../../features/about/profile/Profile";
import Profession from "../../features/about/profession/Profession";

const About: FC = () => {
  return (
    <div css={container}>
      <Transition className="transition_about" text="Who I am" />
      <Profile />
      <Profession />
      <Resume />
      <Skill />
      <Footer className="relative" />
    </div>
  );
};

export default About;

const container = css`
  width: 100vw;
  overflow-x: hidden;
  background-color: #b3f025;
`;
