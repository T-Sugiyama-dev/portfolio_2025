/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, memo, ReactNode, MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { handleElHover, handleElLeave } from "../cursor/Cursor";

interface NavProps {
  link: string;
  title: string;
  onClickEvent: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

const NavItem: FC<NavProps> = memo(
  ({ link, title, onClickEvent, children }) => {
    return (
      <NavLink
        to={link}
        css={navLink}
        style={({ isActive }) => (isActive ? { color: "#8ee85a" } : { color: "#ffffff" })}
      >
        <div css={menu}>
          {children}
          <div
            onClick={onClickEvent}
            onMouseEnter={handleElHover}
            onMouseLeave={handleElLeave}
            css={overlay}
          >
            <b>{title}</b>
          </div>
        </div>
      </NavLink>
    );
  }
);

export default NavItem;

const navLink = css`
  text-decoration: none;
`;

const menu = css`
  width: 100%;
  height: 20vh;
  position: relative;
  overflow: hidden;
`;

const overlay = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  z-index: 2;
`;
