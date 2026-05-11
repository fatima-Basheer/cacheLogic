import React, { useRef } from "react";
import { IoLogoAndroid } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BlogPage() {
  const ballRef = useRef();

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

  const blogdata = [
    {
      no: "01",
      title: "50+ Clients Across 10+ Countries",
      heading1: "Global Expertise, Local Insight",
      description1:
        "With clients in over 10 countries, we understand regional needs, cultural nuances, and industry-specific challenges.",
      heading2: "Trusted Around the World",
      description2:
        "Startups, SMEs, and enterprises worldwide rely on us to power their digital transformation.",
      heading3: "Seamless Collaboration Across Borders",
      description3:
        "Distance isn't a barrier — our distributed teams ensure smooth communication and execution.",
    },
    {
      no: "02",
      title: "50+ Clients Across 10+ Countries",
      heading1: "Global Expertise, Local Insight",
      description1:
        "We understand regional needs and industry-specific challenges.",
      heading2: "Trusted Around the World",
      description2: "We deliver consistent, high-quality results globally.",
      heading3: "Seamless Collaboration Across Borders",
      description3: "Distributed teams make collaboration effortless.",
    },
    {
      no: "03",
      title: "50+ Clients Across 10+ Countries",
      heading1: "Global Expertise, Local Insight",
      description1: "Tailored solutions for every market.",
      heading2: "Trusted Around the World",
      description2: "Reliable global delivery.",
      heading3: "Seamless Collaboration Across Borders",
      description3: "Smooth communication always.",
    },
    {
      no: "04",
      title: "50+ Clients Across 10+ Countries",
      heading1: "Global Expertise, Local Insight",
      description1: "Tailored solutions for every market.",
      heading2: "Trusted Around the World",
      description2: "Reliable global delivery.",
      heading3: "Seamless Collaboration Across Borders",
      description3: "Smooth communication always.",
    },
  ];

useGSAP(() => {
  const ball = ballRef.current;
  const container = document.querySelector(".center-col");

  if (!ball || !container) return;

  const maxMove = container.offsetHeight - ball.offsetHeight;

  let current = 0;
  let target = 0;
  let rafId;

  const update = () => {
    const rect = container.getBoundingClientRect();

    
    const progress = Math.min(
      Math.max(
        (window.innerHeight - rect.top) /
          (window.innerHeight + rect.height),
        0
      ),
      1
    );

    target = progress * maxMove;
  };

  const animate = () => {

    current += (target - current) * 0.22;

    gsap.set(ball, { y: current });

    rafId = requestAnimationFrame(animate);
  };

  window.addEventListener("scroll", update, { passive: true });

  update();
  animate();

  return () => {
    window.removeEventListener("scroll", update);
    cancelAnimationFrame(rafId);
  };
}, []);
  return (
    <div className="h-screen overflow-hidden px-10 grid grid-cols-[1fr_80px_1fr] gap-6 pb-5 blog-container">
      <div className="p-10 min-w-0 h-full overflow-y-auto">
        {data.map((item, index) => (
          <div key={index} className="p-2">
            <div className="flex items-center gap-3">
              <div className="p-2 border border-gray-300 rounded-xl w-fit">
                <IoLogoAndroid className="text-3xl text-blue-500" />
              </div>

              <div className="flex gap-2 font-semibold items-center">
                <span className="text-3xl font-bold">{item.num}</span>
                <span>{item.title}</span>
              </div>
            </div>

            <div className="text-gray-600 text-sm mt-2 break-words">
              {item.description}
            </div>

            <hr className="my-3 border-gray-300" />
          </div>
        ))}
      </div>

      <div className="center-col bg-gray-200 flex justify-center h-full relative overflow-hidden">
        <div ref={ballRef} className="absolute top-0">
          <h3 className="text-3xl font-extrabold italic text-blue-600 bg-gray-300 w-[70px] h-[70px] flex items-center justify-center rounded-full">
            CL
          </h3>
        </div>
      </div>

      <div className="overflow-y-auto min-h-0 h-full space-y-10 p-4 w-full">
        {blogdata.map((data, index) => (
          <div
            key={index}
            className="px-2 py-4 space-y-2 border-b border-gray-200"
          >
            <div className="grid grid-cols-[30px_1fr] gap-4">
              <h2 className="text-2xl text-blue-500 font-bold self-center">
                {data.no}
              </h2>

              <h1 className="text-3xl font-semibold line-clamp-2">
                {data.title}
              </h1>
            </div>

            <div className="pl-[50px] space-y-3">
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
