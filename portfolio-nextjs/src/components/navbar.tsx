"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // Impor Image dari Next.js

function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive} z-50`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-xl text-xl font-semibold text-slate-700">
              HsfhfPortfolio.
            </h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full 
            md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded
            shadow-lg shadow-slate-900 bg-slate-700 font-medium text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-smile-line text-2xl md:hidden block"></i>
              <a href="#home" className="font-regular opacity-75">
                Home
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-user-smile-line text-2xl md:hidden block"></i>
              <a href="#about" className="font-regular opacity-75">
                About Me
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-mail-unread-line text-2xl md:hidden block"></i>
              <a href="#contactme" className="font-regular opacity-75">
                Contact Me
              </a>
            </li>
          </ul>
          <div className="Avatar ">
            <a href="#" className="flex xs:cursor-none">
              <Image
                src="/image/avatar2.png"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-slate-700 hover:animate-pulse xs:cursor-not-allowed"
              />
              <i
                className="ri-menu-3-line text-3xl md:hidden block"
                onClick={handleClick}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
