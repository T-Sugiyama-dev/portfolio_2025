/** @jsxImportSource @emotion/react */
import { FC, memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { css, SerializedStyles } from "@emotion/react";

const Header: FC = memo(() => {
  const [openBtn, setOpenBtn] = useState<boolean>(true);
  const [closeBtn, setCloseBtn] = useState<boolean>(false);
  const [menu, setMenu] = useState<SerializedStyles | undefined>(close);
  const [start, setStart] = useState<string>("100%");
  const [end, setEnd] = useState<string>("100%");

  const openMenu = () => {
    setOpenBtn(false);
    setMenu(undefined);
    setStart("100%");
    setEnd("0%");
    setCloseBtn(true);
  };

  const closeMenu = useCallback(() => {
    setCloseBtn(false);
    setStart("0%");
    setEnd("100%");
    setTimeout(() => {
      setMenu(close);
      setOpenBtn(true);
    }, 1800);
  }, []);

  const navDelay: number = 0.25;

  const navAnimationProps = {
    initial: {
      x: start,
    },
    animate: {
      x: end,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <div>
      <header css={headerContainer}>
        <div css={headerWrapper}>
          <div css={headerTitle}>
            <b>
              T.<span css={coloredS}>S</span>
            </b>
          </div>

          <div>
            {openBtn ? (
              <div onClick={openMenu} css={menuOpenBtn}>
                Explore
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div css={[menuContainer, menu]}>
        {closeBtn ? (
          <div onClick={closeMenu} css={menuCloseBtn}>
            <b>&#10005;</b>
          </div>
        ) : null}

        <div>
          <motion.div {...navAnimationProps}>
            <NavItem link="/" title="TOP" onClickEvent={closeMenu}>
              <div css={gray_menu}></div>
            </NavItem>
          </motion.div>

          <motion.div
            {...navAnimationProps}
            animate={{
              ...navAnimationProps.animate,
              transition: {
                delay: navDelay * 1,
                ease: "easeInOut",
                duration: 1,
              },
            }}
          >
            <NavItem link="/about" title="ABOUT" onClickEvent={closeMenu}>
              <div css={gray_menu}></div>
            </NavItem>
          </motion.div>

          <motion.div
            {...navAnimationProps}
            animate={{
              ...navAnimationProps.animate,
              transition: {
                delay: navDelay * 2,
                ease: "easeInOut",
                duration: 1,
              },
            }}
          >
            <NavItem link="/work" title="WORK" onClickEvent={closeMenu}>
              <div css={gray_menu}></div>
            </NavItem>
          </motion.div>

          <motion.div
            {...navAnimationProps}
            animate={{
              ...navAnimationProps.animate,
              transition: {
                delay: navDelay * 3,
                ease: "easeInOut",
                duration: 1,
              },
            }}
          >
            <NavItem link="/blog" title="BLOG" onClickEvent={closeMenu}>
              <div css={gray_menu}></div>
            </NavItem>
          </motion.div>

          <motion.div
            {...navAnimationProps}
            animate={{
              ...navAnimationProps.animate,
              transition: {
                delay: navDelay * 4,
                ease: "easeInOut",
                duration: 1,
              },
            }}
          >
            <NavItem link="/contact" title="CONTACT" onClickEvent={closeMenu}>
              <div css={gray_menu}></div>
            </NavItem>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Header;

const headerContainer = css`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const headerWrapper = css`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 30px 10px;
  position: relative;

  @media (max-width: 500px) {
    margin: 15px 10px;
  }
`;

const headerTitle = css`
  color: #FFFFFF;
  font-size: 25px;
`;

const coloredS = css`
  color: #f65a00;
`;

const menuContainer = css`
  width: 500px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9000;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const menuOpenBtn = css`
  background-color: #f65a00;
  width: 170px;
  height: 55px;
  font-size: 20px;
  border-radius: 30px;
  position: absolute;
  right: 5%;
  color: #FFFFFF;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 90px;
    height: 30px;
    border-radius: 30px;
    font-size: 14px;   
  }
`;

const menuCloseBtn = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f65a00;
  color: #FFFFFF;
  font-size: 30px;
  position: absolute;
  top: 3%;
  left: 5%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
    top: 3%;
    left: 5%;
  }
`;

const close = css`
  display: none;
`;

const gray_menu = css`
  width: 100%;
  height: 100%;
  background-color: #4d5a6f;
`;