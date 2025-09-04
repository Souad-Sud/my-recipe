"use client"; // 👈 fix typo here (you had 'ise client')

import { NavItems } from "@/data/navItems";
import Link from "next/link";
import "./navigation.scss";
import { useState } from "react";
import { CaretDown, CaretUp, List, X } from "@phosphor-icons/react";

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState<string | null>(null);
  const [activeClass, setActiveClass] = useState<string>("Home Page");
  const [mobileMenuOpen, setMobilMenuOpen] = useState<boolean>(false);

  const handleToggle = (name: string) => {
    setOpenDropDown(openDropDown === name ? null : name);
  };

  const handleLinckClick = (name: string) => {
    setActiveClass(name);
    setOpenDropDown(null);
    setMobilMenuOpen(false);
  };

  return (
    <nav className="navBar">
      <button
        className={`navBar__burger ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobilMenuOpen(!mobileMenuOpen)}
      >
        {/* <List size={40} /> */}
        {mobileMenuOpen ? <X size={40} /> : <List size={40} />}
      </button>
      {/* <X size={40} /> */}
      <ul className={`navBar__list ${mobileMenuOpen ? "open" : ""}`}>
        {NavItems.map((item, index) => (
          <li key={index} className="navBar__item">
            {item.children ? (
              <>
                <button
                  className={`navBar__link ${
                    activeClass === item.name ? "active" : ""
                  }`}
                  onClick={() => {
                    handleToggle(item.name);
                    setActiveClass(item.name);
                  }}
                >
                  {item.name}
                  {openDropDown === item.name ? (
                    <CaretDown size={16} />
                  ) : (
                    <CaretUp size={16} />
                  )}
                </button>
                <ul
                  className={`navBar__dropdown ${
                    openDropDown === item.name ? "is-open" : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        href={child.link}
                        className={`navBar__sublink ${
                          activeClass === child.name ? "active" : ""
                        }`}
                        onClick={() => handleLinckClick(child.name)}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={item.link}
                className={`navBar__link ${
                  activeClass === item.name ? "active" : ""
                }`}
                onClick={() => handleLinckClick(item.name)}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
