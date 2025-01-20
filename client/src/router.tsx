import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "@pages/Home/Page";
import { Product } from "@pages/Product/Page";

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