import React from "react";
import {Routes, Route} from "react-router-dom";
import App from "./App";
import Photography from "./Photography";
const Layout = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/Photography"  element={<Photography/>}/>
      </Routes>
    </main>
  );
};

export default Layout;
