import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Stair from "./Stair";
import Images from "./Images";

const StaggerHeading = ({ text }) => {
  return (
    <h1 className="heading font-medium text-[80px] leading-20 tracking-normal">
      {text.split("\n").map((line, i) => (
        <div key={i}>
          {line.split("").map((char, j) => (
            <span key={j} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      ))}
    </h1>
  );
};

function HomePage() {
  const container = useRef();

  const navMenu = [
    "Services",
    "Products",
    "About us",
    "Blog",
    "Careers",
    "Portfolio",
  ];

  useGSAP(
    () => {
      gsap.from(".char", {
        opacity: 0,
        y: 50,
        rotateX: 90,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="relative bg-sky-100 overflow-hidden">
      <div className="absolute bottom-[-40px] left-[-40px] w-[80%] h-[80px] bg-indigo-600 opacity-90 blur-3xl rounded-full"></div>

      <header className="flex justify-between items-center px-15 py-3">
        <div>
          <p className="text-2xl leading-5 font-medium font-mono cursor-pointer">
            Cache <br /> Logic
          </p>
        </div>

        <nav className="flex gap-6 border-2 border-white p-3 rounded-full font-semibold text-sm text-gray-700 cursor-pointer z-40">
          {navMenu.map((item, index) => (
            <h3 key={index} className="hover:text-blue-600">
              {item}
            </h3>
          ))}
        </nav>

        <button className="text-white bg-blue-600 hover:bg-blue-500 py-2.5 px-4.5 rounded-full font-medium text-sm cursor-pointer z-50">
          Contact Us
        </button>
      </header>

      <span className="absolute inset-0 h-full w-full">
        <Stair />
      </span>

      <div className="flex justify-between px-20 py-10">
        <div className="heroleft flex flex-col gap-3 p-5">
          <span className="self-start text-black bg-white rounded-full p-2">
            Welcome to cacheLogic
          </span>

          <StaggerHeading
            text={`Fast-Tracking
Your IT Evolution.`}
          />

          <p className="mt-2 text-gray-500">
            Empowering Businesses With cutting-edge technology and tailored
            solutions
          </p>

          <div className="flex gap-4">
            <button className="text-white bg-blue-600 hover:bg-blue-500 py-2.5 px-4.5 rounded-full text-sm">
              Contact Us
            </button>

            <button className="border-2 border-white py-2 px-4 rounded-full">
              Discover our services
            </button>
          </div>

          <div className="mt-6">
            <Images />
          </div>
        </div>

        <div className="heroright"></div>
      </div>

      <div className="absolute top-[-10px] right-[-20px] w-[50%] h-[40px] bg-indigo-600 blur-2xl rounded-full"></div>
    </div>
  );
}

export default HomePage;
