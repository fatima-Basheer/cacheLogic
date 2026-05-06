import React, { useEffect, useState } from "react";

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
      title: "Frhad",
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
      title: "Esha",
      description:
        "Cachelogics transformed our outdated systems into a modern powerhouse",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const SIZE = 70;

  return (
    <div className="relative flex flex-col items-start py-4">
      <div className="w-[400px] overflow-hidden border-2 border-white rounded-full">
        <div
          className="flex gap-9 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * SIZE + 50}px)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-[55px] h-[55px] flex items-center justify-center"
            >
              <div
                className={`w-[50px] h-[50px] rounded-full overflow-hidden transition-all duration-300
                ${
                  i === index
                    ? "border-2 border-blue-600 scale-110"
                    : "border border-transparent opacity-50 scale-100"
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

      <div className="flex ml-5 mt-4 items-start">
        <div className="mr-5">
          <div className="w-40 h-10 border-l border-b border-black"></div>
        </div>

        <div>
          <p className="text-md font-semibold text-gray-800">
            {images[index].title}
          </p>

          <p className="text-xs text-gray-800 w-[220px] leading-5 line-clamp-2 mt-2">
            {images[index].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Images;
