import React from "react";
import { GlobalStyles } from "./styles.js";
import Main from "/src/components/pages/main/main";
import advantagesList from "/src/mocks/mocks";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="root">
        <Main advantages={advantagesList} />
      </div>
    </>
  );
}
