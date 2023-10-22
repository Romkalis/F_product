import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/theme";

import App from "./components/app/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={defaultTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
