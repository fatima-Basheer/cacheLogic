import React from "react";
import { IoLogoAndroid } from "react-icons/io";
import { LuCircleStop } from "react-icons/lu";

function StepsPage() {
  const steps = [
    {
      no: "Step 01",
      title: "Discover & Consult",
      description:
        "We begin by understanding your business, goals, and challenges.",
    },
    {
      no: "Step 02",
      title: "Strategy & Planning",
      description:
        "We create a customized roadmap tailored to your business needs.",
    },
    {
      no: "Step 03",
      title: "Development & Execution",
      description: "Our team builds and implements solutions with precision.",
    },
    {
      no: "Step 04",
      title: "Launch & Support",
      description: "We ensure smooth delivery and provide ongoing support.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-16 sm:py-20 bg-black px-4">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[300px] sm:w-[500px] lg:w-[700px] 
        h-[250px] sm:h-[350px] lg:h-[400px]
        bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_70%)]
        blur-3xl z-0"
      />

      <div
        className="absolute bottom-0 left-0 w-full h-[180px] sm:h-[250px]
        bg-[linear-gradient(to_top_right,rgba(59,130,246,0.6),rgba(168,85,247,0.6),transparent)]
        blur-2xl z-0"
      />

      <div className="relative z-10 text-white text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight px-2">
          Simple. Transparent. Effective
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400">
          A proven path to your success
        </p>
      </div>

      <div
        className="relative z-10 
        grid grid-cols-1 
        sm:grid-cols-2 
        xl:grid-cols-4 
        gap-6 max-w-7xl mx-auto"
      >
        {steps.map((data, index) => (
          <div
            key={index}
            className="w-full min-h-[360px] p-5 sm:p-6 rounded-3xl 
            flex flex-col gap-4 text-white
            backdrop-blur-xl border border-white/20 shadow-xl
            bg-[linear-gradient(to_bottom_left,rgba(59,130,246,0.4)_0%,rgba(255,255,255,0.12)_45%,rgba(0,0,0,0.45)_100%)] 
            hover:scale-105 duration-500"
          >
            <div className="flex items-center gap-2 border border-white/30 py-2 rounded-full w-fit px-4">
              <LuCircleStop className="text-2xl sm:text-3xl" />
              <span className="text-xs sm:text-sm">{data.no}</span>
            </div>

            <IoLogoAndroid
              className="text-4xl sm:text-5xl text-white 
              bg-gray-500 rounded-lg p-1 mt-10 sm:mt-16"
            />

            <h2 className="font-bold text-2xl sm:text-3xl leading-snug max-w-[220px]">
              {data.title}
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepsPage;
