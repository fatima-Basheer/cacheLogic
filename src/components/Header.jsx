import React from "react";
import Button from "./Button";
function Header() {
  const navMenu = [
    "Services",
    "Products",
    "About us",
    "Blog",
    "Careers",
    "Portfolio",
  ];
  return (
    <header className="flex justify-between items-center px-12 py-3 relative z-20">
      <div>
        <img src="/Logo.svg" />
      </div>

      <nav className="flex gap-6 border-2 border-white p-3 rounded-full font-semibold text-sm text-gray-700 cursor-pointer z-40">
        {navMenu.map((item, index) => (
          <h3 key={index} className="hover:text-blue-600">
            {item}
          </h3>
        ))}
      </nav>

      <Button text="Contact Us" color="white" bg="bg-indigo-600" />
    </header>
  );
}

export default Header;
