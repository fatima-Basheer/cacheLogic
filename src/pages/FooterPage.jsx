import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function FooterPage() {
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

  return (
    <footer className="bg-blue-100 text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-medium mb-3 leading-5">
            Cache<br></br>Logic
          </h1>
          <p className="text-sm text-gray-500">
            Fast-Tracking Your IT Evolution.
          </p>
          <p className="text-xs text-gray-500 leading-5 mt-4">
            Empowering businesses with cutting-edge technology and tailored
            solutions.
          </p>

          <div className="flex gap-4 mt-8">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="text-xl hover:text-blue-500 transition bg-gray-100 p-2 rounded-xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {footerData.map((section, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold mb-3">{section.title}</h2>

            <ul className="space-y-2 text-sm text-gray-600">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-black transition text-xs ">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-600 bg-white text-lg flex justify-between items-center rounded-3xl py-3 mt-8 px-5">
        <span>Contact</span>
        <span>info@cachelogic.tech</span>
        <span>www.cachelogic.tech</span>
        <span>New York, USA</span>
      </div>
      <div className="absolute top-[-10px] right-[-20px] w-[90%] h-[100px] bg-indigo-400 blur-2xl rounded-full"></div>
    </footer>
  );
}

export default FooterPage;
