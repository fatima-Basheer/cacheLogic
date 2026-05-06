import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const footerData = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact"],
    },
    {
      title: "Services",
      links: [
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
        "Cloud Solutions",
      ],
    },
    {
      title: "Products",
      links: ["Help Center", "Privacy Policy", "Terms", "FAQs"],
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
          <h1 className="text-2xl font-bold mb-3">CacheLogics</h1>

          <p className="text-sm text-gray-700 leading-5 mb-4">
            We build modern digital solutions that transform businesses into
            scalable and powerful systems.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="text-xl hover:text-blue-500 transition bg-gray-300 p-2 rounded-xl"
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
                  <a href="#" className="hover:text-black transition ">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-600 text-sm mt-10 border-t border-gray-600 pt-5">
        © {new Date().getFullYear()} CacheLogics. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
