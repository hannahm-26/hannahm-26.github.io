import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
const theme = createTheme({
  primaryColor: "pink",
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </MantineProvider>
  );
};

export default App;
