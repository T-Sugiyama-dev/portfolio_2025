/** @jsxImportSource @emotion/react */
import { FC, memo } from "react";
import { css, keyframes } from "@emotion/react";
import { handleElHover, handleElLeave } from "../../cursor/Cursor";
import car_body from "../../../../images/car/car_body.png";
import tire from "../../../../images/car/tire.png";

const Profession: FC = memo(() => {
  return (
    <div css={container}>
      <div css={wrapper}>
        <div>
          <h2
            onMouseEnter={handleElHover}
            onMouseLeave={handleElLeave}
            css={category}
          >
            Creative Development
          </h2>

          <p
            onMouseEnter={handleElHover}
            onMouseLeave={handleElLeave}
            css={text}
          >
            I make apps, websites, epic photos and videos. I do everything from
            design creation to development. With a passion for both creative design
            and technical implementation, I bring ideas to life through clean code
            and stunning visuals. My expertise spans across UI/UX design,
            responsive web development, and multimedia content creation. Whether
            it's crafting intuitive user interfaces, developing robust web
            applications, or producing captivating visual content, I approach each
            project with dedication and attention to detail. I believe in creating
            digital experiences that not only look beautiful but also provide real
            value to users.
          </p>
        </div>

        <div css={carContainer}>
          <div css={carBody}>
            <img
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              src={car_body}
              alt="car body"
            />
          </div>

          <div css={tireFront}>
            <img
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              src={tire}
              alt="car tire"
            />
          </div>

          <div css={tireRear}>
            <img
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              src={tire}
              alt="car tire"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Profession;

const moveX = keyframes`
  0% {
    margin-left: 100%;
  }
  45% {
    margin-left: 30%;
  }
  75% {
    margin-left: 40%;
  }
  100% {
    margin-left: -100%;
  }
`;

const moveY = keyframes`
  0% {
    margin-bottom: 0px;
  }
  100% {
    margin-bottom: 6px;
  }
`;

const rotateAnime = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const container = css`
  width: 70%;
  margin: 20vh auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const wrapper = css`
  width: 100%;
`;

const category = css`
  color: #FFFFFF;
  position: relative;
  z-index: 2;
  font-size: 40px;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const text = css`
  color: #FFFFFF;
  position: relative;
  z-index: 2;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
`;

const carContainer = css`
  position: relative;
  height: 200px;
  animation: ${moveX} 8s ease-in-out infinite;
  
  @media (min-width: 1300px) {
    animation: ${moveX} 12s ease-in-out infinite;
  }
`;

const carBody = css`
  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 10px;
  animation: ${moveY} 0.5s ease-in-out infinite alternate;
  
  img {
    width: 300px;
  }
`;

const tireFront = css`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 35px;
  
  img {
    width: 50px;
    animation: ${rotateAnime} 0.4s linear infinite;
  }
`;

const tireRear = css`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 225px;
  
  img {
    width: 50px;
    animation: ${rotateAnime} 0.5s linear infinite;
  }
`;