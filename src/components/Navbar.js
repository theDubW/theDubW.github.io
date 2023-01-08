import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";

function CustomLink({name, to, className}){

  if(window.location.hash === "#/Photography"){
    return(
      <Link to="/" state={{from_photography: true, to: to}} className={className} >{name}</Link>
    );
  }
  else {
    return(
      <ScrollLink smooth spy duration={500} to = {to} className={className}>
        {name}
      </ScrollLink>
    );
  }
}

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <CustomLink className="ml-3 text-xl cursor-pointer" name="Max Weinreb" to="about"/>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <CustomLink name="Projects" to="projects" className="mr-5 hover:text-white cursor-pointer"/>
          <CustomLink name="Skills" to="skills" className="mr-5 hover:text-white cursor-pointer"/>
          {/* <link to="/Photography" className="mr-5 hover:text-white">Photography</link> */}
          <Link to="/Photography" className="mr-5 hover:text-white">
            Photography
          </Link>
        </nav>
        <CustomLink name="Contact Me" to="contact"
          className="inline-flex items-center cursor-pointer bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </CustomLink>
      </div>
    </header>
  );
}
