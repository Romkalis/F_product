import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles.js";
import Main from "../pages/main/main.jsx";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import advantagesList from "../../mocks/mocks";
import productsData from "../../mocks/products.js";
import BuyPage from "../pages/buyPage/buyPage.jsx";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <div className="root">
          <Routes>
            <Route path="/" element={<PageWrapper/>}>
              <Route index element={<Main button={true} advantages={advantagesList}/>}/>
              <Route path='/buy' element={<BuyPage products={productsData} />}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
