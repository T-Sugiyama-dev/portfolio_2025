/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const PageNotFound: React.FC = () => {
  return (
    <div css={errorContainer}>
      <div css={errorWrapper}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;

const errorContainer = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const errorWrapper = css`
  text-align: center;
  
  h1 {
    color: #bbff61;
    font-size: 75px;
    margin: 3px 0px;
  }
  
  h2 {
    color: #FFFFFF;
    font-size: 25px;
    margin: 3px 0px;
  }
`;
