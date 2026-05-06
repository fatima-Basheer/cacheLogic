import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function GetInTouch() {
  const tickerRef = useRef();

  const companies = [
    "Trusted by 50+ Clients in 10+ Countries",
    "Enterprise-Grade Security with 99.9% Uptime",
    "5+ Years of Proven Innovation and Expertise",
    "Accelerating IT Evolution for Businesses Worldwide",
  ];

  useGSAP(() => {
    gsap.to(tickerRef.current, {
      xPercent: -50,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="h-full bg-black relative overflow-hidden pt-20 pb-3">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold">
          Not Sure Where to Begin?
        </h1>

        <p className="text-sm text-white mt-8 font-medium mb-10">
          Start with a Free Tech Audit and discover how CacheLogics can optimize
          your systems.
        </p>

        <button className="text-white py-2 px-8 rounded-full mb-20 bg-blue-500 text-sm font-semibold hover:scale-110 duration-300 cursor-pointer">
          Get In Touch
        </button>
      </div>

      <div className="w-full bg-blue-600 py-6 overflow-hidden relative -rotate-10 mt-12 z-10">
        <div
          ref={tickerRef}
          className="flex items-center gap-10 w-max whitespace-nowrap"
        >
          {[...companies, ...companies].map((name, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-white text-xl uppercase">{name}</span>

              <div className="w-2 h-2 rounded-full bg-white shadow-[0px_0px_20px_#ffffff]" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[100px] left-0 w-full h-[80px] bg-white/20 backdrop-blur-md -rotate-[-7deg] z-0" />
    </div>
  );
}

export default GetInTouch;
