import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosAdd } from "react-icons/io";

function GetInTouchPage() {
  const tickerRef = useRef();

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
      duration: 15,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  return (
    <section className="relative bg-black overflow-hidden min-h-screen pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12">


      <div className="relative z-30 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white font-bold leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Not Sure Where to Begin?
        </h1>

        <p className="text-white/80 mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Start with a Free Tech Audit and discover how CacheLogics can optimize
          your systems.
        </p>

        <div className="flex justify-center mt-6">
          <button className="group flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105">
            <div className="flex items-center overflow-hidden max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 transition-all duration-500">
              <IoIosAdd className="text-white text-xl" />
              <span className="text-black bg-white text-xs rounded-full px-2 py-1 ml-2 whitespace-nowrap">
                You
              </span>
            </div>

            <span className="text-white whitespace-nowrap">
              Get In Touch
            </span>
          </button>
        </div>
      </div>

    
      <div className="relative mt-10 sm:mt-12 md:mt-14 h-[140px] sm:h-[180px] md:h-[240px] w-full">

    
        <div className="absolute top-1/2 left-1/2 w-full h-[60px] sm:h-[90px] md:h-[110px] bg-white/10 backdrop-blur-xl border border-white/10 rotate-[8deg] -translate-x-1/2 -translate-y-1/2" />

    
        <div className="absolute top-1/2 left-1/2 w-full rotate-[-8deg] -translate-x-1/2 -translate-y-1/2 bg-blue-600 py-4 sm:py-6 md:py-7 overflow-hidden shadow-2xl">

          <div
            ref={tickerRef}
            className="flex items-center whitespace-nowrap w-max"
          >
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-4 px-5 sm:px-10 md:px-14"
              >
                <span className="text-white uppercase tracking-wide font-semibold text-[10px] sm:text-sm md:text-base lg:text-lg">
                  {name}
                </span>

                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#fff]" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

export default GetInTouchPage;