import React from "react";
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
function ResultPage() {
  return (
    <div className="bg-blue-100 w-full overflow-hidden py-15 md:py-18 lg:py-22">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <p className="font-semibold text-2xl sm:text-3xl text-center mb-10 sm:mb-25">
          Real Results, Real Impact
        </p>

        <div className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          <div className="flex w-max gap-4 sm:gap-6">
            {[...slides, ...slides].map((slide, index) => (
              <div
                key={index}
                className="snap-start w-[280px] sm:w-[420px] md:w-[580px] flex-shrink-0 rounded-2xl overflow-hidden text-black"
              >
                {slide.type === "image" ? (
                  <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden">
                    <img
                      src={slide.content}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-[220px] sm:h-[300px] md:h-[380px] flex flex-col items-center justify-center text-center p-6 sm:p-10 gap-4 bg-white/20 backdrop-blur-md">
                    <p className="text-lg sm:text-xl font-semibold">
                      {slide.title}
                    </p>

                    <p className="text-xs sm:text-sm text-black max-w-[90%] sm:max-w-[80%]">
                      {slide.content}
                    </p>

                    <button className="text-xs sm:text-sm p-2 text-blue-500 border border-white rounded-full cursor-pointer">
                      View Full Case Study
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
