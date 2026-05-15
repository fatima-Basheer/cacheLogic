import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
const companies = [
  "Google",
  "Google",
  "SECLOCK",
  "Google",
  "Google",
  "SECLOCK",
];
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

  return (
    <div className="relative bg-black min-h-screen overflow-hidden px-4 sm:px-10 flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[70vw] h-[5%] bg-gradient-to-r from-transparent to-indigo-600 blur-3xl opacity-70" />

        <div className="absolute top-0 right-0 w-[60vw] h-[10%] bg-gradient-to-l from-indigo-600 to-transparent blur-2xl opacity-50" />
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-30 px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight pt-5">
          Trusted By Leading <br /> Companies
        </h1>

        <p className="text-xs sm:text-sm text-white/65 max-w-[320px] mt-6 mx-auto font-light">
          CacheLogics transformed our outdated systems into a modern, efficient
          powerhouse.
        </p>
      </div>

      <div className="flex-1 w-full flex items-center justify-between pt-30">
        <div className="flex-1 flex justify-end overflow-hidden self-center pb-12 md:translate-x-[20px]">
          <img
            src="lines.svg"
            alt="lines"
            className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] scale-130"
          />
        </div>

        <div className="flex-none flex flex-col items-center justify-center z-20 relative self-center">
          <div
            className="absolute top-[35%] left-4 -translate-y-1/2 
           h-[70px] w-[70px] 
          sm:h-[90px] sm:w-[90px] 
          md:h-[90px] md:w-[90px] 
           lg:h-[110px] lg:w-[110px] 
  bg-blue-800 rounded-full blur-sm z-10"
          />

          <div className="bg-white/10 backdrop-blur-sm z-50 rounded-full border-none">
            <img
              src="linelogo.svg"
              alt="logo"
              className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[170px]"
            />
          </div>
          <Button
            variant="secondary"
            className="w-fit px-6 py-2 text-white mt-10"
          >
            Let's get Started
          </Button>
        </div>

        <div className="flex-1 flex justify-start overflow-hidden self-center pb-20">
          <div className="relative w-full ">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />

            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-full bg-gradient-to-r from-blue-600/10 via-blue-600/30 to-blue-600/70 blur-xl pointer-events-none"></div>

            <div className="overflow-hidden">
              <div
                ref={tickerRef}
                className="flex w-max items-center gap-6 sm:gap-10"
              >
                {[...companies, ...companies].map((name, i) => (
                  <span
                    key={i}
                    className="text-gray-500 text-lg sm:text-xl md:text-2xl whitespace-nowrap font-medium"
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
