import React, { useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router";
import { useEffect } from "react";
// import Photography from "./components/";


export default function App(props) {

  const location = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  // console.log("data: ", data);
  // console.log("props: ", props);
  // console.log("location: ", location);

  // if(location.state.from_photography == true){
  //   // var elem = document.getElementById(location.state.to);
  //   console.log(ref);
  //   // ref.current.scrollIntoView({behavior: "smooth"});
  //   // elem.scrollIntoView({behavior: "smooth"});
  //   console.log("CAME FROM PHOTOS!");
  // }
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar  />
      <About />
      <Projects ref={el => { console.log(el); ref.current = el;}}/>
      <Skills />
      <Contact/>
      {/* <Routes>
        <Route path="/#about" element={<About/>}/>
        <Route path="/#projects"  element={<Projects/>}/>
        <Route path="/#skills"  element={<Skills/>}/>
        <Route path="/#contact"  element={<Contact/>}/>
      </Routes> */}
    </main>
  );
}
