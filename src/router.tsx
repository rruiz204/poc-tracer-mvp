import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Testing } from "./pages/Testing";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/testing" element={<Testing></Testing>} />
      </Routes>
    </BrowserRouter>
  );
};