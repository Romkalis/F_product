import React from "react";
import { GlobalStyles } from "./styles.js";
import Main from "../pages/main/main.jsx"
import advantagesList from "../../mocks/mocks";

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
