import React from "react";
import MainHeader from "../../blocks/main-header/main-header";
import Advantages from "../../blocks/advantages/advantages";
import "./style.css";

function Main(advantages) {
  return (
    <>
        <MainHeader />
        <Advantages {...advantages} />
    </>
  );
}

export default Main;
