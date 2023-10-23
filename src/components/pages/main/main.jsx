import React from "react";
import Header from "../../blocks/header/header";
import MainHeader from "../../blocks/main-header/main-header";
import Advantages from "../../blocks/advantages/advantages";
import Footer from "../../blocks/footer/footer";
import "./style.css";

function Main(advantages) {
  return (
    <>
        <Header />
        <MainHeader />
        <Advantages {...advantages} />
        <Footer />
    </>
  );
}

export default Main;
