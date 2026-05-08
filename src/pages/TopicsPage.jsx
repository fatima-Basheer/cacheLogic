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
    }, 700);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleLeave}
      className="flex items-center justify-between gap-6 px-5 py-5 border-b hover:border-1 hover:rounded-full border-gray-300 hover:border-gray-400 relative"
    >
      <img
        src={data.src}
        alt={data.title}
        className="w-14 h-14 object-cover rounded-full"
      />

      <h1 className="text-lg font-semibold flex-1 cursor-pointer">
        {data.title}
      </h1>

      <p className="text-gray-500 whitespace-nowrap">{data.date}</p>

      {(hover || animateOut) && (
        <img
          src={data.src}
          alt={data.title}
          className={`
            absolute right-20 top-1/2 -translate-y-1/2
            w-[220px] h-[180px] rotate-12 object-cover rounded-xl
            transition-all duration-700 ease-in-out
            pointer-events-none

            ${
              animateOut
                ? "translate-x-40 rotate-45 scale-0 opacity-0"
                : "translate-x-0 rotate-0 scale-100 opacity-100"
            }
          `}
        />
      )}
    </div>
  );
}

export default function TopicsPage() {
  return (
    <div className="py-20 px-10 relative">
      <h1 className="text-3xl font-medium text-center">
        Stay Ahead With CacheLogics Insights
      </h1>

      <p className="mt-5 text-center">
        Practical guides, industry trends, and tips to help your business grow.
      </p>

      <div className="mt-10 space-y-6">
        {content.map((data, index) => (
          <TopicItem key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
