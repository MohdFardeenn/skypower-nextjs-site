"use client";
import Link from "next/link";
import { RiAdminLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const nav: NavItem[] = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Products",
      href: "#products",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  return (
    <div className="md:flex justify-center items-center gap-12">
      {isOpen ? (
        <button className="md:hidden text-4xl absolute top-4 right-4 z-10">
          <IoIosClose
            className="hover:text-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
      ) : (
        <button className="md:hidden text-3xl absolute top-4 right-4 z-10">
          <CgMenuRightAlt
            className="hover:text-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
      )}
      <nav
        className={`md:flex justify-center items-center gap-12 absolute right-0 top-0 md:static w-[80%] h-screen backdrop-blur-md p-8 border-l border-white/10  md:border-none md:h-auto md:w-auto md:p-0 md:bg-transparent md:backdrop-blur-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex gap-6 text-sm font-semibold flex-col items-end justify-center md:flex-row mt-10 md:mt-0">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                onClick={() => setIsOpen(false)}
                className="hover:text-green-600 transition-colors duration-300 pb-2 border-b border-transparent hover:border-green-600"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex md:hidden lg:flex flex-wrap lg:flex-row gap-4 text-sm font-semibold items-end justify-end lg:justify-center mt-10 md:mt-0">
          <Link
            className="hover:bg-green-600 hover:text-white transition-colors duration-300 text-green-500 border border-green-500 px-4 py-2 rounded-md"
            href="/login"
          >
            <span className="flex items-center gap-2">
              <RiAdminLine />
              Login
            </span>
          </Link>
          <Link
            className="bg-white hover:bg-green-600 border border-transparent hover:border-green-600 hover:text-white transition-colors duration-300 text-black px-4 py-2 rounded-md"
            href="/get-quote"
          >
            Get Quote
          </Link>
        </div>
      </nav>
    </div>
  );
}
