/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import techImg from "../../../images/blog/blog_tech_banner.png";
import lifeStyleImg from "../../../images/blog/blog_lifestyle_banner.png";

const BlogOptions: FC = () => {
  const [active, setActive] = useState<"tech" | "life">("tech");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === "tech" ? "life" : "tech"));
    }, 3000); // 3秒ごとに切り替え
    return () => clearInterval(interval);
  }, []);

  return (
    <div css={container}>
      <div css={wrapper}>
        <div css={slideshowWrapper}>
          <img
            src={techImg}
            css={[slideshowImg, active === "tech" ? activeImg : inactiveImg]}
            alt="tech"
          />
          <img
            src={lifeStyleImg}
            css={[slideshowImg, active === "life" ? activeImg : inactiveImg]}
            alt="life style"
          />
        </div>

        <div css={titleWrapper}>
          <h1 css={title}>BLOG.</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogOptions;

const container = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const wrapper = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const titleWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const title = css`
  font-size: 15vw;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const slideshowWrapper = css`
  position: relative;
  width: 30%;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    max-width: 100px;
  }
`;

const slideshowImg = css`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 200px;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 1;
  transition: 
    opacity 1s cubic-bezier(0.4, 0, 0.2, 1),
    transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.3))
         drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  animation: rotate3D_right 6.0s ease-in-out infinite;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    animation-play-state: paused;
    transform: translate(-50%, -50%) translateY(-8px) scale(1.02) rotateY(0deg);
    filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5))
           drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35))
           drop-shadow(0 0 100px rgba(255, 255, 255, 0.2));
  }

  @keyframes rotate3D_right {
    0% {
      transform: translate(-50%, -50%) perspective(500px) rotateY(-15deg) translateZ(-10px) scale(1.1);
    }
    50% {
      transform: translate(-50%, -50%) perspective(50px) rotateY(0deg) translateZ(0px) scale(1.1);
    }
    100% {
      transform: translate(-50%, -50%) perspective(500px) rotateY(-15deg) translateZ(-10px) scale(1.1);
    }
  }
`;

const activeImg = css`
  opacity: 1;
  z-index: 2;
  transform: translate(-50%, -50%) scale(1.1);
`;

const inactiveImg = css`
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
`;
