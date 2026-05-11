import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import Stair from "../components/Stair";
import Images from "../components/Images";
import Header from "../components/Header";
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
      className="relative bg-sky-100 py-4 px-3 overflow-hidden"
    >
<div className="absolute bottom-[-40px] left-50 w-[38vw] h-[120px] bg-indigo-500/50 blur-lg"></div>

<div className="absolute bottom-[-60px] left-0 w-[40vw] h-[120px] bg-gradient-to-r from-indigo-600/60 to-transparent blur-xl"></div>

      <Header />

      <span className="absolute inset-0 z-0 pointer-events-none">
        <Stair />
      </span>

      <div className="flex justify-between px-20 py-10">
        <div className="heroleft flex flex-col gap-3 p-5">
          <span className="self-start text-black hover:text-white bg-white hover:bg-black rounded-full p-2">
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

        <div className="heroright"></div>
      </div>

    </div>
  );
}

export default HomePage;
