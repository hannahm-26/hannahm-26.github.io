import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/css/style.scss";

import { MantineProvider, createTheme } from "@mantine/core";
import { AppRouterProvider } from "./router";

const container = document.getElementById("root");
if (!container) throw new Error("Root container missing");

const root = ReactDOM.createRoot(container);

const theme = createTheme({
  primaryColor: "red",
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <AppRouterProvider />
    </MantineProvider>
  </React.StrictMode>
);
