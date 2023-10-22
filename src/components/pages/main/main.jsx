import React from "react";
// import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import Header from "/src/components/blocks/header/header";
import MainHeader from "/src/components/blocks/main-header/main-header";
import Advantages from "/src/components/blocks/advantages/advantages";
import Footer from "/src/components/blocks/footer/footer";
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
