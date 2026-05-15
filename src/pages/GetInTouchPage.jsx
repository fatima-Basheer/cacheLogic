import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosAdd } from "react-icons/io";

function GetInTouchPage() {
  const tickerRef = useRef(null);

  const companies = [
    "Trusted by 50+ Clients in 10+ Countries",
    "Enterprise-Grade Security with 99.9% Uptime",
    "5+ Years of Proven Innovation and Expertise",
    "Accelerating IT Evolution for Businesses Worldwide",
  ];

  useGSAP(() => {
    const el = tickerRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: `-${totalWidth}px`,
      duration: 18,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  return (
    <section className="overflow-hidden bg-black flex flex-col items-center py-4 sm:py-8 md:py-6 lg:py-10">
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white font-bold leading-tight text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Not Sure Where to Begin?
        </p>

        <p className="mt-5 sm:mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-sm md:text-base lg:text-lg px-2">
          Start with a Free Tech Audit and discover how CacheLogics can optimize
          your systems.
        </p>

        <div className="flex justify-center mt-6 sm:mt-8">
          <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-5 sm:px-6 py-2 rounded-full hover:scale-105 shadow-lg">
            <div className="flex items-center overflow-hidden max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 transition-all duration-500">
              <IoIosAdd className="text-white text-lg sm:text-xl" />

              <span className="bg-white text-black text-[6px] sm:text-xs rounded-full px-1 py-1.5 ml-1 whitespace-nowrap font-medium leading-none">
                You
              </span>
            </div>

            <span className="text-white text-sm sm:text-[15px] whitespace-nowrap font-medium">
              Get In Touch
            </span>
          </button>
        </div>
      </div>

      <div className="relative mt-14 sm:mt-16 md:mt-20 w-full h-[120px] sm:h-[160px] md:h-[220px] lg:h-[260px]">
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[35px] sm:h-[50px] md:h-[65px] lg:h-[80px] bg-white/5 backdrop-blur-xl border border-white/10 rotate-[7deg] -translate-x-1/2 -translate-y-1/2 rounded-md" />

        <div className="absolute top-1/2 left-1/2 w-[120%] rotate-[-7deg] -translate-x-1/2 -translate-y-1/2 bg-blue-600 py-3 sm:py-5 md:py-6 overflow-hidden shadow-2xl">
          <div
            ref={tickerRef}
            className="flex items-center whitespace-nowrap w-max"
          >
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-5 md:gap-6 px-5 sm:px-8 md:px-12 lg:px-16"
              >
                <span className="text-white uppercase tracking-wide font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg">
                  {name}
                </span>

                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white shadow-[0_0_12px_#fff]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouchPage;
