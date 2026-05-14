import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import Stair from "../components/Stair";
import Images from "../components/Images";
import Header from "../components/Header";

const StaggerHeading = ({ text }) => {
  const lines = text.split("\n").map((line) => line.trim());

  return (
    <h1 className="font-medium leading-[1.2] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      {lines.map((line, i) => (
        <div key={i} className="block pb-2">
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

  useGSAP(
    () => {
      gsap.from(".char", {
        opacity: 0,
        y: 50,
        rotateX: 90,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-content", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative min-h-screen overflow-hidden bg-sky-100"
    >
      <div className="absolute bottom-0 left-0 w-[80vw] sm:w-[50vw] h-[40px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-transparent blur-xl opacity-80" />
      <div className="absolute top-0 right-0 w-[70vw] sm:w-[60vw] h-[40px] bg-gradient-to-l from-indigo-600 via-indigo-700 to-transparent blur-xl opacity-80" />

      <div className="relative z-50">
        <Header />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <Stair />
      </div>

      <section className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12">
        <div className="hero-content w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm md:text-base text-black shadow-md transition-all duration-300 hover:bg-black hover:text-white">
            Welcome to cacheLogic
          </span>

          <StaggerHeading
            text={`Fast-Tracking
Your IT Evolution.`}
          />

          <p className="mt-5 max-w-[260px] sm:max-w-md md:max-w-lg text-sm text-gray-600 leading-relaxed">
            Empowering businesses with cutting-edge technology and tailored
            digital solutions.
          </p>

          <div className="mt-6 flex w-full flex-row flex-wrap gap-3">
            <Button
              text="Contact Us"
              color="white"
              bg="bg-indigo-600"
              className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2"
            />

            <Button
              text="Discover your Services"
              color="black"
              bg="transparent"
              border="border-2"
              borderColor="border-white"
              className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2"
            />
          </div>

          <div className="mt-8 w-full">
            <Images />
          </div>
        </div>

        <div className="hidden lg:flex w-1/2 justify-center items-center"></div>
      </section>
    </div>
  );
}

export default HomePage;
