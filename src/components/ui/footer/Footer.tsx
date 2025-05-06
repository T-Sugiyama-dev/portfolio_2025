/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css } from "@emotion/react";

interface FooterProp {
  className: string;
}

const Footer: FC<FooterProp> = memo(({ className }) => {
  return (
    <footer css={[footerBase, className === 'absolute' ? footerAbsolute : footerRelative]}>
      <div css={copyright}>
        <small>&copy; 2025 Takumasa Sugiyama</small>
      </div>
    </footer>
  );
});

export default Footer;

const footerBase = css``;

const footerAbsolute = css`
  position: absolute;
  bottom: 0;
`;

const footerRelative = css`
  position: relative;
`;

const copyright = css`
  width: 100vw;
  text-align: center;
  color: #ffffff;
`;

