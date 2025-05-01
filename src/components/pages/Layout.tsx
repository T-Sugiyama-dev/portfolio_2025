import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../features/header/Header";
import Cursor from "../features/cursor/Cursor";

// ページレイアウト
const Layout: FC = () => {
  return (
    <Cursor>
      <Header />
      <main>
        <Outlet />
      </main>
    </Cursor>
  );
};

export default Layout;
