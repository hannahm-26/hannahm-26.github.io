import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
