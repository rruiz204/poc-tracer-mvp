import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "@pages/Home";
import { Product } from "@pages/Product";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/product" element={<Product></Product>} />
      </Routes>
    </BrowserRouter>
  );
};