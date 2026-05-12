import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import Stair from "../components/Stair";
import Images from "../components/Images";
import Header from "../components/Header";

const StaggerHeading = ({ text }) => {
  const [line1, line2] = text.split("\n");

  return (
    <h1 className="heading font-medium leading-tight tracking-normal text-4xl sm:text-5xl md:text-6xl lg:text-[72px]">
      <div className="max-w-[18ch] sm:max-w-[22ch] md:max-w-[26ch] lg:max-w-[30ch]">
        <div className="block">
          {line1.split("").map((char, j) => (
            <span key={j} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="block">
          {line2.split("").map((char, j) => (
            <span key={j} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </h1>
  );
};

function HomePage() {
  const container = useRef();

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
    <div
      ref={container}
      className="relative min-h-screen bg-sky-100 overflow-hidden"
    >
      <div className="absolute bottom-[-40px] left-0 w-[60vw] h-[80px] bg-gradient-to-r from-indigo-600 to-transparent blur-2xl" />

      <div className="absolute top-[-40px] right-0 w-[70vw] h-[100px] bg-gradient-to-l from-indigo-600 to-transparent blur-2xl" />

      <div className="relative z-20 px-4 py-4 sm:px-6 lg:px-8">
        <Header />
      </div>

      <span className="absolute inset-0 z-0 pointer-events-none">
        <Stair />
      </span>

      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-start gap-8 px-6 sm:px-6 lg:px-14 py-10">
        <div className="heroleft flex flex-col gap-4 w-full lg:w-1/2">
          <span className="self-start text-black hover:text-white bg-white hover:bg-black rounded-full px-3 py-1 text-sm sm:text-base transition-all duration-300">
            Welcome to cacheLogic
          </span>

          <StaggerHeading
            text={`Fast-Tracking
Your IT Evolution.`}
          />

          <p className="mt-2 text-gray-500 text-sm sm:text-base md:text-lg max-w-xl">
            Empowering Businesses With cutting-edge technology and tailored
            solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button text="Contact Us" color="white" bg="bg-indigo-600" />

            <Button
              text="Discover your Services"
              color="black"
              bg="transparent"
              border="border-2"
              borderColor="white"
            />
          </div>

          <div className="mt-6">
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
