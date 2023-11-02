import React from "react";
import { Outlet } from 'react-router-dom';
import { StyledWrapper } from "./styles.js";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";

function PageWrapper() {
  return (
    <>
      <StyledWrapper>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledWrapper>
    </>
  );
}

export default PageWrapper;





