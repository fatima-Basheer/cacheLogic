import React, { useEffect, useRef, useState } from "react";
  const images = [
    {
      src: "/img.jpg",
      title: "Minal Ali",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img2.jpg",
      title: "Ahmad Basheer",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img3.jpg",
      title: "Farhad Muhammad",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img4.jpg",
      title: "Muhammad Ahtzaz",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img5.jpg",
      title: "Maryum Basheer",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img6.jpg",
      title: "Ibrahim Rafeeq",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img7.jpg",
      title: "Ayesha Awais",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
  ];
function Images() {


  const [index, setIndex] = useState(0);
  const STEP = 80; 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start py-3 w-full max-w-sm mt-8">
      <div className="w-full overflow-hidden border-1 border-white rounded-full py-0.5">
        <div
          className="flex items-center transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * STEP}px)`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} style={{ width: `${STEP}px`, flexShrink: 0 }}>
              <div
                className={`w-[32px] h-[32px] rounded-full overflow-hidden border transition-all duration-300
        ${
          i === index
            ? "border-blue-600 scale-110"
            : "border-transparent opacity-50"
        }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex ml-2 mt-3 items-start gap-3">
        <div className="w-40 h-18 border-l border-b border-black" />

        <div className="mt-12">
          <p className="text-sm font-semibold text-gray-800">
            {images[index].title}
          </p>

          <p className="text-xs text-gray-600 max-w-[220px] leading-4 mt-1">
            {images[index].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Images;
