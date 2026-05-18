import { IoLogoAndroid } from "react-icons/io";
import Button from "../components/Button";
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
function ServicesPage() {
  return (
    <div className="relative bg-indigo-50 overflow-hidden py-15 md:py-18 lg:py-22">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 ">
        <h1 className="text-center text-4xl md:text-5xl font-medium mb-12">
          Our Popular Services
        </h1>
        <img
          src="/Vector.svg"
          alt="vector"
          className="absolute bottom-0 right-0 opacity-90  pointer-events-none"
        />

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {servicesData.map((item) => (
            <div
              key={item.title}
              className="
                group relative overflow-hidden cursor-pointer rounded-2xl

                p-7

                min-h-[260px]
                hover:min-h-[420px]

                w-full

                bg-sky-50/20
                backdrop-blur-xl
              border-2 border-white shadow-[0_0_0_1px_rgba(255,255,255,0.6)]

                transition-all duration-500 ease-in-out

                hover:border-blue-600
              
              "
            >
              <div className="absolute -top-8 -right-8 w-56 h-56 bg-gradient-to-bl from-indigo-500 via-indigo-200 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-2 rounded-2xl w-fit bg-white/20 backdrop-blur-md border-3  border-white  group-hover:bg-blue-500 transition-all duration-300">
                  <IoLogoAndroid className="text-4xl text-blue-500 group-hover:text-white" />
                </div>

                <h2 className="text-xl font-semibold mt-4 text-black">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-4 font-medium">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-5 left-0 w-full px-6">
                <div
                  className="
                  opacity-0 translate-y-6
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500
                "
                >
                  <Button variant="outlineBlue" className="px-6 py-2 ">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start my-20">
          <Button variant="primary" className="px-6 py-2">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
