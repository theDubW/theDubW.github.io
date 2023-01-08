import React from "react";
import Photographs from "./components/Photographs";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
export default function Photography() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Photographs />
    </main>
  );
}
