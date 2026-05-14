import React, { useRef } from "react";
import { IoLogoAndroid } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function BlogPage() {
  const ballRef = useRef();
  const scrollRef = useRef();
  const centerRef = useRef();

  const data = [
    {
      num: "50+",
      title: "Clients Across 10+ Countries",
      description: "Trusted by startups, SMEs, and enterprises globally",
    },
    {
      num: "100+",
      title: "Successful Projects Delivered",
      description: "Trusted by startups, SMEs, and enterprises globally",
    },
    {
      num: "30%",
      title: "Faster Time-to-Market",
      description: "Trusted by startups, SMEs, and enterprises globally",
    },
    {
      num: "5+",
      title: "Years of Innovation",
      description: "Trusted by startups, SMEs, and enterprises globally",
    },
  ];

  const blogdata = Array.from({ length: 15 }).map((_, i) => ({
    no: String(i + 1).padStart(2, "0"),
    title: "50+ Clients Across 10+ Countries",
    heading1: "Global Expertise",
    description1: "Regional + industry solutions",
    heading2: "Trusted Worldwide",
    description2: "Reliable delivery globally",
    heading3: "Seamless Collaboration",
    description3: "Smooth communication always",
  }));

  useGSAP(() => {
    const ball = ballRef.current;
    const scroller = scrollRef.current;
    const container = centerRef.current;

    if (!ball || !scroller || !container) return;

    let current = 0;
    let target = 0;
    let rafId;

    const update = () => {
      const maxMove = container.offsetHeight - ball.offsetHeight;

      const scrollTop = scroller.scrollTop;

      const maxScroll = scroller.scrollHeight - scroller.clientHeight;

      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      target = progress * maxMove;
    };

    const animate = () => {
      current += (target - current) * 0.15;

      gsap.set(ball, {
        y: current,
      });

      rafId = requestAnimationFrame(animate);
    };

    scroller.addEventListener("scroll", update, {
      passive: true,
    });

    update();
    animate();

    return () => {
      scroller.removeEventListener("scroll", update);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="
        h-auto lg:h-screen
        flex flex-col lg:grid
        lg:grid-cols-[1fr_auto_1fr]
        gap-6
        px-4 md:px-8 lg:px-12
        lg:overflow-hidden
      "
    >
      <div
        className="
          order-1 lg:order-none
          p-4 md:p-6 lg:p-10
          h-auto lg:h-screen
          lg:overflow-y-auto
        "
      >
        {data.map((item, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center gap-3">
              <IoLogoAndroid
                className="
                  text-3xl md:text-4xl lg:text-5xl
                  text-blue-500
                  border border-gray-300
                  p-1 rounded-xl
                "
              />

              <div className="flex gap-2 font-semibold flex-wrap">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                  {item.num}
                </span>

                <span className="text-sm md:text-base">{item.title}</span>
              </div>
            </div>

            <p className="text-gray-600 text-xs md:text-sm mt-2">
              {item.description}
            </p>

            <hr className="mt-3 border-gray-300" />
          </div>
        ))}
      </div>

      <div
        ref={centerRef}
        className="
          hidden lg:flex
          relative
          h-full
          justify-center
          bg-gray-100
          w-fit
        "
      >
        <div
          className="
            relative
            z-10
            flex
            justify-center
            items-start
          "
        >
          <img
            ref={ballRef}
            src="/Ball.svg"
            alt="Ball"
            className="
              w-16
              h-16
              object-contain
              block
            "
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="
          order-2 lg:order-none
          h-auto lg:h-screen
          lg:overflow-y-auto
          p-4 md:p-6
          space-y-8 md:space-y-10
        "
      >
        {blogdata.map((data, index) => (
          <div
            key={index}
            className="
              border-b border-gray-200
              pb-6
              space-y-2
            "
          >
            <div className="flex gap-3 items-start">
              <h2
                className="
                  text-xl md:text-2xl
                  text-blue-500
                  font-bold
                "
              >
                {data.no}
              </h2>

              <h1
                className="
                  text-lg md:text-2xl lg:text-3xl
                  font-semibold
                "
              >
                {data.title}
              </h1>
            </div>

            <div className="pl-0 md:pl-10 space-y-2">
              <h4 className="font-semibold text-sm">{data.heading1}</h4>

              <p className="text-xs text-gray-600">{data.description1}</p>

              <h4 className="font-semibold text-sm">{data.heading2}</h4>

              <p className="text-xs text-gray-600">{data.description2}</p>

              <h4 className="font-semibold text-sm">{data.heading3}</h4>

              <p className="text-xs text-gray-600">{data.description3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
