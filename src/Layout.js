import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
