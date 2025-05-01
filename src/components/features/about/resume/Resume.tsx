/** @jsxImportSource @emotion/react */
import { FC, memo, useRef } from "react";
import { css } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import Career from "./Career";

const Resume: FC = memo(() => {
  const [ref, inView]: any = useInView({
    rootMargin: "-100px 0px", // 100px手前でトリガーする
  });

  const lineRef = useRef<HTMLDivElement>(null);

  const lineStyle: React.CSSProperties = {
    width: "2px",
    borderRadius: "5px",
    background: "white",
    position: "absolute",
    top: "0",
    bottom: "0",
    transition: "height 4s",
  };

  if (lineRef.current) {
    // inViewがtrueのときに高さを変更して線を伸ばす
    lineStyle.height = inView ? `${lineRef.current.clientHeight}px` : "0";
  }
  return (
    <div css={container}>
      <h2 css={category}>Resume</h2>
      <div ref={ref}>
        <div ref={lineRef} css={timelineWrapper}>
          <div css={timeline}>
            <div style={lineStyle}></div>
          </div>
          <Career />
        </div>
      </div>
    </div>
  );
});

export default Resume;

const container = css`
  width: 70%;
  margin: 30vh auto;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const category = css`
  color: #FFFFFF;
  position: relative;
  z-index: 2;
  font-size: 40px;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const timelineWrapper = css`
  display: flex;
  justify-content: center;
`;

const timeline = css`
  position: relative;
  height: 100vh;
  margin-right: 10px;
`;
