import React, { useState } from "react";
import Button from "./Button";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const navMenu = [
  "Services",
  "Products",
  "About us",
  "Blog",
  "Careers",
  "Portfolio",
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-4 lg:px-6 xl:px-12 pb-4 py-4">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src="/Logo.svg"
            alt="Logo"
            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-6 border-2 border-white backdrop-blur-md px-6 py-3 rounded-full font-semibold text-sm text-black">
          {navMenu.map((item, index) => (
            <a
              key={index}
              className="cursor-pointer hover:text-blue-500 transition duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" className="px-5 py-2">
            Contact Us
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoMdClose className="text-3xl bg-red-300 p-1 text-white rounded-full" />
          ) : (
            <IoMdMenu className="text-3xl bg-blue-500 p-1 text-white rounded-full" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 mx-4 backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-5 text-black shadow-lg">
          <nav className="flex flex-col gap-4 font-medium">
            {navMenu.map((item, index) => (
              <a key={index} className="cursor-pointer hover:text-blue-500">
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-5">
            <Button variant="primary" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
