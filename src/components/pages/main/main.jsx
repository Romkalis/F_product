import React from "react";
// import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import Header from "../../blocks/header/header";
import MainHeader from "../../blocks/main-header/main-header";
import Advantages from "../../blocks/advantages/advantages";
import Footer from "../../blocks/footer/footer";
import "./style.css";

function Main(advantages) {
  return (
    <>
      {/* <PageWrapper /> */}
      <Header />
      <MainHeader />
      <Advantages {...advantages} />
      <Footer />
    </>
  );
}

export default Main;
