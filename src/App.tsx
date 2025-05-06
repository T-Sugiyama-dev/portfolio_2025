import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Top from "./components/pages/top";
import About from "./components/pages/about";
import Work from "./components/pages/work";
import Contact from "./components/pages/contact";
import Error404 from "./components/pages/error";
import Blog from "./components/pages/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Layout />}>
          <Route index element={<Top />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/work`} element={<Work />} />
          <Route path={`/blog`} element={<Blog />} />
          <Route path={`/contact`} element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
