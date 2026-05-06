import React from "react";
import { IoLogoAndroid } from "react-icons/io";
import { LuCircleStop } from "react-icons/lu";

function Steps() {
  const steps = [
    {
      no: "Step 01",
      title: "Discover & Consult",
      description:
        "We begin by understanding your business, goals, and challenges.",
    },
    {
      no: "Step 02",
      title: "Discover & Consult",
      description:
        "We begin by understanding your business, goals, and challenges.",
    },
    {
      no: "Step 03",
      title: "Discover & Consult",
      description:
        "We begin by understanding your business, goals, and challenges.",
    },
    {
      no: "Step 04",
      title: "Discover & Consult",
      description:
        "We begin by understanding your business, goals, and challenges.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-20 bg-black">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]
        bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)]
        blur-3xl z-0"
      />

      <div
        className="absolute bottom-0 left-0 w-full h-[250px]
  bg-[linear-gradient(to_top_right,rgba(59,130,246,0.6),rgba(168,85,247,0.6),transparent)]
  blur-2xl z-0"
      />

      <div className="relative z-10 text-white text-center mb-16">
        <h1 className="text-5xl">Simple. Transparent. Effective</h1>
        <p className="mt-6 text-gray-400">A proven path to your success</p>
      </div>

      <div className="relative z-10 flex items-stretch justify-center gap-6 px-10 flex-wrap ">
        {steps.map((data, index) => (
          <div
            key={index}
            className="w-[290px] p-5 rounded-3xl flex flex-col gap-4 text-white
backdrop-blur-xl border border-white/20 shadow-xl
bg-[linear-gradient(to_bottom_left,rgba(59,130,246,0.4)_0%,rgba(255,255,255,0.12)_45%,rgba(0,0,0,0.45)_100%)] hover:scale-105 duration-500"
          >
            <div className="flex items-center gap-2 border border-white/30 py-2 rounded-full w-fit px-4">
              <LuCircleStop className="text-3xl" />
              <span className="text-sm">{data.no}</span>
            </div>

            <IoLogoAndroid className="text-4xl text-white bg-gray-500 rounded-lg p-1 mt-20" />

            <h2 className="font-bold text-3xl max-w-[180px] leading-snug">
              {data.title}
            </h2>

            <p className="text-xs text-gray-300">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
