/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState, useEffect, useRef } from "react";
import { handleElHover, handleElLeave } from "../../ui/cursor/Cursor";
import heritage from "../../../images/work/heritage.jpg";
import london_city_1 from "../../../images/work/london_city_1.jpg";
import london_city_2 from "../../../images/work/london_city_2.jpg";
import sunset from "../../../images/work/sunset.jpg";
import valletta from "../../../images/work/valletta.jpg";
import tokyo_view from "../../../images/work/tokyo_view.jpg";
import rclothes from "../../../images/work/rclothes.png";
import sharebuy from "../../../images/work/sharebuy.png";
import portfolio_2021 from "../../../images/work/portfolio_2021.png";
import popeye from "../../../images/header/popeye.png";
import portfolio_movie from "../../../video/portfolio_movie.mp4";

const Works: FC = () => {
  const [activeWork, setActiveWork] = useState<string | null>(null);

  // workインデックスカウント
  const [count, setCount] = useState<number>(0);

  // ビデオref
  const videoRef = useRef<HTMLVideoElement>(null);

  // ビデオミュート再生
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoRef.current]);

  // workクラス名
  const colList: string[] = [
    "work_1",
    "work_2",
    "work_3",
    "work_4",
    "work_5",
    "work_6",
    "work_7",
    "work_8",
    "work_9",
    "work_10",
  ];

  // work表示
  const openWork = (col: string) => {
    setActiveWork(col);
  };

  // work非表示
  const closeWork = () => {
    setActiveWork(null);
  };

  // playボタンクリック時
  const playWork = () => {
    const nextWork = colList[count];
    setActiveWork(nextWork);

    if (count >= colList.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div css={workWrapper}>
        <div css={[work, work1, leftAnnimation, activeWork === "work_1" ? workVisible : workHidden]}>
          <img src={london_city_1} alt="work photo" css={imgStyle} />
        </div>

        <div css={[work, work2, leftAnnimation, activeWork === "work_2" ? workVisible : workHidden]}>
          <img src={heritage} alt="work photo" css={imgStyle} />
        </div>

        <div css={[work, work3, leftAnnimation, activeWork === "work_3" ? workVisible : workHidden]}>
          <img src={sharebuy} alt="work webapp" css={imgStyle} />
        </div>

        <div css={[work, work4, leftAnnimation, activeWork === "work_4" ? workVisible : workHidden]}>
          <img src={sunset} alt="work photo" css={imgStyle} />
        </div>

        <div css={[work, work5, leftAnnimation, activeWork === "work_5" ? workVisible : workHidden]}>
          <div css={videoWrapper}>
            <video
              ref={videoRef}
              preload="auto"
              poster={popeye}
              autoPlay
              loop
              muted
              playsInline
              css={video}
            >
              <source src={portfolio_movie} type="video/mp4" />
              <p css={errorVideo}>
                Your browser doesn't support HTML5 video.
              </p>
            </video>
          </div>
        </div>

        <div css={[work, work6, rightAnnimation, activeWork === "work_6" ? workVisible : workHidden]}>
          <img src={london_city_2} alt="work photo" css={imgStyle} />
        </div>

        <div css={[work, work7, rightAnnimation, activeWork === "work_7" ? workVisible : workHidden]}>
          <img src={portfolio_2021} alt="work website" css={imgStyle} />
        </div>

        <div css={[work, work8, rightAnnimation, activeWork === "work_8" ? workVisible : workHidden]}>
          <img src={valletta} alt="work photo" css={imgStyle} />
        </div>

        <div css={[work, work9, rightAnnimation, activeWork === "work_9" ? workVisible : workHidden]}>
          <img src={rclothes} alt="work webapp" css={imgStyle} />
        </div>

        <div css={[work, work10, rightAnnimation, activeWork === "work_10" ? workVisible : workHidden]}>
          <img src={tokyo_view} alt="work photo" css={imgStyle} />
        </div>
      </div>

      <div css={colWrapper}>
        <div
          onMouseEnter={() => openWork("work_1")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_2")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_3")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_4")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_5")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_6")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_7")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_8")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_9")}
          onMouseLeave={closeWork}
          css={col}
        ></div>

        <div
          onMouseEnter={() => openWork("work_10")}
          onMouseLeave={closeWork}
          css={col}
        ></div>
      </div>

      <div css={workTitleWrapper}>
        <h1
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          css={workTitle}
        >
          Work.
        </h1>
        <p
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          css={workText}
        >
          Move cursor
        </p>
      </div>

      <div onClick={playWork} css={workPlayBtn}>
        <div>
          <p css={workBtnText}>Tap to</p>
          <p css={workBtnTitle}>
            <b>Play</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;

const workWrapper = css`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const workTitleWrapper = css`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const workTitle = css`
  color: #FFFFFF;
  margin: 0px;
  font-size: 15vw;
  text-shadow:
    0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 10px 15px rgba(0,0,0,.2),
    0 15px 25px rgba(0,0,0,.15),
    0 20px 35px rgba(0,0,0,.1),
    0 30px 60px rgba(0,0,0,.1),
    0 40px 80px rgba(0,0,0,.05);
`;

const workText = css`
  color: #FFFFFF;

  @media (max-width: 1030px) {
    display: none; 
  }
`;

const work = css`
  z-index: 2;
`;

const rightAnnimation = css`
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.3))
         drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  animation: rotate3D_right 1.8s ease-in-out infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &:hover {
    animation-play-state: paused;
    transform: translateY(-8px) scale(1.02) rotateY(0deg);
    filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5))
           drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35))
           drop-shadow(0 0 100px rgba(255, 255, 255, 0.2));
  }

  @keyframes rotate3D_right {
    0% {
      transform: perspective(500px) rotateY(-15deg) translateZ(-10px);
    }
    50% {
      transform: perspective(50px) rotateY(0deg) translateZ(0px);
    }
    100% {
      transform: perspective(500px) rotateY(-15deg) translateZ(-10px);
    }
  }
`;

const leftAnnimation = css`
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.3))
         drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  animation: rotate3D_left 1.8s ease-in-out infinite;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    animation-play-state: paused;
    transform: translateY(-8px) scale(1.02) rotateY(0deg);
    filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5))
           drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35))
           drop-shadow(0 0 100px rgba(255, 255, 255, 0.2));
  }

  @keyframes rotate3D_left {
    0% {
      transform: perspective(500px) rotateY(15deg) translateZ(-10px);
    }
    50% {
      transform: perspective(50px) rotateY(0deg) translateZ(0px);
    }
    100% {
      transform: perspective(500px) rotateY(15deg) translateZ(-10px);
    }
  }
`;

const colWrapper = css`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
`;

const col = css`
  width: 10%;
  height: 100%;

  /* これいる？ */
  &:hover .work {
    display: block!important;
  }
`;

const imgStyle = css`
  width: 100%
`;

const work1 = css`
  position: absolute;
  top: 24%;
  left: 21%;
  width: 45%;
  max-width: 600px;

  @media (min-width: 1030px) {
    width: 70%;
  }
`;

const work2 = css`
  position: absolute;
  top: 24%;
  left: 21%;
  width: 45%;
  max-width: 300px;

  @media (min-width: 1030px) {
    width: 55%;
  }
`;

const work3 = css`
  position: absolute;
  top: 13%;
  right: 35%;
  width: 50%;
  max-width: 600px;

  @media (min-width: 1030px) {
    width: 80%;
  }
`;

const work4 = css`
  position: absolute;
  bottom: 32%;
  left: 40%;
  width: 25%;
  max-width: 250px;

  @media (min-width: 1030px) {
    width: 50%;
  }
`;

const work5 = css`
  width: 100vw;
  height: 100vh;
  position: relative;

  @media (min-width: 1030px) {
    width: 100%;
  }
`;

const videoWrapper = css`
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const video = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 700px;
`;

const work6 = css`
  position: absolute;
  top: 12%;
  right: 9%;
  width: 45%;
  max-width: 500px;

  @media (min-width: 1030px) {
    width: 75%;
  }
`;

const work7 = css`
  position: absolute;
  bottom: 22%;
  left: 11%;
  width: 50%;
  max-width: 600px;

  @media (min-width: 1030px) {
    width: 80%;
  }
`;

const work8 = css`
  position: absolute;
  top: 33%;
  left: 33%;
  width: 20%;
  max-width: 200px;

  @media (min-width: 1030px) {
    width: 55%;
  }
`;

const work9 = css`
  position: absolute;
  bottom: 15%;
  left: 45%;
  width: 45%;
  max-width: 450px;

  @media (min-width: 1030px) {
    width: 80%;
  }
`;

const work10 = css`
  position: absolute;
  top: 35%;
  right: 30%;
  max-width: 350px;

  @media (min-width: 1030px) {
    width: 80%;
  }
`;

const workPlayBtn = css`
  position: fixed;
  bottom: 3%;
  right: 3%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a4ff8a;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 3;

  @media (min-width: 1031px) {
    display: none; 
  }
`;

const workBtnText = css`
  margin: 0px 0px;
  font-size: 12px;
  color: #2d2d2d;
`;

const workBtnTitle = css`
  margin: 2px 0px;
  font-size: 22px;
  color: #2d2d2d;
`;

const errorVideo = css`
  color: #FFFFFF;
`;

const workVisible = css`
  display: block;
`;

const workHidden = css`
  display: none;
`;



















