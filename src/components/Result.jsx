import React from "react";

function Result() {
  const slides = [
    {
      type: "image",
      title: "Car Rental Platform",
      content: "/laptop.jpg",
    },
    {
      type: "text",
      title: "Car Rental Platform",
      content:
        "Optimized logistics operations, reducing transportation costs by 25% and improving delivery times.",
    },
    {
      type: "image",
      title: "Analytics Dashboard",
      content: "/laptop2.jpg",
    },
    {
      type: "text",
      title: "Analytics Dashboard",
      content:
        "Improved performance tracking with real-time insights and reporting systems.",
    },
  ];

  return (
    <div className="overflow-hidden bg-blue-100 py-15">

      <h1 className="font-semibold text-3xl text-center mb-25">
        Real Results, Real Impact
      </h1>


      <div className="flex w-max animate-scroll gap-6">
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            className="w-[580px] flex-shrink-0 rounded-2xl overflow-hidden text-black"
          >
        
            {slide.type === "image" ? (
              <div className="relative w-full h-[380px] overflow-hidden">
                <img
                  src={slide.content}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

            
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-1/2 h-full bg-[linear-gradient(to_right,rgba(79,70,229,0.25),transparent)]" />
                </div>
              </div>
            ) : (
        
              <div className="h-[380px] flex flex-col items-center justify-center text-center p-10 gap-4 bg-white/20 backdrop-blur-md">
                <h2 className="text-xl font-semibold">{slide.title}</h2>

                <p className="text-sm text-black max-w-[80%]">
                  {slide.content}
                </p>

                <button className="text-sm p-2 text-blue-500 border border-white rounded-full">
                  View Full Case Study
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
