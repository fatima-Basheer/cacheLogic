import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function TrustedPage() {
  const tickerRef = useRef();

  useGSAP(() => {
    gsap.to(tickerRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const companies = ["Google", "Google", "SECLOCK", "Google", "Google"];

  return (
    <div className="bg-black overflow-hidden h-screen px-10 relative">

    
      <div className="absolute bottom-0 right-0 w-[80vw] sm:w-[60vw] h-[30px] bg-gradient-to-r from-transparent to-blue-600 blur-2xl opacity-90" />
      <div className="absolute top-0 right-0 w-[60vw] sm:w-[50vw] h-[70px] bg-gradient-to-l from-blue-600 to-transparent blur-xl opacity-60" />

      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-30">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">
          Trusted By Leading <br /> Companies
        </h1>

        <p className="text-xs text-white w-[300px] leading-5 mt-10 mx-auto font-light">
          CacheLogics transformed our outdated systems into a modern, efficient powerhouse.
        </p>
      </div>


      <div className="flex items-center h-full mt-10">

    
        <div className="flex-1 flex justify-end">
          <img
            src="lines.svg"
            alt="lines"
            className="relative z-10 translate-x-4 sm:translate-x-6 lg:translate-x-[47px]"
          />
        </div>

      
        <div className="flex-shrink-0 relative flex flex-col items-center justify-center z-20">
          <img
            src="linelogo.svg"
            alt="logo"
            className="relative z-10 rounded-full w-[60px] sm:w-[80px] md:w-[120px] lg:w-[140px]"
          />

          <div className="absolute top-full mt-3 sm:mt-4 flex justify-center w-full">
            <button className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-white font-bold bg-gray-600 rounded-full transition-all cursor-pointer hover:bg-gray-500 whitespace-nowrap mt-10">
              Let's get Started
            </button>
          </div>
        </div>

    
        <div className="flex-1 overflow-hidden">
          <div className="relative w-full py-10">

            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/40"></div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-full bg-gradient-to-r from-blue-600/10 via-blue-600/30 to-blue-600/70 blur-xl pointer-events-none"></div>

            <div className="overflow-hidden">
              <div
                ref={tickerRef}
                className="flex w-max items-center gap-10"
              >
                {[...companies, ...companies].map((name, i) => (
                  <span
                    key={i}
                    className="text-gray-400 text-2xl whitespace-nowrap uppercase font-medium"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default TrustedPage;