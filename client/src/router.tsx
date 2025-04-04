import { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { HomePage } from "@modules/Home/HomePage";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};