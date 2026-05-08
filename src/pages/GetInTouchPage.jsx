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
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(tickerRef.current, {
      x: "-10%",
      duration: 8,
      ease: "power1.inOut",
    })

      .to(tickerRef.current, {
        x: "-30%",
        duration: 5,
        ease: "power2.in",
      })

      .to(tickerRef.current, {
        x: "-50%",
        duration: 2,
        ease: "power4.in",
      })

      .set(tickerRef.current, {
        x: "0%",
      });
  }, []);

  return (
    <section className="relative bg-black overflow-hidden min-h-screen pt-18 pb-15">
      <div className="relative z-30 text-center max-w-4xl mx-auto px-5">
        <h1 className="text-white font-bold leading-[1.1] text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          Not Sure Where to Begin?
        </h1>

        <p className="text-white/80 mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Start with a Free Tech Audit and discover how CacheLogics can optimize
          your systems.
        </p>

        <div className="flex justify-center mt-5">
          <button
            className="group flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full 
  transition-transform duration-500 ease-out hover:scale-[1.05] origin-center"
          >
            <div
              className="flex items-center overflow-hidden max-w-0 opacity-0
    group-hover:max-w-[140px] group-hover:opacity-100
    transition-all duration-500 ease-out"
            >
              <IoIosAdd className="text-white text-xl flex-shrink-0" />

              <span className="text-black bg-white text-xs rounded-full px-1 py-1 mr-2 whitespace-nowrap">
                You
              </span>
            </div>

            <span className="text-white whitespace-nowrap transition-all duration-300">
              Get In Touch
            </span>
          </button>
        </div>
      </div>

      <div className="relative mt-15 h-[240px] sm:h-[280px] md:h-[340px] w-full">
        <div className="absolute top-1/2 left-1/2 w-[200vw] h-[50px] sm:h-[90px] md:h-[110px] bg-white/10 backdrop-blur-xl border border-white/10 rotate-[10deg] -translate-x-1/2 -translate-y-1/2 z-0" />

        <div className="absolute top-1/2 left-1/2 w-[220vw] rotate-[-10deg] -translate-x-1/2 -translate-y-1/2 bg-blue-600 py-5 sm:py-6 md:py-7 z-10 overflow-hidden shadow-2xl">
          <div
            ref={tickerRef}
            className="flex items-center whitespace-nowrap w-max"
          >
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-8 sm:px-10 md:px-14"
              >
                <span className="text-white uppercase tracking-wide font-semibold text-[11px] sm:text-sm md:text-base lg:text-lg">
                  {name}
                </span>

                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_#fff]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouchPage;
