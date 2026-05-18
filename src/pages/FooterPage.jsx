import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const footerData = [
  {
    title: "Quick Links",
    links: [
      "Home",
      "Services",
      "Why CacheLogic",
      "Case Studies",
      "Blog/Insights",
      "About Us",
      "Contact Us",
    ],
  },
  {
    title: "Services",
    links: [
      "Custom Solutions",
      "Web & Mobile Apps",
      "AI / Machine Learning",
      "Automation",
      "Cybersecurity",
      "Cloud Solutions",
    ],
  },
  {
    title: "Products",
    links: [
      "Cheesyhire",
      "Wheelution",
      "SideCue",
      "Scheduling App",
      "The AI SEO",
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
];

function FooterPage() {
  return (
    <footer className="bg-blue-100 text-black py-10 px-4 sm:px-6 lg:px-14">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img src="/Logo.svg" className="w-28 sm:w-32" />

          <p className="text-sm text-gray-500 mt-6">
            Fast-Tracking Your IT Evolution.
          </p>

          <p className="text-xs text-gray-500 leading-5 mt-4">
            Empowering businesses with cutting-edge technology and tailored
            solutions.
          </p>

          <div className="flex gap-3 mt-6">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="text-gray-400 text-2xl sm:text-xl hover:text-blue-500 transition bg-gray-100 p-2 rounded-xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {footerData.map((section, i) => (
          <div key={i}>
            <h2 className="text-base sm:text-lg font-semibold mb-6">
              {section.title}
            </h2>

            <ul className="space-y-5 text-xs text-gray-600">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-black transition text-xs sm:text-sm md:text-xs lg:text:xs"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-2xl px-4 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-center sm:text-left text-gray-600 text-sm sm:text-base md:text-md lg:text-lg">
          <span>Contact</span>
          <span>info@cachelogic.tech</span>
          <span>www.cachelogic.tech</span>
          <span>New York, USA</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
