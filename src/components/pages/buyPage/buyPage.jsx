import React from "react";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
// import BGWrapper from "../../layout/bg-wrapper/bg-wrapper";
import BuyMain from "../../blocks/buy-main/buy-main";

function BuyPage({...props}) {
  return (
    <>
    <Header></Header>
    <BuyMain {...props}/>
    <Footer></Footer>
    </>
  );
}

export default BuyPage;
