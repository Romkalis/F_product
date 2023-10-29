import React from "react";
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
      <div className="root">
        <PageWrapper>
          <Main advantages={advantagesList}/>
          <BuyPage products={productsData}></BuyPage>
        </PageWrapper>
      </div>
    </>
  );
}
