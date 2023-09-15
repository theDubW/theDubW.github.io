import { ExclamationCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { workingOn } from "../data";
import { Element } from "react-scroll";

export default function WorkingOn() {
  return (
    <Element id="workingOn" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <ExclamationCircleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            What I'm Working On
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here's what I'm spending most of my time developing right now
          </p>
        </div>
        <h1 className="title-font text-2xl font-medium text-white mb-1">{workingOn.title}</h1>
        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-3">{workingOn.subtitle}</h2>
        <a href={workingOn.link}>
          
          <img
                alt="gallery"
                className="w-3/4 h-3/4 mx-auto mb-5"
                src={workingOn.image}
            />
            </a>
          <p className="leading-relaxed">{workingOn.description}</p>
          {/* <a
            href={workingOn.link}
            key={workingOn.image}
            className="sm:w-1/2 p-4">
            <div className="flex relative">
              
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                
                
                
              </div>
            </div>
          </a> */}
      </div>
    </Element>
  );
}
