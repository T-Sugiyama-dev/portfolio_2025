import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/header/Header";
import Cursor from "../ui/cursor/Cursor";

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
