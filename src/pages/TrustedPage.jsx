import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
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

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Meta",
    "Apple",
  ];
  return (
    <div className="bg-black relative overflow-hidden pt-20 pb-5">
      <div className="text text-center">
        <h1 className="text-white text-5xl">
          Trusted By Leading <br /> Companies
        </h1>
        <p className="text-sm text-white w-[250px] leading-5 line-clamp-2 mt-2 mx-auto text-center mt-10 font-light mb-10">
          CacheLogics transformed our outdated systems into a modern, efficient
          powerhouse.
        </p>
        <Button text="Lets get Started" color="white" bg="black" />
      </div>
      <div className="logoball flex justify-center items-center">
        <div className="relative w-full overflow-hidden py-10 bg-black">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/20 blur-lg"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/40"></div>

          <div className="overflow-hidden">
            <div ref={tickerRef} className="flex w-max items-center gap-10">
              {[...companies, ...companies].map((name, i) => (
                <div key={i} className="flex items-center gap-10">
                  <span className="text-white text-xl whitespace-nowrap">
                    {name}
                  </span>

                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0px_0px_20px_#3b82f6]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedPage;
