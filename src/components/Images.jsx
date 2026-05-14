import React, { useEffect, useRef, useState } from "react";

function Images() {
  const images = [
    {
      src: "/img.jpg",
      title: "Minal",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img2.jpg",
      title: "Ahmad",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img3.jpg",
      title: "Farhad",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img4.jpg",
      title: "Ahtzaz",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img5.jpg",
      title: "Maryum",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img6.jpg",
      title: "Fiza",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
    {
      src: "/img7.jpg",
      title: "Ayesha",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [step, setStep] = useState(60); // responsive default

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateStep = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;

        setStep(width / 6);
      }
    };

    updateStep();
    window.addEventListener("resize", updateStep);

    return () => window.removeEventListener("resize", updateStep);
  }, []);

  return (
    <div className="flex flex-col items-start py-3 w-full max-w-sm">
      <div
        ref={containerRef}
        className="w-full overflow-hidden border-2 border-white rounded-full px-2"
      >
        <div
          className="flex items-center transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * step}px)`,
            gap: `${step}px`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0">
              <div
                className={`w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full overflow-hidden border transition-all duration-300
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

      <div className="flex ml-2 sm:ml-3 mt-3 items-start gap-3">
        <div className="flex items-center">
          <div className="w-12 sm:w-8 md:w-20 lg:w-30 h-5 sm:h-6 md:h-8 border-l border-b border-black" />
        </div>

        <div>
          <p className="text-xs sm:text-sm font-semibold text-gray-800">
            {images[index].title}
          </p>

          <p className="text-[10px] sm:text-xs text-gray-600 max-w-[220px] leading-4 mt-1">
            {images[index].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Images;
