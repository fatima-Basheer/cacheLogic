import React, { useState } from "react";

const content = [
  {
    src: "/laptop.jpg",
    title:
      "The Role of Software Development in Business Growth: How CacheLogic Drives Success",
    date: "05/06/2026",
  },
  {
    src: "/laptop2.jpg",
    title:
      "The Impact of AI and Machine Learning in Software Development: CacheLogic's Role in the Revolution",
    date: "05/06/2026",
  },
  {
    src: "/img.jpg",
    title:
      "The Role of Software Development in Business Growth: How CacheLogic Drives Success",
    date: "05/06/2026",
  },
];

function TopicItem({ data }) {
  const [hover, setHover] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleLeave = () => {
    setAnimateOut(true);

    setTimeout(() => {
      setAnimateOut(false);
      setHover(false);
    }, 500);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
      className="
        relative flex flex-col sm:flex-row sm:items-center sm:justify-between
        gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-5

        border border-transparent border-b-gray-300

        sm:hover:border-gray-300 sm:hover:rounded-full

        transition-all duration-300 ease-out
      "
    >
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={data.src}
          alt={data.title}
          className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 aspect-square object-cover rounded-full shrink-0"
        />

        <h1 className="text-sm sm:text-lg font-semibold cursor-pointer leading-snug truncate">
          {data.title}
        </h1>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap ml-auto sm:ml-0">
        {data.date}
      </p>

      {(hover || animateOut) && (
        <img
          src={data.src}
          alt={data.title}
          className={`
  hidden sm:block
  absolute right-10 top-1/2 -translate-y-1/2

  w-[160px] sm:w-[200px] md:w-[220px]
  h-[120px] sm:h-[150px] md:h-[180px]

  object-cover rounded-xl
  pointer-events-none

  will-change-transform

  transition-all duration-700 ease-in-out

  ${
    animateOut
      ? "translate-x-40 rotate-45 scale-0 opacity-0"
      : hover
        ? "translate-x-[-10%] rotate-12 scale-100 opacity-100"
        : "opacity-0 translate-x-[-10%] scale-100"
  }
`}
        />
      )}
    </div>
  );
}

export default function TopicsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-10 h-auto lg:py-18 max-w-[1400px] mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
        Stay Ahead With CacheLogics Insights
      </h1>

      <p className="mt-3 sm:mt-5 text-center text-sm sm:text-base text-gray-600">
        Practical guides, industry trends, and tips to help your business grow.
      </p>

      <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
        {content.map((data, index) => (
          <TopicItem key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
