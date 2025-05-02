/** @jsxImportSource @emotion/react */
import { FC, memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";

interface TransitionProp {
  className: string;
  text: string;
}

const Transition: FC<TransitionProp> = memo(({ className, text }) => {
  const [transition, setTransition] = useState<boolean>(true);
  const initialDelay: number = 1.2;
  const transitionDelay: number = 0.15;

  const transitionAnimationProps = {
    initial: {
      y: "0vh",
    },
    animate: {
      y: "-115vh",
      transition: {
        delay: initialDelay,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const timeoutId = setTimeout(() => {
      setTransition(false);
      document.body.style.overflowY = "";
    }, 2700);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {transition ? (
        <div css={[styles.transition, styles.fadeText]}>
          <div css={styles.title}>
            <h2
              css={[
                styles.titleText,
                styles.colors[className.replace('transition_', '') as keyof typeof styles.colors]
              ]}
            >
              {text}
            </h2>
          </div>

          <div css={styles.container}>
            <motion.div {...transitionAnimationProps}>
              <div css={styles.wrapper}>
                <div css={styles.bottomColor}></div>
              </div>
            </motion.div>

            <motion.div
              {...transitionAnimationProps}
              animate={{
                ...transitionAnimationProps.animate,
                transition: {
                  delay: initialDelay + transitionDelay * 1,
                  ease: "easeInOut",
                  duration: 1,
                },
              }}
            >
              <div css={styles.wrapper}>
                <div css={styles.bottomColor}></div>
              </div>
            </motion.div>

            <motion.div
              {...transitionAnimationProps}
              animate={{
                ...transitionAnimationProps.animate,
                transition: {
                  delay: initialDelay + transitionDelay * 2,
                  ease: "easeInOut",
                  duration: 1,
                },
              }}
            >
              <div css={styles.wrapper}>
                <div css={styles.bottomColor}></div>
              </div>
            </motion.div>

            <motion.div
              {...transitionAnimationProps}
              animate={{
                ...transitionAnimationProps.animate,
                transition: {
                  delay: initialDelay + transitionDelay * 3,
                  ease: "easeInOut",
                  duration: 1,
                },
              }}
            >
              <div css={styles.wrapper}>
                <div css={styles.bottomColor}></div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : null}
    </>
  );
});

export default Transition;

const styles = {
  transition: css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0vh;
    z-index: 9999;
    overflow: hidden;
  `,

  title: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  `,

  titleText: css`
    margin: 0;
    opacity: 0;
    animation: fade_text 2s ease-in-out;

    @media (min-width: 500px) {
      font-size: 35px;
    }
    
    @media (min-width: 900px) {
      font-size: 40px;
    }
  `,

  container: css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,

  wrapper: css`
    width: 25vw;
    height: 115vh;
    position: relative;
    background-color: rgb(54, 54, 54);
  `,

  bottomColor: css`
    height: 15vh;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
  `,

  colors: {
    top: css`color: #ff534d;`,
    about: css`color: rgb(64, 238, 238);`,
    work: css`color: #f11b9b;`,
    contact: css`color: #71ff4a;`
  },

  fadeText: css`
    @keyframes fade_text {
      0% { opacity: 0; }
      30% { opacity: 1; }
      70% { opacity: 1; }
      100% { opacity: 0; }
    }
  `
};