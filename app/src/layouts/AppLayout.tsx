// src/layouts/AppLayout.tsx
import React from "react";
import { Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet /> {/* renders Home, About, etc. */}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
