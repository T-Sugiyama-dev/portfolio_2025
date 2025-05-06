/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from "@emotion/react";
import Transition from "../../ui/transition/Transition";
import Footer from "../../ui/footer/Footer";
import SearchInput from "../../features/blog/SearchInput";

const Blog: FC = () => {
  return (
    <div css={container}>
      <Transition className="transition_blog" text="Blog" />
      <SearchInput />
      <Footer className="absolute" />
    </div>
  )
}

export default Blog;

const container = css`
  width: 100vw;
  overflow-x: hidden;
  background-color: #e3e8ef;
`;
