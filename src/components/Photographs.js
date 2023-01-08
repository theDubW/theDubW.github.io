import React from "react";
import {photos} from "../data";
import { Link as ScrollLink } from "react-scroll";
import {Element} from "react-scroll";
import { useState } from "react";
export default function Photographs() {
    return (
        <main className="items-center text-center">
            <h1 className="sm:text-4xl py-5 text-3xl font-medium title-font mb-4 text-white">
                Photos
            </h1>
            <p className="mb-8 leading-relaxed">
                In my free time I love to take photos on my film camera. Here are some of my favorites. 
             </p>
            <div>
                {
                    photos.map((section) => (
                        <ScrollLink smooth spy duration={500} to={section.section_title} className="mr-5 text-lg hover:text-white cursor-pointer"> {section.section_title} </ScrollLink>
                    ))
                }
            </div>
            <div>
                {
                    photos.map((section) => (
                        <Element id={section.section_title}>
                            <h1 className="title-font py-8 sm:text-2xl text-1xl mb-4 font-medium text-white" key={section.section_title}>{section.section_title}</h1>
                            <div className="flex flex-wrap -m-4 items-center">
                                {section.photos.map((photo) => (
                                    <a
                                    key={photo.image}
                                    className="h-full w-full p-4">
                                    <div className="flex">
                                        <img
                                        alt="gallery"
                                        loading="lazy"
                                        className="relative inset-0 w-3/4 h-3/4 object-cover object-center mx-auto block"
                                        src={photo.image}
                                        />
                                        <div className="px-8 py-10 absolute z-10 w-full mx-auto flex justify-center border-gray-800 bg-gray-900 opacity-0 hover:opacity-50">
                                            <h1 className="title-font text-lg font-medium text-white mb-3 text-left">
                                                {photo.title}
                                            </h1>
                                        </div>
                                    </div>
                                    </a>
                                ))}
                            </div>
                        </Element>
                    ))
                }
            </div>
        </main>

        
    );
  }
  