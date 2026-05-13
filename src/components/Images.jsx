import React, { useEffect, useState } from "react";

function Images() {
  const images = [
    { src: "/img.jpg", title: "Minal", description: "Cachelogics transformed our outdated systems into a modern powerhouse" },
    { src: "/img2.jpg", title: "Ahmad", description: "Cachelogics transformed our outdated systems into a modern powerhouse" },
    { src: "/img3.jpg", title: "Farhad", description: "Cachelogics transformed our outdated systems into a modern powerhouse" },
    { src: "/img4.jpg", title: "Ahtzaz", description: "Cachelogics transformed our outdated systems into a modern powerhouse" },
    { src: "/img5.jpg", title: "Maryum", description: "Cachelogics transformed our outdated systems into a modern powerhouse" },
    { src: "/img6.jpg", title: "Fiza", description: "Cachelogics transformed our outdated systems into a modern powerhouse" },
    { src: "/img7.jpg", title: "Esha", description: "Cachelogics transformed our outdated systems into a modern powerhouse" },
  ];

  const [index, setIndex] = useState(0);
  const STEP = 90; 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start py-3 w-full max-w-sm">

    
      <div className="w-full overflow-hidden border-2 border-white rounded-full px-2">

        <div
          className="flex items-center transition-transform duration-2000 ease-in-out"
          style={{
            transform: `translateX(-${index * STEP}px)`,
            gap: `${STEP}px`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0">

              <div
                className={`w-[42px] h-[42px] rounded-full overflow-hidden border transition-all duration-300
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

  
      <div className="flex ml-3 mt-3 items-start gap-3">

        <div className="hidden sm:block">
          <div className="w-34 h-8 border-l border-b border-black" />
        </div>

        <div>
          <p className="text-xs sm:text-sm font-semibold text-gray-800">
            {images[index].title}
          </p>

          <p className="text-[10px] sm:text-xs text-gray-600 w-[180px] leading-4 mt-1">
            {images[index].description}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Images;