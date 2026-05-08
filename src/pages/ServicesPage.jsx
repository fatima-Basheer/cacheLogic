import { IoLogoAndroid } from "react-icons/io";

function ServicesPage() {
  const servicesData = [
    {
      title: "AI/ML",
      description: "Revolutionizing decisions through intelligent solutions",
    },
    {
      title: "Automation",
      description: "Streamlining processes to enhance efficiency",
    },
    {
      title: "Cybersecurity",
      description: "Protecting systems and data from digital threats",
    },
    {
      title: "Web & Mobile Apps",
      description: "Building scalable and responsive applications",
    },
    {
      title: "Custom Solution",
      description: "Tailored software solutions for your business",
    },
    {
      title: "DevOps",
      description: "Improving collaboration and deployment speed",
    },
  ];

  return (
    <div className="bg-blue-100 relative py-16 px-20">
      <h1 className="text-center text-4xl md:text-5xl font-medium mb-12">
        Our Popular Services
      </h1>

      <img
        src="/Vector.svg"
        alt="vector"
        className="absolute bottom-0 right-0 top-40 pointer-events-none"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((item, index) => (
          <div
            key={item.title}
            className={`
              group relative overflow-hidden cursor-pointer rounded-2xl
              transition-all duration-500 ease-in-out p-6
              h-[300px] hover:h-[400px]

              bg-white/10 backdrop-blur-lg

              border-2 border-white/20
              hover:border-blue-500

              hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]

              ${index % 3 === 1 ? "lg:translate-y-[20px]" : ""}
              ${index % 3 === 2 ? "lg:translate-y-[40px]" : ""}
            `}
          >
            <div
              className="
                absolute top-0 right-0 w-40 h-40
                bg-gradient-to-bl from-blue-500/40 via-blue-400/10 to-transparent
                blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500
              "
            />

            <div className="relative z-10">
              <div
                className="
                  inline-flex items-center justify-center p-2 rounded-2xl w-fit
                  bg-white/10 backdrop-blur-md border border-white/30

                  group-hover:scale-110 group-hover:shadow-lg group-hover:bg-blue-500
                  transition-all duration-300
                "
              >
                <IoLogoAndroid className="text-4xl text-blue-500 group-hover:text-white" />
              </div>

              <h2 className="text-xl font-semibold mt-4 text-black">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-6 font-medium">
                {item.description}
              </p>
            </div>

            <div className="absolute bottom-4 left-0 w-full px-6">
              <div
                className="
                  opacity-0 translate-y-6
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500
                "
              >
                <button className="text-blue-500 bg-transparent border-2 border-white px-2 py-1 rounded-full font-medium cursor-pointer duration-500">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start mt-12">
        <button className="text-white bg-blue-600 hover:bg-blue-500 py-2 px-6 rounded-full font-medium text-sm cursor-pointer">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default ServicesPage;