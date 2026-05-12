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

    const maxMove = container.offsetHeight - ball.offsetHeight;

    const update = () => {
      const scrollTop = scroller.scrollTop;
      const maxScroll = scroller.scrollHeight - scroller.clientHeight;

      const progress = maxScroll ? scrollTop / maxScroll : 0;

      target = progress * maxMove;
    };

    const animate = () => {
      current += (target - current) * 0.15;
      gsap.set(ball, { y: current });

      rafId = requestAnimationFrame(animate);
    };

    scroller.addEventListener("scroll", update, { passive: true });

    update();
    animate();

    return () => {
      scroller.removeEventListener("scroll", update);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="h-screen px-10 grid grid-cols-[1fr_80px_1fr] gap-6">
      <div className="p-10 overflow-y-auto h-full">
        {data.map((item, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center gap-3">
              <IoLogoAndroid className="text-5xl text-blue-500 border-1 border-gray-400 p-1 rounded-xl" />
              <div className="flex gap-2 font-semibold">
                <span className="text-3xl font-bold">{item.num}</span>
                <span>{item.title}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            <hr className="mt-3 text-gray-400" />
          </div>
        ))}
      </div>

      <div
        ref={centerRef}
        className="bg-gray-200 relative overflow-hidden h-full"
      >
        <div ref={ballRef} className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="w-[70px] h-[70px] bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-xl">
            CL
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="h-screen overflow-y-auto p-4 space-y-10">
        {blogdata.map((data, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 space-y-2">
            <div className="grid grid-cols-[30px_1fr] gap-4">
              <h2 className="text-2xl text-blue-500 font-bold">{data.no}</h2>
              <h1 className="text-3xl font-semibold">{data.title}</h1>
            </div>

            <div className="pl-[50px] space-y-2">
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
