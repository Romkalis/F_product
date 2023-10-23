import React from "react";
import { GlobalStyles } from "./styles.js";
import Main from "../pages/main/main.jsx"
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import advantagesList from "../../mocks/mocks";
import productsData from "../../mocks/products.js";
import BuyPage from "../pages/buyPage/buyPage.jsx";
import Header from "../blocks/header/header.jsx";
import Footer from "../blocks/footer/footer.jsx";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="root">
        <Header/>

        <PageWrapper>
        {/* <Main advantages={advantagesList} /> */}
        <BuyPage products={productsData}></BuyPage>
        </PageWrapper>

        <Footer/>

      </div>
    </>
  );
}
