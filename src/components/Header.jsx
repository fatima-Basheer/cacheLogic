import React, { useState } from "react";
import Button from "./Button";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navMenu = [
    "Services",
    "Products",
    "About us",
    "Blog",
    "Careers",
    "Portfolio",
  ];

  return (
    <header className="w-full px-4 sm:px-6 lg:px-12 py-4 absolute top-0 left-0 z-50 bg-transparent">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src="/Logo.svg"
            alt="Logo"
            className="w-28 sm:w-32 md:w-36 h-auto"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-6 border border-white backdrop-blur-md px-6 py-3 rounded-full font-semibold text-sm text-black">
          {navMenu.map((item, index) => (
            <h3
              key={index}
              className="cursor-pointer hover:text-blue-500 transition duration-200"
            >
              {item}
            </h3>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button text="Contact Us" color="white" bg="bg-indigo-600" />
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoMdClose className="text-4xl bg-red-300 p-1 text-white rounded-full transition-all duration-500 hover:scale-110" />
          ) : (
            <IoMdMenu className="text-4xl bg-blue-500 p-1 text-white rounded-full transition-all duration-300 hover:scale-110" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-5 text-black shadow-lg">
          <nav className="flex flex-col gap-4 font-medium">
            {navMenu.map((item, index) => (
              <h3
                key={index}
                className="cursor-pointer hover:text-blue-500 transition duration-200"
              >
                {item}
              </h3>
            ))}
          </nav>

          <div className="mt-5">
            <Button text="Contact Us" color="white" bg="bg-indigo-600" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
