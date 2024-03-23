import React, { useState } from "react";
import { IoEllipse } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "../Home/Home";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const menuItems = [
    { title: "Home", link: "#home" },
    { title: "Services", link: "#services" },
    { title: "Projects", link: "#projects" },
    { title: "Careers", link: "#careers" },
    { title: "Contacts", link: "#contacts" },
  ];

  const handleItemClick = () => {
    setIsActive(false);
  };

  return (
    <>
      <header className=" text-white">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#home" className="text-2xl font-bold">
            OzTech
          </a>
          <div className="md:hidden">
            {isActive ? (
              <button
                onClick={toggleActiveClass}
                className="text-white text-3xl focus:outline-none"
              >
                &times;
              </button>
            ) : (
              <GiHamburgerMenu
                onClick={toggleActiveClass}
                className="text-3xl cursor-pointer"
              />
            )}
          </div>
          <ul
            className={`${
              isActive
                ? "md:flex absolute top-0 right-0 h-full w-64 flex-col items-end pt-20"
                : "hidden"
            } md:flex md:space-x-4 md:items-center md:text-lg`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={handleItemClick}
                className="flex mb-8 ml-6 capitalize font-bold items-center text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out"
              >
                <IoEllipse className="mr-2" />
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Home/>
    </>
  );
}

export default Navbar;
