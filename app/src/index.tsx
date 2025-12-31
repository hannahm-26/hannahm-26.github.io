import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/css/style.scss";

import { MantineProvider, createTheme } from "@mantine/core";
import { AppRouterProvider } from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

const container = document.getElementById("root");
if (!container) throw new Error("Root container missing");

const root = ReactDOM.createRoot(container);

const theme = createTheme({
  primaryColor: "pink",
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <AppRouterProvider />
    </MantineProvider>
  </React.StrictMode>
);
