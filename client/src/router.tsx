import { BrowserRouter, Routes, Route } from "react-router";

import { HomePage } from "@modules/home/HomePage";
import { ProductPage } from "@modules/products/ProductPage";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};