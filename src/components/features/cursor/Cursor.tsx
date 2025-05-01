import { FC, useState, useEffect } from "react";
import "./cursor.css";

interface CursorProps {
  children: React.ReactNode;
}

interface CursorPosition {
  x: number;
  y: number;
}

const Cursor: FC<CursorProps> = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setCursorPosition({ x, y });
  };

  useEffect(() => {
    const cursor: HTMLElement | null = document.getElementById("cursor");
    const stalker: HTMLElement | null =
      document.getElementById("cursor_chaser");

    if (cursor && stalker) {
      cursor.style.opacity = "0.9";
      cursor.style.top = `${cursorPosition.y}px`;
      cursor.style.left = `${cursorPosition.x}px`;

      setTimeout(function () {
        stalker.style.opacity = "0.4";
        stalker.style.top = `${cursorPosition.y}px`;
        stalker.style.left = `${cursorPosition.x}px`;
      }, 140);
    }
  }, [cursorPosition]);

  return (
    <div>
      <div id="cursor"></div>
      <div id="cursor_chaser"></div>
      <div onMouseMove={handleMouseMove}>{children}</div>
    </div>
  );
};

export const handleElHover = () => {
  const cursor: HTMLElement | null = document.getElementById("cursor");
  const stalker: HTMLElement | null = document.getElementById("cursor_chaser");

  if (cursor && stalker) {
    cursor.classList.add("active");
    stalker.classList.add("active");
  }
};

export const handleElLeave = () => {
  const cursor: HTMLElement | null = document.getElementById("cursor");
  const stalker: HTMLElement | null = document.getElementById("cursor_chaser");

  if (cursor && stalker) {
    cursor.classList.remove("active");
    stalker.classList.remove("active");
  }
};

export default Cursor;
