import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../components/Button";
import Stair from "../components/Stair";
import Images from "../components/Images";
import Header from "../components/Header";

const StaggerHeading = ({ text }) => {
  const words = text.split(" ");

  return (
    <h1 className="font-semibold tracking-tight leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[14ch]">
      {words.map((word, i) => (
        <span key={i} className="hero-word inline-block mr-2 text-gray-900">
          {word}
        </span>
      ))}
    </h1>
  );
};

function HomePage() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".hero-word", {
        opacity: 0,
        y: 50,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative min-h-screen overflow-hidden bg-blue-100"
    >
      <div className="absolute top-0 right-0 w-[60vw] sm:w-[35vw] lg:w-[50vw] h-[80px] bg-gradient-to-b from-indigo-900 via-indigo-400 to-transparent blur-xl opacity-80" />

      <div className="absolute bottom-0 left-0 w-full h-[70px] bg-gradient-to-t from-indigo-800 via-blue-600 to-transparent blur-2xl opacity-90" />

      <Header />

      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <Stair />
      </div>

      <section className="relative z-20">
        <div
          className="
  hero-content
  max-w-[1200px]
  mx-auto
  px-4
  sm:px-5
  md:px-6
  lg:px-6
  xl:px-8
  pt-20
  sm:pt-24
  md:py-32
  lg:pt-40
  xl:pt-52
  flex
  flex-col
  items-start
  text-left
"
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm md:text-base text-black shadow-md hover:bg-black hover:text-white transition-all">
            Welcome to cacheLogic
          </span>

          <StaggerHeading text={"Fast-Tracking Your IT Evolution."} />

          <p className="mt-5 max-w-md text-xs text-gray-800 leading-relaxed">
            Empowering businesses with cutting-edge technology and tailored
            solutions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" className="px-6 py-2">
              Contact Us
            </Button>
            <Button variant="outline" className="px-6 py-2">
              Discover your Services
            </Button>
          </div>

          <div className="mt-8 w-full">
            <Images />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
