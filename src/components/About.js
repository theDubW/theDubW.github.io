import React from "react";
import { Element } from "react-scroll";
import { Link as ScrollLink} from "react-scroll";
import { SocialIcon } from 'react-social-icons';

export default function About() {
  return (
    <Element id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex">
            <div className="">
              <h1 className="title-font sm:text-4xl text-3xl font-medium text-white mb-4">
                Hey, I'm Max.
                <br className="hidden lg:inline-block" /> I love building software and automation tools. 
              </h1>
              <p className="mb-8 leading-relaxed">
              I'm a student at the University of Texas at Austin studying computer science with a minor in business.
              My main interest is creating consumer facing software to level the playing field in information
              accessibility. 
              </p>
            </div>
            <img src="profile_picture_cropped.png" alt="Profile" className="w-32 h-32 rounded-full ml-auto mb-0"/>
          </div>
          
          <div className="flex justify-center mb-4">
            <a
              href="https://www.maxweinreb.com/Resume.pdf"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Resume
            </a>
            <ScrollLink smooth spy duration={500} to = "projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            See My Past Work
            </ScrollLink>
          </div>
          <div className="flex justify-center">
            <SocialIcon url="https://github.com/theDubW/" className="mr-4"/>
            <SocialIcon url="https://www.linkedin.com/in/max-weinreb-1a33b7194/"/> 
          </div>
        </div>
      </div>
    </Element>
  );
}
