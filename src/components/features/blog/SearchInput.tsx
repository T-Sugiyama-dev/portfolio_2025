/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from "@emotion/react";
import BlogOptions from "./BlogOptions";
import SearchInputAnnimation from "./SearchInputAnnimation";

const SearchInput: FC = () => {
  return (
    <div css={container}>
      <div css={wrapper}>
        <BlogOptions />
        <SearchInputAnnimation />
      </div>
    </div>
  );
};

export default SearchInput;

const container = css`
  width: 100vw;
  height: 100vh;
  max-width: 1980px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const wrapper = css`
  width: 100%;
`;
